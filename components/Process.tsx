'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    n: 'День 1',
    title: 'Знакомство',
    desc: 'Установочный созвон (60 мин). Узнаём объём операций, текущую систему, провайдера фискальных данных. Подписание соглашения о неразглашении в этот же день.',
  },
  {
    n: 'День 2-5',
    title: 'Подписание договора',
    desc: 'Юристы согласовывают рамочный договор: гарантии доступности, обработка данных, тарифный план. Подписание сторонами.',
  },
  {
    n: 'День 5',
    title: 'Доступ к тестовой среде',
    desc: 'Выдаём корпоративный ключ для тестовой среды. Ваш разработчик получает полную документацию и набор готовых запросов.',
  },
  {
    n: 'День 5-12',
    title: 'Подключение к вашей системе',
    desc: 'Ваша команда подключает наш сервис. Наш инженер на связи. Тестовые сценарии, проверка нестандартных случаев, нагрузочные испытания.',
  },
  {
    n: 'День 13',
    title: 'Перевод на боевой режим',
    desc: 'Переключаем боевой ключ. Первые реальные операции под нашим присмотром. Срочные правки — в течение часа.',
  },
  {
    n: 'День 14-44',
    title: 'Активная поддержка',
    desc: 'Месяц активного сопровождения — отвечаем на каждый вопрос вашей команды. Закрываем последние 5% нестандартных ситуаций. Передаём в стандартный режим поддержки.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            Процесс внедрения
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            От подписания до production —
            <br />
            <span className="text-navy/40">14 рабочих дней.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-200 via-sky-100 to-transparent md:-translate-x-px" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative pl-12 md:pl-0 mb-12 last:mb-0 md:grid md:grid-cols-2 md:gap-12 ${
                i % 2 === 0 ? '' : 'md:[direction:rtl]'
              }`}
            >
              {/* Точка */}
              <div className="absolute left-4 md:left-1/2 top-3 w-3 h-3 -translate-x-1/2 rounded-full bg-sky-500 ring-4 ring-sky-100" />

              <div
                className={`md:[direction:ltr] ${
                  i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'
                }`}
              >
                <div className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest mb-2">
                  {step.n}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-navy/60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
