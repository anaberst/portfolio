export default function Footer() {
  return (
    <footer className="relative bg-surface/70 pt-8 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-secondary/8 via-transparent to-lavender/8" />
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-2xl">
          <div className="inline-flex h-2 w-2 rounded-full bg-secondary" />
          <p className="mt-8 leading-relaxed text-sm text-textMuted">
            Built with Next.js, TypeScript, Tailwind CSS ·{" "}
            <a
              href="https://github.com/anaberst/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block whitespace-nowrap text-primary hover:text-accent"
            >
              View on GitHub →
            </a>
          </p>
          <p className="mt-8 leading-relaxed text-sm text-textMuted">
            This site uses Vercel Analytics to monitor anonymous traffic and
            engagement.
          </p>
        </div>
      </div>
    </footer>
  );
}
