import React from "react";
interface LocationListProps {
  items: string[];
}

export default function LocationList({ items }: { items: string[] }) {
  return (
    <div className="w-[615px] h-[337px] bg-white border border-red-600 flex flex-col font-sans overflow-hidden">
      <div className="flex-1 px-4 py-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center py-3 border-b border-gray-100 last:border-0"
          >
            {/* Icon mũi tên đỏ */}
            <div className="mr-3 flex-shrink-0">
              <svg
                width="18"
                height="18"
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
            <p className="text-[15px] text-gray-800 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
