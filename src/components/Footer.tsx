// src/components/Footer.tsx

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { siteInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#10291F] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <Link href="/" className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D6C08D]">
            <span className="block text-xl font-bold tracking-tight">{siteInfo.name}</span>
            <span className="mt-1 block text-sm text-[#D6C08D]">{siteInfo.tagline}</span>
          </Link>
          <p className="mt-4 text-sm text-white/70">
            {siteInfo.address.street}, {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-white/85">
            <Link href="/#menu" className="transition-colors hover:text-[#D6C08D]">Menus</Link>
            <Link href="/events" className="transition-colors hover:text-[#D6C08D]">Events</Link>
            <Link href="/#gallery" className="transition-colors hover:text-[#D6C08D]">Gallery</Link>
            <Link href="/#visit" className="transition-colors hover:text-[#D6C08D]">Visit</Link>
          </nav>
          <SocialLinks className="text-white/85" />
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/55">
        © {new Date().getFullYear()} {siteInfo.name}
      </div>
    </footer>
  );
}