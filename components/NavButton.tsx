'use client';

import { useRouter } from 'next/navigation';

interface NavButtonProps {
  dest: string;      // Địa chỉ dẫn vào
  label: string;
  className: string;     // Chữ hiển thị trên nút
  
}

export default function NavButton({ dest, label, className }: NavButtonProps) {
  const router = useRouter();

  return (
    <button
    type="button"
      onClick={() => router.push(dest)}
      className={className}
    >
      {label}
    </button>
  );
}