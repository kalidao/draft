import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
 
export const runtime = 'edge'
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json()
 
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: 'system',
        content: 'You are a legal contract assistant. Your job is to edit the draft contract in accordance with the user instructions. You must always return the full contract, even if the user only asks to change a small part of it.'
      },
      {
        role: 'user',
        content: prompt,  
      }
    ],
    temperature: 0, // you want absolute certainty for spell check
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1
  })
 
  const stream = OpenAIStream(response)
 
  return new StreamingTextResponse(stream)
}