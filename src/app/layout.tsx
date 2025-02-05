import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const openSans =Open_Sans({
  subsets:["cyrillic-ext"],
   weight:["300", "400", "500", "600","700","800"],
   style:["normal"],
   variable:"--open-sans"
})

export const metadata: Metadata = {
  title: "Existense",
  description: "Ai companion for your kids study",
 icons:{
  icon:"/favicon-32x32.png"
 }
};



{/*nav links */}

const navLinks = ["Products", "Company"]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} overflow-x-hidden font-sans bg-[#F8F8F8]`}
      >

        <Navbar navLinks={navLinks}/>
        {children}
      </body>
    </html>
  );
}
