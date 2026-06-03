"use client";

import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certificates" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="text-sm font-bold tracking-tight text-foreground hover:text-blue-600 transition-colors"
        >
          AMT
        </a>

        <nav className="hidden sm:flex items-center gap-1" aria-label="Page sections">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1 text-xs text-foreground/60 hover:text-foreground hover:bg-foreground/5 rounded-md transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
