'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/lib/i18n';

interface LanguageToggleProps {
  locale: Locale;
}

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'te' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary-light transition-colors duration-200"
      aria-label={`Switch to ${locale === 'en' ? 'Telugu' : 'English'}`}
    >
      {locale === 'en' ? 'తెలుగు' : 'EN'}
    </button>
  );
}