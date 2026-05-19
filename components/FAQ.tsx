'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'Что будет если КГД изменит правила?',
    a: 'Все обновления законодательства мы закрываем на своей стороне. Ваш код не трогаем. За 4 года Esep пережили реформу 2026 года, изменения в ставке НДС, переход на ИСНА — клиенты ничего не заметили.',
  },
  {
    q: 'Нужен ли отдельный договор с КГД или ОФД?',
    a: 'Нет. Все договоры — на стороне Esep. Вы платите только нам, мы платим Webkassa и работаем с КГД. Это часть нашего value proposition.',
  },
  {
    q: 'Можно ли использовать существующую кассу?',
    a: 'Зависит от ОФД. Webkassa — да, прозрачная интеграция. Касса24, JusanFiskal, RKeeper — обсуждается индивидуально (мы строим адаптеры по запросу). Без кассы — мы можем выпустить вам новую через Webkassa за 1-2 дня.',
  },
  {
    q: 'Что если у нас не Webkassa, а свой ОФД?',
    a: 'Делаем кастомный коннектор. Срок — 2-4 недели сверх стандартного внедрения. Стоимость — индивидуально в зависимости от API ОФД. Уже работали с двумя альтернативными ОФД.',
  },
  {
    q: 'Где хранятся данные? Можем ли вынести в свой ЦОД?',
    a: 'По умолчанию — наша инфраструктура в KZ (Astana / Алматы). Для крупных корпоративных клиентов доступна on-premise установка с лицензированием — обсуждается индивидуально.',
  },
  {
    q: 'Что если ваш сервис упадёт?',
    a: 'SLA по контракту: 99.9% для Бизнес и Корп-тарифа. При нарушении SLA — компенсация 1-2% от месячного счёта за каждые 0.1% downtime. Мониторинг 24/7, статус-страница, escalation внутри одного часа.',
  },
  {
    q: 'Подойдёт ли для маркетплейса с 100 000+ продавцов?',
    a: 'Да. Архитектура multi-tenant с rate-limiting и горизонтальным масштабированием. Для нагрузок 100K+ операций в сутки используется dedicated infrastructure tier — отдельные базы и инстансы.',
  },
  {
    q: 'Как тестировать без production-данных?',
    a: 'Sandbox-среда test.api.esepkz.com даётся в день подписания договора. Тестовые ИИН, тестовые БИН, эмуляция всех ответов КГД и Webkassa — без рисков для реальных операций.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FAFCFF] relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            Вопросы и ответы
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Часто спрашивают.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-navy-100 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-semibold text-navy pr-4">{item.q}</span>
                <Plus
                  className={`w-5 h-5 flex-shrink-0 text-sky-500 transition-transform ${
                    open === i ? 'rotate-45' : ''
                  }`}
                  strokeWidth={2.5}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-navy/70 leading-relaxed">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
