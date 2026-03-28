const services = [
  {
    title: "1:1 Coaching", // TODO: rename/replace
    description:
      "Personalized sessions tailored to your goals, challenges, and schedule. Together we create a plan that works for your life.",
  },
  {
    title: "Group Programs", // TODO: rename/replace
    description:
      "Join a supportive community of like-minded individuals working toward similar health goals.",
  },
  {
    title: "Workshops", // TODO: rename/replace
    description:
      "Focused, actionable workshops on topics like stress management, nutrition basics, and building sustainable routines.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-stone-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Services</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
