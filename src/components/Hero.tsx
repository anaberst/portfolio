import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          {/* Photo */}
          <Image
            src="/photo.jpg"
            alt="Portrait of Ana Berst"
            width={200}
            height={200}
            className="rounded-full object-cover md:flex-shrink-0"
            priority
          />

          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ana Berst
            </h1>
            <p className="mt-6 text-lg text-gray-800 dark:text-gray-400">
              Computer Science Student ·{" "}
              <span className="whitespace-nowrap">
                Aspiring Software Engineer
              </span>
            </p>

            {/* Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="https://github.com/anaberst"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-black dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 transition"
                aria-label="Ana Berst GitHub Profile"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anaberst"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-black dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 transition"
                aria-label="Ana Berst LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a
                href=""
                className="rounded-md bg-black dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-black cursor-not-allowed"
                aria-label="Ana Berst Resume"
              >
                Resume (coming soon)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
