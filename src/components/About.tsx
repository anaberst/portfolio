export default function About() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-lavender/10 via-transparent to-secondary/8" />
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative max-w-2xl">
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl border border-secondary/50 bg-surface/70 bg-dot-grid bg-[size:22px_22px] shadow-soft" />
          <h2 className="flex items-center font-heading text-3xl font-bold">
            <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-lavender" />
            About
          </h2>

          <p className="mt-6 leading-relaxed text-base text-textMuted">
            I&apos;m a Computer Science student with a strong analytical mindset
            and a deep curiosity about how systems work. I enjoy learning across
            different layers of software, from low-level programming to modern
            front-end deployment, and I&apos;m motivated by solving complex
            problems in clear, thoughtful ways.
          </p>

          <p className="mt-4 leading-relaxed text-base text-textMuted">
            I&apos;m currently focused on building a strong foundation through
            coursework and hands-on projects, and I&apos;m excited to continue
            growing as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
