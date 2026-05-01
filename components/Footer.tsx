// components/Footer.tsx
import Link from 'next/link';
import { ChevronRight, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const courseLinks = [
    { name: "Học lái xe ô tô B( Số Tự Động)", url: "/B-automatic" },
    { name: "Học lái xe ô tô B( Số sàn)", url: "/B-manual" },
    { name: "Học bằng lái xe tải hạng C1", url: "/C1" },
    { name: "Học bằng lái xe máy A1", url: "/A1" },
    { name: "Thi bằng lái xe mô tô hạng A", url: "/A" },
    { name: "Bổ túc tay lái", url: "/DrivingTuition" }
  ];

  return (
    <footer className="bg-[#1a1c1e] text-gray-400 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Cột 1: Thông tin liên hệ */}
        <div className="space-y-6">
          <h3 className="text-white text-lg font-bold tracking-wider">Lái xe thực chiến Mr Năm</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-red-600" />
              <span>Hotline: 0935 986 148 - Thầy Năm</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={18} className="text-red-600" />
              <span>Địa chỉ: Cầu Giấy, Hà Nội</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-red-600" />
              <span>Email: info@khoiviet.edu.vn</span>
            </div>
          </div>
        </div>

        {/* Cột 2: Danh mục khóa học */}
        <div className="space-y-3">
          <h3 className="text-white text-lg font-bold mb-4 italic border-l-4 border-red-700 pl-3">DANH MỤC KHÓA HỌC</h3>
          {courseLinks.map((item, index) => (
            <Link key={index} href={item.url} className="flex items-center space-x-2 text-[13px] hover:text-white hover:translate-x-1 transition-all border-b border-gray-800/50 pb-2 group">
              <ChevronRight size={14} className="text-gray-600 group-hover:text-red-500" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Cột 3: Bản đồ thực tế (Iframe) */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-bold">VỊ TRÍ TRUNG TÂM</h3>
          <div className="rounded-xl overflow-hidden border border-gray-800 h-52 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638!2d105.7801!3d21.0381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVUVUIChWTlUp!5e0!3m2!1svi!2s!4v1711900000000"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
            ></iframe>
            <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded shadow-md text-[10px] text-blue-600 font-bold">
               MỞ TRONG MAPS ↗
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-[12px] uppercase tracking-widest text-gray-600">
          © {new Date().getFullYear()} Bản quyền thuộc về Lái xe thực chiến Mr Năm
        </p>
      </div>
    </footer>
  );
};

export default Footer;