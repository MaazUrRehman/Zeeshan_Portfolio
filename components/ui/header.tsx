'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', name: 'Home' },
    { path: '/Portfolio', name: 'Portfolio' },
    { path: '/Contact', name: 'Contact' },
  ]
 
  const pathname = usePathname();

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-amber-50/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b border-amber-200/50 dark:border-amber-800/30' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-40 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo/Brand */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 bg-amber-50 rounded-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-black dark:text-amber-50 tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300">
                  Zeeshan
                </span>
                <span className="text-xs text-amber-700 dark:text-amber-400 font-medium uppercase tracking-widest">
                  Architecture
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname
                      ? "text-amber-700 dark:text-amber-400"
                      : "text-black dark:text-amber-100"
                  } hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-sm uppercase tracking-wider relative group`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex flex-col gap-1.5 w-8 h-8 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`w-full h-0.5 bg-black dark:bg-amber-100 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-amber-600' : 'group-hover:bg-amber-600'
              }`}></span>
              <span className={`w-full h-0.5 bg-black dark:bg-amber-100 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100 group-hover:bg-amber-600'
              }`}></span>
              <span className={`w-full h-0.5 bg-black dark:bg-amber-100 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-amber-600' : 'group-hover:bg-amber-600'
              }`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col gap-6 border-t border-amber-200/50 dark:border-amber-800/30 pt-6">
              <a 
                href="#home" 
                className="text-black dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-lg uppercase tracking-wider py-3 flex items-center gap-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-amber-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                Home
              </a>
              <a 
                href="#projects" 
                className="text-black dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-lg uppercase tracking-wider py-3 flex items-center gap-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-amber-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                Projects
              </a>
              <a 
                href="#studio" 
                className="text-black dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-lg uppercase tracking-wider py-3 flex items-center gap-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-amber-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                Studio
              </a>
              <a 
                href="#services" 
                className="text-black dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-lg uppercase tracking-wider py-3 flex items-center gap-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-amber-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                Services
              </a>
              <a 
                href="#contact" 
                className="text-black dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-lg uppercase tracking-wider py-3 flex items-center gap-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-amber-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                Contact
              </a>
              <a 
                href="#consultation" 
                className="px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 font-bold text-center hover:from-amber-700 hover:to-amber-800 transition-all duration-300 text-lg uppercase tracking-wider mt-4 rounded-lg shadow-lg transform hover:-translate-y-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Consultation
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
}