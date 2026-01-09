export default function Hero() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ana Berst
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Computer Science Student · Aspiring Software Engineer
        </p>

        <p className="mt-6 text-base text-gray-700">
          I enjoy building clear, well-structured software and learning how
          systems work at every layer, from low-level programming to modern
          front-end applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/anaberst"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100"
            aria-label="Ana Berst GitHub profile"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anaberst"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100"
            aria-label="Ana Berst LinkedIn Profile"
          >
            LinkedIn
          </a>

          <a
            href=""
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-gray-600 cursor-not-allowed"
            aria-label="Ana Berst Resume"
          >
            Resume (coming soon)
          </a>
        </div>
      </div>
    </section>
  );
}
