// src/components/EventsPreview.tsx

export default function EventsPreview() {
  return (
    <section
      id="events"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Upcoming Events
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <article className="border rounded-xl p-6">
          <h3 className="text-xl font-bold">
            Irish Music Night
          </h3>
          <p>Wednesdays • 7 PM</p>
        </article>

        <article className="border rounded-xl p-6">
          <h3 className="text-xl font-bold">
            Trivia Night
          </h3>
          <p>Coming Soon</p>
        </article>

        <article className="border rounded-xl p-6">
          <h3 className="text-xl font-bold">
            Game Day Specials
          </h3>
          <p>Major Sporting Events</p>
        </article>
      </div>
    </section>
  );
}