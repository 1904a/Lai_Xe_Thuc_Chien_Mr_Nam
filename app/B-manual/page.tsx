import CourseCard from "@/components/CourseCard";
import BenefitLayout from "@/components/WhyChooseUs";
import CourseHeader from "@/components/CourseHeader";
import PriceDetailCard from "@/components/PriceDetailCard";
import PaymentMethodCard from "@/components/PaymentMethodCard";
import RegistrationInfoCard from "@/components/RegistrationInfoCard";
import LocationList from "@/components/Location";
import TrainingStepCard from "@/components/TrainingStepCard";
import FAQAccordion from "@/components/FAQSection";
import NavButton from "@/components/NavButton";

const BCourse = {
  title: "HỌC LÁI XE Ô TÔ B(SỐ SÀN)",
  courseCode: "Khóa 03/2026",
  price: "20.000.000 VNĐ",
  startDate: "25/03/2026",
  endDate: "26/05/2026",
  discount: "Giảm ngay 500K khi liên hệ Thầy Năm",
  limit: "15",
  deadline: "15/03/2026",
  hotline: "0917 329 245",
};

const benefitslist = [
  {
    text: "Trường được sở Xây dựng cấp phép",
    highlight: "(không qua trung gian)",
  },
  {
    text: "Đây là khóa sát hạch lái xe B( Số cơ khí)",
    highlight: "sớm nhất hiện nay",
  },
  { text: "Thời gian học thực hành lên tới", highlight: "34 giờ/1 học viên" },
  { text: "Được quyền lựa chọn", highlight: "học 1 kèm 1 phí không đổi" },
  {
    text: "Lịch học",
    highlight: "thực hành tự chọn",
    suffix: "theo lịch học viên",
  },
  { text: "Hệ thống xe tập lái đời mới, có máy lạnh và trợ lực tay lái." },
  { text: "Học phí rõ ràng, minh bạch và cam kết trên hợp đồng" },
  {
    text: "Cam kết đúng lịch,",
    highlight: "hoàn tiền 100%",
    suffix: "nếu sai lịch đã ghi trên hợp đồng",
  },
];

const drivingNote = (
  <>
    <span className="font-bold underline">Lưu ý:</span> Rất nhiều văn phòng hiện
    nay <span className="text-red-600 font-bold">không có giấy phép</span> nhưng
    vẫn tuyển sinh và rất nhiều Anh/Chị nộp phải những văn phòng như vậy{" "}
    <span className="font-bold">bị lừa tiền không được sát hạch</span> hoặc được
    sát hạch nhưng hồ sơ gửi về các tỉnh khách.
  </>
);

const headerData = {
  title: "HỌC PHÍ HỌC LÁI XE Ô TÔ B(SỐ SÀN) TẠI TPHCM",
  subtitle: "CAM KẾT KHÔNG PHÁT SINH PHÍ – ĐƯỢC GHI RÕ TRONG HỢP ĐỒNG",
  highlightNote: "LƯU Ý",
  note: "Khuyến khích học viên nên chụp lại màn hình bảng giá cũng như cách đóng phí khi lên đăng ký để so sánh với hợp đồng.",
};

const leftData = {
  headerTitle: "HỌC PHÍ TRỌN GÓI HỌC LÁI XE B(SỐ SÀN)\nTHỰC HÀNH 34 GIỜ",
  price: "19.000.000 VNĐ",
  badgeText: "Chụp Lại Màn Hình Để Đối Chiếu Với Hợp Đồng",
  details: [
    "Thời gian đào tạo: <b>3 tháng</b>",
    "Học lý thuyết: <b>học lý thuyết online trên phần mềm và học trực tiếp theo lịch nhà trường.</b>",
    "Thời gian thực hành: <b>34 giờ/1 học viên</b>",
    "Phí hồ sơ đăng ký học lái xe B(số sàn)",
    "Lệ phí tốt nghiệp, sát hạch",
    "Phí cấp bằng PET",
    "<b>Miễn phí chụp hình và in hồ sơ</b>",
  ],
};

