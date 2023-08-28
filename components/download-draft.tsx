import { DownloadIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

export function DownloadDraft() {
    return <Button className="flex flex-row space-x-2">
        
        <span className="ml-2">Download as PDF</span>
        <DownloadIcon className="h-5 w-5" />
    </Button>
}