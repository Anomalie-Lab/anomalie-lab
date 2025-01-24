import * as nodemailer from "nodemailer";

export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.NEXT_NODE_MAILER_HOST,
      port: Number(process.env.NEXT_NODE_MAILER_PORT),
      secure: true,
      auth: {
        user: process.env.NEXT_NODE_MAILER_USER,
        pass: process.env.NEXT_NODE_MAILER_PASS,
      },
    });
  }

  async Send({ email, html, subject }: { html: string; email: string; subject: string }): Promise<void> {
    try {
      const options = { from: process.env.NEXT_NODE_MAILER_USER, to: email, subject, html };

      await this.transporter.sendMail(options);
    } catch (error) {
      console.log(error);

      throw new Error("Failed to send email");
    }
  }
}