const rightData = {
  headerTitle: "HÌNH THỨC ĐÓNG HỌC PHÍ\nTIỀN MẶT HOẶC CHUYỂN KHOẢN",
  subHeader: "CHIA LÀM 2 LẦN ĐÓNG",
  badgeText: "Gọi 0917 329 245 Để Nhận Ưu Đãi",
  steps: [
    {
      label: "Lần 1",
      content:
        "Nộp hồ sơ và đóng học phí <b class='text-red-600'>10.000.000 VNĐ</b>",
    },
    {
      label: "Lần 2",
      content:
        "Sau khoảng 1 – 2 tháng học viên đóng tiếp <b class='text-red-600'>9.000.000 VNĐ</b>",
    },
  ],
  extraDetails: [
    {
      title: "Chi tiết số giờ học lý thuyết và thực hành như sau",
      desc: "",
    },
    {
      title: "Học lý thuyết",
      desc: "học lý thuyết online trên phần mềm và học trực tiếp theo lịch nhà trường.",
    },
    {
      title: "Học thực hành cơ bản",
      desc: "Gồm 4 buổi. Mỗi buổi 4 tiếng/2 học viên/xe",
    },
    {
      title: "Học đường trường và sa hình",
      desc: "Gồm 4 buổi số sàn. Mỗi buổi 12 giờ/2 học viên/xe",
    },
  ],
};

const dossierData = {
  title: "HỒ SƠ ĐĂNG KÝ",
  items: [
    { content: "Mang passport/CCCD (Photo tại văn phòng)" },
    { content: "Bằng lái xe máy photo (Photo tại văn phòng)" },
    { content: "10 hình 3x4 (Chụp tại văn phòng)" },
    { content: "Giấy khám sức khỏe" },
    { content: "Đơn đăng ký học lái xe (Nhận tại văn phòng)" },
  ],
};

const locationData = {
  title: "ĐỊA ĐIỂM ĐĂNG KÝ HỒ SƠ",
  items: [
    { content: "Lái xe thực chiến Mr Năm", isBold: true },
    { content: "Hotline/Zalo:", highlightText: "0917 329 245", isBold: true },
    { content: "Đ/c: 357 Nguyễn Oanh, Phường Gò Vấp, Tp HCM" },
    { content: "Đây cũng là địa điểm đăng ký học lý thuyết" },
    { content: "Nhận hồ sơ tại nhà hoặc nhận hồ sơ Online" },
  ],
};

const locationsLeft = [
  "Siêu thị Lotte Cộng Hòa, Tân Bình",
  "Siêu thị Pandora Cộng Hòa, Tân Bình",
  "Công viên Hoàng Văn Thụ, Tân Bình",
  "Công viên Gia Định, Gò Vấp",
  "Siêu thị Lotte Nguyễn Văn Lượng, Gò Vấp",
  "Siêu thị Emart Phan Văn Trị, Gò Vấp",
];

const locationsRight = [
  "Ngã 5 chuồng chó, Gò Vấp",
  "Siêu thị Vincom Phan Văn Trị, Gò Vấp",
  "Siêu thị Giga Mall Phạm Văn Đồng, Thủ Đức",
  "Chợ Bà Chiểu, Bình Thạnh",
  "Công viên Lê Văn Tám, Quận 1",
  "Siêu thị Metro An Phú, Quận 2",
];

const step1 = {
  title: "HỌC LÝ THUYẾT GỒM 3 BUỔI",
  items: [
    "Khái niệm và quy tắc giao thông đường bộ",
    "Nghiệp vụ vận tải",
    "Văn hóa và đạo đức lái xe",
    "Kỹ thuật lái xe, cấu tạo và sửa chữa xe",
    "Biển báo giao thông đường bộ",
    "Giải các thế sa hình và kỹ năng xử lý tình huống",
  ],
};

