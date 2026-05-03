// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/Widget";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Đào tạo lái xe khôi việt - Thầy Năm  - Đào Tạo Bằng Lái Xe Máy, Ô Tô",
  description: "Trung tâm đào tạo sát hạch lái xe uy tín các hạng A1, A2, B1, B2, C.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="vi" data-scroll-behavior="smooth" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {/* Header luôn cố định ở trên */}
        <Navbar />
        
        {/* Phần nội dung chính của trang web */}
        <main >
          {children}
        </main>

        <ContactWidget />
        {/* Footer ở cuối trang */}
        <Footer />
      </body>
    </html>
  );
}