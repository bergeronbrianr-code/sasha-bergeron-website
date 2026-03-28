export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#eef5f2]">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-16 items-start">

        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-[#5e9e84] mb-4">Contact</p>
          <h2 className="font-serif text-4xl text-[#0f2a20] mb-6 leading-snug">
            Begin your<br />journey
          </h2>
          <p className="text-[#3a4a44] leading-relaxed mb-10">
            Ready to take the first step? Reach out to schedule a consultation.
            I serve patients in Washington DC, Maryland, and Virginia.
          </p>
          <div className="space-y-5 text-sm">
            {[
              { label: "Email", value: "info@sashabergeron.com", href: "mailto:info@sashabergeron.com" },
              { label: "Phone", value: "301-363-2233", href: "tel:3013632233" },
              { label: "Serving", value: "Washington DC · Maryland · Virginia", href: null },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <p className="font-medium text-[#1a3d30] mb-0.5">{label}</p>
                {href ? (
                  <a href={href} className="text-[#5e9e84] hover:text-[#2d6a52] transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-[#3a4a44]">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#b8d8cc]/50">
          {/* TODO: Wire up to a form backend (e.g. Formspree, Resend) */}
          <form className="space-y-5">
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-[#1a3d30] mb-1.5">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  className="w-full border border-[#b8d8cc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5e9e84] bg-[#fdf9f4]"
                  placeholder={placeholder}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1a3d30] mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-[#b8d8cc] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5e9e84] bg-[#fdf9f4] resize-none"
                placeholder="Tell me a bit about yourself and what you're looking for..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a3d30] text-white py-3.5 rounded-full text-sm font-medium hover:bg-[#2d6a52] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