const step2 = {
  title: "THỰC HÀNH LÁI XE CƠ BẢN",
  items: [
    "Hướng dẫn cách điều chỉnh ghế, tư thế ngồi, gương.",
    "Chỉ các nút điều khiển cơ bản trên xe",
    "Hướng dẫn lái xe cơ bản trong sân",
    "Kỹ năng lái xe đường trường nơi có ít xe qua lại",
    "Kỹ năng lái xe đường trường nơi có xe cộ đông đúc",
    "Cách quan sát trước và sau xe khi lưu thông trên đường",
  ],
};

const step3 = {
  title: "HỌC SA HÌNH – ĐƯỜNG TRƯỜNG",
  items: [
    "Nâng cao kỹ năng lái xe đường trường",
    "Hướng dẫn vượt qua 11 bài sa hình",
    "Mẹo hoàn thành 11 bài sa hình đạt điểm cao",
    "Tập xe cảm biến (Nếu học viên đăng ký)",
  ],
};

const step4 = {
  title: "KẾT THÚC KHOÁ",
  items: [
    "Tốt nghiệp kết thúc khóa nhận chứng chỉ nghề.",
    "Sau ngày tốt nghiệp 2-4 tuần sẽ sát hạch GPLX B2",
    "Sát hạch GPLX gồm 4 bài: Lý thuyết – Mô phỏng – Sa hình – Đường trường",
    "Đậu sát hạch 21 ngày sau nhận bằng lái xe và hồ sơ gốc.",
  ],
};

