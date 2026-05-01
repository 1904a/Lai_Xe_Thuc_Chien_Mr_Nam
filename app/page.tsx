"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import NavButton from "@/components/NavButton";

export default function Home() {
  return (
    <main>
      <div className="w-300 h-100 bg-amber-800 overflow-hidden border-2 border-gray-500 rounded-lg my-20 mx-auto"></div>

      <div className="flex flex-col items-center text-center p-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-[1px] w-10 bg-red-300"></div>
          <span className="text-red-600 font-bold text-sm tracking-widest uppercase">
            Cam kết
          </span>
          <div className="h-[1px] w-10 bg-red-300"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Cam Kết Đào Tạo Tại{" "}
          <span className="text-red-600">Lái xe thực chiến Mr Năm</span>
        </h2>
        <div className="w-64 h-1 bg-red-100 rounded-full mb-6 flex overflow-hidden">
          <div className="w-1/3 bg-red-600 h-full mx-auto"></div>
        </div>

        <p className="text-slate-600 max-w-3xl leading-relaxed italic">
          Chất lượng đào tạo rõ ràng, giảng viên tận tâm, chi phí minh bạch và
          lộ trình học – thi được tư vấn cụ thể theo từng hạng.
        </p>
      </div>

      <div className="max-w-[1230px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 py-10 px-4">
        {[
          {
            icon: "images/icon.jpg", // Thay đổi tên file tương ứng
            title: "CHẤT LƯỢNG HÀNG ĐẦU",
            desc: "Đảm bảo học viên khi nhận bằng lái xe có đủ kỹ năng xử lý tình huống và tự tin lái xe trên đường giao thông.",
          },
          {
            icon: "images/icon.jpg",
            title: "GIẢNG VIÊN TẬN TÂM",
            desc: "Đội ngũ giảng viên có nhiều kinh nghiệm giảng dạy lâu năm, sẽ truyền đạt những kiến thức thực tế và dễ hiểu, giúp học viên có thể phán đoán và cách xử lý các tình huống khi tham gia giao thông.",
          },
          {
            icon: "images/icon.jpg",
            title: "CHI PHÍ MINH BẠCH",
            desc: "Có hợp đồng rõ ràng, không phát sinh chi phí trong quá trình đào tạo đến khi nhận bằng.",
          },
          {
            icon: "images/icon.jpg",
            title: "TỶ LỆ THI ĐẠT ĐỨNG ĐẦU",
            desc: "Học viên sẽ được học những kỹ năng và mẹo thi lý thuyết, bài sa hình và đường trường, giúp học viên dễ dàng vượt qua kỳ thi sát hạch.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* Icon Area */}
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.title}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-[#B22222] font-bold text-lg leading-tight uppercase">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="relative max-w-[1168px] h-[443px] mx-auto mt-20 font-sans">
        {/* Khối ảnh nền bên phải */}
        <div className="absolute top-0 right-0 w-[760px] h-[434px] overflow-hidden rounded-lg shadow-lg">
          <img
            src="images/ngang.jpg"
            alt="Sân tập lái xe"
            className="w-full h-full object-cover"
          />
          {/* Overlay màu đỏ phía trên ảnh (tùy chọn nếu ảnh gốc chưa có text) */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/40 to-transparent pointer-events-none"></div>
        </div>

        {/* Khối nội dung bên trái */}
        <div className="absolute left-0 top-[63px] w-[480px] bg-white p-10 rounded-xl shadow-2xl border border-gray-100 flex flex-col justify-center z-10">
          <h2 className="text-[#B22222] text-3xl font-extrabold leading-tight uppercase mb-2">
            Lái xe thực chiến Mr Năm
          </h2>

          <p className="text-[#B22222] font-semibold text-sm tracking-widest uppercase mb-6">
            ĐÀO TẠO VÀ SÁT HẠCH LÁI XE
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Tự hào là trường uy tín hàng đầu TPHCM với sân bãi hiện đại, xe tập
            đời mới. Cam kết đào tạo chuyên nghiệp, chi phí minh bạch và tỷ lệ
            thi đạt cao.
          </p>

        </div>
      </div>

      <div className="w-[1200px] mx-auto mt-30 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          // Ép các slide nằm sát nhau trên trục X
          direction="horizontal"
          slidesPerView={3} // Hiển thị 3 cái, 2 cái còn lại nằm chờ bên phải (trục X)
          spaceBetween={20} // Khoảng cách giữa các ảnh
          loop={true} // Vòng lặp vô tận
          speed={5000} // Tốc độ trôi (5 giây/slide) - càng cao càng mượt
          allowTouchMove={false} // Chặn người dùng kéo để giữ hiệu ứng trôi đều
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="marquee-swiper"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item} className="flex justify-center">
              <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-md">
                <img
                  src="images/ngang.jpg"
                  alt={`Slide ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CSS bắt buộc để khử hiệu ứng khựng */}
        <style jsx global>{`
          /* 1. Ép Swiper-wrapper luôn dùng linear để trôi đều trên trục X */
          .marquee-swiper .swiper-wrapper {
            display: flex !important;
            flex-direction: row !important; /* Đảm bảo nằm ngang */
            transition-timing-function: linear !important;
            align-items: center;
          }

          /* 2. Đảm bảo các slide không bị co lại */
          .marquee-swiper .swiper-slide {
            flex-shrink: 0 !important;
            height: auto;
          }
        `}</style>
      </div>

      <div className="max-w-[1200px] bg-[#B22222] mx-auto mt-20 rounded-3xl p-10 font-sans text-white text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold uppercase mb-4 tracking-tight">
            HỌC LÁI XE – Ô TÔ & XE MÁY
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-100 text-sm md:text-base">
            Tuyển sinh các khóa học lái xe với học phí minh bạch, lộ trình rõ
            ràng và tỷ lệ thi đậu cao tại TP.HCM.
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
          </div>
        </div>

        {/* SECTION 1: Ô TÔ 4 BÁNH */}
<div className="mb-16">
  <h3 className="text-2xl font-bold uppercase mb-10 tracking-widest">
    HỌC LÁI XE Ô TÔ 4 BÁNH
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    {[
      {
        title: "HẠNG B (SỐ TỰ ĐỘNG)",
        price: "20,000,000",
        detail: ["2,5 tháng thi", "Học phí trọn gói", "Chia nhiều đợt"],
        link: "/B-automatic", // Thêm đường dẫn cho card này
      },
      {
        title: "HẠNG B (SỐ SÀN)",
        price: "20,000,000",
        detail: ["3,5 tháng thi", "Minh bạch chi phí", "Lịch linh động"],
        link: "/B-manual", // Thêm đường dẫn cho card này
      },
      {
        title: "HẠNG C1",
        price: "24,000,000",
        detail: ["4 tháng thi", "Trọn gói đến lúc nhận bằng", "Tỷ lệ đậu cao"],
        link: "/C1", // Thêm đường dẫn cho card này
      },
    ].map((card, idx) => (
      // Đổi div thành thẻ a và thêm href
      <a
        key={idx}
        href={card.link}
        className="bg-white rounded-3xl p-8 text-slate-900 flex flex-col items-center shadow-xl hover:scale-105 transition-transform cursor-pointer block"
      >
        <img
          src="images/icon.jpg"
          alt="car"
          className="w-48 h-32 object-contain mb-6"
        />
        <h4 className="text-[#B22222] font-bold text-lg mb-2">
          {card.title}
        </h4>
        <p className="text-[#B22222] font-black text-2xl mb-6">
          {card.price}
        </p>
        <ul className="text-left space-y-3 mb-8 w-full px-4">
          {card.detail.map((item, i) => (
            <li key={i} className="text-sm flex items-center gap-2">
              <span className="text-[#B22222]">✓</span> {item}
            </li>
          ))}
        </ul>
      </a>
    ))}
  </div>
</div>

{/* SECTION 2: XE 2 BÁNH */}
<div>
  <h3 className="text-2xl font-bold uppercase mb-10 tracking-widest">
    HỌC LÁI XE 2 BÁNH
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto px-4">
    {[
      {
        title: "BẰNG A1",
        price: "550,000",
        oldPrice: null,
        detail: ["Đậu 100%", "Không phát sinh", "Thi hàng tháng"],
        link: "/A1", // Thêm đường dẫn cho card này
      },
      {
        title: "BẰNG A",
        price: "1,750,000",
        oldPrice: "2,000,000",
        detail: ["Đậu 100%", "Chọn xe thi", "Miễn phí hồ sơ"],
        link: "/A", // Thêm đường dẫn cho card này
      },
    ].map((card, idx) => (
      // Đổi div thành thẻ a và thêm href
      <a
        key={idx}
        href={card.link}
        className="bg-white rounded-3xl p-8 text-slate-900 flex flex-col items-center shadow-xl hover:scale-105 transition-transform cursor-pointer block"
      >
        <img
          src="images/icon.jpg"
          alt="bike"
          className="w-40 h-32 object-contain mb-6"
        />
        <h4 className="text-[#B22222] font-bold text-lg mb-2">
          {card.title}
        </h4>
        <div className="flex items-center gap-2 mb-6">
          {card.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              {card.oldPrice}
            </span>
          )}
          <p className="text-[#B22222] font-black text-2xl">
            {card.price}
          </p>
        </div>
        <ul className="text-left space-y-3 mb-8 w-full px-4">
          {card.detail.map((item, i) => (
            <li key={i} className="text-sm flex items-center gap-2">
              <span className="text-[#B22222]">✓</span> {item}
            </li>
          ))}
        </ul>
      </a>
    ))}
  </div>
</div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-20 mb-35 text-center font-sans">
        {/* Header nhỏ phía trên có 2 gạch ngang */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-red-400"></div>
          <span className="text-gray-500 text-sm font-medium uppercase tracking-[0.2em]">
            Lộ trình rõ ràng
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-red-400"></div>
        </div>

        {/* Tiêu đề chính với gạch chân gradient */}
        <div className="relative inline-block mb-6">
          <h2 className="text-[#B22222] text-4xl md:text-5xl font-black uppercase tracking-tight">
            Lộ trình học & nhận bằng tại Khôi Việt
            <span className="inline-block w-3 h-3 bg-[#B22222] rounded-full ml-2"></span>
          </h2>
          {/* Đường gạch chân bóng mờ phía dưới */}
          <div className="absolute -bottom-4 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#B22222] to-transparent opacity-60 shadow-[0_4px_10px_rgba(178,34,34,0.3)]"></div>
        </div>

        {/* Mô tả nhỏ phía dưới */}
        <p className="mt-8 text-gray-600 text-base italic md:text-lg max-w-[800px] mx-auto leading-relaxed">
          Từ đăng ký, hoàn thiện hồ sơ, học & thực hành đến sát hạch – nhận bằng
          đúng quy trình, đúng hẹn.
        </p>
      </div>
      <div className="max-w-[1200px] mx-auto mb-35 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "1", title: "ĐĂNG KÝ & TƯ VẤN", img: "images/ngang.jpg" },
            { step: "2", title: "LÀM HỒ SƠ", img: "images/ngang.jpg" },
            { step: "3", title: "HỌC & THỰC HÀNH", img: "images/ngang.jpg" },
            { step: "4", title: "THI & NHẬN BẰNG", img: "images/ngang.jpg" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Container Ảnh */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Nội dung phía dưới */}
              <div className="p-6 flex flex-col items-center">
                {/* Vòng tròn số thứ tự */}
                <div className="w-12 h-12 bg-[#B22222] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-[0_4px_10px_rgba(178,34,34,0.4)] transition-transform duration-300 group-hover:scale-110">
                  {item.step}
                </div>

                {/* Tiêu đề bước */}
                <h4 className="text-slate-800 font-bold text-sm tracking-wider text-center uppercase">
                  {item.title}
                </h4>
              </div>

              {/* Hiệu ứng đường kẻ đỏ nhỏ dưới chân khi hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#B22222] transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-20 mb-9 text-center font-sans">
        {/* Chữ Album Hoạt Động */}
        <h2 className="text-[#B22222] text-4xl font-black uppercase tracking-tight mb-2">
          ALBUM HOẠT ĐỘNG
        </h2>

        {/* Ký hiệu trang trí phía dưới */}
        <div className="flex items-center justify-center gap-3">
          {/* Gạch ngang trái */}
          <div className="w-12 h-[2px] bg-[#B22222]"></div>

          {/* Hình thoi nhỏ ở giữa */}
          <div className="w-2 h-2 bg-[#B22222] rotate-45"></div>

          {/* Gạch ngang phải */}
          <div className="w-12 h-[2px] bg-[#B22222]"></div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-10 mb-20 px-4">
        <div className="flex flex-col md:flex-row gap-5">
          {/* CỘT TRÁI (Rộng hơn - chứa 1 ảnh dài và 2 ảnh nhỏ bên dưới) */}
          <div className="w-full md:w-[60%] flex flex-col gap-5">
            {/* Ảnh Toàn Cảnh Sân Sát Hạch */}
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden group shadow-md">
              <img
                src="images/ngang.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Toàn cảnh sân sát hạch"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white text-sm font-medium">
                  Toàn Cảnh Sân Sát Hạch
                </span>
              </div>
            </div>

            {/* Hàng dưới gồm 2 ảnh nhỏ */}
            <div className="flex gap-5 h-[220px]">
              <div className="relative w-1/2 h-full rounded-2xl overflow-hidden group shadow-md">
                <img
                  src="images/ngang.jpg"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Hội đồng sát hạch"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-medium">
                    Hội Đồng Sát Hạch Cấp GPLX
                  </span>
                </div>
              </div>

              <div className="relative w-1/2 h-full rounded-2xl overflow-hidden group shadow-md">
                <img
                  src="images/ngang.jpg"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Sân sát hạch mô tô"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm font-medium">
                    Sân Sát Hạch Mô Tô A1, A
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI (Dọc - chứa 1 ảnh cao bằng cả 2 hàng bên trái) */}
          <div className="w-full md:w-[40%]">
            <div className="relative w-full h-[460px] rounded-2xl overflow-hidden group shadow-md">
              <img
                src="images/ngang.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Tổ chức kỳ sát hạch"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white text-sm font-medium">
                  Tổ Chức Kỳ Sát Hạch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-26 mb-20 flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* BÊN TRÁI: THÔNG TIN KHÓA HỌC */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-[#B22222] font-bold text-sm tracking-widest uppercase mb-2">
            Đăng ký ngay
          </span>
          <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4">
            Chọn khóa học lái xe <br />
            <span className="text-[#B22222]">phù hợp với bạn</span>
          </h2>
          <p className="text-gray-600 mb-8 italic">
            Tư vấn miễn phí các khóa B số sàn, B tự động, C1, A1, A. Lịch học
            linh hoạt – Thi chuẩn – Nhận bằng đúng hẹn.
          </p>

          {/* Ảnh Banner nhỏ bên dưới */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="images/ngang.jpg"
              alt="Trường đào tạo lái xe Khôi Việt"
              className="w-full h-auto object-cover"
            />
            {/* Hotline chèn trên ảnh giống mẫu */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#B22222]/90 text-white py-2 px-4 flex justify-around text-[10px] md:text-xs font-bold">
              <span>Hotline: 0917 329 245 Thầy Năm</span>
            </div>
          </div>
        </div>

        {/* BÊN PHẢI: BOX ĐĂNG KÝ (FORM) */}
        <div className="w-full md:w-[45%] bg-[#D32F2F] rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Hiệu ứng bóng mờ trang trí */}
          <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-white text-2xl font-bold mb-1">
              Đăng ký tư vấn nhanh
            </h3>
            <p className="text-white/80 text-sm mb-8 font-light">
              Nhân viên sẽ liên hệ trong 15 phút
            </p>

            <form className="space-y-4 text-left">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 bg-white"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 bg-white"
                />
              </div>
              <div>
                <select className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-500 appearance-none bg-white">
                  <option value="">Chọn khóa học</option>
                  <option value="b1">Bằng B1 (Số tự động)</option>
                  <option value="b2">Bằng B2 (Số sàn)</option>
                  <option value="c">Bằng C1</option>
                  <option value="a1">Bằng A1 / A</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Nội dung"
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 resize-none bg-white"
                ></textarea>
              </div>
              <NavButton
                className="w-full py-4 bg-[#B22222] border border-white/20 hover:bg-white hover:text-[#B22222] text-white font-black rounded-xl transition-all duration-300 uppercase shadow-lg"
                dest="/RegisteredSuccessfully"
                label="Đăng ký ngay"
              />
            </form>

            <p className="mt-6 text-white/70 text-xs font-light italic">
              ✓ Miễn phí tư vấn & giữ suất học • Không spam
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
