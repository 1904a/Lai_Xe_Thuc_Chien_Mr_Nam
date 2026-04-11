import React from "react";
interface InfoItem {
  content: string;
  isBold?: boolean;
  highlightText?: string; // Dùng cho số điện thoại hoặc text màu đỏ
}

interface RegistrationInfoProps {
  title: string;
  items: InfoItem[];
}

export default function RegistrationInfoCard({
  data,
}: {
  data: RegistrationInfoProps;
}) {
  return (
    <div className="w-[410px] h-[375px] bg-white border border-red-600 flex flex-col font-sans overflow-hidden shadow-md">
      {/* Header màu đỏ */}
      <div className="bg-[#cc1d1d] py-5 text-center">
        <h2 className="text-white text-2xl font-bold uppercase tracking-wide">
          {data.title}
        </h2>
      </div>

      {/* Danh sách nội dung */}
      <div className="flex-1 px-4 py-2">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="flex items-center py-3.5 border-b border-gray-200 last:border-0"
          >
            {/* Icon mũi tên đỏ */}
            <div className="mr-3 flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="#cc1d1d" />
                <path
                  d="M10 8L14 12L10 16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Text nội dung */}
            <p
              className={`text-[15px] text-gray-800 leading-snug ${item.isBold ? "font-bold" : "font-medium"}`}
            >
              {item.content}
              {item.highlightText && (
                <span className="text-red-600 ml-1">{item.highlightText}</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
