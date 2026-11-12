export interface PromotionPoster {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export const promotionPosters: PromotionPoster[] = [
  {
    id: "pint-and-shot",
    title: "Pint and shot special",
    image: "/images/pint-and-shot-special.svg",
    alt: "Irish-pub-style sample poster pairing a draft pint with an Irish whiskey shot. Sample promotion, please drink responsibly.",
  },
];

export const dailyDraftSpecials = [
  { day: "Monday", draft: "Placeholder Lager" },
  { day: "Tuesday", draft: "Placeholder Pale Ale" },
  { day: "Wednesday", draft: "Placeholder Irish Red" },
  { day: "Thursday", draft: "Placeholder Pilsner" },
  { day: "Friday", draft: "Placeholder Amber Ale" },
  { day: "Saturday", draft: "Placeholder Stout" },
].map((special) => ({ ...special, price: "$4.50" }));
