// src/components/cards/MenuItemCard.tsx

import { MenuItem } from "@/types";
import PubCard from "./PubCard";

interface Props {
  item: MenuItem;
}

export default function MenuItemCard({
  item,
}: Props) {
  return (
    <PubCard>
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">
            {item.name}
          </h3>

          <span className="font-bold text-accent">
            {item.price}
          </span>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {item.description}
        </p>
      </div>
    </PubCard>
  );
}