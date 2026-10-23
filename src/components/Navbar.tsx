// src/components/Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#menu", label: "Menu" },
    { href: "#events", label: "Events" },
    { href: "#gallery", label: "Gallery" },
    { href: "#visit", label: "Visit" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="backdrop-blur-md bg-[#183A2D]/90 text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-bold text-xl tracking-wide"
            >
              Riley's Pub
            </Link>

            <div className="hidden md:flex gap-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#D6C08D] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>

          {mobileOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}