import Link from "next/link";
import Image from "next/image";
import PubCard from "@/components/cards/PubCard";
import Container from "@/components/ui/container";
import { pizzaSizes, pizzaToppings } from "@/data/menu";

export default function PizzaMenuPage() {
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
            Pizza
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            St. Louis-style pizza, made to share.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#B08D57]/50 bg-[#29190F] shadow-lg">
            <Image
              src="/images/pizza-placeholder-classic.svg"
              alt="Illustrated placeholder for a St. Louis-style pepperoni pizza."
              fill
              sizes="(max-width: 768px) 50vw, 22vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8 text-xs font-semibold text-white sm:px-4 sm:pb-4 sm:text-sm">
              Classic
              <span className="ml-1 font-normal text-white/70"> · sample art</span>
            </figcaption>
          </figure>
          <figure className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-[#B08D57]/50 bg-[#172C24] shadow-lg sm:mt-8">
            <Image
              src="/images/pizza-placeholder-garden.svg"
              alt="Illustrated placeholder for a St. Louis-style vegetable pizza."
              fill
              sizes="(max-width: 768px) 50vw, 22vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8 text-xs font-semibold text-white sm:px-4 sm:pb-4 sm:text-sm">
              Garden
              <span className="ml-1 font-normal text-white/70"> · sample art</span>
            </figcaption>
          </figure>
        </div>
      </header>

      <section aria-labelledby="pizza-sizes">
        <h2 id="pizza-sizes" className="mb-5 text-2xl font-semibold">
          Sizes
        </h2>
        {/* <p className="mb-5 text-sm text-muted-foreground">
          Sample prices for now; confirm current pricing with us.
        </p> */}
        <div className="grid gap-5 sm:grid-cols-3">
          {pizzaSizes.map(({ size, price, additionalToppingPrice }) => (
            <PubCard key={size}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{size}</h3>
                  <span className="font-bold text-accent">{price}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Extra topping: {additionalToppingPrice}
                </p>
              </div>
            </PubCard>
          ))}
        </div>
      </section>

      <section aria-labelledby="pizza-toppings" className="mt-12">
        <h2 id="pizza-toppings" className="mb-2 text-2xl font-semibold">
          Toppings
        </h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Extra-topping prices vary by pizza size. <b>Mozzarella
          cheese is also available.</b>
        </p>
        <PubCard>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pizzaToppings.map((topping) => (
              <li key={topping} className="rounded-lg bg-muted px-4 py-3">
                {topping}
              </li>
            ))}
          </ul>
        </PubCard>
      </section>
    </Container>
  );
}
