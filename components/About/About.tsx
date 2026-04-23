'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary, getTranslations } from '@/lib/i18n';

interface AboutProps {
  locale: Locale;
}

const aboutImage = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80';

export default function About({ locale }: AboutProps) {
  const dictionary = getDictionary(locale);
  const t = getTranslations(dictionary);

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              {dictionary.about.title}
            </h2>
            <p className="text-lg text-earth-dark leading-relaxed mb-6">
              {dictionary.about.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-earth">Smart Village Recognition</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-earth">Rich Cultural Heritage</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-earth">Natural Beauty</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Mallaram Village"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}