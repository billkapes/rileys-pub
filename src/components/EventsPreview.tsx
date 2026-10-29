// src/components/EventsPreview.tsx

import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import EventCard from "@/components/cards/EventCard";

import { events } from "@/data/events";

export default function EventsPreview() {
  return (
    <Section id="events">
      <SectionHeader
        title="Upcoming Events"
        subtitle="Live music, specials, and community gatherings."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {events.map((event) => (
          <EventCard
            key={event.title}
            event={event}
          />
        ))}
      </div>
    </Section>
  );
}