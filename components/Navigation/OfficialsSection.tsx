'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale, getDictionary, getTranslations } from '@/lib/i18n';

interface NavigationProps {
  locale: Locale;
}

const officials = [
  { 
    id: 1, 
    name: 'Shri A. Revanth Reddy', 
    title: 'Hon\'ble Chief Minister', 
    src: '/assets/officials/revanth.jpg', 
    alt: 'Chief Minister of Telangana' 
  },
  { 
    id: 2, 
    name: 'Smt D.Anasuya Seethakka', 
    title: 'Minister of Panchayat Raj & Rural Development', 
    src: '/assets/officials/seethakka.jpg', 
    alt: 'Minister of Panchayat Raj & Rural Development' 
  },
  { 
    id: 3, 
    name: 'Shri Aadi Srinivas', 
    title: 'Hon\'ble MLA, Vemulawada', 
    src: '/assets/officials/aadi-srinivas.jpg', 
    alt: 'MLA Vemulawada' 
  },
  { 
    id: 4, 
    name: 'Smt Garima Agarwal, IAS', 
    title: 'Hon\'ble Collector', 
    src: '/assets/officials/garima-agarwal.jpg', 
    alt: 'District Collector' 
  },
  { 
    id: 5, 
    name: 'Smt Sangam Arpitha', 
    title: 'Sarpanch, Mallaram', 
    src: '/assets/officials/sarpanch.jpg', 
    alt: 'Mallaram Sarpanch' 
  },
];

function OfficialImage({ image, size = 'md' }: { image: typeof officials[0]; size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  const sizeClasses = {
    sm: 'w-10 h-10 md:w-14 md:h-14',
    md: 'w-14 h-14 md:w-20 md:h-20',
    lg: 'w-20 h-20 md:w-28 md:h-28',
    xl: 'w-24 h-24 md:w-36 md:h-36',
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2 group px-2"
    >
      <div className={`${sizeClasses[size]} aspect-square rounded-full bg-white p-1 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)] border-2 border-earth/20 flex items-center justify-center overflow-hidden transform hover:scale-105 transition-all duration-500 group-hover:border-earth/60 group-hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]`}>
        {image.src ? (
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover scale-[1.15] translate-y-[15%]" 
          />
        ) : (
          <div className="bg-earth/5 w-full h-full flex items-center justify-center">
            <span className="text-primary/40 text-[8px] md:text-[10px] font-black text-center px-1 uppercase leading-tight">{image.name}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[9px] md:text-xs text-primary font-black uppercase tracking-[0.15em] text-center mb-0.5 whitespace-nowrap">{image.name}</span>
        <span className="text-[8px] md:text-[10px] text-primary/60 font-bold uppercase tracking-widest text-center whitespace-nowrap">{image.title}</span>
      </div>
    </motion.div>
  );
}

export default function OfficialsSection({ locale }: NavigationProps) {
  return (
    <section className="bg-white py-6 md:py-14 border-b border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-primary"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-earth"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 gap-4 no-scrollbar md:grid md:grid-cols-5 md:gap-x-6 md:pb-0 md:mx-0 md:px-0 scroll-smooth snap-x snap-mandatory">
          {officials.map((official) => (
            <div key={official.id} className="flex-shrink-0 w-[140px] md:w-auto flex justify-center snap-center">
              <OfficialImage image={official} size="lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
