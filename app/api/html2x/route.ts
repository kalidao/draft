import { NextResponse } from "next/server";
import * as HTML2DOCX from "html-to-docx";
import * as puppeteer from "puppeteer";
export const runtime = "nodejs";

const genPdf = async (html: string) => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(html);
    const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
            top: "1cm",
            right: "1cm",
            bottom: "1cm",
            left: "1cm",
        },
    });
    await browser.close();
    return pdf;
};

const genDocx = async (html: string) => {
   const fileBuffer = await HTML2DOCX(html, null, {
        table: { row: { cantSplit: true } },
        footer: true,
        pageNumber: true,
    }) 

    return fileBuffer;
};


export async function POST(req: Request): Promise<Response> {
    const { html, type } = await req.json();

    if (type === "docx") {
        const docx = await genDocx(html);

        return new NextResponse(docx, {
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            },
        });

    } else if (type === "pdf") {
        const pdf = await genPdf(html);

        return new NextResponse(pdf, {
            headers: {
                "Content-Type": "application/pdf",
            },
        });
    } else {
        return new NextResponse("Invalid type", {
            status: 400,
        });
    }
}
