'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary, getTranslations } from '@/lib/i18n';

interface FacilitiesProps {
  locale: Locale;
}

const facilities = [
  {
    key: 'schools',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4.068 7.465l4.228-4.23-1.414-1.42-4.228 4.23 1.414 1.42z" />
      </svg>
    ),
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    key: 'healthcare',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
  },
  {
    key: 'roads',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    color: 'bg-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    key: 'water',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'bg-cyan-500',
    bgColor: 'bg-cyan-50',
  },
  {
    key: 'electricity',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-yellow-500',
    bgColor: 'bg-yellow-50',
  },
];

export default function Facilities({ locale }: FacilitiesProps) {
  const dictionary = getDictionary(locale);
  const t = getTranslations(dictionary);

  return (
    <section id="facilities" className="py-20 md:py-32 px-4 bg-cream-light relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-primary/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {dictionary.facilities.title}
          </h2>
          <p className="text-earth max-w-2xl mx-auto">
            Our village is equipped with modern amenities to ensure a comfortable life for all residents.
          </p>
          <div className="w-24 h-1 bg-earth mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="flex flex-col items-center text-center p-4 xs:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cream">
                {/* Icon */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${facility.bgColor} flex items-center justify-center text-primary mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="scale-75 md:scale-100">
                    {facility.icon}
                  </div>
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-bold text-earth-dark">
                  {t(`facilities.${facility.key}`)}
                </h3>

                {/* Status indicator */}
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs text-earth">Available</span>
                </div>
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-primary rounded-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}