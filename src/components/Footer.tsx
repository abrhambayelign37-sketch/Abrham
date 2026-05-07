export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-sans tracking-widest uppercase uppercase">
        <p>© {new Date().getFullYear()} Abrham Bayelign Architecture</p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
