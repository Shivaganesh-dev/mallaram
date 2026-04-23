'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale, getDictionary, getTranslations } from '@/lib/i18n';

interface NavigationProps {
  locale: Locale;
}

export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dictionary = getDictionary(locale);
  const t = getTranslations(dictionary);

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
    <nav className="stick top-0 z-50 bg-primary shadow-lg">
      {/* Top decorative border */}
      <div className="h-1 bg-earth"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left - Village Name */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-cream/20">
              <span className="text-xl font-bold text-cream">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-cream leading-tight">{dictionary.hero.title}</span>
              <span className="text-xs text-cream/80">{dictionary.hero.tagline}</span>
            </div>
          </Link>

          {/* Center - Logo */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-cream p-1 shadow-md">
                <img
                  src="/assets/STATE-TELANGANA-LOGO (1).png"
                  alt="Telangana State Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-cream/30 -m-1"></div>
            </div>
          </div>

          {/* Right - Nav Items + Language */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-cream/90 hover:text-white transition-colors relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cream transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg bg-cream text-primary hover:bg-white transition-colors shadow-md"
            >
              {t('language.toggle')}
            </button>
          </div>

          {/* Mobile - Logo + Menu */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="w-10 h-10 rounded-full bg-cream p-1 shadow-md">
              <img
                src="/assets/STATE-TELANGANA-LOGO (1).png"
                alt="Telangana State Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <button
              className="p-2 text-cream"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4 border-t border-cream/20 mt-2"
            >
              <div className="flex flex-col gap-1 pt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 py-3 px-2 text-sm font-medium text-cream hover:text-white hover:bg-cream/10 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="w-2 h-2 rounded-full bg-cream/50"></span>
                      {t(`nav.${item.key}`)}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-2 border-t border-cream/20 mt-2"
                >
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg bg-cream text-primary hover:bg-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    {t('language.toggle')}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}