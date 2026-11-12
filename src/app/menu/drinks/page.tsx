import Link from "next/link";
import Image from "next/image";
import PubCard from "@/components/cards/PubCard";
import Container from "@/components/ui/container";
import { drinkMenuItems } from "@/data/menu";

export default function DrinksMenuPage() {
  return (
    <Container className="py-16">
      <Link
        href="/#menu"
        className="mb-8 inline-block font-medium text-primary underline-offset-4 hover:underline"
      >
        ← Back to menus
      </Link>

      <header className="mb-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)] md:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Drink List
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A sample of what you might find at the bar.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Sample items and prices for now; replace with the current drink list.
          </p>
        </div>
        <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#B08D57]/50 bg-[#10291F] shadow-lg">
          <Image
            src="/images/drink-placeholder-pint.svg"
            alt="Illustrated placeholder of a golden pint of beer."
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10 text-sm font-semibold text-white">
            A good pint
            <span className="ml-1 font-normal text-white/70"> · sample art</span>
          </figcaption>
        </figure>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {[...new Set(drinkMenuItems.map((item) => item.category))].map(
          (category) => (
            <PubCard key={category}>
              <section aria-labelledby={`drinks-${category.toLowerCase()}`}>
                <h2
                  id={`drinks-${category.toLowerCase()}`}
                  className="mb-2 border-b border-border pb-2 text-lg font-semibold"
                >
                  {category}
                </h2>
                <ul>
                  {drinkMenuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <li
                        key={item.name}
                        className="flex items-baseline justify-between gap-4 border-b border-border/60 py-2 last:border-b-0"
                      >
                        <span>
                          {item.name}
                          {item.abv !== undefined && (
                            <span className="ml-2 text-sm text-muted-foreground">
                              {item.abv}%
                            </span>
                          )}
                        </span>
                        <span className="shrink-0 font-medium">{item.price}</span>
                      </li>
                    ))}
                </ul>
              </section>
            </PubCard>
          ),
        )}
      </div>
    </Container>
  );
}
