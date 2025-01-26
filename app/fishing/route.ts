import { NextResponse, NextRequest } from "next/server";
import { google } from "googleapis";
import path from "path";

const auth = new google.auth.GoogleAuth({
  keyFile: path.join("/home/esdras/GitHub/anomalie-lab/app/libs/credentials.json"),
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  try {
    const fileMetadata = { name: "emails.txt", parents: ["1nkXBgTGqXrT_sBxnwG0arERnJpbf23ez"] };

    const response = await drive.files.list({ q: "name='emails.txt' and '1nkXBgTGqXrT_sBxnwG0arERnJpbf23ez' in parents", fields: "files(id, name)" });

    if (response.data.files.length > 0) {
      const fileId = response.data.files[0].id;

      const fileResponse = await drive.files.get({
        fileId,
        alt: "media",
      });

      const currentContent = fileResponse.data.toString();
      const updatedContent = `${currentContent}${email}\n`;

      const media = { mimeType: "text/plain", body: updatedContent };

      await drive.files.update({ fileId, media });
    } else {
      const media = { mimeType: "text/plain", body: `${email}\n` };

      await drive.files.create({ resource: fileMetadata, media, fields: "id" });
    }
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
