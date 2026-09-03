import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, website, whatToGrow } = await req.json();

    if (!name || !email || !whatToGrow) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Destination email from Vercel / .env environment variables
    const recipientEmail =
      process.env.CONTACT_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "thegrowthincc@gmail.com";

    const subject = `New Inquiry from ${name} (${website || "Website"})`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f6f9; margin: 0; padding: 30px; color: #16181f; }
            .card { max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
            .header { border-bottom: 2px solid #708238; padding-bottom: 16px; margin-bottom: 24px; }
            .title { font-size: 22px; font-weight: 800; color: #16181f; margin: 0; }
            .badge { display: inline-block; background: #f0f4e8; color: #55632a; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 100px; margin-top: 8px; }
            .row { margin-bottom: 18px; }
            .label { font-size: 12px; font-weight: 700; color: #718096; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
            .value { font-size: 15px; color: #2d3748; line-height: 1.5; }
            .value a { color: #55632a; text-decoration: underline; font-weight: 600; }
            .message-box { background: #f8fafc; border-left: 4px solid #708238; border-radius: 6px; padding: 16px; font-size: 14.5px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
            .footer { margin-top: 28px; padding-top: 16px; border-top: 1px solid #edf2f7; font-size: 12px; color: #a0aec0; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1 class="title">New Growth Inquiry</h1>
              <span class="badge">Inbound Lead · The Growth Inc.</span>
            </div>
            
            <div class="row">
              <div class="label">Client Name</div>
              <div class="value"><strong>${name}</strong></div>
            </div>

            <div class="row">
              <div class="label">Business Email</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>

            <div class="row">
              <div class="label">Website / Company URL</div>
              <div class="value">
                ${
                  website
                    ? `<a href="${website.startsWith("http") ? website : `https://${website}`}" target="_blank">${website}</a>`
                    : '<span style="color: #a0aec0;">Not provided</span>'
                }
              </div>
            </div>

            <div class="row">
              <div class="label">What They Want to Grow</div>
              <div class="message-box">${whatToGrow}</div>
            </div>

            <div class="footer">
              Sent via The Growth Inc. website inquiry form on ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
      </html>
    `;

    // 1. Try Resend if API Key is configured (Recommended for Vercel)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail =
        process.env.RESEND_FROM_EMAIL || "The Growth Inc. <onboarding@resend.dev>";

      await resend.emails.send({
        from: fromEmail,
        to: [recipientEmail],
        replyTo: email,
        subject: subject,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, method: "resend" });
    }

    // 2. Try SMTP / Nodemailer (e.g. Gmail App Password) if configured
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: process.env.SMTP_SECURE !== "false",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"The Growth Inc." <${process.env.SMTP_USER}>`,
        to: recipientEmail,
        replyTo: email,
        subject: subject,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, method: "smtp" });
    }

    // 3. Fallback / Development mode logging
    console.log("------------------------------------------");
    console.log("📧 NEW CONTACT FORM INQUIRY RECEIVED:");
    console.log(`To: ${recipientEmail}`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Website: ${website}`);
    console.log(`Message: ${whatToGrow}`);
    console.log(
      "Note: Set RESEND_API_KEY in Vercel/env to deliver live emails to inbox."
    );
    console.log("------------------------------------------");

    return NextResponse.json({
      success: true,
      method: "dev-log",
      message:
        "Inquiry captured. Configure RESEND_API_KEY or SMTP in Vercel to receive emails directly.",
    });
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
