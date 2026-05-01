import PriceDetailCard from "@/components/PriceDetailCard";
import NavButton from "@/components/NavButton";

const leftData = {
  headerTitle: "HỌC PHÍ TRỌN GÓI THI BẰNG LÁI XE MÁY A( DƯỚI 125 cm3)",
  price: "800.000 VNĐ",
  badgeText: "HOTLINE: 1900 xxxx",
  details: [
    "Đã bao gồm:",
    "Phí hồ sơ đăng ký thi bằng lái",
    "Phí chụp hình tại văn phòng",
    "Lệ phí thi sát hạch",
    "Miễn phí tài liệu học lý thuyết",
  ],
};

export default function A1() {
  return (
    <main>
      <div className="w-[1230px] h-[385px] bg-white flex flex-col justify-center px-8 py-6 font-sans mx-auto mt-[70px]">
        {/* Tiêu đề chính */}
        <h1 className="text-[#CC0000] text-4xl font-bold text-center mb-6 uppercase tracking-tight">
          Thi bằng lái xe máy A1 (Xe dưới 125 cm³)
        </h1>

        {/* Nội dung văn bản */}
        <div className="space-y-4 text-gray-800 leading-relaxed text-[15.5px]">
          <p>
            Học bằng lái xe máy A1 tại TPHCM nhu cầu rất là nhiều. Chính vì thế
            mà rất nhiều cá nhân lợi dụng vấn đề này để lừa đảo. Đặc biệt là các
            bạn sinh viên nhẹ dạ.
          </p>

          <p>
            Một số dạng lừa đảo quảng cáo phổ biến nhất trên mạng đó chính là
            đăng ký thi bằng lái xe máy A1{" "}
            <span className="font-bold">KHÔNG CẦN THI</span> vẫn có bằng lái với
            phí rất rẻ.
          </p>

          <p>
            Bọn lừa đảo sẽ gửi cho bạn bằng giả hoặc sẽ lừa tiền bạn và không
            gửi cho bạn bất kỳ tấm bằng nào. Nếu bạn sử dụng bằng giả điều khiển
            phương tiện lưu thông sẽ vi phạm pháp luật khi vi phạm sẽ bị tạm giữ
            xe cũng như bạn để điều tra nguồn gốc bằng lái.
          </p>

          <p>
            Chính vì thế hãy nói không với vấn đề{" "}
            <span className="font-bold italic">“Không thi vẫn có bằng”</span> để
            tránh tiền mất tật mang.
          </p>

          <p>
            Tại sao không tự mình đăng ký thi bằng lái xe máy tại{" "}
            <a
              href="page.tsx"
              className="text-red-600 font-semibold underline decoration-red-600 underline-offset-2 hover:text-red-700 transition-colors"
            >
              Lái xe thực chiến Mr Năm
            </a>{" "}
            và cầm trên tay tấm bằng thật, chất lượng và tự tin điều khiển xe
            máy ra đường.
          </p>
        </div>
      </div>
      {/* Container bao quanh */}
      <div className="w-full min-h-[860px] bg-gray-200 py-10">
        {/* Tiêu đề */}
        <div className="max-w-[900px] mx-auto mb-12">
          <h1 className="text-[#CC0000] text-3xl font-bold text-center uppercase tracking-tight">
            ĐĂNG KÝ THI BẰNG LÁI XE MÔ TÔ A1 TẠI TPHCM CẤP TỐC
          </h1>
        </div>

        {/* Grid chứa 2 phần: Chỉnh max-width lại cho vừa mắt (khoảng 1200px) */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-10 px-4 items-stretch">
          {/* Cột trái: Card giá */}
          <div className="flex flex-col justify-center">
            <PriceDetailCard data={leftData} />
          </div>

          {/* Cột phải: Form đăng ký */}
          <div className="w-full max-w-[500px] mx-auto">
            <div
              className="w-full min-h-[600px] rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col justify-center py-10"
              style={{
                backgroundImage: 'url("images/truong-lai-khoi-viet.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#D32F2F]/85 z-0"></div>
              <div className="absolute top-[-10%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl z-10"></div>

              <div className="relative z-20 text-center px-8 md:px-12">
                <h3 className="text-white text-3xl font-bold mb-2">
                  Đăng ký tư vấn nhanh
                </h3>
                <p className="text-white/80 text-base mb-10 font-light">
                  Nhân viên sẽ liên hệ trong 15 phút
                </p>

                <form className="space-y-5 text-left">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full px-6 py-4 rounded-xl border-none outline-none text-slate-900 bg-white text-lg shadow-inner"
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại"
                    className="w-full px-6 py-4 rounded-xl border-none outline-none text-slate-900 bg-white text-lg shadow-inner"
                  />
                  <div className="w-full px-6 py-4 rounded-xl bg-white/90 text-slate-500 text-lg font-medium shadow-inner">
                    Hạng bằng A1
                  </div>
                  <div className="pt-4">
                    <NavButton
                      className="w-full py-5 bg-[#B22222] border border-white/30 hover:bg-white hover:text-[#B22222] text-white font-black rounded-xl transition-all duration-300 uppercase shadow-xl text-xl active:scale-95"
                      dest="/RegisteredSuccessfully"
                      label="Đăng ký ngay"
                    />
                  </div>
                </form>
                <p className="mt-8 text-white/70 text-sm font-light italic">
                  ✓ Miễn phí tư vấn & giữ suất học • Không spam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[580px] bg-[#f8f9fa] p-10 font-sans">
        {/* Tiêu đề chính */}
        <div className="text-center mb-10">
          <h2 className="text-[#CC0000] text-3xl font-bold uppercase mb-4">
            Nội dung thi sát hạch bằng lái xe A1
          </h2>
          <p className="text-gray-700 text-lg italic">
            Thi sát hạch lái xe A1 được chia làm 2 phần bao gồm: Thi lý thuyết
            trắc nghiệm trên máy tính, đậu phần thi lý thuyết sẽ ra thi thực
            hành trên xe cảm biến. Cụ thể như sau:
          </p>
        </div>

        {/* Nội dung chia 2 cột */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Cột trái: Văn bản */}
          <div className="space-y-6 text-[#333]">
            <div>
              <h3 className="font-bold text-xl mb-3">I. Bài thi lý thuyết</h3>
              <ul className="list-none space-y-2 ml-4">
                <li>
                  <span className="text-[#CC0000] mr-2">➤</span> Trắc nghiệm: 25
                  câu hỏi
                </li>
                <li>
                  <span className="text-[#CC0000] mr-2">➤</span> Số đáp án đúng:
                  21/25 câu (Không sai câu điểm liệt)
                </li>
                <li>
                  <span className="text-[#CC0000] mr-2">➤</span> Thời gian làm
                  bài: 19 phút
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">II. Bài thi thực hành</h3>
              <ul className="list-none space-y-2 ml-4">
                <li>
                  <span className="text-[#CC0000] mr-2">➤</span> Hoàn thành: 4
                  bài thi liên hoàn
                </li>
                <li>
                  <span className="text-[#CC0000] mr-2">➤</span> Số điểm cần
                  đạt: 80/100 điểm
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-[#CC0000] shadow-sm">
              <h3 className="font-bold text-lg mb-2 underline">Lưu ý:</h3>
              <ul className="list-none space-y-2 ml-2">
                <li>
                  <span className="text-[#CC0000] mr-2">➤</span> Chạm vạch thiết
                  bị & chống chân:{" "}
                  <span className="font-bold text-red-600">
                    trừ 5 điểm mỗi lần.
                  </span>
                </li>
                <li>
                  <span className="text-[#CC0000] mr-2">➤</span> Tắt máy, té xe;
                  đi sai quy trình:{" "}
                  <span className="font-bold text-red-600">
                    trừ 25 điểm -&gt; Rớt.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cột phải: Hình ảnh sơ đồ */}
          <div className="flex flex-col justify-center h-full">
            <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
              <img
                src="images/ngang.jpg"
                alt="Sơ đồ thi thực hành A1"
                className="w-full h-auto object-contain rounded-xl"
              />
              <p className="text-center text-sm text-gray-500 mt-4 italic">
                Sơ đồ 4 bài thi thực hành: Vòng số 8, Đường thẳng, Quanh co, Gồ
                ghề.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1230px] h-auto bg-white mx-auto p-12 shadow-sm font-sans overflow-y-auto mt-50">
        {/* Tiêu đề chính */}
        <h2 className="text-[#CC0000] text-3xl font-bold text-center uppercase mb-10 tracking-tight">
          Câu hỏi thường gặp về thi lái xe máy A1
        </h2>

        <div className="space-y-8 text-[16px] leading-relaxed text-gray-800">
          {/* Câu 1 */}
          <section>
            <h3 className="text-[#CC0000] font-bold text-lg mb-3">
              1. Bằng lái xe A1 chạy được xe gì?
            </h3>
            <div className="pl-4 space-y-3">
              <p>
                Theo thông tư <span className="italic">35/2024/TT-BGTVT</span>{" "}
                của{" "}
                <span className="font-semibold underline decoration-red-500">
                  Bộ Giao Thông Vận Tải
                </span>{" "}
                ngày 15/11/2024 có hiệu lực kể từ ngày 01 tháng 01 năm 2025, quy
                định về việc đào tạo, sát hạch, cấp giấy phép lái xe cơ giới
                đường bộ được quy định như sau:
              </p>
              <p>
                Bằng lái xe máy A1 (hay còn được gọi là giấy phép lái xe hạng
                A1) được phòng CSGT của các tỉnh cấp cho những người đã vượt qua
                kỳ thi sát hạch.
              </p>
              <p>
                Giấy phép lái xe hạng A1 được chấp nhận cho người lái xe sử dụng
                phương tiện có dung tích xi lanh{" "}
                <span className="font-bold">dưới 125 cm³</span>. Đây là loại
                bằng lái xe cơ bản nhất dành cho người điều khiển xe 2 bánh.
              </p>
              <p className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                Hiện tại, bằng lái xe máy A1 được cấp là bằng PET và có mã QR.
                Những người{" "}
                <span className="font-semibold">đã có bằng lái xe ô tô</span> sẽ
                được miễn thi bài thi lý thuyết, chỉ cần thi thực hành.
              </p>
            </div>
          </section>

          {/* Câu 2 */}
          <section>
            <h3 className="text-[#CC0000] font-bold text-lg mb-3">
              2. Không có bằng lái xe máy A1 phạt bao nhiêu tiền?
            </h3>
            <div className="pl-4 space-y-3">
              <p>
                Nếu bạn điều khiển xe máy lưu thông trên đường mà chưa có bằng
                lái A1 thì mức phạt từ{" "}
                <span className="text-red-600 font-bold">
                  800.000 đến 1.200.000 VNĐ
                </span>{" "}
                và tạm giữ phương tiện 7 ngày trước khi đưa ra quyết định xử
                phạt.
              </p>
              <p className="italic text-gray-600">
                Việc thi đậu bằng lái xe máy A1 không hề khó nên các bạn hãy có
                cho mình một tấm bằng trong ví để tự tin điều khiển phương tiện.
              </p>
            </div>
          </section>

          {/* Câu 3 */}
          <section>
            <h3 className="text-[#CC0000] font-bold text-lg mb-3">
              3. Thi rớt lý thuyết hoặc thực hành thì bao lâu thi lại?
            </h3>
            <div className="pl-4 space-y-3">
              <p>
                Bạn cần phải đăng ký thi lại cho khóa thi sau. Thời gian thi lại
                thường cách nhau khoảng{" "}
                <span className="font-bold">3 tuần</span>.
              </p>
              <p className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                <span className="font-bold underline uppercase">Lưu ý:</span>{" "}
                Kết quả thi lý thuyết được bảo lưu{" "}
                <span className="font-bold text-orange-700">1 năm</span>. Nếu
                sau 1 năm vẫn chưa thi đậu thực hành thì bạn cần phải thi lại cả
                2 bài.
              </p>
            </div>
          </section>

          {/* Câu 4 */}
          <section>
            <h3 className="text-[#CC0000] font-bold text-lg mb-3">
              4. Thời hạn bằng lái A1 là bao lâu?
            </h3>
            <div className="pl-4 space-y-3">
              <p>
                Hiện tại giấy phép lái xe máy hạng A1 có thời hạn là{" "}
                <span className="font-bold text-green-700 underline decoration-2">
                  không giới hạn
                </span>
                . Bằng được cấp là thẻ nhựa PET có gắn mã QR.
              </p>
              <p className="text-sm text-gray-500 italic">
                Các bạn nên tranh thủ thi sớm trước khi có sự thay đổi thành
                bằng có thời hạn như bằng lái xe ô tô.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
