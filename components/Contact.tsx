export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">Get in Touch</h2>
        <p className="text-stone-600 mb-10">
          Ready to start your journey? Reach out — I&apos;d love to connect.
        </p>
        {/* TODO: Replace with a real form service (Formspree, Resend, etc.) or email link */}
        <form className="space-y-4 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 resize-none"
              placeholder="Tell me a bit about yourself and what you're looking for..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-stone-800 text-white py-3 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
