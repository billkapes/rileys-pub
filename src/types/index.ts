// src/types/index.ts

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface EventItem {
  title: string;
  date: string;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface GalleryImage {
  src: string;
  id: number;
  alt: string;
  color?: string;
}