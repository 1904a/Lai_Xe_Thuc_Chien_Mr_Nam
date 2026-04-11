"use client";

export default function RegistrationForm() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-600">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">ĐĂNG KÝ TƯ VẤN</h2>
      <form className="space-y-4">
        <input 
          type="text" placeholder="Họ và tên" 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
        />
        <input 
          type="tel" placeholder="Số điện thoại" 
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
        />
        <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none">
          <option>Chọn hạng bằng lái</option>
          <option>Bằng B1 (Tự động)</option>
          <option>Bằng B2 (Số sàn)</option>
          <option>Bằng C (Tải)</option>
        </select>
        <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition">
          GỬI ĐĂNG KÝ NGAY
        </button>
      </form>
    </div>
  );
}