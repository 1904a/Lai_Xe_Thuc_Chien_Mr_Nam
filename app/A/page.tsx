import CourseCard from "@/components/CourseCard";
import BenefitLayout from "@/components/WhyChooseUs";
import CourseHeader from "@/components/CourseHeader";
import PriceDetailCard from "@/components/PriceDetailCard";
import RegistrationInfoCard from "@/components/RegistrationInfoCard";
import TrainingStepCard from "@/components/TrainingStepCard";
import NavButton from "@/components/NavButton";
const aCourse = {
  title: "THI BẰNG LÁI XE MÔ TÔ HẠNG A (XE TRÊN 125 CM³)",
  courseCode: "Đợt 3 - 2026",
  price: "2.000.000 VNĐ",
  startDate: "05/04/2026", // Ngày thi sát hạch đợt gần nhất
  endDate: "Không thời hạn",
  discount: "Giảm 100K khi đăng ký qua Hotline",
  limit: "Không giới hạn",
  deadline: "20/04/2026",
  hotline: "0917 329 245",
};

const benefitList = [
  {
    text: "Hạng A điều khiển được",
    highlight: "tất cả các loại xe 2 bánh",
    suffix: " (bao gồm cả xe hạng A1)",
  },
  {
    text: "Lệ phí trọn gói",
    highlight: "2.000.000 VNĐ",
    suffix: ", cam kết không phát sinh",
  },
  { text: "Thủ tục đăng ký", highlight: "đơn giản, nhanh chóng" },
  { text: "Hỗ trợ tài liệu", highlight: "mẹo học lý thuyết đậu 99%" },
  {
    text: "Được tập xe cảm biến",
    highlight: "trước giờ thi sát hạch",
  },
  {
    text: "Bằng lái thẻ PET",
    highlight: "có mã QR mẫu mới nhất",
  },
  { text: "Lịch thi tổ chức", highlight: "liên tục hàng tháng" },
  {
    text: "Thời gian nhận bằng",
    highlight: "sau 5-7 ngày làm việc",
  },
];

const headerData = {
  title: "HỌC PHÍ THI BẰNG LÁI XE MÔ TÔ HẠNG A TẠI TPHCM",
  subtitle: "ƯU ĐÃI GIẢM 100K – HỖ TRỢ TƯ VẤN 24/7",
  highlightNote: "THÔNG BÁO",
  note: "Từ ngày 01/01/2025, hạng A2 chính thức được chuyển đổi/gọi là hạng A dùng cho xe mô tô có dung tích xi lanh trên 125 cm3.",
};

const leftData = {
  headerTitle: "HỌC PHÍ TRỌN GÓI THI BẰNG A\n(DÀNH CHO XE PHÂN KHỐI LỚN)",
  price: "2.000.000 VNĐ",
  badgeText: "Giảm ngay 100K khi đăng ký nhóm",
  details: [
    "Phí hồ sơ đăng ký thi bằng lái hạng A",
    "Chi phí chụp hình tại văn phòng",
    "Lệ phí thi sát hạch của Sở GTVT",
    "<b>Miễn phí tài liệu 200 câu hỏi lý thuyết</b>",
    "Hỗ trợ mẹo học nhanh, thi là đậu",
    "Cấp bằng PET nhựa cứng mẫu mới",
  ],
};

const dossierData = {
  title: "HỒ SƠ ĐĂNG KÝ",
  items: [
    { content: "Căn cước công dân (CCCD) hoặc Passport bản gốc" },
    { content: "Ảnh thẻ 3x4 (Chụp miễn phí tại văn phòng trường)" },
    { content: "Giấy khám sức khỏe dành cho người lái xe" },
    { content: "Bản sao bằng lái xe ô tô (nếu có để miễn thi lý thuyết)" },
    { content: "Đơn đăng ký thi bằng lái (Nhận tại văn phòng)" },
  ],
};

const locationData = {
  title: "ĐỊA ĐIỂM ĐĂNG KÝ",
  items: [
    { content: "Lái xe thực chiến Mr Năm", isBold: true },
    { content: "Hotline/Zalo:", highlightText: "0917 329 245", isBold: true },
    { content: "Đ/c: 357 Nguyễn Oanh, Phường 17, Gò Vấp, Tp HCM" },
    { content: "Văn phòng làm việc xuyên suốt cả tuần" },
    { content: "Hỗ trợ nộp hồ sơ Online cho học viên ở xa" },
  ],
};

const step1 = {
  title: "BÀI THI LÝ THUYẾT (25 CÂU)",
  items: [
    "Số câu hỏi: 25 câu trắc nghiệm",
    "Thời gian làm bài: 19 phút",
    "Số câu đúng yêu cầu: 23/25 câu",
    "Lưu ý quan trọng: Không được sai câu điểm liệt",
    "Mẹo: Trường cung cấp mẹo học 200 câu nhanh chóng",
  ],
};

const step2 = {
  title: "BÀI THI THỰC HÀNH (80/100 ĐIỂM)",
  items: [
    "Thi trên xe mô tô phân khối lớn của trung tâm",
    "Bài 1: Đi vòng số 8 (Kích thước lớn hơn A1)",
    "Bài 2: Đi đường hẹp vạch thẳng",
    "Bài 3: Đi đường quanh co ziczac",
    "Bài 4: Đi đường gồ ghề",
  ],
};

