"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import Brand from "./Brand";
import SocialLinks from "./SocialLinks";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    label: "Menu",
    href: "/#menu",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Gallery",
    href: "/#gallery",
  },
  {
    label: "Visit",
    href: "/#visit",
  },
];

export default function Navbar() {
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
                    text-sm
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
            <Sheet>
              <SheetTrigger
                aria-label="Open navigation menu"
                className="
                  rounded-md
                  p-2
                  text-primary-foreground
                  transition-colors
                  hover:bg-white/10
                "
              >
                <Menu size={24} />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-background"
              >
                <div className="mt-10 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="
                        text-lg
                        font-medium
                        text-foreground
                        transition-colors
                        hover:text-accent
                      "
                    >
                      {link.label}
                    </Link>
                  ))}
                  <SocialLinks className="mt-2 text-foreground" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}