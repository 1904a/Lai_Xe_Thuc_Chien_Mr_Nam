import React from 'react';

export interface CourseHeaderData {
  title: string;
  subtitle: string;
  highlightNote: string;
  note: string;
}

interface Props {
  data: CourseHeaderData;
}

export default function CourseHeader({ data }: Props) {
  return (
    <div className="w-307.5 h-63 flex flex-col items-center justify-center text-center px-10 font-sans mx-auto mb-2">
      {/* Tiêu đề chính */}
      <h1 className="text-white text-[32px] font-bold uppercase tracking-wider mb-3 leading-tight">
        {data.title}
      </h1>

      {/* Dòng cam kết màu vàng */}
      <h2 className="text-[#ffeb3b] text-[18px] font-extrabold uppercase mb-5">
        {data.subtitle}
      </h2>

      {/* Dòng lưu ý */}
      <p className="text-white text-[15px] font-medium leading-relaxed max-w-[95%]">
        <span className="underline decoration-1 underline-offset-4 uppercase mr-1 font-bold">
          {data.highlightNote}:
        </span> 
        {data.note}
      </p>

      {/* Thanh gạch đỏ trang trí */}
      <div className="w-52 h-[3px] bg-[#e53935] mt-7"></div>
    </div>
  );
}