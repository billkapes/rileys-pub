import Link from "next/link";
import Container from "@/components/ui/container";
import EventCard from "@/components/cards/EventCard";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <Container className="py-16">
      <Link
        href="/#events"
        className="mb-8 inline-block font-medium text-primary underline-offset-4 hover:underline"
      >
        ← Back to home
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Events at Riley&apos;s Pub
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Live music, specials, and community gatherings.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </Container>
  );
}
