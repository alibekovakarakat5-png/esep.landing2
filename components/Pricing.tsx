'use client';

import { motion } from 'framer-motion';
import { Check, Settings2 } from 'lucide-react';

const TIERS = [
  {
    name: 'Старт',
    desc: 'Для малых платформ до 1 000 курьеров',
    monthly: 'от 200 000',
    monthlyHint: '₸ / мес',
    features: [
      '4 базовых сервиса в стартовом наборе',
      'До 1 000 запросов в день',
      'Поддержка по email, ответ в течение 24 ч',
      'Стандартная гарантия доступности',
      'Тестовая среда для разработчиков',
    ],
    note: 'Подходит для пилота или MVP',
    highlight: false,
  },
  {
    name: 'Бизнес',
    desc: 'Для средних платформ 1 000 – 10 000 курьеров',
    monthly: 'от 800 000',
    monthlyHint: '₸ / мес',
    features: [
      'Любая комбинация из 9 сервисов',
      'До 10 000 запросов в день',
      'Менеджер на связи в WhatsApp/Telegram, ответ за 4 ч',
      'Гарантия доступности 99% с компенсацией',
      'Уведомления о фискализации + PDF-отчёты',
      'Кастомные интеграции по запросу',
    ],
    note: 'Самый частый выбор',
    highlight: true,
  },
  {
    name: 'Корпоративный',
    desc: 'Для крупных платформ 10K+ и маркетплейсов',
    monthly: 'от 2 000 000',
    monthlyHint: '₸ / мес',
    features: [
      'Без ограничений по количеству запросов',
      'Персональный менеджер + горячая линия 24/7',
      'Гарантия доступности 99.9% по контракту',
      'Кастомные функции в наш план разработки',
      'Квартальные стратегические встречи',
      'Опция White-label под ваш бренд',
    ],
    note: 'Индивидуальный договор',
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
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            Тарифы
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Платите только за то,
            <br />
            <span className="text-navy/40">что подключили.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 leading-relaxed">
            Все тарифы индивидуальные. Цены ниже — стартовые ориентиры для
            каждой категории. Финальная стоимость зависит от выбранного набора
            сервисов и количества операций в месяц.
          </p>
        </motion.div>

        {/* Информационный блок про индивидуальную конфигурацию */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16 p-5 rounded-2xl bg-white border border-sky-100 flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
            <Settings2 className="w-5 h-5 text-sky-600" strokeWidth={2} />
          </div>
          <div className="text-sm text-navy/70 leading-relaxed">
            <b className="text-navy">Конфигуратор под задачу.</b> На созвоне мы
            подбираем набор сервисов под ваш кейс: курьерская доставка,
            маркетплейс, такси, фриланс-платформа. Не платите за то, что не
            используете.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                tier.highlight
                  ? 'bg-navy text-white shadow-2xl shadow-navy/20 scale-100 md:scale-105 z-10 border border-navy'
                  : 'bg-white border border-navy-100'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-500 to-accent-green text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  Самый популярный
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
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span
                    className={`text-4xl md:text-5xl font-bold ${
                      tier.highlight ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {tier.monthly}
                  </span>
                  <span
                    className={`text-base font-semibold ${
                      tier.highlight ? 'text-white/80' : 'text-navy/70'
                    }`}
                  >
                    {tier.monthlyHint}
                  </span>
                </div>
                <p
                  className={`text-xs mt-2 ${
                    tier.highlight ? 'text-white/40' : 'text-navy/40'
                  }`}
                >
                  Точная цена — после конфигурации сервисов
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-sm ${
                      tier.highlight ? 'text-white/90' : 'text-navy/80'
                    }`}
                  >
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-green"
                      strokeWidth={2.5}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div
                  className={`text-xs text-center mb-3 uppercase tracking-wider font-bold ${
                    tier.highlight ? 'text-white/40' : 'text-navy/40'
                  }`}
                >
                  {tier.note}
                </div>
                <a
                  href="#cta"
                  className={`block w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all ${
                    tier.highlight
                      ? 'bg-white text-navy hover:bg-white/90'
                      : 'bg-navy text-white hover:bg-navy-700'
                  }`}
                >
                  Получить индивидуальное предложение
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center space-y-2">
          <p className="text-sm text-navy/60">
            Все цены без НДС. Для крупных объёмов (100 000+ операций в месяц) —
            обсуждаем тариф per-transaction.
          </p>
          <p className="text-xs text-navy/40">
            Внедрение, обучение команды и первый месяц поддержки — без
            дополнительной платы при заключении договора от 6 месяцев.
          </p>
        </div>
      </div>
    </section>
  );
}
