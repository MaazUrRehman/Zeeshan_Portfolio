export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  console.log("API HIT");

  try {
    const body = await request.json();
    console.log("BODY:", body);

    console.log("ENV CHECK:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? "EXISTS" : "MISSING",
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log("TRANSPORTER CREATED");

    await transporter.verify();
    console.log("SMTP VERIFIED");

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.SMTP_USER}>`,
      to: "maazurrehman468@gmail.com",
      subject: "Test Email",
      text: "Hello from Vercel",
    });

    console.log("EMAIL SENT");

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("FULL ERROR:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
