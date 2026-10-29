// src/components/cards/PubCard.tsx

import { ReactNode } from "react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface PubCardProps {
  children: ReactNode;
  className?: string;
}

export default function PubCard({
  children,
  className = "",
}: PubCardProps) {
  return (
    <Card
      className={`
        border-border
        bg-card
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${className}
      `}
    >
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
}