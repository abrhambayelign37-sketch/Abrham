import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 lg:px-24 border-t border-white/10 flex flex-col items-center">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo className="scale-75 md:scale-100 origin-left" />
        <div className="text-gray-500 text-xs font-sans tracking-widest uppercase flex flex-col md:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()} BS-FAM Architectural Design</p>
          <div className="flex space-x-6 shrink-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
