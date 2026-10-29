import { galleryImages } from "@/data/gallery";
import Section from "./ui/section";
import SectionHeader from "./ui/section-header";
import GalleryCard from "./cards/GalleryCard";

export default function GalleryPreview() {
  return (
<Section
  id="gallery"
  className="bg-muted"
>
  <SectionHeader
    title="Gallery"
    subtitle="A look inside Riley's Pub"
  />

  <div className="grid gap-4 md:grid-cols-3">
    {galleryImages.map((image) => (
      <GalleryCard
        key={image.id}
        src={image.src}
        alt={image.alt}
      />
    ))}
  </div>
</Section>
  );
}