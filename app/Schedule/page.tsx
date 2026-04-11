export default function Schedule() {
  return (
    <main>
      <div className="w-full h-[441px] ">
        <div className="w-[1200px] h-[266px] mt-[70px] mx-auto mb-[105px] ">
          <div className="w-full h-[80px] flex items-center justify-center text-2xl ">
            mlem mlem
          </div>
          <div className="w-full h-[186px] ">
            <table className="w-full table-fixed border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-[11.11%] border p-2">STT</th>
                  <th className="w-[33.33%] border p-2">Sản phẩm</th>
                  <th className="w-[33.33%] border p-2">Mô tả</th>
                  <th className="w-[22.22%] border p-2">Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 text-center">01</td>
                  <td className="border p-2">Next.js Framework</td>
                  <td className="border p-2">Tối ưu SEO và Performance</td>
                  <td className="border p-2">Cần học gấp</td>
                </tr>
                <tr>
                  <td className="border p-2 text-center">02</td>
                  <td className="border p-2">React Hooks</td>
                  <td className="border p-2">
                    Cải thiện hiệu suất và quản lý trạng thái
                  </td>
                  <td className="border p-2">Cần luyện tập</td>
                </tr>
                <tr>
                  <td className="border p-2 text-center">03</td>
                  <td className="border p-2">TypeScript</td>
                  <td className="border p-2">
                    Tăng cường an toàn kiểu dữ liệu
                  </td>
                  <td className="border p-2">Cần nghiên cứu kỹ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
