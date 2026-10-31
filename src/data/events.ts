// src/data/events.ts

import { EventItem } from "@/types";

export const events: EventItem[] = [
  {
    title: "Irish Music Night",
    date: "Wednesdays • 7 PM",
    description: "Traditional Irish music session.",
    featured: true,
  },

  {
    title: "Half Price Pizzas",
    date: "Mondays and Tuesdays • 5 PM - 10 PM",
    description: "Enjoy half price Large Pizzas on Mondays and Tuesdays. Dine-in only. Wait times may be longer than usual.",
    featured: true,
  },

  {
    title: "Music on the Patio",
    date: "Coming Soon",
    description: "Live music from local artists on our patio.",
  },
];

export const featuredEvents = events.filter((event) => event.featured);