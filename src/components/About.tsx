// src/components/About.tsx

import Image from "next/image";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import { siteInfo } from "@/data/site";

export default function About() {
  return (
    <Section>
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="border-l-4 border-[#B08D57] pl-6 md:pl-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#987443]">
            A place to gather
          </p>
          <SectionHeader
            title="Your Neighborhood Irish Pub"
            centered={false}
          />

          <p className="max-w-xl text-lg leading-8 text-[#4A3426]">
            {siteInfo.about}
          </p>
        </div>

        <div className="group relative h-80 overflow-hidden rounded-2xl border border-[#B08D57]/40 shadow-xl md:h-[28rem]">
          <Image
            src="/images/rembrandt.webp"
            alt="Warm interior of Riley's Pub, with its wood bar and chalkboard menus."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#10261D]/25 to-transparent" />
        </div>
      </div>
    </Section>
  );
}