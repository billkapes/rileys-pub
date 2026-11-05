// src/components/Hero.tsx

import CTAButton from "./ui/cta-button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[min(52rem,100svh)] items-center justify-center overflow-hidden bg-[#183A2D] px-4 pb-16 pt-24 text-center sm:px-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10, 25, 18, 0.72), rgba(10, 25, 18, 0.28), rgba(10, 25, 18, 0.58)), linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.34)), url('/images/hero2.webp')",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-white">
        <p className="mb-6 inline-flex rounded-full border border-[#D6C08D]/50 bg-black/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#E8D19A] backdrop-blur-sm sm:text-sm">
          St. Louis • Missouri
        </p>

        <h1 className="text-6xl font-bold tracking-tight drop-shadow-lg sm:text-7xl md:text-8xl" aria-label="Riley's Pub">
          Riley<span aria-hidden="true" className="relative -top-[0.5em] text-[0.55em] text-[#7BC67B]">☘</span>s Pub
        </h1>

        <p className="mt-6 text-lg font-medium tracking-wide text-white/95 sm:text-xl md:text-2xl">
          Pizza • Pints • Live Music
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CTAButton href="#menu" variant="accent">
            View Menu
          </CTAButton>

          <CTAButton href="#visit" variant="outline">
            Visit Us
          </CTAButton>
        </div>
      </div>
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-t-full bg-[#B08D57]" />
    </section>
  );
}