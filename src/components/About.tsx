// src/components/About.tsx

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Your Neighborhood Irish Pub
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Riley&apos;s Pub is a welcoming neighborhood gathering place
            featuring cold pints, pizza, live music, and a relaxed
            atmosphere inspired by traditional Irish pubs.
          </p>
        </div>

        <div className="h-80 rounded-2xl bg-[#4A3426]" />
      </div>
    </section>
  );
}