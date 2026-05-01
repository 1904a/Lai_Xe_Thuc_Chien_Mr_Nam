'use client';

import NavButton from './NavButton'; // Điều chỉnh đường dẫn cho đúng

interface HeroProps {
  title: string;
  price: string;
  oldPrice?: string | null;
  details: string[];
  iconType: 'car' | 'bike';
}

export default function Hero({ title, price, oldPrice, details, iconType }: HeroProps) {
  return (
    <div className="bg-white rounded-3xl p-8 text-slate-900 flex flex-col items-center shadow-xl h-full">
      {/* Icon: Có thể thay đổi kích thước tùy theo loại xe */}
      <img 
        src="images/icon.jpg" 
        alt={iconType} 
        className={`${iconType === 'car' ? 'w-48' : 'w-40'} h-32 object-contain mb-6`} 
      />
      
      <h4 className="text-[#B22222] font-bold text-lg mb-2 text-center uppercase">{title}</h4>
      
      <div className="flex items-center gap-2 mb-6">
        {oldPrice && <span className="text-gray-400 line-through text-sm">{oldPrice}</span>}
        <p className="text-[#B22222] font-black text-2xl">{price}</p>
      </div>

      <ul className="text-left space-y-3 mb-8 w-full px-4 flex-grow">
        {details.map((item, i) => (
          <li key={i} className="text-sm flex items-center gap-2">
            <span className="text-[#B22222]">✓</span> {item}
          </li>
        ))}
      </ul>

      {/* Sử dụng NavButton component của bạn */}
      <NavButton 
        dest="/" 
        label="Đăng ký ngay" 
        className="w-full py-3 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold rounded-xl transition-all uppercase text-center"
      />
    </div>
  );
}