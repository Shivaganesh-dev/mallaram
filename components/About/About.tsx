'use client';

import { motion } from 'framer-motion';
import { Locale, getDictionary } from '@/lib/i18n';
import { 
  HiOutlineShieldCheck, 
  HiOutlineUserGroup, 
  HiOutlineCollection, 
  HiOutlineChartBar,
  HiOutlineGlobeAlt,
  HiOutlineScale
} from 'react-icons/hi';

interface AboutProps {
  locale: Locale;
}

export default function About({ locale }: AboutProps) {
  const dictionary = getDictionary(locale);
  const { about } = dictionary;

  const featureIcons = [
    <HiOutlineShieldCheck className="w-8 h-8" />,
    <HiOutlineUserGroup className="w-8 h-8" />,
    <HiOutlineCollection className="w-8 h-8" />,
    <HiOutlineChartBar className="w-8 h-8" />
  ];

  const features = [
    { ...about.features.funds, icon: featureIcons[0] },
    { ...about.features.schemes, icon: featureIcons[1] },
    { ...about.features.ikb, icon: featureIcons[2] },
    { ...about.features.updates, icon: featureIcons[3] }
  ];

  return (
    <section id="about" className="py-24 md:py-36 px-4 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background Subtle Patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-earth/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-primary font-bold tracking-widest uppercase text-xs">
                {about.tagline}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              {about.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="p-6 bg-white/50 backdrop-blur-md rounded-3xl border border-primary/10 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                <HiOutlineGlobeAlt className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-earth-dark/60 font-medium uppercase tracking-wider">Vision</p>
                <p className="text-primary font-bold">Digital Telangana</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Description & Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-earth-dark/80 leading-relaxed font-light italic">
                "{about.description}"
              </p>
              
              <div className="pt-8 border-t border-earth/10 flex flex-col gap-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-1.5 h-12 bg-primary group-hover:h-16 transition-all duration-300 rounded-full" />
                  <div>
                    <h4 className="text-primary font-bold text-lg">{about.leadership}</h4>
                    <p className="text-earth text-sm">Hon'ble Chief Minister</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-1.5 h-12 bg-earth group-hover:h-16 transition-all duration-300 rounded-full" />
                  <div>
                    <h4 className="text-earth-dark font-bold text-lg">{about.sarpanch}</h4>
                    <p className="text-earth text-sm">Village President</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-125 transition-transform duration-500" />
              <HiOutlineScale className="w-12 h-12 mb-6 text-white/50" />
              <p className="text-lg font-medium leading-relaxed">
                {about.vision}
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-white rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-earth-dark/70 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-white/40 backdrop-blur-sm border border-primary/10 rounded-[3rem] text-center"
        >
          <p className="text-lg md:text-2xl font-bold text-primary/80 max-w-4xl mx-auto leading-relaxed">
            {about.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}