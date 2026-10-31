import Link from "next/link";
import PubCard from "@/components/cards/PubCard";
import Container from "@/components/ui/container";
import {
  additionalToppingPrice,
  pizzaSizes,
  pizzaToppings,
} from "@/data/menu";

export default function PizzaMenuPage() {
  return (
    <Container className="py-16">
      <Link
        href="/#menu"
        className="mb-8 inline-block font-medium text-primary underline-offset-4 hover:underline"
      >
        ← Back to menus
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Pizza
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          St. Louis-style pizza, made to share.
        </p>
      </header>

      <section aria-labelledby="pizza-sizes">
        <h2 id="pizza-sizes" className="mb-5 text-2xl font-semibold">
          Sizes
        </h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Sample prices for now; confirm current pricing with us.
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          {pizzaSizes.map(({ size, price }) => (
            <PubCard key={size}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{size}</h3>
                <span className="font-bold text-accent">{price}</span>
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
          Additional toppings: {additionalToppingPrice} each (sample price).
          Mozzarella cheese is also available.
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
