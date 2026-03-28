const services = [
  {
    title: "Integrative Psychiatry",
    tag: "Core Service",
    description:
      "Concierge psychiatric care that addresses the whole self. I blend evidence-based medicine with holistic approaches to create personalized treatment plans that go beyond symptom management — focusing on root causes, lifestyle, and lasting wellbeing.",
    details: ["Medication management", "Psychotherapy", "Lifestyle medicine", "Holistic modalities"],
  },
  {
    title: "Ketamine Assisted Psychotherapy",
    tag: "Specialty",
    description:
      "A powerful, evidence-backed treatment for depression, anxiety, PTSD, and treatment-resistant conditions. With expertise since 2017 and training from leaders in the field, I guide patients through ketamine therapy in a safe, supportive, and therapeutic environment.",
    details: ["Treatment-resistant depression", "Anxiety & PTSD", "Guided sessions", "Integration support"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-stone-400 mb-4">Services</p>
        <h2 className="font-serif text-4xl text-stone-900 mb-14 leading-snug max-w-xl">
          A new standard of mental healthcare
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-10 border border-stone-100 shadow-sm flex flex-col gap-6"
            >
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-stone-400 bg-stone-100 px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-stone-900">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mt-auto">
                {service.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-stone-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
