import { NextResponse, NextRequest } from "next/server";
import { MailerService } from "../libs/mail";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, html, subject } = body;
  await new MailerService().Send({ email, html, subject });
  return NextResponse.json({ status: 200 });
}

