"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function GeneralContactForm() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [course, setCourse] = useState(""); // Lưu khóa học được chọn từ <select>
  const [content, setContent] = useState(""); // Lưu nội dung từ <textarea>
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!course) {
      alert("Vui lòng chọn khóa học!");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 🔥 QUAN TRỌNG
        },
        body: JSON.stringify({
          name,
          tel,
          course,
          content,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Có lỗi xảy ra");
      }

      router.push("/RegisteredSuccessfully");
    } catch (err: any) {
      console.error(err);
      alert("Lỗi: " + err.message);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {/* Họ và tên */}
      <div>
        <input
          required
          type="text"
          placeholder="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 bg-white"
        />
      </div>

      {/* Số điện thoại */}
      <div>
        <input
          required
          type="tel"
          placeholder="Số điện thoại"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 bg-white"
        />
      </div>

      {/* Chọn khóa học */}
      <div>
        <select 
          required
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-500 appearance-none bg-white"
        >
          <option value="">Chọn khóa học</option>
          <option value="Bằng B (Số tự động)">Bằng B (Số tự động)</option>
          <option value="Bằng B (Số sàn)">Bằng B (Số sàn)</option>
          <option value="Bằng C1">Bằng C1</option>
          <option value="Bằng A1 / A">Bằng A1 / A</option>
        </select>
      </div>

      {/* Nội dung */}
      <div>
        <textarea
          placeholder="Nội dung"
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 resize-none bg-white"
        ></textarea>
      </div>

      {/* Nút đăng ký */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#B22222] border border-white/20 hover:bg-white hover:text-[#B22222] text-white font-black rounded-xl transition-all duration-300 uppercase shadow-lg disabled:opacity-50"
      >
        {isSubmitting ? "Đang xử lý..." : "Đăng ký ngay"}
      </button>
    </form>
  );
}