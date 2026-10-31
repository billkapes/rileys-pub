// src/components/ui/section-header.tsx

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`
        mb-12
        ${centered ? "text-center" : "text-left"}
      `}
    >
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 max-w-2xl ${centered ? "mx-auto" : ""} text-muted-foreground`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}