import OpenAI from 'openai'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const EditFunction = z.object({
  edited_draft: z.string()
})
export const runtime = 'edge'
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})
 
export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt: instruction, content, model } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0613',
    stream: false,
    messages: [
      {
        role: 'system',
        content: `You are a legal contract assistant.
        Draft
        \`\`\`
        ${content}
        \`\`\`
        `,
      },
      {
        role: 'user',
        content:instruction,
      },
    ],
    functions: [
      {
        name: 'edit',
        description: 'Always return the edited draft using the `edit` function.',
        parameters: {
          'type': 'object',
          properties: {
            'edited_draft': {
              'type': 'string',
              'description': 'The complete edited draft.'
            }
          }
        }
      }
    ],
    function_call: {
      name: 'edit',
    }
  })
          
  // parse the response from OpenAI
  const reply  = EditFunction.safeParse(JSON.parse(response.choices[0].message.function_call?.arguments ?? '{}'))

  if (!reply.success) {
    throw new Error('OpenAI response was not valid')
  }


  console.log('reply', reply?.data.edited_draft)

  return NextResponse.json(reply?.data.edited_draft)
}