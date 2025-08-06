import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const pdfDir = path.join(process.cwd(), "public", "pdf");
    const files = await fs.readdir(pdfDir);
    const pdfs = files.filter((file) => file.endsWith(".pdf"));
    return new Response(JSON.stringify(pdfs), { status: 200 });
  } catch (error) {
    console.error("Error reading pdf directory", error);
    return new Response(JSON.stringify([]), { status: 500 });
  }
}
