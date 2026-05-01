export default function RegisteredSuccessfully() {
  return (
    <main>
      <div className="w-full bg-[#f8f8f8] py-10 flex flex-col items-center justify-center border-b border-gray-200">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
          Đăng ký thành công
        </h1>
        {/* Breadcrumb Navigation */}
        <nav className="flex text-sm text-gray-400">
          <a href="/" className="hover:text-gray-600 transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Đăng ký thành công</span>
        </nav>
      </div>

      <div className="w-full h-[400px] bg-[#f7c35f] flex flex-col items-center justify-center text-center px-6 mt-20 mb-20">
        {/* Main Header */}
        <h2 className="text-[#a1331a] text-2xl md:text-3xl font-bold uppercase mb-4">
          Cảm ơn bạn đã đăng ký tư vấn học lái xe
        </h2>
        {/* Notification Body */}
        <div className="max-w-5xl text-black text-[20px] leading-relaxed">
          <p className="mb-4">
            Bạn đã đăng ký thành công, trung tâm sẽ gọi điện tư vấn sớm nhất cho
            bạn trong hôm nay. Nếu bạn cần tư vấn gấp có thể gọi điện trực tiếp
            hoặc kết bạn zalo:
            <span className="text-red-600 font-bold ml-1 whitespace-nowrap">
              Hotline – 0917 329 245 – Thầy Năm
            </span>
          </p>

          <p className="mb-4 text-sm mt-5">
            Cam kết những thông tin mà bạn đăng ký trên đây hoàn toàn bảo mật và
            không chia sẻ đến bất kỳ ai cũng như cho đơn vị trung gian bên thứ 3
            nào.
          </p>

          {/* Closing Tagline */}
          <p className="text-[#a1331a] font-bold text-lg uppercase mt-10">
            Xin cảm ơn!
          </p>
        </div>{" "}
      </div>
    </main>
  );
}
