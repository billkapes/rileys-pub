import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuPreview from "@/components/MenuPreview";
import EventsPreview from "@/components/EventsPreview";
import GalleryPreview from "@/components/GalleryPreview";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5F0E6] text-[#183A2D]">
        <Hero />
        <About />
        <MenuPreview />
        <EventsPreview />
        <GalleryPreview />
        <VisitSection />
      </main>
      <Footer />

    </>
  );
}