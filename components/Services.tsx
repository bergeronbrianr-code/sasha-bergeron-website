const services = [
  {
    tag: "Core Service",
    title: "Integrative Psychiatry",
    description:
      "Concierge psychiatric care that addresses the whole self. I blend evidence-based medicine with holistic approaches to create personalized treatment plans focused on root causes, lifestyle, and lasting wellbeing.",
    details: ["Medication management", "Psychotherapy", "Lifestyle medicine", "Holistic modalities"],
    accent: "bg-[#eef5f2] border-[#b8d8cc]",
    tagColor: "text-[#2d6a52] bg-[#b8d8cc]/40",
  },
  {
    tag: "Specialty",
    title: "Ketamine Assisted Psychotherapy",
    description:
      "A powerful, evidence-backed treatment for depression, anxiety, PTSD, and treatment-resistant conditions. With expertise since 2017 and mentorship from pioneers in the field, I guide patients through this transformative therapy safely and therapeutically.",
    details: ["Treatment-resistant depression", "Anxiety & PTSD", "Guided sessions", "Integration support"],
    accent: "bg-[#f7ece4] border-[#d49a76]/40",
    tagColor: "text-[#c4845a] bg-[#f7ece4]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#1a3d30]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-[#5e9e84] mb-4">Services</p>
        <h2 className="font-serif text-4xl text-white mb-14 leading-snug max-w-xl">
          A new standard of<br />mental healthcare
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-3xl p-10 border flex flex-col gap-6 ${service.accent}`}
            >
              <span className={`text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full w-fit ${service.tagColor}`}>
                {service.tag}
              </span>
              <h3 className="font-serif text-2xl text-[#0f2a20]">{service.title}</h3>
              <p className="text-[#3a4a44] leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mt-auto">
                {service.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-[#5e9e84]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5e9e84] shrink-0" />
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
