export default function Testimonial() {
  return (
    <section className="py-24 px-6 bg-[#fdf9f4]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-[#b8d8cc] text-6xl font-serif leading-none mb-6">&ldquo;</div>
        <p className="font-serif text-2xl sm:text-3xl text-[#1a3d30] leading-relaxed italic">
          Sasha creates a safe, non-judgmental space while bringing impressive clinical
          knowledge and creativity to every session. She has genuinely changed my life.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-[#b8d8cc]" />
          <p className="text-sm text-[#5e9e84] font-medium tracking-wide uppercase">Patient</p>
          <div className="h-px w-12 bg-[#b8d8cc]" />
        </div>
      </div>
    </section>
  );
}
