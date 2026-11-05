// src/components/EventsPreview.tsx

import Link from "next/link";

import Section from "@/components/ui/section";
import EventCard from "@/components/cards/EventCard";

import { featuredEvents } from "@/data/events";

export default function EventsPreview() {
  return (
    <Section id="events" className="bg-[#F5F0E6]">
      <header className="mb-12 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#987443]">
          Mark your calendar
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-[#183A2D] md:text-5xl">
          What&apos;s happening
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#4A3426]/80 md:text-lg">
          Live music, specials, and good times around the neighborhood.
        </p>
      </header>

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
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#183A2D]/25 bg-white/70 px-6 py-3 font-semibold text-[#183A2D] shadow-sm transition hover:border-[#183A2D] hover:bg-[#183A2D] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183A2D]"
        >
          See all events <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Section>
  );
}