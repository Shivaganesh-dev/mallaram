import { locales, getDictionary, defaultLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    return notFound();
  }
  
  const dictionary = getDictionary(locale as any);
  
  return {
    title: `${dictionary.common.appName} | ${dictionary.common.tagline}`,
    description: dictionary.common.subtitle,
  };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }
  
  const dictionary = getDictionary(locale as any);
  
  return (
    <main className="min-h-screen bg-cream">
      <h1 className="text-4xl font-bold text-primary">{dictionary.hero.title}</h1>
      <p className="text-xl text-earth-dark mt-2">{dictionary.hero.tagline}</p>
      <p className="text-lg text-earth mt-1">{dictionary.hero.subtitle}</p>
    </main>
  );
}