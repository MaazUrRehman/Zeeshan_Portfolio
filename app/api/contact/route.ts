import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // important for some environments like Vercel
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: "maazurrehman468@gmail.com",
      subject: `New message — ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log("Email sent: %s", info.messageId);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
