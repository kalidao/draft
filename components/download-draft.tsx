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
            const doc = new jsPDF({
                format: 'a4',
                unit: 'px',
            });
    
          
            doc.setFont('Inter-Regular', 'normal');
    
            doc.html(content, {
                async callback(doc) {
                    await doc.save('document');
                },
            });
        } catch (error) {
            console.error('Failed to download PDF:', error);
        }
    };

    return <Button size="icon" variant="ghost" onClick={downloadPDF}>
        {/* <span className="ml-2">Download as PDF</span> */}
        <DownloadIcon className="h-3 w-3" />
    </Button>
}