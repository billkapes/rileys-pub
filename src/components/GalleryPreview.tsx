import { galleryImages } from "@/data/gallery";

export default function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="bg-[#EAE4DA] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="h-64 rounded-xl"
              style={{
                backgroundColor: image.color,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}