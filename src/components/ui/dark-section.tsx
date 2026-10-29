// src/components/ui/dark-section.tsx

import Section from "./section";

interface Props {
  children: React.ReactNode;
  id?: string;
}

export default function DarkSection({
  children,
  id,
}: Props) {
  return (
    <Section
      id={id}
      className="
        bg-primary
        text-primary-foreground
      "
    >
      {children}
    </Section>
  );
}