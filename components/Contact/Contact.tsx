'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary, getTranslations } from '@/lib/i18n';

interface ContactProps {
  locale: Locale;
}

// Mallaram Village Google Maps Embed URL
const MAP_IFRAME_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15197.696144885!2d78.8000000!3d18.5000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcd02c00b02f7dd%3A0xc56220fad96b9943!2sMallaram%2C%20Telangana%20505403!5e0!3m2!1sen!2sin!4v1713870000000!5m2!1sen!2sin';

export default function Contact({ locale }: ContactProps) {
  const dictionary = getDictionary(locale);
  const t = getTranslations(dictionary);

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          {dictionary.contact.title}
        </motion.h2>
 
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Panchayat Office */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{dictionary.contact.panchayat}</h3>
                  <p className="text-gray-600 text-sm">Mallaram Village, Telangana</p>
                </div>
              </div>
            </div>
 
            {/* Phone */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{dictionary.contact.phone}</h3>
                  <p className="text-gray-600 text-sm">+91 9989120933, 8008253003</p>
                </div>
              </div>
            </div>
 
            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{dictionary.contact.address}</h3>
                  <p className="text-gray-600 text-sm">Mallaram Village,<br />Telangana, India - 505403</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src={MAP_IFRAME_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mallaram Village Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}