export default function Bmanual() {
  return (
    <main>
      <div className="w-[820px] h-[462px] mt-[25px] mx-auto">
        <CourseCard data={BCourse} />
      </div>

      <div className="w-full h-[676px] mt-[30px]">
        <div className="w-[1230px] h-full mx-auto grid grid-cols-2 gap-10 p-4">
          <BenefitLayout
            title="TẠI SAO NÊN ĐĂNG KÝ HỌC LÁI XE Ô TÔ B(Số cơ Khí) TẠI KHÔI VIỆT"
            benefits={benefitslist}
            note={drivingNote}
          />
          <div className=" w-[550px] h-[650px] mt-25">
            <div className="w-[550px] h-[650px] my-auto">
              <div className="w-full h-full bg-[#D32F2F] rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                {/* Hiệu ứng bóng mờ trang trí */}
                <div className="absolute top-[-10%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-32 h-32 bg-black/5 rounded-full blur-2xl"></div>

                <div className="relative z-10 text-center">
                  <h3 className="text-white text-3xl font-bold mb-2">
                    Đăng ký tư vấn nhanh
                  </h3>
                  <p className="text-white/80 text-base mb-10 font-light">
                    Nhân viên sẽ liên hệ trong 15 phút
                  </p>

                  <form className="space-y-5 text-left">
                    {/* Box Họ và tên */}
                    <div>
                      <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 bg-white text-lg transition-all shadow-inner"
                      />
                    </div>

                    {/* Box Số điện thoại */}
                    <div>
                      <input
                        type="tel"
                        placeholder="Số điện thoại"
                        className="w-full px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-yellow-400 outline-none text-slate-900 bg-white text-lg transition-all shadow-inner"
                      />
                    </div>

                    {/* Nội dung cố định (giữ nguyên logic bài trước) */}
                    <div>
                      <div className="w-full px-6 py-4 rounded-xl border-none bg-white/90 text-slate-500 text-lg font-medium shadow-inner cursor-not-allowed">
                        Bằng LÁI XE Ô TÔ B(SỐ CƠ KHÍ)
                      </div>
                    </div>

                    {/* NavButton Component - Logic dest luôn là homepage như yêu cầu trước */}
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
      </div>

      <div className="relative w-full h-242.75 mx-auto overflow-hidden mt-30">
        <img
          src="images/truong-lai-khoi-viet.jpg"
          className="absolute inset-0 w-full h-full object-cover brightness-40 z-0"
          alt="Background"
        />
        {/* Price/Payment */}
        <div className="relative z-10 w-307.5 h-242.75 mx-auto ">
          <div className="w-307.5 h-50">
            <CourseHeader data={headerData} />
          </div>
          <div className="flex flex-row items-start justify-center gap-10 w-full p-8">
            <div className="w-153.75 h-139.75  backdrop-blur-sm">
              {/* Nội dung bên trái */}
              <PriceDetailCard data={leftData} />
            </div>
            <div className="w-153.75 h-147.25  backdrop-blur-sm">
              {/* Nội dung bên phải */}
              <PaymentMethodCard data={rightData} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[559px]">
        <div className="w-full h-36.75 text-3xl font-bold text-center text-red-600 flex items-center justify-center">
          HỒ SƠ VÀ ĐỊA ĐIỂM ĐĂNG KÝ HỌC LÁI XE B TỰ ĐỘNG
        </div>
        <div className="flex justify-between px-100">
          <div className="w-106 h-93.75">
            <RegistrationInfoCard data={dossierData} />
          </div>
          <div className="w-106 h-93.75 ">
            <RegistrationInfoCard data={locationData} />
          </div>
        </div>
      </div>

      <div className="w-full h-[561px]">
        <div className="w-full h-46.75 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-red-600 text-[34px] font-bold uppercase mb-4 tracking-tight">
            Địa điểm đón và học thực hành lái xe B tự động
          </h2>
          <p className="text-gray-700 text-[16px] max-w-[900px] leading-relaxed italic">
            Học viên có thể lựa chọn địa điểm đón và học thực hành gần mình nhất
            để thuận tiện cho việc di chuyển và học thực hành lái xe ô tô B (số
            tự động).
          </p>
        </div>
        <div className="flex justify-between px-80">
          <div className="w-150 h-84.25 ">
            <LocationList items={locationsLeft} />
          </div>
          <div className="w-150 h-84.25 ">
            <LocationList items={locationsRight} />
          </div>
        </div>
      </div>

      <div className="w-full h-270 bg-gray-200">
        <div className="w-307.5 h-243.75 mx-auto">
          <div className="w-full h-36.75 flex items-center justify-center">
            <h2 className="text-[#cc1d1d] text-3xl font-bold uppercase tracking-tight border-b-2 border-red-600 pb-2">
              QUY TRÌNH ĐÀO TẠO HỌC LÁI XE Ô TÔ B TỰ ĐỘNG TẠI KHÔI VIỆT
            </h2>
          </div>
          <div className="flex justify-between px-0">
            <div className="w-150 h-105.75 ">
              <TrainingStepCard data={step1} />
            </div>
            <div className="w-150 h-105.75 ">
              <TrainingStepCard data={step2} />
            </div>
          </div>
          <div className="flex justify-between px-0 mt-5">
            <div className="w-150 h-105.75 ">
              <TrainingStepCard data={step3} />
            </div>
            <div className="w-150 h-105.75 ">
              <TrainingStepCard data={step4} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1230px] h-[775px] mx-auto font-sans mt-5">
        <div className="w-full h-[140px] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-[#cc1d1d] text-[28px] font-bold uppercase mb-4">
            HÌNH ẢNH SÂN TẬP SA HÌNH Lái xe thực chiến Mr Năm
          </h2>
          <p className="text-gray-800 text-[16px] max-w-[1000px] leading-relaxed">
            Dưới đây là một số hình ảnh về sân tập sa hình của{" "}
            <span className="text-red-600 font-bold underline">
              Lái xe thực chiến Mr Năm
            </span>
            . Sân tập đạt chuẩn theo yêu cầu của sở Xây dựng TPHCM.
          </p>
        </div>
        <div className="w-[790px] h-[593px] mx-auto overflow-hidden shadow-lg border border-gray-200">
          <img
            src="/images/san-truong-sa-hinh.jpg"
            alt="Sân tập sa hình Khôi Việt"
            className="w-full h-full object-cover shadow-inner transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="w-full h-auto">
        <FAQAccordion />
      </div>
    </main>
  );
}
