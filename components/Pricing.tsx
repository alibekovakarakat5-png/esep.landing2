'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const TIERS = [
  {
    name: 'Старт',
    desc: 'Для малых платформ до 1 000 курьеров',
    setup: '500 000 ₸',
    monthly: '200 000 ₸',
    monthlyHint: '/мес',
    features: [
      '4 живых сервиса (Magic, ИИН, СНР, лимит 300 МРП)',
      '1 000 запросов в день',
      'Email-поддержка, 24h ответ',
      'Стандартная SLA',
      'Sandbox для разработки',
    ],
    cta: 'Подходит для пилота',
    highlight: false,
  },
  {
    name: 'Бизнес',
    desc: 'Для средних платформ 1 000 – 10 000 курьеров',
    setup: '1 500 000 ₸',
    monthly: '800 000 ₸',
    monthlyHint: '/мес',
    features: [
      'Все 9 сервисов',
      '10 000 запросов в день',
      'WhatsApp / Telegram с менеджером, 4h ответ',
      'SLA 99% uptime с компенсацией',
      'Webhook + готовая PDF-отчётность',
      'Кастомные интеграции по запросу',
    ],
    cta: 'Самый популярный',
    highlight: true,
  },
  {
    name: 'Корпоративный',
    desc: 'Для крупных платформ 10K+ и маркетплейсов',
    setup: 'от 3 000 000 ₸',
    monthly: 'от 2 000 000 ₸',
    monthlyHint: '/мес',
    features: [
      'Безлимитное количество запросов',
      'Dedicated менеджер + 24/7 hotline',
      'SLA 99.9% по контракту',
      'Кастомные фичи в нашем roadmap',
      'Квартальные стратегические созвоны',
      'White-label опция',
    ],
    cta: 'Индивидуальный договор',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#FAFCFF] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            Тарифы
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Прозрачные цены.
            <br />
            <span className="text-navy/40">Без скрытых платежей.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 leading-relaxed">
            Setup fee платится один раз — покрывает интеграцию, обучение,
            месяц hand-on поддержки. Дальше — фиксированная подписка по
            объёмам.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 md:p-10 ${
                tier.highlight
                  ? 'bg-navy text-white shadow-2xl shadow-navy/20 scale-100 md:scale-105 z-10 border border-navy'
                  : 'bg-white border border-navy-100'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-500 to-accent-green text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  {tier.cta}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    tier.highlight ? 'text-white' : 'text-navy'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm ${
                    tier.highlight ? 'text-white/60' : 'text-navy/60'
                  }`}
                >
                  {tier.desc}
                </p>
              </div>

              <div
                className={`pb-6 mb-6 border-b ${
                  tier.highlight ? 'border-white/10' : 'border-navy-100'
                }`}
              >
                <div
                  className={`text-xs uppercase tracking-wider mb-1 ${
                    tier.highlight ? 'text-white/40' : 'text-navy/40'
                  }`}
                >
                  Setup (one-time)
                </div>
                <div
                  className={`text-2xl font-bold mb-4 ${
                    tier.highlight ? 'text-white' : 'text-navy'
                  }`}
                >
                  {tier.setup}
                </div>
                <div
                  className={`text-xs uppercase tracking-wider mb-1 ${
                    tier.highlight ? 'text-white/40' : 'text-navy/40'
                  }`}
                >
                  Подписка
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-3xl md:text-4xl font-bold ${
                      tier.highlight ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {tier.monthly}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.highlight ? 'text-white/60' : 'text-navy/60'
                    }`}
                  >
                    {tier.monthlyHint}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-sm ${
                      tier.highlight ? 'text-white/90' : 'text-navy/80'
                    }`}
                  >
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlight ? 'text-accent-green' : 'text-accent-green'
                      }`}
                      strokeWidth={2.5}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all ${
                  tier.highlight
                    ? 'bg-white text-navy hover:bg-white/90'
                    : 'bg-navy text-white hover:bg-navy-700'
                }`}
              >
                Запросить расчёт
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-navy/40">
          Все цены без НДС. Для маркетплейсов с объёмом 100K+ операций
          в месяц — индивидуальный pay-per-transaction тариф.
        </p>
      </div>
    </section>
  );
}
