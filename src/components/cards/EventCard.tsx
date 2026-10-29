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
    <PubCard>
      <div className="flex items-center gap-2 text-accent">
        <CalendarDays size={18} />

        <span className="font-medium">
          {event.date}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold">
        {event.title}
      </h3>

      <p className="mt-3 text-muted-foreground">
        {event.description}
      </p>
    </PubCard>
  );
}