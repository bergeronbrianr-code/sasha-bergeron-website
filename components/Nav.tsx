export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#0f2a20]/95 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-xl text-white tracking-tight">
          Sasha Bergeron{" "}
          <span className="text-sm font-sans font-normal text-[#5e9e84]">PMHNP-BC</span>
        </a>
        <ul className="hidden sm:flex items-center gap-8 text-sm font-medium text-[#b8d8cc]">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          <li>
            <a
              href="#contact"
              className="bg-[#c4845a] text-white px-5 py-2 rounded-full hover:bg-[#d49a76] transition-colors"
            >
              Schedule Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
