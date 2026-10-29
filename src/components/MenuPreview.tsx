// src/components/MenuPreview.tsx

import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import MenuItemCard from "@/components/cards/MenuItemCard";

import { featuredMenuItems } from "@/data/menu";

export default function MenuPreview() {
  return (
    <Section
      id="menu"
      className="bg-primary text-primary-foreground"
    >
      <SectionHeader
        title="Pub Favorites"
        subtitle="Neighborhood favorites and classic pub offerings."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {featuredMenuItems.map((item) => (
          <MenuItemCard
            key={item.name}
            item={item}
          />
        ))}
      </div>
    </Section>
  );
}