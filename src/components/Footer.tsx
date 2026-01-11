export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-700 pt-10 pb-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-2xl">
          <p className="mt-8 leading-relaxed text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js, TypeScript, Tailwind CSS ·{" "}
            <a
              href="https://github.com/anaberst/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block whitespace-nowrap hover:underline"
            >
              View on GitHub →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
