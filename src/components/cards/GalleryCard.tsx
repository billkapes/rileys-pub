// src/components/cards/GalleryCard.tsx

import Image from "next/image";
import PubCard from "./PubCard";

interface Props {
  src: string;
  alt: string;
}

export default function GalleryCard({
  src,
  alt,
}: Props) {
  return (
    <PubCard className="group overflow-hidden rounded-2xl border-white/80 p-0 shadow-md">
      <div className="relative h-64 w-full bg-[#183A2D] md:h-72">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>
    </PubCard>
  );
}