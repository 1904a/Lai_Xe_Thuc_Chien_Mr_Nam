export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl text-gray-800 leading-relaxed">
      {/* Tiêu đề chính */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center uppercase">
        Liên Hệ
      </h1>

      {/* Box Thông tin liên hệ */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-200 pb-3 uppercase text-center md:text-left">
          Trường Dạy Lái Xe Ô Tô Khôi Việt
        </h2>

        <ul className="space-y-5 text-lg">
          {/* Hotline */}
          <li className="flex flex-col md:flex-row md:items-center">
            <span className="font-semibold w-32 text-gray-700 mb-1 md:mb-0">
              Hotline:
            </span>
            <div className="flex-1">
              <a
                href="tel:0935986148"
                className="text-red-600 font-bold text-xl hover:underline"
              >
                0917 329 245
              </a>
              <span className="ml-2 text-gray-600 italic">(Gặp Thầy Năm)</span>
            </div>
          </li>

          {/* Địa chỉ */}
          <li className="flex flex-col md:flex-row md:items-start">
            <span className="font-semibold w-32 text-gray-700 mb-1 md:mb-0">
              Địa chỉ:
            </span>
            <span className="flex-1 text-gray-800">
              357 Nguyễn Oanh, Phường 17, Quận Gò Vấp, Tp. HCM
            </span>
          </li>

          {/* Facebook */}
          <li className="flex flex-col md:flex-row md:items-center">
            <span className="font-semibold w-32 text-gray-700 mb-1 md:mb-0">
              Facebook:
            </span>
            <a
              href="https://fb.com/truonglaikhoiviet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              Fb.com/truonglaikhoiviet
            </a>
          </li>

          {/* Website */}
          <li className="flex flex-col md:flex-row md:items-center">
            <span className="font-semibold w-32 text-gray-700 mb-1 md:mb-0">
              Website:
            </span>
            <a
              href="https://truonglaikhoiviet.edu.vn"
              className="flex-1 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              truonglaikhoiviet.edu.vn
            </a>
          </li>
        </ul>
      </div>

    </main>
  );
}
