import Image from "next/image";
import Section from "@/components/ui/section";
import PubCard from "@/components/cards/PubCard";
import { promotionPosters } from "@/data/promotions";

export default function PromotionsPreview() {
  return (
    <Section id="promotions" className="bg-[#183A2D] text-[#FFF9ED]">
      <header className="mb-12 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D6C08D]">
          Something to look forward to
        </p>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Promotions &amp; Specials
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#FFF9ED]/80 md:text-lg">
          Keep an eye out for new offers and pub favorites.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {promotionPosters.map((poster) => {
          const isSample = poster.id === "pint-and-shot";

          return (
            <PubCard key={poster.id} className="overflow-hidden border-[#B08D57]/50 bg-[#FFF9ED] p-0 shadow-xl">
              <figure>
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={poster.image}
                    alt={poster.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-[#183A2D]">
                  <span>{poster.title}</span>
                  {isSample && (
                    <span className="rounded-full bg-[#EEE8DC] px-3 py-1 text-xs uppercase tracking-wide text-[#76582F]">
                      Sample
                    </span>
                  )}
                </figcaption>
              </figure>
            </PubCard>
          );
        })}
      </div>
    </Section>
  );
}
