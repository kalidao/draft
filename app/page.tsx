import { Metadata } from "next"
import { ContractPlayground } from "@/components/contract-playground"
import { siteConfig } from "@/lib/siteConfig"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function PlaygroundPage({
  params,
  searchParams,
}: {
  params: { presetId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <ContractPlayground  />
}