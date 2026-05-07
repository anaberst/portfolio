export default function Contact() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accentSoft/10 via-transparent to-primary/8" />
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative max-w-2xl">
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl border border-accentSoft/60 bg-surface/70 bg-dot-grid bg-[size:22px_22px] shadow-soft" />
          <h2 className="flex items-center font-heading text-3xl font-bold">
            <span className="mr-3 inline-block h-2.5 w-2.5 rounded-full bg-accentSoft" />
            Contact
          </h2>

          <p className="mt-4 leading-relaxed text-base text-textMuted">
            If you&apos;d like to connect or learn more about my work, feel free
            to reach out using the form below.
          </p>

          <form
            action="https://formspree.io/f/xbddrykn"
            method="POST"
            className="mt-8 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-2xl border border-border/60 bg-surface text-text px-4 py-2 placeholder:text-textMuted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-secondary/40"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-2xl border border-border/60 bg-surface text-text px-4 py-2 placeholder:text-textMuted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-secondary/40"
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={4}
              className="w-full rounded-2xl border border-border/60 bg-surface text-text px-4 py-2 placeholder:text-textMuted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-secondary/40"
            />

            <button
              type="submit"
              className="rounded-2xl border border-border/60 bg-accent px-5 py-2.5 text-sm font-medium text-text transition hover:bg-accentSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentSoft/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
