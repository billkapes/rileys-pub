import { galleryImages } from "@/data/gallery";
import Section from "./ui/section";
import GalleryCard from "./cards/GalleryCard";

export default function GalleryPreview() {
  return (
    <Section id="gallery" className="bg-[#EEE8DC]">
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#987443]">
            A little look around
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-[#183A2D] md:text-5xl">
            Around the pub
          </h2>
        </div>
        <p className="max-w-md leading-relaxed text-[#4A3426]/80">
          From the bar to the chalkboard, a few details that make Riley&apos;s
          feel like home.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {galleryImages.map((image) => (
          <GalleryCard key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>
    </Section>
  );
}