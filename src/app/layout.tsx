import type { Metadata } from "next";
import "./globals.css";

import { Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nft Market",
  description: "Nft Market is a marketplace for NFTs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased bg-color-dark100`}>
        <header className="max-w-[1700px] mx-auto">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="my-20">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
