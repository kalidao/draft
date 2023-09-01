import { Metadata } from "next"
import { presets } from "@/lib/presets"
import { ContractPlayground } from "@/components/contract-playground"

export const metadata: Metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
}

// presets={presets} preset={presets.find(val => val.id === params.presetId)}

export default function PresetPage({
  params,
  searchParams,
}: {
  params: { presetId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <ContractPlayground preset={presets.find(val => val.id === params.presetId)} />
}