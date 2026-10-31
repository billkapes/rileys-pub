// src/components/EventsPreview.tsx

import Link from "next/link";

import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import EventCard from "@/components/cards/EventCard";

import { featuredEvents } from "@/data/events";

export default function EventsPreview() {
  return (
    <Section id="events">
      <SectionHeader
        title="Events"
        subtitle="Live music, specials, and community gatherings."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {featuredEvents.map((event) => (
          <EventCard
            key={event.title}
            event={event}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/events"
          className="inline-flex rounded-xl border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          View all events
        </Link>
      </div>
    </Section>
  );
}