// src/components/VisitSection.tsx

import Image from "next/image";
import { Clock3, MapPin, Phone, Pizza } from "lucide-react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import SocialLinks from "@/components/SocialLinks";
import { siteInfo } from "@/data/site";

export default function VisitSection() {
  return (
    <Section id="visit">
      <SectionHeader
        title="Visit Us"
        subtitle="Join us for pizza, pints, and live music."
      />

      <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
        <div className="rounded-2xl border border-[#B08D57]/40 bg-white p-6 shadow-lg sm:p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#987443]">
            Come on in
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-[#183A2D]">
            {siteInfo.name}
          </h3>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteInfo.address.street}, ${siteInfo.address.city}, ${siteInfo.address.state} ${siteInfo.address.zip}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-start gap-3 rounded-xl p-3 text-[#4A3426] transition-colors hover:bg-[#F5F0E6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183A2D]"
          >
            <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#987443]" size={20} />
            <span>
              <span className="block font-semibold text-[#183A2D]">
                {siteInfo.address.street}
              </span>
              <span>
                {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}
              </span>
              <span className="mt-1 block text-sm text-[#4A3426]/70">
                One block east of Grand and Arsenal · Get directions
              </span>
            </span>
          </a>
          <SocialLinks className="mt-6 text-[#183A2D]" />

          <a
            href={`tel:${siteInfo.contact.phone.replace(/[^\d+]/g, "")}`}
            className="mt-1 inline-flex min-h-11 items-center gap-3 rounded-xl px-3 font-semibold text-[#183A2D] transition-colors hover:bg-[#F5F0E6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183A2D]"
          >
            {/* <Phone aria-hidden="true" className="text-[#987443]" size={18} />
            {siteInfo.contact.phone} */}
          </a>

          <div className="my-6 border-t border-[#183A2D]/10" />

          <div className="flex items-center gap-2 text-[#183A2D]">
            <Clock3 aria-hidden="true" className="text-[#987443]" size={19} />
            <h4 className="font-bold">Open Hours</h4>
          </div>
          <dl className="mt-3 space-y-2 text-sm text-[#4A3426] sm:text-base">
            <div className="flex justify-between gap-3">
              <dt>Monday – Saturday</dt>
              <dd className="text-right font-medium">4:00 PM – 1:30 AM</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Sunday</dt>
              <dd className="text-right font-medium">4:00 PM – 12:00 AM</dd>
            </div>
          </dl>

          <div className="flex items-center mt-4 gap-2 text-[#183A2D]">
            <Pizza aria-hidden="true" className="text-[#987443]" size={19} />
            <h4 className="font-bold text-[#183A2D]">Pizza Hours</h4>
          </div>
          <dl className="mt-2 space-y-2 text-sm text-[#4A3426] sm:text-base">
            <div className="flex justify-between gap-3">
              <dt>Sunday – Thursday</dt>
              <dd className="text-right font-medium">5:00 PM – 10:00 PM</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Friday – Saturday</dt>
              <dd className="text-right font-medium">5:00 PM – 11:00 PM</dd>
            </div>
          </dl>

        </div>

        <div className="group relative min-h-80 overflow-hidden rounded-2xl border border-[#B08D57]/40 shadow-xl md:min-h-full">
          <Image
            src="/images/lanternvanillasky.webp"
            alt="Riley's Pub storefront and patio on Arsenal Street."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#10261D]/85 to-transparent px-6 pb-6 pt-16">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E8D19A]">
              Find your way to Riley&apos;s
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
