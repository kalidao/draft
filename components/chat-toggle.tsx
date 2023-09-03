import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChatBubbleIcon } from "@radix-ui/react-icons"

interface ChatToggleProps {
    isChatOpen: boolean,
    setIsChatOpen: (isChatOpen: boolean) => void
}
export const ChatToggle = ({
    isChatOpen,
    setIsChatOpen
}: ChatToggleProps) => {
    return <Button size="icon" variant="ghost" onClick={() => setIsChatOpen(!isChatOpen)}>
        <ChatBubbleIcon className={cn("h-3 w-3", isChatOpen ? 'text-green-500' : 'text-zinc-500')} />
    </Button>

}