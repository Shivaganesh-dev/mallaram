'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary } from '@/lib/i18n';

interface CTAProps {
  locale: Locale;
}

// Google Form placeholder URL - replace with actual form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfPLACEHOLDER/viewform';

export default function CTA({ locale }: CTAProps) {
  const dictionary = getDictionary(locale);

  return (
    <section id="complaint" className="py-16 md:py-24 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {dictionary.complaint.title}
          </h2>
          <p className="text-lg text-cream-light max-w-2xl mx-auto">
            {dictionary.complaint.description}
          </p>
          <motion.a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 text-lg font-semibold rounded-full bg-white text-primary hover:bg-cream transition-colors shadow-lg"
          >
            {dictionary.complaint.cta}
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}