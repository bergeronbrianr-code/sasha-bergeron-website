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
  {
    tag: "Therapy",
    title: "IFS Informed Therapy",
    description:
      "Using the Internal Family Systems model, we explore the different \"parts\" of yourself — the inner critics, protectors, and wounded aspects — to build self-compassion and lasting internal harmony.",
    details: ["Parts work", "Trauma-informed", "Self-leadership", "Inner healing"],
    accent: "bg-[#eef5f2] border-[#b8d8cc]",
    tagColor: "text-[#2d6a52] bg-[#b8d8cc]/40",
  },
  {
    tag: "Specialty",
    title: "Women's Health",
    description:
      "Mental health care that honors the unique hormonal, reproductive, and societal factors shaping women's wellbeing. From mood disorders to life transitions, I provide care tailored to the full arc of a woman's experience.",
    details: ["Hormonal mood changes", "Life transitions", "Anxiety & depression", "Holistic support"],
    accent: "bg-[#f7ece4] border-[#d49a76]/40",
    tagColor: "text-[#c4845a] bg-[#f7ece4]",
  },
  {
    tag: "Specialty",
    title: "Perinatal & Postpartum",
    description:
      "Specialized support for the profound emotional journey of pregnancy, birth, and early parenthood. I help patients navigate perinatal mood and anxiety disorders with compassionate, evidence-based care.",
    details: ["Prenatal mental health", "Postpartum depression", "Birth trauma", "Parenting transitions"],
    accent: "bg-[#eef5f2] border-[#b8d8cc]",
    tagColor: "text-[#2d6a52] bg-[#b8d8cc]/40",
  },
  {
    tag: "Specialty",
    title: "De-prescribing & Hyperbolic Tapering",
    description:
      "A careful, science-informed approach to safely reducing or discontinuing psychiatric medications. Using hyperbolic tapering protocols, I help patients minimize withdrawal and reclaim agency over their treatment.",
    details: ["Medication tapering", "Withdrawal support", "Personalized protocols", "Ongoing monitoring"],
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-3xl p-8 border flex flex-col gap-5 ${service.accent}`}
            >
              <span className={`text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full w-fit ${service.tagColor}`}>
                {service.tag}
              </span>
              <h3 className="font-serif text-xl text-[#0f2a20]">{service.title}</h3>
              <p className="text-[#3a4a44] leading-relaxed text-sm">{service.description}</p>
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
