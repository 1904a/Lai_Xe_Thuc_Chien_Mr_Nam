"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "1. Làm sao để lựa chọn nơi đăng ký học B uy tín?",
    answer: (
      <div className="space-y-3 text-gray-700">
        <p>
          Để lựa chọn một nơi đăng ký học lái xe ô tô B uy tín bạn cần quan tâm
          đến những thông tin như sau:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Giấy phép đào tạo và tuyển sinh (Phải có địa chỉ của văn phòng đang
            tuyển sinh)
          </li>
          <li>Phải có hợp đồng cam kết giữa 2 bên</li>
          <li>Trong hợp đồng phải ghi thông tin học phí cụ thể</li>
          <li>
            Có lịch học và tốt nghiệp cụ thể, địa điểm sát hạch cụ thể (tránh
            đưa sang tỉnh khác)
          </li>
          <li>Học xe như thế nào</li>
        </ul>
        <p className="italic font-medium text-red-600">
          Lưu ý: Văn phòng tuyển sinh không có giấy phép hoạt động tuyệt đối
          không đăng ký. Tránh gặp các văn phòng “MA” nhận hồ sơ và cao chạy xa
          bay.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: "2. Bao nhiêu điểm đậu sát hạch lái xe ô tô B?",
    answer: (
      <div className="space-y-4 text-gray-700">
        <p>
          Đối với kỳ sát hạch lái xe B sẽ bao gồm 3 phần: Phần lý thuyết, mô
          phỏng và phần thực hành (gồm sa hình, đường trường). Vượt qua 3 phần
          thi học viên sẽ được cấp GPLX sau đó 21 ngày.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-4 border-red-600 bg-white p-3 shadow-sm">
            <h4 className="font-bold text-[#cc1d1d] mb-1">
              Lý thuyết (Bộ đề 600 câu)
            </h4>
            <ul className="text-sm space-y-1">
              <li>• Số câu hỏi: 30 câu</li>
              <li>• Đạt tối thiểu: 27/30 câu (Không sai câu điểm liệt)</li>
              <li>• Thời gian: 22 phút</li>
            </ul>
          </div>
          <div className="border-l-4 border-red-600 bg-white p-3 shadow-sm">
            <h4 className="font-bold text-[#cc1d1d] mb-1">Mô phỏng (10 câu)</h4>
            <ul className="text-sm space-y-1">
              <li>• Điểm tối đa mỗi câu: 5 điểm</li>
              <li>• Đạt tối thiểu: 35/50 điểm</li>
            </ul>
          </div>
          <div className="border-l-4 border-red-600 bg-white p-3 shadow-sm">
            <h4 className="font-bold text-[#cc1d1d] mb-1">Phần Sa hình</h4>
            <ul className="text-sm space-y-1">
              <li>• Hoàn thành 11 bài sa hình</li>
              <li>• Đạt tối thiểu: 80/100 điểm (Thời gian: 18 phút)</li>
            </ul>
          </div>
          <div className="border-l-4 border-red-600 bg-white p-3 shadow-sm">
            <h4 className="font-bold text-[#cc1d1d] mb-1">Đường trường</h4>
            <ul className="text-sm space-y-1">
              <li>• Hoàn thành 2000m đường trường</li>
              <li>• Đạt tối thiểu: 80/100 điểm</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    question: "3. Rớt lý thuyết mấy lần phải thi lại thực hành?",
    answer:
      "Theo như quy định mới hiện nay, học viên khi đậu phần sát hạch lý thuyết kết quả sẽ được bảo lưu 1 năm kể từ ngày đậu. Nếu sau một năm vẫn chưa vượt qua bài mô phỏng và thực hành phải bắt đầu lại từ đầu gồm 3 phần.",
  },
  {
    id: 4,
    question: "4. Bằng lái xe B được mấy năm sẽ nâng lên bằng C, bằng D?",
    answer: (
      <div className="space-y-2">
        <p>
          • Để nâng được lên được bằng lái hạng C yêu cầu bằng lái B có thời hạn
          được 3 năm trở lên.
        </p>
        <p>
          • Để nâng lên bằng lái hạng D yêu cầu bằng B có thời hạn được 5 năm
          trở lên và phải có bằng văn hóa trung học trở lên.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    question: "5. Chi phí bảo lưu hồ sơ gốc khoảng bao nhiêu/năm?",
    answer: (
      <div className="space-y-2">
        <p>
          Khi Anh/Chị đậu sát hạch lái xe B2, ngày nhận bằng lái sẽ nhận luôn hồ
          sơ gốc. Thông tin của Anh/Chị đã được lưu trữ trên hệ thống của Bộ
          GTVT chính vì thế{" "}
          <span className="text-red-600 font-bold">
            không hề có chi phí bảo lưu hồ sơ
          </span>
          .
        </p>
        <p className="italic">
          Hồ sơ gốc Anh/Chị giữ lại để sử dụng trong trường hợp mất bằng lái
          phải làm lại.
        </p>
      </div>
    ),
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#f4f4f4] py-16">
      <div className="w-[1230px] mx-auto px-4">
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-300 transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center py-6 text-left focus:outline-none group"
              >
                <span className="text-red-600 text-3xl mr-6 font-light transition-transform duration-300">
                  {openId === item.id ? "−" : "+"}
                </span>
                <span className="text-[20px] font-black italic uppercase tracking-tight text-gray-900 group-hover:text-red-600 transition-colors">
                  {item.question}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === item.id
                    ? "max-h-[1000px] pb-8 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-14 pr-10 text-[16px] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
