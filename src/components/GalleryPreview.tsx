// src/components/GalleryPreview.tsx

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
          <div className="h-64 bg-[#4A3426] rounded-xl" />
          <div className="h-64 bg-[#24503F] rounded-xl" />
          <div className="h-64 bg-[#B08D57] rounded-xl" />
        </div>
      </div>
    </section>
  );
}