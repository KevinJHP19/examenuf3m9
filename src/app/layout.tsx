import type { Metadata } from "next";
import Header from "../mycomponent/Header";
import "./globals.css";
import { Inter } from 'next/font/google'
import Footer from "../mycomponent/Footer";

const inter = Inter(
  { subsets: ['latin'] 

  })
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased bg-[#09090B] text-white`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-black-900">
          <Header />
        </header>
        <main>{children}
          </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
