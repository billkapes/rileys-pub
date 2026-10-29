// src/components/Hero.tsx

import Link from "next/link";
import CTAButton from "./ui/cta-button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-16 bg-[#183A2D]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero2.jpg')",
        }}
      />

      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-sm text-[#D6C08D] mb-4">
          St. Louis • Missouri
        </p>

        <h1 className="text-6xl md:text-8xl font-bold" aria-label="Riley's Pub">
          Riley<span aria-hidden="true" className="relative -top-[0.5em] text-[0.55em] text-[#7BC67B]">☘</span>s Pub
        </h1>

        <p className="mt-6 text-lg md:text-2xl">
          Pizza • Pints • Live Music
        </p>

        <CTAButton href="#menu">
          View Menu
        </CTAButton>

        <CTAButton href="#visit">
          Visit Us
        </CTAButton>
      </div>
    </section>
  );
}