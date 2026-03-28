export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#fdf9f4]">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-[#5e9e84] mb-4">About</p>
          <h2 className="font-serif text-4xl text-[#0f2a20] mb-6 leading-snug">
            Care that sees<br />the whole person
          </h2>
          <div className="space-y-4 text-[#3a4a44] leading-relaxed">
            <p>
              I&apos;m Sasha Bergeron — a board-certified Psychiatric Nurse Practitioner
              (PMHNP-BC) with over a decade of clinical experience. I graduated from Vanderbilt
              University at the top of my class and was honored with the Outstanding Student Award.
            </p>
            <p>
              My approach combines evidence-based medicine with integrative and holistic
              modalities. I take the time to truly understand each patient — their history,
              their goals, and what healing means to them.
            </p>
            <p>
              I have specialized in ketamine-assisted therapy since 2017, trained by pioneers
              in the field in the San Francisco Bay Area.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "10+", sub: "Years of clinical experience" },
            { label: "PMHNP-BC", sub: "Board certified" },
            { label: "Since 2017", sub: "Ketamine expertise" },
            { label: "DC · MD · VA", sub: "States served" },
          ].map(({ label, sub }) => (
            <div
              key={label}
              className="bg-[#eef5f2] rounded-2xl p-6 border border-[#b8d8cc]"
            >
              <p className="font-serif text-2xl text-[#1a3d30] mb-1">{label}</p>
              <p className="text-sm text-[#5e9e84]">{sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
