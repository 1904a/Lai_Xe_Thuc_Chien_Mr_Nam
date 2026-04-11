import React from "react";

interface TrainingStepProps {
  title: string;
  items: string[];
}

export default function TrainingStepCard({
  data,
}: {
  data: TrainingStepProps;
}) {
  return (
    <div className="w-[615px] h-[423px] bg-white border border-red-600 flex flex-col font-sans overflow-hidden shadow-sm">
      {/* Header đỏ đặc */}
      <div className="bg-[#cc1d1d] py-5 text-center">
        <h2 className="text-white text-xl font-bold uppercase tracking-wider">
          {data.title}
        </h2>
      </div>

      {/* Danh sách nội dung */}
      <div className="flex-1 px-5 py-2">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="flex items-start py-3.5 border-b border-gray-100 last:border-0"
          >
            {/* Icon mũi tên đỏ */}
            <div className="mr-3 mt-1 flex-shrink-0">
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
            {/* Text nội dung */}
            <p className="text-[15px] text-gray-800 font-medium leading-snug">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
