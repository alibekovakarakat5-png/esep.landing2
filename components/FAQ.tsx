'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const FAQ_DATA = [
  {
    q: 'Что будет если КГД изменит правила?',
    a: 'Все обновления законодательства мы закрываем на своей стороне. В вашей системе ничего менять не нужно. Мы уже прошли реформу 2026 года, изменения в ставке НДС, переход на новый кабинет налогоплательщика — клиенты ничего не заметили.',
  },
  {
    q: 'Нужен ли отдельный договор с КГД или ОФД?',
    a: 'Нет. Все договоры — на нашей стороне. Вы платите только нам, мы платим оператору фискальных данных и работаем с КГД. Это и есть ключевая ценность нашего сервиса.',
  },
  {
    q: 'Можно ли использовать существующую кассу?',
    a: 'Зависит от вашего оператора фискальных данных. Webkassa — да, прозрачная интеграция. Касса24, JusanFiskal, RKeeper — обсуждается индивидуально, мы делаем переходники по запросу. Если кассы нет — можем выпустить новую через Webkassa за 1-2 дня.',
  },
  {
    q: 'Что если у нас не Webkassa, а другой провайдер?',
    a: 'Делаем индивидуальный переходник. Срок — 2-4 недели сверх стандартного внедрения. Стоимость зависит от сложности интеграции. У нас уже есть опыт работы с двумя альтернативными провайдерами.',
  },
  {
    q: 'Где хранятся данные? Можно вынести в свой ЦОД?',
    a: 'По умолчанию — наша инфраструктура в Казахстане (Астана / Алматы). Для крупных корпоративных клиентов доступна установка на ваших серверах с лицензированием — обсуждается индивидуально.',
  },
  {
    q: 'Что если ваш сервис недоступен?',
    a: 'По договору гарантируем доступность 99.9% для тарифа «Бизнес» и «Корпоративный». При нарушении гарантии — компенсация 1-2% от месячного счёта за каждые 0.1% простоя. Мониторинг 24/7, страница статуса, реакция в течение одного часа.',
  },
  {
    q: 'Подойдёт ли для маркетплейса с 100 000+ продавцов?',
    a: 'Да. Архитектура рассчитана на работу с большим количеством клиентов одновременно, с ограничением нагрузки и горизонтальным масштабированием. Для нагрузок 100 000+ операций в сутки выделяется отдельная инфраструктура — отдельные базы данных и серверы.',
  },
  {
    q: 'Как тестировать без реальных данных?',
    a: 'Тестовая среда даётся в день подписания договора. Тестовые ИИН, тестовые БИН, имитация всех ответов от КГД и оператора фискальных данных — без рисков для реальных операций.',
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
