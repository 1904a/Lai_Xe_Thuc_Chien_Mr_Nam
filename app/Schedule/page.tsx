"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

// 1. Định nghĩa kiểu dữ liệu (Interface) để TypeScript hiểu cấu trúc bảng
interface CarSchedule {
  id: number;
  hang_xe: string;
  ngay_sat_hach: string;
  ghi_chu: string;
}

interface MotoSchedule {
  id: number;
  hang_xe: string;
  han_nop: string;
  ngay_sat_hach: string;
  ghi_chu: string;
}

export default function SchedulePage() {
  // Định nghĩa state với kiểu dữ liệu đã tạo
  const [carData, setCarData] = useState<CarSchedule[]>([]);
  const [motoData, setMotoData] = useState<MotoSchedule[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Lấy dữ liệu bảng ô tô
        const { data: car, error: carError } = await supabase
          .from('car_schedule')
          .select('*')
          .order('id', { ascending: true });

        // Lấy dữ liệu bảng mô tô
        const { data: moto, error: motoError } = await supabase
          .from('moto_schedule')
          .select('*')
          .order('id', { ascending: true });

        if (carError) console.error("Lỗi lấy dữ liệu ô tô:", carError);
        if (motoError) console.error("Lỗi lấy dữ liệu mô tô:", motoError);

        setCarData((car as CarSchedule[]) || []);
        setMotoData((moto as MotoSchedule[]) || []);
      } catch (error) {
        console.error("Lỗi hệ thống:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // 2. Hàm xử lý hiển thị màu sắc và Icon cho Ghi chú
  const formatGhiChu = (text: string | null) => {
    if (!text) return "";
    let colorClass = "text-gray-600";
    let icon = "";

    if (text.includes("ĐÃ CHỐT")) {
      colorClass = "text-orange-600";
      icon = "🔥 ";
    } else if (text.includes("SẮP CHỐT")) {
      colorClass = "text-orange-500";
      icon = "🔥 ";
    } else if (text.toLowerCase().includes("nhận hồ sơ")) {
      colorClass = "text-green-600";
      icon = "✅ ";
    }

    return (
      <span className={`font-bold ${colorClass}`}>
        {icon}{text}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-3 font-medium text-gray-600">Đang tải lịch sát hạch mới nhất...</span>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen py-16 px-4 font-sans text-gray-900">
      <div className="max-w-[1100px] mx-auto space-y-20">
        
        {/* BẢNG 1: Ô TÔ */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3 text-blue-900">
              Thông báo kế hoạch đào tạo & sát hạch (Ô tô)
            </h2>
          </div>

          <div className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-5 font-bold uppercase text-sm">Đợt</th>
                  <th className="px-6 py-5 font-bold uppercase text-sm">Hạng xe</th>
                  <th className="px-6 py-5 font-bold uppercase text-sm">Ngày sát hạch</th>
                  <th className="px-6 py-5 font-bold uppercase text-sm">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {carData.length > 0 ? carData.map((item, index) => (
                  <tr key={item.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 font-bold text-gray-800">{item.hang_xe}</td>
                    <td className="px-6 py-4 text-gray-700">{item.ngay_sat_hach}</td>
                    <td className="px-6 py-4 italic text-gray-600">{item.ghi_chu}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={4} className="py-10 text-gray-400">Chưa có dữ liệu ô tô</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* BẢNG 2: MÔ TÔ */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3 text-red-800">
              Thông báo kế hoạch đào tạo & sát hạch (Mô tô)
            </h2>
          </div>

          <div className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="px-6 py-5 font-bold uppercase text-sm">Khóa</th>
                  <th className="px-6 py-5 font-bold uppercase text-sm">Hạng xe</th>
                  <th className="px-6 py-5 font-bold uppercase text-sm">Hạn nộp hồ sơ</th>
                  <th className="px-6 py-5 font-bold uppercase text-sm">Ngày sát hạch</th>
                  <th className="px-6 py-5 font-bold uppercase text-sm">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {motoData.length > 0 ? motoData.map((item, index) => (
                  <tr key={item.id} className="hover:bg-red-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 font-bold text-gray-800">{item.hang_xe}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{item.han_nop}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">{item.ngay_sat_hach}</td>
                    <td className="px-6 py-4">
                      {formatGhiChu(item.ghi_chu)}
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={5} className="py-10 text-gray-400">Chưa có dữ liệu mô tô</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </main>
  );
}