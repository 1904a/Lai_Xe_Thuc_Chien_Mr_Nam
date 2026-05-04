"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase"; 
import { useRouter } from "next/navigation";

interface FormProps {
  courseName: string;
  showContentInput?: boolean; // Thêm biến này để kiểm soát việc hiện ô nhập
}

export default function ContactForm({ courseName, showContentInput = false }: FormProps) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [userNote, setUserNote] = useState(""); // State để lưu nội dung người dùng nhập
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from("Registrator") // Dùng chung bảng với các form kia
      .insert([
        { 
          name: name, 
          tel: tel, 
          course: courseName, 
          content: userNote // Gửi nội dung người dùng đã nhập lên cột content
        }
      ]);

    if (!error) {
      router.push("/RegisteredSuccessfully");
    } else {
      alert("Lỗi khi đăng ký: " + error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      {/* Box Họ và tên */}
      <input
        required
        type="text"
        placeholder="Họ và tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 bg-white text-lg transition-all shadow-inner"
      />

      {/* Box Số điện thoại */}
      <input
        required
        type="tel"
        placeholder="Số điện thoại"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        className="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 bg-white text-lg transition-all shadow-inner"
      />

      {/* Box Nội dung (Chỉ hiện khi bạn truyền showContentInput={true}) */}
      {showContentInput && (
        <textarea
          placeholder="Nhập nội dung hoặc yêu cầu của bạn..."
          value={userNote}
          onChange={(e) => setUserNote(e.target.value)}
          className="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 bg-white text-lg transition-all shadow-inner min-h-[100px]"
        />
      )}

      {/* Box Hạng bằng (Hiển thị cố định) */}
      <div className="w-full px-6 py-4 rounded-xl border-none bg-white/90 text-slate-500 text-lg font-medium shadow-inner">
        {courseName.toUpperCase()}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-[#B22222] hover:bg-white hover:text-[#B22222] text-white font-black rounded-xl transition-all duration-300 uppercase shadow-xl text-xl disabled:opacity-50"
        >
          {isSubmitting ? "Đang xử lý..." : "Đăng ký ngay"}
        </button>
      </div>
    </form>
  );
}