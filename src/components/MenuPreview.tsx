// src/components/MenuPreview.tsx

import { featuredMenuItems } from "@/data/menu";

export default function MenuPreview() {
  return (
    <section
      id="menu"
      className="bg-[#183A2D] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Favorites
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredMenuItems.map((item) => (
            <div
              key={item.name}
              className="rounded-xl bg-white/10 p-6"
            >
              <h3 className="text-2xl font-bold mb-2">
                {item.name}
              </h3>

              <p className="text-gray-300">
                {item.description}
              </p>

              <p className="mt-4 text-[#D6C08D] font-semibold">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}