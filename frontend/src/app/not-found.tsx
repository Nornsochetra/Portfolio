import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b0b12] px-6 text-center text-slate-200">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">404</p>
      <h1 className="mt-3 text-3xl font-extrabold text-white">Page not found</h1>
      <p className="mt-3 text-slate-400">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-light"
      >
        Back home
      </Link>
    </div>
  );
}
