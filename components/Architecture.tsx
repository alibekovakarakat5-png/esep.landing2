'use client';

import { motion } from 'framer-motion';

export default function Architecture() {
  return (
    <section className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Декор */}
      <div className="absolute inset-0 dot-grid opacity-[0.04]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-white/60 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
            Архитектура
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] text-balance">
            Мы между вами{' '}
            <span className="gradient-text-light">и государством.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Платформа подключается только к нашему сервису. Все договоры
            с КГД, операторами фискальных данных и внешними реестрами
            ведём мы — изменения в законе закрываются на нашей стороне
            без правок в вашей системе.
          </p>
        </motion.div>

        {/* Диаграмма */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-navy-700/50 rounded-3xl border border-white/10 p-6 md:p-12 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Левый блок — клиенты */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-white/40 mb-4 font-bold">
                Ваша платформа
              </div>
              {['Курьерская служба', 'Маркетплейс', 'Агрегатор'].map((x, i) => (
                <motion.div
                  key={x}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium"
                >
                  {x}
                </motion.div>
              ))}
            </div>

            {/* Центр — Esep */}
            <div className="relative">
              {/* Линии-соединители */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line
                  x1="-50" y1="50" x2="50" y2="50"
                  stroke="url(#gradLeft)"
                  strokeWidth="0.5"
                  strokeDasharray="2 1"
                />
                <line
                  x1="50" y1="50" x2="150" y2="50"
                  stroke="url(#gradRight)"
                  strokeWidth="0.5"
                  strokeDasharray="2 1"
                />
                <defs>
                  <linearGradient id="gradLeft" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="100%" stopColor="rgba(14,165,233,0.4)" />
                  </linearGradient>
                  <linearGradient id="gradRight" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(34,197,94,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative mx-auto max-w-[280px] p-6 rounded-2xl bg-gradient-to-br from-sky-500 to-accent-green text-white text-center shadow-2xl shadow-sky-500/30"
              >
                <div className="text-xs uppercase tracking-widest text-white/80 mb-2 font-bold">
                  Esep для бизнеса
                </div>
                <div className="text-2xl font-bold mb-3">api.esepkz.com</div>
                <div className="text-xs text-white/80 leading-relaxed">
                  Один корпоративный ключ.<br />
                  Все требования закона.<br />
                  Доступность 99.9%.
                </div>
              </motion.div>
            </div>

            {/* Правый блок — гос-системы */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-white/40 mb-4 font-bold text-right">
                Государственные системы
              </div>
              {[
                'Кабинет налогоплательщика КГД',
                'Оператор фискальных данных',
                'Реестр налогоплательщиков',
                'Информационная система ЭСФ',
              ].map((x, i) => (
                <motion.div
                  key={x}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium text-right"
                >
                  {x}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm max-w-2xl mx-auto leading-relaxed">
              Вы интегрируетесь один раз. Дальше все изменения в законе и
              требованиях КГД мы закрываем на своей стороне — ваш код не
              трогаем.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
