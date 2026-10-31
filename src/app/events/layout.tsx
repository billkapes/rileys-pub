import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EventsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F5F0E6] pt-16 text-[#183A2D]">
        {children}
      </main>
      <Footer />
    </>
  );
}
