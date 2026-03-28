export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-stone-400 mb-4">About</p>
          <h2 className="font-serif text-4xl text-stone-900 mb-6 leading-snug">
            Care that sees the whole person
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              I&apos;m Sasha Bergeron — a board-certified Psychiatric Nurse Practitioner
              (PMHNP-BC) with over a decade of clinical experience. I graduated from Vanderbilt
              University at the top of my class and was honored with the Outstanding Student Award.
            </p>
            <p>
              My approach combines the best of evidence-based medicine with integrative and
              holistic modalities. I take the time to truly understand each patient — their
              history, their goals, and what healing means to them — rather than defaulting to
              a one-size-fits-all treatment plan.
            </p>
            <p>
              I have specialized in ketamine-assisted therapy since 2017, trained by pioneers
              in the field in the San Francisco Bay Area, and I bring that depth of expertise
              to every patient relationship.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "10+", sub: "Years of clinical experience" },
            { label: "PMHNP-BC", sub: "Board certified" },
            { label: "2017", sub: "Ketamine practice since" },
            { label: "DC · MD · VA", sub: "States served" },
          ].map(({ label, sub }) => (
            <div key={label} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <p className="font-serif text-2xl text-stone-900 mb-1">{label}</p>
              <p className="text-sm text-stone-500">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
