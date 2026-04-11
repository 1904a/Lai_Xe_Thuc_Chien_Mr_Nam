interface PaymentMethodProps {
  headerTitle: string;
  subHeader: string;
  badgeText: string;
  steps: { label: string; content: string }[];
  extraDetails: { title: string; desc: string }[];
}

export default function PaymentMethodCard({ data }: { data: PaymentMethodProps }) {
  return (
    <div className="w-[615px] h-[589px] bg-white shadow-xl flex flex-col overflow-hidden font-sans ">
      {/* Header đỏ */}
      <div className="bg-[#cc1d1d] py-6 px-4 text-center">
        <h2 className="text-white text-2xl font-bold uppercase leading-tight whitespace-pre-line">
          {data.headerTitle}
        </h2>
      </div>

      <div className="flex-1 flex flex-col px-8 pt-6 relative">
        <div className="text-[#1a1a1a] text-3xl font-extrabold text-center mb-2 uppercase">
          {data.subHeader}
        </div>

        {/* Badge Hotline */}
        <div className="bg-[#cc1d1d] text-white text-sm py-1 px-4 font-bold absolute right-0 top-[65px]">
          {data.badgeText}
        </div>

        <div className="mt-10 space-y-4">
          {/* Phần đóng tiền theo lần */}
          {data.steps.map((step, index) => (
            <div key={index} className="border-b border-dotted border-gray-400 pb-2">
              <span className="font-bold underline text-[16px] italic">{step.label}:</span>
              <span className="ml-2 text-[16px]" dangerouslySetInnerHTML={{ __html: step.content }} />
            </div>
          ))}

          {/* Phần mô tả chi tiết giờ học */}
          {data.extraDetails.map((item, index) => (
            <div key={index} className="text-[15px] leading-snug">
              <span className="font-bold">{item.title}:</span>
              <span className="ml-1 text-gray-700">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}