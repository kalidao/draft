export const types = ["OpenAI", "Llama"] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
  id: string
  name: string
  description: string
  strengths?: string
  type: Type
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
  },
  {
    id: "gpt-4-0314",
    name: "gpt-4-0314",
    description: "Very capable, but faster and lower cost than gpt-4.",
    type: "OpenAI",
    strengths:
      "Language translation, complex classification, sentiment, summarization",
  },
  {
    id: "gpt-4-0613",
    name: "gpt-4-0613",
    description: "Capable of straightforward tasks, very fast, and lower cost.",
    type: "OpenAI",
    strengths: "Moderate classification, semantic search",
  },
  {
    id: "gpt-4-32k",
    name: "gpt-4-32k",
    description:
      "Capable of very simple tasks, usually the fastest model in the OpenAI series, and lowest cost.",
    type: "OpenAI",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "gpt-4-32k-0314",
    name: "gpt-4-32k-0314",
    description:
      "Fairly decent and really fast OpenAI model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    type: "OpenAI",
    strengths:
      "Complex intent, cause and effect, creative generation, search, summarization for audience",
  },
  {
    id: "gpt-4-32k-0613",
    name: "gpt-4-32k-0613",
    description: "Very capable, but faster and lower cost than gpt-4-32k-0314.",
    type: "OpenAI",
    strengths:
      "Language translation, complex classification, sentiment, summarization",
  },
  {
    id: "gpt-3.5-turbo",
    name: "gpt-3.5-turbo",
    description: "Capable of straightforward tasks, very fast, and lower cost.",
    type: "OpenAI",
    strengths: "Moderate classification, semantic search",
  },
  {
    id: "gpt-3.5-turbo-16k",
    name: "gpt-3.5-turbo-16k",
    description:
      "Capable of very simple tasks, usually the fastest model in the OpenAI series, and lowest cost.",
    type: "OpenAI",
    strengths:
      "Parsing text, simple classification, address correction, keywords",
  },
  {
    id: "gpt-3.5-turbo-0301",
    name: "gpt-3.5-turbo-0301",
    description:
      "Fairly decent and really fast OpenAI model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.",
    type: "OpenAI",
    strengths:
      "Complex intent, cause and effect, creative generation, search, summarization for audience",
  },
  {
    id: "gpt-3.5-turbo-0613",
    name: "gpt-3.5-turbo-0613",
    description: "Very capable, but faster and lower cost than gpt-3.5-turbo-0301.",
    type: "OpenAI",
    strengths:
      "Language translation, complex classification, sentiment, summarization",
  },
  {
    id: "gpt-3.5-turbo-16k-0613",
    name: "gpt-3.5-turbo-16k-0613",
    description: "Capable of straightforward tasks, very fast, and lower cost.",
    type: "OpenAI",
    strengths: "Moderate classification, semantic search",
  },
]
