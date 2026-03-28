export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-100">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold tracking-tight text-stone-800">
          Sasha Bergeron
        </a>
        <ul className="flex gap-6 text-sm font-medium text-stone-600">
          <li><a href="#about" className="hover:text-stone-900 transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-stone-900 transition-colors">Services</a></li>
          <li><a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
