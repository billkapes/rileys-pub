// components/ui/cta-button.tsx

import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function CTAButton({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="
        rounded-xl
        bg-accent
        px-6
        py-3
        font-semibold
        text-white
        transition
        hover:opacity-90
      "
    >
      {children}
    </Link>
  );
}