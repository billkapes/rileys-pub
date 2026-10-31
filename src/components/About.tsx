// src/components/About.tsx

import Image from "next/image";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import { siteInfo } from "@/data/site";

export default function About() {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeader
            title="Your Neighborhood Irish Pub"
            centered={false}
          />

          <p className="text-lg leading-relaxed text-muted-foreground">
            {siteInfo.about}
          </p>
        </div>

        <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg md:h-[28rem]">
          <Image
            src="/images/rembrandt.jpg"
            alt="Warm interior of Riley's Pub, with its wood bar and chalkboard menus."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}