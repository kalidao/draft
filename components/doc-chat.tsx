'use client'

import { nanoid } from "ai"
import { Chat } from "./chat/chat"
import { getTextFromJSON } from "@/lib/editor"
import { JSONContent } from "@tiptap/core"
import { Model } from "@/lib/models"

interface DocChatProps {
    content?: JSONContent,
    model: Model,
}
export const DocChat = ({
    content,
    model
}: DocChatProps) => {
    const c = getTextFromJSON(content);

    return <Chat className={"static min-h-[80vh] max-w-full"}  initialMessages={[{
        id: nanoid(),
        role: 'system', 
        content: `You are a contract drafting assistant. 
        
        # Current Draft 
        ${c}
        `
    }]}  /> 
}