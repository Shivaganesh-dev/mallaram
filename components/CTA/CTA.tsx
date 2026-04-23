'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary } from '@/lib/i18n';

interface CTAProps {
  locale: Locale;
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe105PrT3jPSh76kQmuyjyHPcmXqzVo4zkHNRq0qJO4FjEcnA/viewform?usp=publish-editor';

export default function CTA({ locale }: CTAProps) {
  const dictionary = getDictionary(locale);

  return (
    <section id="complaint" className="py-20 md:py-32 px-4 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cream rounded-full translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cream/20 backdrop-blur-sm mb-6"
          >
            <svg className="w-10 h-10 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-4">
            {dictionary.complaint.title}
          </h2>
          
          <p className="text-lg md:text-2xl text-cream/90 max-w-2xl mx-auto leading-relaxed px-4">
            {dictionary.complaint.description}
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-4 px-4"
          >
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-full bg-cream text-primary hover:bg-white transition-all shadow-2xl"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {dictionary.complaint.cta}
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6">
            <div className="flex items-center gap-2 text-cream/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 text-cream/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Quick Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}