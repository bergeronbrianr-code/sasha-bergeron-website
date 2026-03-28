export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-stone-400 mb-4">Contact</p>
          <h2 className="font-serif text-4xl text-stone-900 mb-6 leading-snug">
            Begin your journey
          </h2>
          <p className="text-stone-600 leading-relaxed mb-10">
            Ready to take the first step? Reach out to schedule a consultation or ask any
            questions. I serve patients in Washington DC, Maryland, and Virginia.
          </p>
          <div className="space-y-4 text-sm text-stone-600">
            <div>
              <p className="font-medium text-stone-800">Email</p>
              <a href="mailto:info@sashabergeron.com" className="hover:text-stone-900 transition-colors">
                info@sashabergeron.com
              </a>
            </div>
            <div>
              <p className="font-medium text-stone-800">Phone</p>
              <a href="tel:3013632233" className="hover:text-stone-900 transition-colors">
                301-363-2233
              </a>
            </div>
            <div>
              <p className="font-medium text-stone-800">Serving</p>
              <p>Washington DC · Maryland · Virginia</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 border border-stone-100 shadow-sm">
          {/* TODO: Wire up to a form backend (e.g. Formspree, Resend) */}
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 bg-stone-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 bg-stone-50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 bg-stone-50 resize-none"
                placeholder="Tell me a bit about yourself and what you're looking for..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-stone-800 text-white py-3.5 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
