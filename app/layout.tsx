import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        {/**<nav className="sticky top-0 bg-white shadow-md z-50 py-4 px-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="hidden md:flex space-x-6 font-bold text-gray-700">
              <a href="#" className="hover:text-red-600">TRANG CHỦ</a>
              <a href="#" className="hover:text-red-600">KHÓA HỌC</a>
              <a href="#" className="hover:text-red-600">SÂN TẬP</a>
              <a href="#" className="hover:text-red-600">LIÊN HỆ</a>
            </div>
            <div className="text-red-600 font-bold">Hotline: 1900 xxxx</div>
          </div>
        </nav>*/}
        
        {children}
        
        {/**<footer className="bg-gray-900 text-white py-10 mt-10">
          <div className="max-w-6xl mx-auto text-center">
            <p>© 2024 Trung Tâm Lái Xe - Uy Tín & Chất Lượng</p>
          </div>
        </footer>*/}
      </body>
    </html>
  );
}