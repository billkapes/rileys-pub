// src/components/MenuPreview.tsx

import Link from "next/link";

import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PubCard from "@/components/cards/PubCard";

export default function MenuPreview() {
  return (
    <Section
      id="menu"
      className="bg-primary text-primary-foreground"
    >
      <SectionHeader
        title="Our Menus"
        subtitle="Choose from our drinks or St. Louis-style pizza."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <PubCard className="h-full">
          <Link
            href="/menu/drinks"
            className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <h3 className="text-2xl font-semibold">Drinks</h3>
            <p className="mt-3 text-muted-foreground">
              Browse beers, spirits, wine, and cocktails.
            </p>
            <span className="mt-6 inline-block font-semibold text-primary group-hover:text-accent">
              View drink list →
            </span>
          </Link>
        </PubCard>

        <PubCard className="h-full">
          <Link
            href="/menu/pizza"
            className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <h3 className="text-2xl font-semibold">Pizzas</h3>
            <p className="mt-3 text-muted-foreground">
              See our pizza sizes and topping options.
            </p>
            <span className="mt-6 inline-block font-semibold text-primary group-hover:text-accent">
              View pizza menu →
            </span>
          </Link>
        </PubCard>
      </div>
    </Section>
  );
}