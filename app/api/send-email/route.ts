import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, tel, course, content } = await request.json();

    // Gửi email
    const data = await resend.emails.send({
      // Lưu ý: Nếu chưa xác thực domain, Resend CHỈ cho phép gửi từ địa chỉ này:
      from: 'Lái Xe Khôi Việt - Thầy Năm <onboarding@resend.dev>', 
      // Gửi đến email của bạn
      to: 'duytu19042001@gmail.com',
      subject: `Khách mới: ${name.toUpperCase()} - ${course.toUpperCase()}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #B22222;">Thông tin đăng ký mới</h2>
          <p><strong>Họ tên:</strong> ${name}</p>
          <p><strong>Số điện thoại:</strong> ${tel}</p>
          <p><strong>Hạng bằng:</strong> ${course}</p>
          <p><strong>Nội dung lời nhắn:</strong> ${content || "Không có"}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">Email này được gửi tự động từ website lái xe của Mr Năm.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}