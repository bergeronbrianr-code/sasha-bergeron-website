import Image from "next/image";

const credentials = [
  {
    logo: "https://pratigroup.org/wp-content/uploads/2023/04/prati-logo-color-horizontal.png",
    alt: "PRATI – Psychedelic Research and Training Institute",
    href: "https://pratigroup.org",
    description: "Completed training in psychedelic assisted therapy with PRATI",
    logoBg: "bg-white",
    logoWidth: 160,
    logoHeight: 52,
  },
  {
    logo: "https://moxieschool.com/wp-content/uploads/2023/05/Moxie-School-Logo-horizontal-white.png",
    alt: "Moxie School",
    href: "https://moxieschool.com",
    description: "Completed training in IFS (Internal Family Systems) informed psychedelic assisted therapy with Moxie School",
    logoBg: "bg-[#1a3d30]",
    logoWidth: 160,
    logoHeight: 52,
  },
];

export default function Credentials() {
  return (
    <section className="py-16 px-6 bg-[#0f2a20]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-[#5e9e84] mb-10">
          Training &amp; Certifications
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {credentials.map(({ logo, alt, href, description, logoBg, logoWidth, logoHeight }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 bg-[#1a3d30] rounded-2xl px-8 py-6 border border-[#2d6a52]/50 hover:border-[#5e9e84] transition-colors group"
            >
              <div className={`shrink-0 rounded-xl p-3 ${logoBg}`}>
                <Image
                  src={logo}
                  alt={alt}
                  width={logoWidth}
                  height={logoHeight}
                  className="object-contain"
                />
              </div>
              <p className="text-[#b8d8cc] text-sm leading-relaxed group-hover:text-white transition-colors">
                {description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
