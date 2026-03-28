export default function Hero() {
  return (
    <section className="relative bg-stone-50 py-28 px-6 overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#d6cfc480,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-stone-400 mb-6">
          Integrative Psychiatry · Washington DC, MD &amp; VA
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl text-stone-900 leading-tight mb-8">
          Empower.<br />Heal.<br />Thrive.
        </h1>
        <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mb-12">
          I believe in the transformative power of integrative mental healthcare that sees,
          honors, and treats the whole person — blending evidence-based medicine with
          holistic wisdom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-stone-800 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
          >
            Work with Me
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-stone-300 text-stone-700 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
