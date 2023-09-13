import { kv } from '@vercel/kv'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

// import { auth } from '@/auth'
import { nanoid } from '@/lib/utils'
import { getModelById } from '@/lib/models'

export const runtime = 'edge'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!
})

export async function POST(req: Request) {
  const json = await req.json()
  const { messages, previewToken, model: modelId, temperature } = json

  const model = getModelById(modelId)

  console.log('model', model, modelId)

  if (!model) {
    throw new Error('Model not found')
  }

  if (model.type === "OpenAI" && previewToken) {
    openai.apiKey = previewToken
  } else {
    openai.baseURL = model.baseUri
    openai.apiKey = model.apiKey
  }
  
  const res = await openai.chat.completions.create({
    model: model.id,
    messages,
    temperature: temperature ?? 0.7,
    stream: true
  })

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100)
      const id = json.id ?? nanoid()
      const createdAt = Date.now()
      const path = `/chat/${id}`
      const payload = {
        id,
        title,
        // userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant'
          }
        ]
      }
      await kv.hmset(`chat:${id}`, payload)
    //   await kv.zadd(`user:chat:${userId}`, {
    //     score: createdAt,
    //     member: `chat:${id}`
    //   })
    }
  })

  return new StreamingTextResponse(stream)
}
