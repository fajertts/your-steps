import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff] ">
      <Navbar />
      <main className="flex-grow w-full mx-auto ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
