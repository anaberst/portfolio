export default function Contact() {
  return (
    <section className="border-t border-gray-100 dark:border-gray-700 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">Contact</h2>

          <p className="mt-4 leading-relaxed text-base text-gray-700 dark:text-gray-300">
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
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 focus:border-black focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 focus:border-black focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={4}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 focus:border-black focus:outline-none"
            />

            <button
              type="submit"
              className="rounded-md bg-black dark:bg-gray-900 px-5 py-2.5 text-sm font-medium text-white dark:text-gray-300 hover:bg-gray-800 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
