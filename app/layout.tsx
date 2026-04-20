import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NextGen University of Bangladesh",
  description: "Smart University Management System",
};

import { Navbar } from "@/components/ui/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`${raleway.className} min-h-full flex flex-col bg-bg-base text-text-main selection:bg-secondary/30`}>
        <Navbar />
        <div className="pt-[110px]">
          {children}
        </div>
      </body>
    </html>
  );
}
