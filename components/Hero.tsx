import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#1a3d30] min-h-[90vh] flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full grid sm:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <p className="text-[#5e9e84] text-sm font-medium tracking-widest uppercase mb-6">
            Integrative Psychiatry · DC · MD · VA
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-white leading-[1.1] mb-8">
            Empower.<br />
            Heal.<br />
            <span className="italic text-[#b8d8cc]">Thrive.</span>
          </h1>
          <p className="text-[#b8d8cc] text-lg leading-relaxed mb-10 max-w-md">
            Integrative mental healthcare that sees, honors, and treats the whole person —
            blending evidence-based medicine with holistic wisdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#c4845a] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#d49a76] transition-colors"
            >
              Begin Your Journey
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-[#5e9e84] text-[#b8d8cc] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#2d6a52]/40 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative flex justify-center sm:justify-end">
          <div className="relative w-80 h-96 sm:w-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/67701c544cb2a27bee486671/f1b97ab1-19d7-4107-a23c-d603c5572ea3/Sasha+-+Profile+Image.jpg"
              alt="Sasha Bergeron, PMHNP-BC"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Subtle green tint overlay */}
            <div className="absolute inset-0 bg-[#1a3d30]/10" />
          </div>
          {/* Decorative ring */}
          <div className="absolute -bottom-4 -right-4 w-80 h-96 sm:w-96 sm:h-[500px] rounded-3xl border border-[#2d6a52]/40 -z-10" />
        </div>

      </div>
    </section>
  );
}
