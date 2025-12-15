'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { path: '/', name: 'Home' },
    { path: '/Portfolio', name: 'Portfolio' },
    { path: '/Contact', name: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-amber-50/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b border-amber-200/50 dark:border-amber-800/30'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 overflow-x-hidden">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-amber-50 rounded-sm" />
              </div>
              <div>
                <div className="text-xl font-bold text-black dark:text-amber-50">
                  Zeeshan
                </div>
                <div className="text-xs text-amber-700 dark:text-amber-400 uppercase">
                  Architecture
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex gap-8">
              {links.map(link => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative uppercase text-sm tracking-wider transition ${
                    pathname === link.path
                      ? 'text-amber-700 dark:text-amber-400'
                      : 'text-black dark:text-amber-100'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-amber-600 transition-transform ${
                      pathname === link.path ? 'scale-x-100' : 'scale-x-0'
                    } w-full`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center gap-1 z-[100]"
            >
              <span className={`h-0.5 bg-black dark:bg-amber-100 transition ${isMobileMenuOpen && 'rotate-45 translate-y-1.5 bg-amber-600'}`} />
              <span className={`h-0.5 bg-black dark:bg-amber-100 transition ${isMobileMenuOpen && 'opacity-0'}`} />
              <span className={`h-0.5 bg-black dark:bg-amber-100 transition ${isMobileMenuOpen && '-rotate-45 -translate-y-1.5 bg-amber-600'}`} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 transition ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={`absolute right-0 top-0 h-full w-72 bg-amber-50 dark:bg-gray-900 transform transition-transform ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="pt-24 px-6 space-y-4">
              {links.map(link => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block uppercase tracking-wider text-lg ${
                    pathname === link.path
                      ? 'text-amber-700 dark:text-amber-400'
                      : 'text-black dark:text-amber-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
