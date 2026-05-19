'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-hero">
      {/* Aurora фоновый эффект */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl aurora-1" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent-green/15 rounded-full blur-3xl aurora-2" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-3xl aurora-3" />
      </div>

      {/* Сетка точек */}
      <div className="absolute inset-0 dot-grid opacity-[0.07]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Badge с НК 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-white/80 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-accent-green" />
            <span className="uppercase tracking-wider">
              Сервис для платформ под Налоговый кодекс 2026
            </span>
          </div>
        </motion.div>

        {/* Заголовок */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] text-balance"
        >
          Один сервис для всех{' '}
          <span className="gradient-text-light">требований нового</span>
          <br />
          Налогового кодекса.
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed text-balance"
        >
          Для курьерских служб, маркетплейсов и агрегаторов Казахстана.
          Подключение за 14 дней. Проверка курьеров, контроль лимита
          300 МРП, выдача фискальных чеков, отчётность в КГД — в одной
          системе.
        </motion.p>

        {/* CTA-кнопки */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-semibold shadow-2xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all"
          >
            Запросить корпоративное демо
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-medium hover:bg-white/5 hover:border-white/30 transition-all"
          >
            Посмотреть 9 сервисов
          </a>
        </motion.div>

        {/* Цифры под hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden glass-dark"
        >
          {[
            { value: '14 дней', label: 'Срок внедрения' },
            { value: '99.9%', label: 'Доступность сервиса' },
            { value: '< 100 мс', label: 'Скорость ответа' },
            { value: '1 договор', label: 'С КГД на всех клиентов' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 bg-navy/40 backdrop-blur-xl text-center"
            >
              <div className="text-2xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Декоративный нижний бордер */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
