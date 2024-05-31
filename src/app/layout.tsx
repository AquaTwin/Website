import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to-top";
import ScrollToTopBtn from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AquaTwin",
  description:
    "Empowering Kenya with satellite data & digital twin tech for real-time river basin management & environmental protection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollToTopBtn />
        {children}
      </body>
    </html>
  );
}
