// components/Navbar.tsx
"use client";
import Link from 'next/link';
import { Home, ChevronDown, Calendar, Key, ArrowRightCircle } from 'lucide-react';

const Navbar = () => {
  const menuItems = [
    { name: "HOME", icon: <Home size={18} />, url: "/" },
    { 
      name: "KHÓA HỌC", 
      icon: <ChevronDown size={18} />, 
      dropdown: true,
      subItems: [
        { name: "Học lái xe ô tô B( Số Tự Động)", url: "/B-automatic" },
        { name: "Học lái xe ô tô B( Số sàn)", url: "/B-manual" },
        { name: "Học bằng lái xe tải hạng C1", url: "/C1" },
        { name: "Học bằng lái xe máy A1", url: "/A1" },
        { name: "Thi bằng lái xe mô tô hạng A", url: "/A" }
      ]
    },
    { name: "LỊCH THI", icon: <Calendar size={18} />, url: "/Schedule" },
    { 
      name: "DỊCH VỤ", 
      icon: <Key size={18} />,
      url: "/DrivingTuition",
      dropdown: true,
      subItems: [
        { name: "Bổ túc tay lái", url: "/DrivingTuition" }, 
        { name: "Thuê xe tập lái", url: "/RentCar" }
      ]
    },
    
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/IconCar.png" className="flex items-center space-x-3 group">
  {/* Phần Logo: Thay hình tròn đỏ bằng ảnh con xe từ image_3ee6f4.jpg */}
  <div className="relative w-16 h-16 flex items-center justify-center">
    <img 
      src="/images/IconCar.png" 
      alt="Lái xe thực chiến Mr Năm"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Phần Chữ: Giữ nguyên cấu trúc nhưng tinh chỉnh font để giống image_3efa74.png */}
  <div className="flex flex-col justify-center">
    <span className="text-red-700 font-extrabold text-[12px] leading-tight tracking-tight uppercase">
      Lái Xe Thực Chiến
    </span>
    <span className="text-red-800 font-[900] text-2xl leading-none tracking-tighter uppercase">
      Mr Năm
    </span>
  </div>
</Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group px-3 py-4">
              <Link href={item.url || "/"} className="flex items-center space-x-1 text-gray-800 font-bold text-[13px] hover:text-red-700 transition-colors uppercase">
                {item.icon}
                <span>{item.name}</span>
              </Link>
              
              {item.dropdown && (
                <div className="absolute top-full left-0 w-72 bg-white border-t-2 border-red-700 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {item.subItems?.map((sub, i) => (
                    <Link key={i} href={sub.url} className="flex items-center space-x-3 px-5 py-4 text-[13px] text-gray-700 hover:bg-red-50 border-b border-gray-50 last:border-0 font-semibold transition-all">
                      <ArrowRightCircle size={14} className="text-red-700 flex-shrink-0" />
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nút Liên Hệ */}
        <Link href="/Contact" className="bg-red-700 hover:bg-red-800 text-white px-8 py-2.5 rounded-xl font-bold text-sm shadow-[0_4px_15px_rgba(185,28,28,0.4)] transition-all active:scale-95">
          LIÊN HỆ
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;