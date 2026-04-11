// components/BenefitLayout.tsx
import React from "react";

interface BenefitItem {
  text: string;
  highlight?: string;
  suffix?: string;
}

interface BenefitLayoutProps {
  title: string;
  benefits: BenefitItem[];
  note: React.ReactNode;
}

export default function BenefitLayout({
  title,
  benefits,
  note,
}: BenefitLayoutProps) {
  return (
    <div className="w-[1230px] h-[771px] mx-auto bg-[#f9f9f9] p-10 font-sans shadow-sm border border-gray-100 flex flex-col">
      {/* Tiêu đề */}
      <h2 className="text-center text-[28px] font-bold text-[#b22222] mb-12 uppercase leading-tight">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-12 flex-1">
        {/* Cột trái: Nội dung chữ */}
        <div className="flex flex-col">
          <div className="space-y-5 flex-1">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[#b22222] rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-[2px]"></div>
                </div>
                <p className="text-[18px] text-gray-800 leading-snug">
                  {item.text}{" "}
                  {item.highlight && (
                    <span className="text-red-600 font-bold">
                      {item.highlight}
                    </span>
                  )}
                  {item.suffix && ` ${item.suffix}`}
                </p>
              </div>
            ))}
          </div>

          {/* Phần lưu ý */}
          <div className="mt-10 p-4 border-l-4 border-amber-500 bg-amber-50 text-[15px] leading-relaxed text-gray-700 italic">
            {note}
          </div>
        </div>
      </div>
    </div>
  );
}
