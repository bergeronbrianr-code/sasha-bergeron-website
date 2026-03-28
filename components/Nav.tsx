export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-stone-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-xl text-stone-900 tracking-tight">
          Sasha Bergeron<span className="text-sage-600">,</span>{" "}
          <span className="text-base font-sans font-normal text-stone-500">PMHNP-BC</span>
        </a>
        <ul className="hidden sm:flex gap-8 text-sm font-medium text-stone-600">
          <li><a href="#about" className="hover:text-stone-900 transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-stone-900 transition-colors">Services</a></li>
          <li><a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a></li>
          <li>
            <a
              href="https://www.sashabergeron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-800 text-white px-5 py-2 rounded-full hover:bg-stone-700 transition-colors"
            >
              Schedule Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
