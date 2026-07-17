"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(PORTFOLIO_CONFIG.nav.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [active]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " + (scrolled ? "py-3" : "py-5")
      }
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={
            "flex items-center justify-between rounded-2xl border pb-2 pl-3 pr-2 pt-2 transition-all duration-300 sm:rounded-full sm:pl-4 sm:pr-2.5 " +
            (scrolled
              ? "glass border-slate-900/10 shadow-xl shadow-slate-900/10 dark:border-white/10 dark:shadow-black/30"
              : "border-transparent bg-transparent")
          }
        >
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-xs font-extrabold text-white shadow-lg shadow-accent/30 transition-transform group-hover:scale-105">
              {PORTFOLIO_CONFIG.initials}
            </span>
            <span className="hidden text-sm font-bold tracking-tight text-slate-900 dark:text-white sm:block">
              {PORTFOLIO_CONFIG.name.split(" ").slice(-1)[0]}
              <span className="text-accent-light">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-900/10 bg-slate-900/[0.03] p-1 dark:border-white/10 dark:bg-white/[0.03] md:flex">
            {PORTFOLIO_CONFIG.nav.map((link) => (
              <a
                key={link.id}
                href={"#" + link.id}
                className={
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 " +
                  (active === link.id
                    ? "bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href="#contact"
              className="group ml-1 hidden items-center gap-1.5 rounded-full bg-accent py-2 pl-4 pr-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/40 active:scale-95 md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-all duration-200 hover:bg-slate-900/10 active:scale-90 dark:text-slate-200 dark:hover:bg-white/10 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span
                className={"transition-transform duration-300 " + (open ? "rotate-90" : "rotate-0")}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </span>
            </button>
          </div>
        </div>

        <div
          className={
            "overflow-hidden transition-all duration-300 ease-out md:hidden " +
            (open ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0")
          }
        >
          <nav className="glass flex flex-col gap-1 rounded-2xl border border-slate-900/10 p-2 dark:border-white/10">
            {PORTFOLIO_CONFIG.nav.map((link) => (
              <a
                key={link.id}
                href={"#" + link.id}
                onClick={() => setOpen(false)}
                className={
                  "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors " +
                  (active === link.id
                    ? "bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white"
                    : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white")
                }
              >
                {link.label}
                {active === link.id && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-light"></span>
                )}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              Let&apos;s talk
              <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
