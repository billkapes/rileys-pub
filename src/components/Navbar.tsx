"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CalendarDays,
  Images,
  MapPin,
  Menu,
  UtensilsCrossed,
} from "lucide-react";

import Brand from "./Brand";
import SocialLinks from "./SocialLinks";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    label: "Menu",
    href: "/#menu",
    icon: UtensilsCrossed,
  },
  {
    label: "Events",
    href: "/events",
    icon: CalendarDays,
  },
  {
    label: "Gallery",
    href: "/#gallery",
    icon: Images,
  },
  {
    label: "Visit",
    href: "/#visit",
    icon: MapPin,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="border-b border-white/10 bg-primary/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/">
            <Brand />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    text-md
                    font-medium
                    text-primary-foreground/90
                    transition-colors
                    hover:text-accent
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <SocialLinks className="text-primary-foreground/90" />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger
                aria-label="Open navigation menu"
                className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-primary-foreground transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Menu size={22} />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[min(22rem,88vw)] border-l border-border bg-background p-0"
              >
                <div className="flex h-full flex-col">
                  <SheetHeader className="border-b border-border px-6 pb-5 pt-8">
                    <SheetTitle className="text-xl font-bold">
                      Riley&apos;s Pub
                    </SheetTitle>
                    <SheetDescription>
                      St. Louis neighborhood pub
                    </SheetDescription>
                  </SheetHeader>

                  <nav aria-label="Mobile navigation" className="px-4 py-5">
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Explore
                    </p>
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link) => {
                        const Icon = link.icon;

                        return (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex min-h-12 items-center gap-3 rounded-xl px-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                          >
                            <Icon size={19} className="text-primary" />
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  </nav>

                  <div className="mt-auto border-t border-border px-7 py-6">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Follow along
                    </p>
                    <SocialLinks className="text-foreground" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}