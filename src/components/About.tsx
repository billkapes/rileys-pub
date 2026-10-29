// src/components/About.tsx

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

        <div className="h-80 rounded-2xl bg-secondary" />
      </div>
    </Section>
  );
}