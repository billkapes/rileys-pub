// src/components/MenuPreview.tsx

import Link from "next/link";
import { ArrowRight, Beer, Pizza } from "lucide-react";

import Section from "@/components/ui/section";
import PubCard from "@/components/cards/PubCard";

export default function MenuPreview() {
  const menus = [
    {
      href: "/menu/drinks",
      title: "Drinks",
      description: "Drafts, bottled favorites, spirits, wine, and more.",
      action: "Explore the drink list",
      Icon: Beer,
    },
    {
      href: "/menu/pizza",
      title: "St. Louis-Style Pizza",
      description: "Choose your size, then make it your own with toppings.",
      action: "Explore the pizza menu",
      Icon: Pizza,
    },
  ];

  return (
    <Section
      id="menu"
      className="bg-[#183A2D] text-[#FFF9ED]"
    >
      <header className="mb-12 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D6C08D]">
          Made for good times
        </p>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Take a look at our menus
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#FFF9ED]/80 md:text-lg">
          Find your next favorite pour or build a pizza to share.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {menus.map(({ href, title, description, action, Icon }) => (
          <PubCard
            key={href}
            className="h-full border-[#B08D57]/60 bg-[#FFF9ED] shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#B08D57] hover:shadow-2xl"
          >
            <Link
              href={href}
              className="group flex min-h-48 flex-col rounded-sm text-[#183A2D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183A2D]"
            >
              <span className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#183A2D] text-[#E2C37E] transition-transform duration-300 group-hover:scale-105">
                <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
              </span>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                {title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[#4A3426]">
                {description}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 font-bold text-[#183A2D]">
                {action}
                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </PubCard>
        ))}
      </div>
    </Section>
  );
}