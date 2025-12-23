export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  console.log("API HIT");

  try {
    const body = await request.json();
    console.log("FORM DATA:", body);

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("ENV CHECK:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? "EXISTS" : "MISSING",
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // Use STARTTLS (port 587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      pool: true, // Better for serverless
    });

    console.log("TRANSPORTER CREATED");

    // Use actual form data instead of hardcoded test content
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: "maazurrehman468@gmail.com",
      replyTo: body.email, // Reply directly to sender
      subject: `New Contact Form: ${body.subject}`,
      text: `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone || 'Not provided'}
Subject: ${body.subject}
Message: ${body.message}

---
Sent from zeeshan-portfolio-omega.vercel.app
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">🆕 New Contact Form Submission</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            <p><strong>Subject:</strong> ${body.subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-left: 4px solid #f39c12; margin: 10px 0;">
              ${body.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 14px;">
            📧 Sent from <strong>Zeeshan's Portfolio</strong><br>
            <a href="https://zeeshan-portfolio-omega.vercel.app/contact">View Contact Form</a>
          </p>
        </div>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY with form data");
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!"
    });

  } catch (err: any) {
    console.error("FULL ERROR:", err);
    return NextResponse.json(
      { error: err.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
