// components/Footer.tsx
import Link from "next/link";
import { ChevronRight, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const courseLinks = [
    { name: "Học lái xe ô tô B( Số Tự Động)", url: "/B-automatic" },
    { name: "Học lái xe ô tô B( Số sàn)", url: "/B-manual" },
    { name: "Học bằng lái xe tải hạng C1", url: "/C1" },
    { name: "Học bằng lái xe máy A1", url: "/A1" },
    { name: "Thi bằng lái xe mô tô hạng A", url: "/A" },
    { name: "Bổ túc tay lái", url: "/DrivingTuition" },
  ];

  return (
    <footer className="bg-[#1a1c1e] text-gray-400 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Cột 1: Thông tin liên hệ */}
        <div className="space-y-6">
          <h3 className="text-white text-lg font-bold tracking-wider">
            Đào tạo lái xe khôi việt - Thầy Năm{" "}
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-red-600" />
              <span>Hotline: 0917 329 245 - Thầy Năm</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={18} className="text-red-600" />
              <span>Địa chỉ: Gò Vấp, Hồ Chí Minh, Việt Nam</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-red-600" />
              <span>Email: namnv136th@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Cột 2: Danh mục khóa học */}
        <div className="space-y-3">
          <h3 className="text-white text-lg font-bold mb-4 italic border-l-4 border-red-700 pl-3">
            DANH MỤC KHÓA HỌC
          </h3>
          {courseLinks.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="flex items-center space-x-2 text-[13px] hover:text-white hover:translate-x-1 transition-all border-b border-gray-800/50 pb-2 group"
            >
              <ChevronRight
                size={14}
                className="text-gray-600 group-hover:text-red-500"
              />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Cột 3: Bản đồ thực tế (Iframe) */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-bold">VỊ TRÍ TRUNG TÂM</h3>
          <div className="rounded-xl overflow-hidden border border-gray-800 h-52 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d598888.4333434581!2d106.677232!3d10.844023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529fdce1ecd7d%3A0x4793e070198eaab4!2zVGhpIELhurFuZyBMw6FpIFhlIE3DoXkgQTEgLSBNw7QgVMO0IEEyIHwgVHLGsOG7nW5nIFRydW5nIEPhuqVwIEtow7RpIFZp4buHdA!5e1!3m2!1svi!2sus!4v1777828532907!5m2!1svi!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Trường Trung Cấp Khôi Việt"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-[12px] uppercase tracking-widest text-gray-600">
          © {new Date().getFullYear()} Bản quyền thuộc về Đào tạo lái xe khôi
          việt - Thầy Năm
        </p>
      </div>
    </footer>
  );
};

export default Footer;
