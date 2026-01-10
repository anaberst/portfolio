import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-start gap-10">
          {/* Photo */}
          <Image
            src="/photo.jpg"
            alt="Portrait of Ana Berst"
            width={200}
            height={200}
            className="mt-2 rounded-full object-cover"
            priority
          />

          {/* Text */}
          <div className="max-w-2xl">
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

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/anaberst"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transitionrounded-md border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                aria-label="Ana Berst GitHub Profile"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anaberst"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition"
                aria-label="Ana Berst LinkedIn Profile"
              >
                LinkedIn
              </a>
              <a
                href=""
                className="rounded-md border border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-400 cursor-not-allowed"
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
