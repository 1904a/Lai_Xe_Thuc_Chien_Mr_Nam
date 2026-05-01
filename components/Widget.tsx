"use client";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa"; // Fa = Font Awesome
import { SiZalo } from "react-icons/si"; // Si = Simple Icons (có cả Zalo)

export default function ContactWidget() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      
      {/* Nút Messenger (Xanh sky) */}
      <a
        href="https://www.facebook.com/nam.nguyenvan.1042?locale=vi_VN" // Vẫn giữ link m.me để khách ấn vào là chat được luôn
        target="_blank"
        rel="noopener noreferrer"
        className="group w-16 h-16 rounded-full flex items-center justify-center bg-blue-50/80 hover:bg-blue-100 transition-all duration-300 shadow-sm"
        title="Chat qua Facebook"
      >
        {/* Màu xanh thương hiệu Facebook: #1877F2 */}
        <div className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
          <FaFacebookF size={26} />
        </div>
      </a>

      {/* Nút Gọi điện (Xanh lá) */}
      <a
        href="tel:0917329245"
        className="group w-16 h-16 rounded-full flex items-center justify-center bg-green-50/80 hover:bg-green-100 transition-all duration-300 shadow-sm"
        title="Gọi ngay"
      >
        <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform ">
          <FaPhoneAlt size={24} />
        </div>
      </a>

      {/* Nút Zalo (Xanh dương) */}
      <a
        href="https://zalo.me/0917329245"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-16 h-16 rounded-full flex items-center justify-center bg-blue-50/80 hover:bg-blue-100 transition-all duration-300 shadow-sm"
        title="Chat Zalo"
      >
        <div className="w-12 h-12 bg-[#0068ff] rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
          {/* Custom Zalo Text Icon để giống mẫu */}
          <SiZalo size={24} />
        </div>
      </a>

    </div>
  );
}