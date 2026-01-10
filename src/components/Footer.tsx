export default function Footer() {
  return (
    <section className="border-t border-gray-100 pt-10 pb-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-2xl">
          <p className="mt-8 text-sm text-gray-600">
            Built with Next.js, TypeScript, Tailwind CSS ·{" "}
            <a
              href="https://github.com/anaberst/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              View on GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
