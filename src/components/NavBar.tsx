"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDealership } from "@/lib/store";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/stock", label: "Stock" },
  { href: "/sales", label: "Sales" },
  { href: "/personal", label: "Personal" },
];

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { resetData } = useDealership();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  function handleReset() {
    if (window.confirm("Reset all data to the original demo data?")) {
      resetData();
      setOpen(false);
    }
  }

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive(pathname, href)
        ? "bg-blue-600 text-white"
        : "text-slate-200 hover:bg-slate-700 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-20 bg-slate-900 text-white shadow">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Main">
        <Link href="/" className="text-lg font-bold tracking-tight">
          GB<span className="text-blue-400">Automotores</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={linkClass(l.href)}
              aria-current={isActive(pathname, l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleReset}
            className="ml-2 rounded-md border border-slate-600 px-3 py-2 text-sm text-slate-300 hover:border-slate-400 hover:text-white"
          >
            Reset demo data
          </button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-200 hover:bg-slate-700 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-700 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={linkClass(l.href)}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={handleReset}
              className="mt-2 rounded-md border border-slate-600 px-3 py-2 text-left text-sm text-slate-300 hover:text-white"
            >
              Reset demo data
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
