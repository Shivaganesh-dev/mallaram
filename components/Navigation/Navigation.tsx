'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale, getDictionary, getTranslations } from '@/lib/i18n';

interface NavigationProps {
  locale: Locale;
}


export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dictionary = getDictionary(locale);
  const t = getTranslations(dictionary);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: `/${locale}#home` },
    { key: 'about', href: `/${locale}#about` },
    { key: 'facilities', href: `/${locale}#facilities` },
    { key: 'gallery', href: `/${locale}#gallery` },
    { key: 'events', href: `/${locale}#events` },
    { key: 'complaint', href: `/${locale}#complaint` },
    { key: 'contact', href: `/${locale}#contact` },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'te' : 'en';
    window.location.href = `/${newLocale}${window.location.hash || ''}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white shadow-sm border-b border-transparent'}`}>
      {/* Decorative top strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 z-[60]"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex flex-col lg:flex-row items-center justify-between transition-all duration-500 ease-in-out ${scrolled ? 'h-16 lg:h-20' : 'h-32 lg:h-44'}`}>
          
          {/* LEFT: Village Identity */}
          <div className={`flex-1 flex justify-start order-2 lg:order-1 transition-transform duration-500 ${scrolled ? 'scale-90 lg:translate-x-0' : 'scale-100'}`}>
            <Link href={`/${locale}`} className="flex flex-col items-center lg:items-start group">
              <span className="text-2xl md:text-3xl font-black text-primary tracking-tighter transition-colors duration-300 group-hover:text-earth">
                {dictionary.hero.title}
              </span>
              <div className="flex items-center gap-2">
                <span className="h-px w-4 bg-earth/40"></span>
                <span className="text-[9px] md:text-[10px] font-bold text-earth uppercase tracking-[0.4em]">
                  {dictionary.hero.tagline}
                </span>
                <span className="h-px w-4 bg-earth/40"></span>
              </div>
            </Link>
          </div>
 
          {/* CENTER: MAIN LOGO */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <Link href={`/${locale}`} className="relative group flex items-center justify-center">
              {/* Outer glow ring - static opacity for performance */}
              <div 
                className={`absolute inset-0 rounded-full bg-gradient-to-tr from-earth/20 via-primary/10 to-earth/20 blur-3xl -m-12 pointer-events-none transition-opacity duration-700 ${scrolled ? 'opacity-30' : 'opacity-60'}`}
              ></div>
              
              <div 
                className={`relative transition-all duration-500 ease-out will-change-transform rounded-full bg-white p-2 shadow-2xl border-[4px] border-earth/20 flex items-center justify-center overflow-hidden ${scrolled ? 'w-20 h-20 md:w-24 md:h-24' : 'w-36 h-36 md:w-44 md:h-44'}`}
              >
                <img
                  src="/images/telangana-state-logo.png"
                  alt="Telangana State Logo"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </Link>
          </div>
 
          {/* RIGHT: Nav Links & Controls */}
          <div className={`flex-1 flex justify-end items-center gap-4 lg:gap-6 order-3 transition-transform duration-500 ${scrolled ? 'scale-95' : 'scale-100'}`}>
            <div className="hidden xl:flex items-center gap-6">
              {navItems.slice(0, 5).map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-[10px] font-black text-gray-600 hover:text-primary uppercase tracking-[0.2em] relative group px-2 py-1 transition-colors"
                >
                  {t(`nav.${item.key}`)}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-earth transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 lg:px-6 lg:py-2.5 text-[9px] lg:text-[10px] font-black rounded-full bg-primary text-white hover:bg-earth transition-all shadow-md active:scale-95 uppercase tracking-widest"
              >
                {t('language.toggle')}
              </button>
              
              {/* Complaint Button */}
              <Link
                href={`/${locale}#complaint`}
                className="hidden sm:flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 text-[9px] lg:text-[10px] font-black rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all active:scale-95 uppercase tracking-widest"
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                {t('nav.complaint')}
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 rounded-full bg-gray-50 text-primary hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white"
            >
              <div className="flex flex-col gap-2 pt-8 pb-4">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-black text-gray-700 hover:text-primary py-3 border-b border-gray-50 transition-colors uppercase tracking-wider"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}