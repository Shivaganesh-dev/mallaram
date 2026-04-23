'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary, getTranslations } from '@/lib/i18n';

interface AboutProps {
  locale: Locale;
}

const aboutImages = [
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80',
];

const highlights = [
  { icon: '🏆', text: 'Smart Village Recognition', subtext: 'Government Certified' },
  { icon: '🎭', text: 'Rich Cultural Heritage', subtext: 'Telangana Traditions' },
  { icon: '🌿', text: 'Natural Beauty', subtext: 'Scenic Landscapes' },
  { icon: '🤝', text: 'Community Spirit', subtext: 'United Village' },
];

export default function About({ locale }: AboutProps) {
  const dictionary = getDictionary(locale);
  const t = getTranslations(dictionary);

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {dictionary.about.title}
          </h2>
          <div className="w-24 h-1 bg-earth mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={aboutImages[0]}
                    alt="Mallaram Village"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={aboutImages[1]}
                    alt="Village Life"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-earth/10 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-earth-dark leading-relaxed mb-8">
              {dictionary.about.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-earth-dark text-sm">{item.text}</h4>
                    <p className="text-xs text-earth">{item.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}