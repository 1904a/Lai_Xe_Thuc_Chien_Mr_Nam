import React from 'react';

export interface CourseProps {
  title: string;
  courseCode: string;
  price: string;
  startDate: string;
  endDate: string;
  discount: string;
  limit: string;
  deadline: string;
  hotline: string;
}

export default function CourseCard({ data }: { data: CourseProps }) {
  return (
    <div className="w-205 h-105.5 border-2 border-amber-600 mx-auto bg-[#f4f2c9] flex flex-col justify-center p-6 font-sans">
      <h2 className="text-center text-3xl font-bold mb-6 tracking-tight uppercase text-gray-800">
        {data.title}
      </h2>

      <div className="space-y-3.5 text-lg flex-1 flex flex-col justify-center">
        <Row
          label={`Khai giảng khóa học lái xe B11:`}
          value={data.courseCode}
          valueClass="text-green-700 font-bold"
        />
        <Row
          label="Học phí trọn gói:"
          value={data.price}
          valueClass="text-red-600 font-bold"
        />
        <Row
          label="Ngày khai giảng:"
          value={`${data.startDate} (Bế giảng ${data.endDate})`}
          valueClass="text-green-700 font-bold"
        />

        {/* Xử lý bôi đỏ số tiền trong phần ưu đãi */}
        <div className="grid grid-cols-[1fr_1.5fr] border-b border-gray-300/50 pb-2">
          <span className="font-bold text-gray-800">Ưu đãi thêm:</span>
          <span className="text-green-700 font-bold">
            {data.discount.split(" ").map((word, index) =>
              /\d+[KkMmTtRr]/.test(word) ? (
                <span key={index} className="text-red-600">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              ),
            )}
          </span>
        </div>

        <Row label="Hồ sơ cần tuyển:" value={`${data.limit} Hồ sơ`} valueClass="text-green-700 font-bold" />
        <Row label="Hạn cuối nhận hồ sơ:" value={data.deadline} valueClass="text-green-700 font-bold" />
        <Row label="Hỗ trợ tư vấn:" value={`Hotline/Zalo – ${data.hotline}`} valueClass="text-green-700 font-bold" />
      </div>
    </div>
  );
}

function Row({ label, value, valueClass = "" }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="grid grid-cols-[1fr_1.5fr] border-b border-gray-300/50 pb-2">
      <span className="font-bold text-gray-800">{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}