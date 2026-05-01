export default function Contact() {
  return (
    <main className="w-full bg-white font-sans">
      {/* Banner Tiêu đề Gray */}
      <div className="w-full bg-[#f5f5f5] py-10 text-center">
        <h1 className="text-4xl font-bold text-black mb-2">Liên hệ</h1>
        <div className="text-gray-400 text-sm">
          <a href="/">
            <span>Home / </span>
          </a>
          <span>Liên hệ</span>
        </div>
      </div>

      {/* Box Thông tin liên hệ */}
      <div className="max-w-[800px] mx-auto mt-16 mb-20 px-4">
        <div className="border border-blue-700">
          {/* Tên trường */}
          <div className="py-3 border-b border-blue-700 text-center">
            <h2 className="text-xl font-bold text-blue-700 uppercase">
              Lái xe thực chiến Mr Năm
            </h2>
          </div>

          {/* List thông tin */}
          <div className="flex flex-col">
            {/* Hotline */}
            <div className="flex items-center px-4 py-4 border-b border-gray-100">
              <span className="text-red-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </span>
              <p className="text-red-600 font-bold text-lg">
                Hotline: 0917 329 245 (Gặp Thầy Năm)
              </p>
            </div>

            {/* Địa chỉ */}
            <div className="flex items-center px-4 py-4 border-b border-gray-100">
              <span className="text-red-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </span>
              <p className="text-gray-800">
                Địa chỉ:{" "}
                <span className="font-bold">
                  357 Nguyễn Oanh, Phường 17, Quận Gò Vấp, Tp. HCM
                </span>
              </p>
            </div>

            {/* Facebook */}
            <div className="flex items-center px-4 py-4 border-b border-gray-100">
              <span className="text-red-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </span>
              <p className="text-gray-800">
                Facebook:{" "}
                <a
                  href="https://fb.com/truonglaikhoiviet"
                  className="text-red-600 underline"
                >
                  Fb.com/truonglaikhoiviet
                </a>
              </p>
            </div>

            {/* Web */}
            <div className="flex items-center px-4 py-4">
              <span className="text-red-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </span>
              <p className="text-gray-800">
                Web:{" "}
                <a
                  href="https://truonglaikhoiviet.edu.vn"
                  className="text-red-600 underline"
                >
                  truonglaikhoiviet.edu.vn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
