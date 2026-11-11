import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "The Daily — A fresh perspective", template: "%s | The Daily" },
  description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="bg-[#FFFFFF] w-screen h-fit flex flex-col items-center">
        <div className="w-97.5 h-fit flex flex-col bg-[#FAF9F6] px-5 sm:w-3xl sm:px-8 lg:w-360 lg:px-32">
          {children}
          <div className="w-full h-px bg-[#E2E2DA] mt-16"></div>
          <footer className="w-75 h-33.25 flex items-center justify-between py-9 ">
            <div className="w-55 h-fit">
              <p className="w-39.5 h-11 font-bold text-3xl leading-[145%] text-[#22241F]">the daily ▧</p>
              <p className="w-44.25 h-4.25 font-normal text-xs leading-[145%] text-[#65675F]">A fresh perspective. Every day.</p>
            </div>
            <p className="w-20 h-4.25 font-normal text-xs leading-[145%] text-[#22241F]">Back to top ↑</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
