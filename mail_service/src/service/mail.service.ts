import nodemailer, { TransportOptions } from "nodemailer";

import { MAILER, APP_NAME } from "./../config";
class MailService {
  async send(subject: string, content: string, recipient: string) {
    content = content || " ";

    if (!recipient || recipient.length < 1)
      console.error("Recipient is required");
    if (!subject) console.error("Subject is required");

    const transporter = nodemailer.createTransport({
      host: MAILER.HOST,
      port: MAILER.PORT,
      secure: true,
      requireTLS: true,
      auth: {
        user: MAILER.USER,
        pass: MAILER.PASSWORD,
      },
    } as TransportOptions);

    const result = await transporter.sendMail({
      from: `${APP_NAME} <${MAILER.USER}>`,
      to: Array.isArray(recipient) ? recipient.join() : recipient,
      subject,
      text: content,
    });

    if (!result) console.error("Unable to send mail");

    return result;
  }

  public async sendMail(email: string, name: string) {
    const subject = "Periodic Mail";
    const content = `Hello ${name}, this is a test mail`;
    const recipient = email;

    return await this.send(subject, content, recipient);
  }
}

export default MailService;
