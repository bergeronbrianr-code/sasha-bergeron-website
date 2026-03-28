export default function Hero() {
  return (
    <section className="bg-stone-50 py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
          {/* TODO: Sasha's tagline */}
          Your Health, Your Journey
        </h1>
        <p className="mt-6 text-lg text-stone-600 leading-relaxed">
          {/* TODO: Brief value proposition — 1-2 sentences */}
          I help people build sustainable habits and reclaim their wellbeing through personalized support and evidence-based guidance.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-stone-800 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
          >
            Work with Me
          </a>
          <a
            href="#services"
            className="inline-block border border-stone-300 text-stone-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
