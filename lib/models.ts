export const types = ["OpenAI", "Llama"] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
  id: string
  name: string
  description: string
  strengths?: string
  type: Type,
  baseUri: string
  apiKey: string
}

export const models: Model<ModelType>[] = [
  {
    id: "gpt-4",
    name: "gpt-4",
    description:
      "Most capable but slower OpenAI model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    type: "OpenAI",
    strengths:
      "Complex intent, cause and effect, creative generation, search, summarization for audience",
    baseUri: 'https://api.openai.com/v1/',
    apiKey: process.env.OPENAI_API_KEY!
  },
  {
    id: "gpt-3.5-turbo",
    name: "gpt-3.5-turbo",
    description: "Capable of straightforward tasks, very fast, and lower cost.",
    type: "OpenAI",
    strengths: "Moderate classification, semantic search",
    baseUri: 'https://api.openai.com/v1/',
    apiKey: process.env.OPENAI_API_KEY!
  },
  {
    id: "accounts/fireworks/models/llama-v2-70b-chat",
    name: "llama-v2-70b-chat",
    description: "Opensource chat model",
    type: "Llama",
    strengths: "Moderate classification, semantic search",
    baseUri: 'https://api.fireworks.ai/inference/v1',
    apiKey: process.env.FIREWORKS_API_KEY!
  },
]

export const getModelById = (id: string) => {
  return models.find((model) => model.id === id)
}
