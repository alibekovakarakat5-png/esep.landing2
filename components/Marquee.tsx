'use client';

import { motion } from 'framer-motion';

const PARTNERS = [
  'Закон 214-VIII',
  'Налоговый кодекс 2026',
  'Кабинет налогоплательщика ИСНА',
  'Платформенная экономика',
  'Реестр налогоплательщиков',
  'Лимит 300 МРП',
  'Самозанятые',
  'Таксопарки',
  'Курьерские службы',
  'Налоговый агент',
  'Фискальные чеки',
];

export default function Marquee() {
  return (
    <section className="py-12 border-y border-navy-100 bg-white/50 backdrop-blur overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-navy-400 font-semibold">
          Соответствие законодательству • Технологический стек
        </p>
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((item, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold text-navy/20 flex-shrink-0 tracking-tight"
            >
              {item}
            </span>
          ))}
        </motion.div>
        {/* Градиентные края */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFCFF] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAFCFF] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
