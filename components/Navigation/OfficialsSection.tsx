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
    name: 'Shri Jishnu Dev Varma', 
    title: 'Hon\'ble Governor', 
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Telangana_Governor_Jishnu_Dev_Varma%2C_portrait.png', 
    alt: 'Governor of Telangana' 
  },
  { 
    id: 2, 
    name: 'Shri A. Revanth Reddy', 
    title: 'Hon\'ble Chief Minister', 
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/A._Revanth_Reddy_official_portrait.png', 
    alt: 'Chief Minister of Telangana' 
  },
  { 
    id: 3, 
    name: 'Shri Mallu Bhatti Vikramarka', 
    title: 'Hon\'ble Deputy CM', 
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Mallu_Bhatti_Vikramarka_Portrait.png', 
    alt: 'Deputy Chief Minister' 
  },
  { 
    id: 4, 
    name: 'Shri Muzammil Khan', 
    title: 'Collector', 
    src: '', 
    alt: 'District Collector' 
  },
  { 
    id: 5, 
    name: 'Gram Panchayat', 
    title: 'Sarpanch', 
    src: '', 
    alt: 'Mallaram Sarpanch' 
  },
];

function OfficialImage({ image, size = 'md' }: { image: typeof officials[0]; size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  const sizeClasses = {
    sm: 'w-12 h-12 md:w-14 md:h-14',
    md: 'w-16 h-16 md:w-20 md:h-20',
    lg: 'w-24 h-24 md:w-28 md:h-28',
    xl: 'w-32 h-32 md:w-36 md:h-36',
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-3 group px-4"
    >
      <div className={`${sizeClasses[size]} rounded-full bg-white p-1.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] border-4 border-earth/20 flex items-center justify-center overflow-hidden transform hover:scale-110 transition-all duration-500 group-hover:border-earth/60 group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)]`}>
        {image.src ? (
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
        ) : (
          <div className="bg-earth/5 w-full h-full flex items-center justify-center">
            <span className="text-primary/40 text-[10px] font-black text-center px-2 uppercase">{image.name}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[10px] md:text-xs text-primary font-black uppercase tracking-[0.2em] text-center mb-0.5">{image.title}</span>
        <span className="text-[9px] md:text-[10px] text-primary/60 font-bold uppercase tracking-widest">{image.name}</span>
      </div>
    </motion.div>
  );
}

export default function OfficialsSection({ locale }: NavigationProps) {
  return (
    <section className="bg-white py-14 border-b border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-primary"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-earth"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-6 items-start">
          {officials.map((official) => (
            <div key={official.id} className="flex justify-center">
              <OfficialImage image={official} size="xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
