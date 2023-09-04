import { DownloadIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export function DownloadDraft({
    content
}: {
    content: string // html from editor
}) {

    const downloadDocx = async () => {
        try {
            const docx = await fetch('/api/html2x', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ html: content, type: 'docx' })
                })
                .then(res => res.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');

                    a.style.display = 'none';

                    a.href = url;
                    a.download = 'document.docx';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                });
        } catch (error) {
            console.error('Failed to download DOCX:', error);
        }
    };
    
    const downloadPDF = async () => {
        try {
            const pdf = await fetch('/api/html2x', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ html: content, type: 'pdf' })
                })
                .then(res => res.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');

                    a.style.display = 'none';

                    a.href = url;
                    a.download = 'document.pdf';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                });    
        } catch (error) {
            console.error('Failed to download PDF:', error);
        }
    };
    return <DropdownMenu>
    <DropdownMenuTrigger><DownloadIcon className='h-3 w-3' /></DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem onClick={downloadPDF}>PDF</DropdownMenuItem>
      <DropdownMenuItem onClick={downloadDocx}>Docx</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
}
