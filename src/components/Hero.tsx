import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-secondary/15 to-transparent" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/45 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accentSoft/35 blur-3xl" />
        <div className="absolute right-1/3 top-10 h-48 w-48 rounded-full bg-lavender/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div className="mt-12 flex flex-col items-center gap-12 md:mt-16 md:flex-row md:items-center md:gap-14 md:pl-16">
          {/* Photo */}
          <Image
            src="/photo.jpg"
            alt="Portrait of Ana Berst"
            width={240}
            height={240}
            className="rounded-full object-cover md:flex-shrink-0 ring-4 ring-secondary/60 shadow-soft"
            priority
          />

          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Ana Berst
            </h1>
            <p className="mt-6 text-lg text-textMuted">
              Computer Science Student ·{" "}
              <span className="whitespace-nowrap">
                Aspiring Software Engineer
              </span>
            </p>

            {/* Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="https://github.com/anaberst"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border/60 bg-accent px-5 py-2.5 text-sm font-medium text-text transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentSoft/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                aria-label="Ana Berst GitHub Profile"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anaberst"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border/60 bg-accent px-5 py-2.5 text-sm font-medium text-text transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentSoft/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                aria-label="Ana Berst LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a
                href="/Ana_Berst_Resume_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-border/60 bg-accent px-5 py-2.5 text-sm font-medium text-text transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentSoft/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                aria-label="Ana Berst Resume"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
