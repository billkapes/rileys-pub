import type { DrinkMenuItem } from "@/types";

export const drinkMenuItems: DrinkMenuItem[] = [
  {
    name: "Carlsberg",
    category: "Drafts",
    price: "$6",
    abv: 5.0,
  },
  {
    name: "Yuengling",
    category: "Drafts",
    price: "$6",
    abv: 4.2,
  },
  {
    name: "Citropolis IPA",
    category: "Drafts",
    price: "$6", 
    abv: 6.5,
  },
  {
    name: "Guinness",
    category: "Drafts",
    price: "$6", 
    abv: 4.2,
  },
  {
    name: "Harp",
    category: "Drafts",
    price: "$6", 
    abv: 4.5,
  },
  {
    name: "Smithwick's",
    category: "Drafts",
    price: "$6",
    abv: 4.8,
  },
  {
    name: "STL IPA",
    category: "Drafts",
    price: "$6",
    abv: 6.0,
  },
  // Bottled Beers ------------
  {
    name: "Budweiser",
    category: "Beers",
    price: "$4",
  },
  {
    name: "Bud Light",
    category: "Beers",
    price: "$3",
  },
  {
    name: "Bud Select",
    category: "Beers",
    price: "$3",
  },
  {
    name: "Blue Moon",
    category: "Beers",
    price: "$4",
  },
  {
    name: "Stag",
    category: "Beers",
    price: "$3",
  },
  {
    name: "Pabst Blue Ribbon",
    category: "Beers",
    price: "$3",
  },
  {
    name: "Miller High Life",
    category: "Beers",
    price: "$3",
  },
  {
    name: "Busch",
    category: "Beers",
    price: "$3",
  },
  // Spirits ---------------
  {
    name: "Jameson",
    category: "Spirits",
    price: "$5",
  },
  {
    name: "Jim Beam",
    category: "Spirits",
    price: "$4",
  },
  {
    name: "Jack Daniel's",
    category: "Spirits",
    price: "$4",
  },
  {
    name: "Espolon",
    category: "Spirits",
    price: "$4",
  },
  // Wines ----------------
  {
    name: "Malbec",
    category: "Wines",
    price: "$6",
  },
  {
    name: "Chardonnay",
    category: "Wines",
    price: "$6",
  },
    {
    name: "Cabernet Sauvignon",
    category: "Wines",
    price: "$6",
  },
    {
    name: "Pinot Noir",
    category: "Wines",
    price: "$6",
  },
  // Specialty Drinks ---------------
  {
    name: "Espresso Martini",
    category: "Special",
    price: "$10",
  },
  {
    name: "Jello Shot",
    category: "Special",
    price: "$3",
  }
];

export const pizzaSizes = [
  { size: "10-inch", price: "$10.00", additionalToppingPrice: "$1.00" },
  { size: "12-inch", price: "$12.00", additionalToppingPrice: "$1.50" },
  { size: "14-inch", price: "$15.00", additionalToppingPrice: "$2.00" },
];

export const pizzaToppings = [
  "Pepperoni",
  "Sausage",
  "Bacon",
  "Onion",
  "Mushrooms",
  "Green peppers",
  "Jalapeños",
  "Black olives",
  "Banana peppers",
  "Pineapple",
  "Canadian bacon",
  "Garlic",
];