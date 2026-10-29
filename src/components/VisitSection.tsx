// src/components/VisitSection.tsx

import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

import { siteInfo } from "@/data/site";

export default function VisitSection() {
  return (
    <Section id="visit">
      <SectionHeader
        title="Visit Us"
        subtitle="Join us for pizza, pints, and live music."
      />

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Riley&apos;s Pub
          </h3>

          <p>
            3458 Arsenal Street
            <br />
            St. Louis, MO 63118
          </p>
          <p>
            <i>One block east of Grand and Arsenal</i>
          </p>
          <br />
          <p>
            Open
            <br />
            <span className="grid grid-cols-[9.5rem_1fr]">
              <span>Monday - Saturday:</span>
              <span>4:00 PM - 1:30 AM</span>
            </span>
            <span className="grid grid-cols-[9.5rem_1fr]">
              <span>Sunday:</span>
              <span>4:00 PM - 12:00 AM</span>
            </span>
          </p>
          <br />
          <p>
            Pizza
            <br />
            <span className="grid grid-cols-[9.5rem_1fr]">
              <span>Sunday - Thursday:</span>
              <span>5:00 PM - 10:00 PM</span>
            </span>
            <span className="grid grid-cols-[9.5rem_1fr]">
              <span>Friday - Saturday:</span>
              <span>5:00 PM - 11:00 PM</span>
            </span>
          </p>
        </div>

        <div className="rounded-2xl h-80 bg-gray-300" />
      </div>
    </Section>
  );
}
