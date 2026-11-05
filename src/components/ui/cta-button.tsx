// components/ui/cta-button.tsx

import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "accent" | "outline";
}

export default function CTAButton({
  href,
  children,
  variant = "accent",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 font-semibold shadow-lg transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D19A] ${
        variant === "accent"
          ? "bg-[#B08D57] text-white hover:bg-[#987443] hover:shadow-xl"
          : "border border-white/70 bg-black/15 text-white backdrop-blur-sm hover:bg-white hover:text-[#183A2D]"
      }`}
    >
      {children}
    </Link>
  );
}