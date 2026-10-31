// src/types/index.ts

export interface EventItem {
  title: string;
  date: string;
  description: string;
  featured?: boolean;
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