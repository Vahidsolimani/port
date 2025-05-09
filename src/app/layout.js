import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Heder from "./componenets/haeder";
import Footer from "./componenets/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " portfolio ",
  description: "portfolio me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#010c15]">
      <body
        className='w-full p-5 '>
        <div className="container  mx-auto">
        <Heder/>
        <main className=" min-h-96">

        {children}

        </main>
       <Footer/>
        </div>
      </body>
    </html>
  );
}
