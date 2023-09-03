import { NextResponse } from "next/server";
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

export async function POST(req: Request): Promise<Response> {
    const { html } = await req.json();

    const pdf = await genPdf(html);

    return new NextResponse(pdf, {
        headers: {
            "Content-Type": "application/pdf",
        },
    });
}
