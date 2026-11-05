// src/components/cards/EventCard.tsx

import { EventItem } from "@/types";
import { CalendarDays } from "lucide-react";

import PubCard from "./PubCard";

interface Props {
  event: EventItem;
}

export default function EventCard({
  event,
}: Props) {
  return (
    <PubCard className="h-full border-[#B08D57]/35 bg-white shadow-sm transition duration-300 hover:border-[#B08D57]/80 hover:shadow-lg">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F0E6] px-3 py-1.5 text-sm font-semibold text-[#76582F]">
        <CalendarDays size={16} aria-hidden="true" />

        <span>{event.date}</span>
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-tight text-[#183A2D] md:text-2xl">
        {event.title}
      </h3>

      <p className="mt-3 leading-relaxed text-[#4A3426]/85">
        {event.description}
      </p>
    </PubCard>
  );
}