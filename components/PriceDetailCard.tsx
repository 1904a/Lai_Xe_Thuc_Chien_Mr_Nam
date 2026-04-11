interface PriceDetailProps {
  headerTitle: string;
  price: string;
  badgeText: string;
  details: string[]; // Danh sách các dòng mô tả bên dưới
}

export default function PriceDetailCard({ data }: { data: PriceDetailProps }) {
  return (
    <div className="w-[615px] h-[559px] bg-white shadow-xl flex flex-col overflow-hidden font-sans ">
      {/* Header đỏ */}
      <div className="bg-[#cc1d1d] py-6 px-4 text-center">
        <h2 className="text-white text-2xl font-bold uppercase leading-tight whitespace-pre-line">
          {data.headerTitle}
        </h2>
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 flex flex-col items-center pt-6 px-6 relative">
        <div className="text-[#1a1a1a] text-4xl font-extrabold mb-2">
          {data.price}
        </div>
        
        {/* Badge đỏ lệch phải */}
        <div className="bg-[#cc1d1d] text-white text-sm py-1 px-4 font-bold absolute right-0 top-[70px]">
          {data.badgeText}
        </div>

        {/* Danh sách chi tiết */}
        <div className="w-full mt-12 space-y-0">
          {data.details.map((item, index) => (
            <div 
              key={index} 
              className="py-3 text-center text-[16px] text-gray-800 border-b border-dotted border-gray-400 last:border-0 font-medium"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}