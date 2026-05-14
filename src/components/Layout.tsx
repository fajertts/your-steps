import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#343434] text-white">
      <Navbar />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
