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
