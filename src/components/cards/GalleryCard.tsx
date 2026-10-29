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
    <PubCard className="overflow-hidden p-0">
      <div className="relative h-64 w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>
    </PubCard>
  );
}