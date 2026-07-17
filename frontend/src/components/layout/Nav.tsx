"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/data/portfolio";

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

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled ? "glass py-3" : "bg-transparent py-6")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-lg font-extrabold tracking-tight text-white">
          {PORTFOLIO_CONFIG.name.split(" ").slice(-1)[0]}
          <span className="text-accent-light">.</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {PORTFOLIO_CONFIG.nav.map((link) => (
            <a
              key={link.id}
              href={"#" + link.id}
              className={
                "text-sm font-medium transition-colors " +
                (active === link.id ? "text-white" : "text-slate-400 hover:text-white")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            Let&apos;s talk
          </a>
        </nav>
        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="mt-4 flex flex-col gap-4 px-6 pb-4 md:hidden">
          {PORTFOLIO_CONFIG.nav.map((link) => (
            <a
              key={link.id}
              href={"#" + link.id}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
