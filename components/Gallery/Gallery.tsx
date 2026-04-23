'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary } from '@/lib/i18n';
import Image from 'next/image';

interface GalleryProps {
  locale: Locale;
}

// Gallery placeholder images
const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1513175242576-9f5af6fcd91c?w=600&q=80', alt: 'Village landscape' },
  { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80', alt: 'Fields' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', alt: 'Mountains' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', alt: 'Nature' },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80', alt: 'Night sky' },
  { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80', alt: 'Sunrise' },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80', alt: 'Valley' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', alt: 'Forest' },
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