'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-accent-green flex items-center justify-center shadow-lg shadow-sky-500/20 transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-lg">E</span>
            </div>
          </div>
          <div>
            <div className="font-bold text-navy text-lg leading-tight">Esep</div>
            <div className="text-[10px] uppercase tracking-widest text-navy-400 font-semibold leading-tight">
              Для бизнеса
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-navy-500">
          <a href="/#services" className="hover:text-navy transition-colors">
            Сервисы
          </a>
          <a href="/#process" className="hover:text-navy transition-colors">
            Внедрение
          </a>
          <a href="/#pricing" className="hover:text-navy transition-colors">
            Тарифы
          </a>
          <a href="/#security" className="hover:text-navy transition-colors">
            Безопасность
          </a>
          <a href="/blog" className="hover:text-navy transition-colors">
            Статьи
          </a>
          <a href="/#faq" className="hover:text-navy transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="tel:+77059914789"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-navy text-sm font-semibold hover:bg-navy-50 transition-all"
          >
            +7 705 991 47 89
          </a>
          <a
            href="/#cta"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-700 transition-all shadow-lg shadow-navy/20 hover:shadow-navy/40"
          >
            Связаться
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
