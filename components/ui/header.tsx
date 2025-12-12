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

  // Close mobile menu when clicking on a link
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-amber-50/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b border-amber-200/50 dark:border-amber-800/30' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-12 2xl:px-16 py-3 md:py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo/Brand - Adjusted for mobile */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 group cursor-pointer">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-amber-50 rounded-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-black dark:text-amber-50 tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300">
                  Zeeshan
                </span>
                <span className="text-[10px] md:text-xs text-amber-700 dark:text-amber-400 font-medium uppercase tracking-wider">
                  Architecture
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {links.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname
                      ? "text-amber-700 dark:text-amber-400"
                      : "text-black dark:text-amber-100"
                  } hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-sm uppercase tracking-wider relative group px-1`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform transition-transform duration-300 ${
                    link.path === pathname ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 group relative z-60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`w-6 h-0.5 bg-black dark:bg-amber-100 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0 bg-amber-600' : 'group-hover:bg-amber-600 -translate-y-1'
              }`}></span>
              <span className={`w-6 h-0.5 bg-black dark:bg-amber-100 transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? 'opacity-0 -translate-x-3' : 'opacity-100 group-hover:bg-amber-600'
              }`}></span>
              <span className={`w-6 h-0.5 bg-black dark:bg-amber-100 transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0 bg-amber-600' : 'group-hover:bg-amber-600 translate-y-1'
              }`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out fixed inset-0 z-40 ${
            isMobileMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}>
            {/* Backdrop */}
            <div 
              className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-amber-50 dark:bg-gray-900 shadow-2xl transform transition-transform duration-500 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
              <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto">
                <div className="flex-1">
                  <div className="flex flex-col gap-2">
                    {links.map((link, index) => (
                      <Link
                        href={link.path}
                        key={index}
                        className={`${
                          link.path === pathname
                            ? "text-amber-700 dark:text-amber-400"
                            : "text-black dark:text-amber-100"
                        } hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 font-medium text-lg uppercase tracking-wider py-4 flex items-center gap-4 group border-b border-amber-200/50 dark:border-amber-800/30`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          link.path === pathname 
                            ? 'bg-amber-600 scale-125' 
                            : 'bg-amber-400/50 group-hover:bg-amber-600 group-hover:scale-125'
                        }`}></div>
                        {link.name}
                        {link.path === pathname && (
                          <span className="ml-auto text-amber-600 dark:text-amber-400 text-sm font-normal">Active</span>
                        )}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Contact CTA in Mobile Menu */}
                  <div className="mt-8 pt-8 border-t border-amber-200/50 dark:border-amber-800/30">
                    <h3 className="text-black dark:text-amber-100 font-bold text-lg mb-4">Get in Touch</h3>
                    <Link
                      href="/Contact"
                      className="block px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-50 font-bold text-center hover:from-amber-700 hover:to-amber-800 transition-all duration-300 text-lg uppercase tracking-wider rounded-lg shadow-lg transform hover:-translate-y-1 active:scale-95"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
                
                {/* Footer in Mobile Menu */}
                <div className="mt-8 pt-6 border-t border-amber-200/50 dark:border-amber-800/30">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-amber-600 dark:text-amber-400">
                      © {new Date().getFullYear()} Zeeshan Architecture
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-black dark:text-amber-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                      aria-label="Close menu"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}