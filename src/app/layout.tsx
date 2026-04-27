import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";

export const metadata: Metadata = {
  title: "化學物質科普知識園區 | 環境部化學物質管理署",
  description: "適合國小高年級的化學科普互動學習平台，認識生活中的化學、危險化學物質辨識、環境保護與有趣的化學實驗！",
  keywords: ["化學", "科普", "國小", "環境部", "化學物質管理署", "闖關遊戲", "食品化學", "環境保護"],
  authors: [{ name: "環境部化學物質管理署" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body>
        <Header />
        <main className="page-content">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
