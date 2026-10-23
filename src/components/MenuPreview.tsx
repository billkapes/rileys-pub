// src/components/MenuPreview.tsx

export default function MenuPreview() {
  const items = [
    "Guinness",
    "Pepperoni Pizza",
    "Irish Whiskey",
  ];

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
          {items.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white/10 p-6"
            >
              <h3 className="text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}