'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary } from '@/lib/i18n';
import Image from 'next/image';

interface GalleryProps {
  locale: Locale;
}

// Gallery placeholder images
const galleryImages = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Mallaram Gallery 1' },
  { src: '/images/gallery/gallery-2.jpg', alt: 'Mallaram Gallery 2' },
  { src: '/images/gallery/gallery-3.jpg', alt: 'Mallaram Gallery 3' },
  { src: '/images/gallery/gallery-4.jpg', alt: 'Mallaram Gallery 4' },
  { src: '/images/gallery/gallery-5.jpg', alt: 'Mallaram Gallery 5' },
  { src: '/images/gallery/gallery-6.jpg', alt: 'Mallaram Gallery 6' },
  { src: '/images/gallery/gallery-7.jpg', alt: 'Mallaram Gallery 7' },
  { src: '/images/gallery/gallery-8.jpg', alt: 'Mallaram Gallery 8' },
  { src: '/images/gallery/gallery-9.jpg', alt: 'Mallaram Gallery 9' },
  { src: '/images/gallery/gallery-10.jpg', alt: 'Mallaram Gallery 10' },
];

export default function Gallery({ locale }: GalleryProps) {
  const dictionary = getDictionary(locale);

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          {dictionary.gallery.title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}