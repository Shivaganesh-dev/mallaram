'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary, getTranslations } from '@/lib/i18n';

interface EventsProps {
  locale: Locale;
}

const events = [
  {
    id: 1,
    title: 'Bonalu Festival',
    description: 'Annual thanksgiving festival dedicated to Goddess Mahakali, featuring traditional rituals, folk dances, and cultural performances.',
    image: 'https://images.unsplash.com/photo-1513175242576-9f5af6fcd91c?w=600&q=80',
    category: 'festivals',
  },
  {
    id: 2,
    title: 'Sankranti Celebration',
    description: 'Harvest festival celebrated with kite flying, traditional foods, and community gatherings.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    category: 'festivals',
  },
  {
    id: 3,
    title: 'Village Sports Day',
    description: 'Annual sports event featuring cricket matches, athletics, and traditional games for all age groups.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    category: 'local',
  },
  {
    id: 4,
    title: 'Cultural Meet',
    description: 'Monthly cultural gathering showcasing local talent in music, dance, and theater performances.',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80',
    category: 'local',
  },
];

export default function Events({ locale }: EventsProps) {
  const dictionary = getDictionary(locale);
  const t = getTranslations(dictionary);

  return (
    <section id="events" className="py-16 md:py-24 px-4 bg-cream-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          {dictionary.events.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Festivals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-earth-dark mb-4">
              {t('events.festivals')}
            </h3>
            <div className="space-y-4">
              {events
                .filter((e) => e.category === 'festivals')
                .map((event) => (
                  <div
                    key={event.id}
                    className="bg-cream rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold text-earth-dark mb-1">{event.title}</h4>
                        <p className="text-sm text-earth">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>

          {/* Local Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-earth-dark mb-4">
              {t('events.localEvents')}
            </h3>
            <div className="space-y-4">
              {events
                .filter((e) => e.category === 'local')
                .map((event) => (
                  <div
                    key={event.id}
                    className="bg-cream rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold text-earth-dark mb-1">{event.title}</h4>
                        <p className="text-sm text-earth">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}