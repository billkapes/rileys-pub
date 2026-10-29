// src/components/ui/section.tsx

import { ReactNode } from "react";
import Container from "./container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        py-20
        md:py-24
        ${className}
      `}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}