export default function ACoursePage() {
  return (
    <main>
      {/* Header giới thiệu hạng bằng A */}
      <div className="w-[1230px] h-auto bg-white flex flex-col justify-center px-8 py-10 font-sans mx-auto mt-[70px] border-b">
        <h1 className="text-[#CC0000] text-4xl font-bold text-center mb-6 uppercase tracking-tight">
          Thi bằng lái xe mô tô hạng A (Xe trên 125 cm³)
        </h1>
        <div className="space-y-4 text-gray-800 leading-relaxed text-[15.5px]">
          <p>
            Theo thông tư mới nhất có hiệu lực từ 2025, bằng lái xe hạng A được
            cấp cho người điều khiển xe mô tô hai bánh có dung tích xi lanh từ
            125 cm³ trở lên. Đây là hạng bằng cao nhất dành cho xe máy, cho phép
            bạn điều khiển mọi loại xe 2 bánh tại Việt Nam.
          </p>
          <p>
            Tại{" "}
            <span className="font-bold text-red-600">Trường lái Khôi Việt</span>
            , chúng tôi tổ chức thi sát hạch hạng A với tỉ lệ đậu cực cao, thủ
            tục nhanh gọn và hỗ trợ xe tập cảm biến hiện đại cho học viên.
          </p>
          <p className="italic">
            Lưu ý: Học viên nên lên sân sớm 2 tiếng vào ngày thi để được hướng
            dẫn tập xe cảm biến thực tế, giúp tự tin hơn khi vào bài sát hạch
            chính thức.
          </p>
        </div>
      </div>

      {/* Course Card */}
      <div className="w-205 h-105.5 mx-auto mt-10">
        <CourseCard data={aCourse} />
      </div>

      {/* Benefits Section */}
      <div className="w-full h-auto py-10 mx-auto mt-7.5 bg-white">
        <div className="w-307.5 mx-auto grid grid-cols-2 gap-10 p-4">
          <BenefitLayout
            title="TẠI SAO NÊN THI BẰNG MÔ TÔ HẠNG A TẠI KHÔI VIỆT"
            benefits={benefitList}
            note={
              <>
                <strong>Ưu đãi:</strong> Đăng ký theo nhóm 5 người trở lên sẽ
                được trường hỗ trợ thu hồ sơ tận nhà miễn phí.
              </>
            }
          />
          <div className="w-[550px] h-[650px] mt-25">
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
                      BÀNG LÁI XE HẠNG A
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

      {/* Pricing and Schedule */}
      <div className="relative w-full h-auto py-20 mx-auto overflow-hidden">
        <img
          src="images/truong-lai-khoi-viet.jpg"
          className="absolute inset-0 w-full h-full object-cover brightness-40 z-0"
          alt="Background"
        />
        <div className="relative z-10 w-307.5 mx-auto">
          <CourseHeader data={headerData} />
          <div className="flex flex-row items-start justify-center gap-10 w-full p-8">
            <div className="w-153.75 h-auto backdrop-blur-sm">
              <PriceDetailCard data={leftData} />
            </div>
            <div className="w-153.75 h-auto flex flex-col justify-center items-center bg-white/90 p-8 rounded-lg shadow-xl border-t-4 border-red-600">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                LỊCH SÁT HẠCH DỰ KIẾN
              </h3>
              <div className="space-y-3 w-full">
                <div className="flex justify-between border-b pb-2">
                  <span>Đợt 2 (20/03/2026):</span>
                  <span className="text-orange-600 font-bold">🔥 SẮP CHỐT</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Đợt 3 (05/04/2026):</span>
                  <span className="text-green-600 font-bold">✅ ĐANG NHẬN</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm mb-2">
                  Liên hệ để giữ chỗ ngay:
                </p>
                <span className="text-2xl font-bold text-red-600">
                  0917 329 245
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Info */}
      <div className="w-full py-16 mx-auto bg-gray-200">
        <div className="w-full mb-10 text-3xl font-bold text-center text-red-600 uppercase">
          Hồ sơ và địa điểm đăng ký bằng A
        </div>
        <div className="flex justify-center gap-10 px-10">
          <div className="w-106">
            <RegistrationInfoCard data={dossierData} />
          </div>
          <div className="w-106">
            <RegistrationInfoCard data={locationData} />
          </div>
        </div>
      </div>

      {/* Exam Content */}
      <div className="w-full py-16 bg-white">
        <div className="w-307.5 mx-auto">
          <h2 className="text-[#cc1d1d] text-3xl font-bold uppercase text-center mb-12 border-b-2 border-red-600 pb-2 inline-block w-full">
            NỘI DUNG THI SÁT HẠCH BẰNG MÔ TÔ HẠNG A
          </h2>
          <div className="flex justify-between gap-10">
            <div className="w-1/2">
              <TrainingStepCard data={step1} />
            </div>
            <div className="w-1/2">
              <TrainingStepCard data={step2} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
