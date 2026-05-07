import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

// Supabase server
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, tel, course, content } = await req.json();

    // 1. Validate
    if (!name || !tel) {
      return NextResponse.json(
        { error: "Thiếu thông tin" },
        { status: 400 }
      );
    }

    // 2. Lưu DB
    const { error } = await supabase.from("Registrator").insert([
      { name, tel, course, content },
    ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // 3. Setup Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 4. Gửi mail
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "namnv136th@gmail.com",
      subject: "🚗 Có khách đăng ký mới",
      html: `
        <h2>📥 Có khách đăng ký mới</h2>
        <p><b>Họ tên:</b> ${name}</p>
        <p><b>SĐT:</b> ${tel}</p>
        <p><b>Khóa học:</b> ${course}</p>
        <p><b>Nội dung:</b> ${content || "Không có"}</p>
      `,
    });

    return NextResponse.json({ message: "OK" });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}