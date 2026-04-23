import { Suspense } from 'react';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Facilities from '@/components/Facilities/Facilities';
import Gallery from '@/components/Gallery/Gallery';
import Events from '@/components/Events/Events';
import CTA from '@/components/CTA/CTA';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { locales, getDictionary, Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (!locales.includes(locale as Locale)) {
    return notFound();
  }
  
  const dictionary = getDictionary(locale as Locale);
  
  return {
    title: `${dictionary.common.appName} | ${dictionary.common.tagline}`,
    description: dictionary.common.subtitle,
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  
  const currentLocale = locale as Locale;
  
  return (
    <main className="min-h-screen bg-cream">
      <Suspense fallback={<div className="h-16 bg-cream" />}>
        <Navigation locale={currentLocale} />
      </Suspense>
      <Hero locale={currentLocale} />
      <About locale={currentLocale} />
      <Facilities locale={currentLocale} />
      <Gallery locale={currentLocale} />
      <Events locale={currentLocale} />
      <CTA locale={currentLocale} />
      <Contact locale={currentLocale} />
      <Footer locale={currentLocale} />
    </main>
  );
}