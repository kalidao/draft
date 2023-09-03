import { DownloadIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export function DownloadDraft({
    content
}: {
    content: string // html from editor
}) {
    const downloadPDF = async () => {
        try {
            const pdf = await fetch('/api/html2pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ html: content })
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

    return <Button size="icon" variant="ghost" onClick={downloadPDF}>
        <DownloadIcon className="h-3 w-3" />
    </Button>
}
