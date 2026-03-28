export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-serif text-white text-lg mb-1">Sasha Bergeron, PMHNP-BC</p>
          <p className="text-sm">Integrative Psychiatry · DC · MD · VA</p>
        </div>
        <div className="flex flex-col sm:items-end gap-2 text-sm">
          <div className="flex gap-6">
            <a href="https://www.psychologytoday.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Psychology Today
            </a>
            <a href="mailto:info@sashabergeron.com" className="hover:text-white transition-colors">
              info@sashabergeron.com
            </a>
          </div>
          <p className="text-stone-600 text-xs">
            &copy; {new Date().getFullYear()} Sasha Bergeron, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
