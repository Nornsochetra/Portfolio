import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-light">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">{title}</h2>
      <span
        className="mx-auto mt-4 block h-1 w-12 origin-center animate-pop-in rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
        style={{ animationDelay: "200ms" }}
      ></span>
      {subtitle && <p className="mt-4 text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </Reveal>
  );
}
