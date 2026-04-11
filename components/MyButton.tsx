// components/MyButton.tsx
import React from 'react';

// Định nghĩa các "vị" (props) cho button
interface ButtonProps {
  label: string;      // Chữ hiển thị trên nút
  onClick?: () => void; // Hành động khi bấm
  variant?: 'primary' | 'danger'; // Kiểu dáng
}

export default function MyButton({ label, onClick, variant = 'primary' }: ButtonProps) {
  // Thiết lập màu sắc dựa trên variant
  const bgClass = variant === 'primary' ? 'bg-black text-white' : 'bg-red-600 text-white';

  return (
    <button 
      onClick={onClick}
      className={`${bgClass} px-6 py-2 rounded-md font-medium hover:opacity-80 transition duration-200 active:scale-95 m-2`}
    >
      {label}
    </button>
  );
}