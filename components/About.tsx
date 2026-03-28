export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">About Sasha</h2>
        <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
          {/* TODO: Replace with Sasha's bio */}
          <p>
            Hi, I&apos;m Sasha — a certified health & wellness professional dedicated to helping
            individuals feel their best from the inside out.
          </p>
          <p>
            With a background in [credentials/training], I take a holistic approach to wellness
            that addresses the whole person: mind, body, and lifestyle. Whether you&apos;re
            navigating a health transition, looking to build better habits, or simply want to
            feel more energized, I&apos;m here to guide you.
          </p>
          <p>
            Based in [location], I work with clients [locally/virtually/both].
          </p>
        </div>
      </div>
    </section>
  );
}
