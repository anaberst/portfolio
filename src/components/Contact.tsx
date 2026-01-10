export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 text-gray-700">
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
            className="w-full rounded-md border px-4 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full rounded-md border px-4 py-2"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={4}
            className="w-full rounded-md border px-4 py-2"
          />

          <button
            type="submit"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
