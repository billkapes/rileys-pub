// src/components/EventsPreview.tsx

import { events } from "@/data/events";

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
        {events.map((event) => (
          <article
            key={event.title}
            className="border rounded-xl p-6"
          >
            <h3 className="text-xl font-bold">
              {event.title}
            </h3>

            <p className="mt-2 text-[#183A2D]">
              {event.date}
            </p>

            <p className="mt-3 text-gray-600">
              {event.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}