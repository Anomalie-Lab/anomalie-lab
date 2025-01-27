import { NextResponse, NextRequest } from "next/server";
import { google } from "googleapis";
import path from "path";

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, "..", "libs", "credentials.json"),
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  try {
    const fileMetadata = {
      name: "emails.txt",
      parents: ["1nkXBgTGqXrT_sBxnwG0arERnJpbf23ez"],
    };

    // Procurar pelo arquivo existente
    const response = await drive.files.list({
      q: "name='emails.txt' and '1nkXBgTGqXrT_sBxnwG0arERnJpbf23ez' in parents",
      fields: "files(id, name)",
    });

    if (response.data.files && response.data.files.length > 0 && response.data.files[0].id) {
      const fileId = response.data.files[0].id;

      // Obter conteúdo atual do arquivo
      const fileResponse = await drive.files.get(
        {
          fileId,
          alt: "media",
        },
        { responseType: "stream" }
      );

      let currentContent = "";
      fileResponse.data.on("data", (chunk: Buffer) => {
        currentContent += chunk.toString();
      });

      await new Promise((resolve) => fileResponse.data.on("end", resolve));

      const updatedContent = `${currentContent}${email}\n`;

      const media = {
        mimeType: "text/plain",
        body: updatedContent,
      };

      // Atualizar o arquivo
      await drive.files.update({
        fileId,
        media,
      });
    } else {
      // Criar novo arquivo
      const media = {
        mimeType: "text/plain",
        body: `${email}\n`,
      };

      await drive.files.create({
        requestBody: fileMetadata,
        media,
        fields: "id",
      });
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error:", error);

    return NextResponse.json({ status: 500 });
  }
}
