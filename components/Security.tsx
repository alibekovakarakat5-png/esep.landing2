'use client';

import { motion } from 'framer-motion';
import { Lock, Server, FileCheck, KeyRound } from 'lucide-react';

const ITEMS = [
  {
    icon: Lock,
    title: 'Шифрование на каждом уровне',
    text: 'Защищённое соединение TLS 1.3 между вами и нашим сервисом. Шифрование данных в базе. Безопасное хранение паролей. ИИН никогда не появляется в журналах в открытом виде.',
  },
  {
    icon: KeyRound,
    title: 'Изолированные ключи доступа',
    text: 'У каждого клиента — свой корпоративный ключ с настройками сервисов и лимитами. Никакого пересечения данных между клиентами. Полный журнал каждого запроса для аудита.',
  },
  {
    icon: Server,
    title: 'Инфраструктура в Казахстане',
    text: 'Серверы в Астане и Алматы. Резервные копии каждые 6 часов в зашифрованном виде. Все данные хранятся в Республике Казахстан.',
  },
  {
    icon: FileCheck,
    title: 'Готовы к аудиту',
    text: 'Соглашение о неразглашении по умолчанию. Договор об обработке данных — типовой или ваш шаблон. Соответствие Закону 94-V РК «О персональных данных». Подготовка к сертификации ISO 27001.',
  },
];

export default function Security() {
  return (
    <section id="security" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
              Безопасность и SLA
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance mb-6">
              Защита данных
              <br />
              <span className="text-navy/40">enterprise-уровня.</span>
            </h2>
            <p className="text-lg text-navy/60 leading-relaxed mb-8">
              Мы работаем с самым чувствительным типом данных —
              ИИН и финансовые операции. Каждый слой архитектуры
              спроектирован под compliance: банковский, налоговый,
              GDPR-совместимый.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-navy-50">
                <div className="text-3xl font-bold text-navy mb-1">99.9%</div>
                <div className="text-xs text-navy/60">Доступность сервиса</div>
              </div>
              <div className="p-5 rounded-2xl bg-navy-50">
                <div className="text-3xl font-bold text-navy mb-1">&lt;100мс</div>
                <div className="text-xs text-navy/60">Среднее время ответа</div>
              </div>
              <div className="p-5 rounded-2xl bg-navy-50">
                <div className="text-3xl font-bold text-navy mb-1">100%</div>
                <div className="text-xs text-navy/60">Хранение данных в РК</div>
              </div>
              <div className="p-5 rounded-2xl bg-navy-50">
                <div className="text-3xl font-bold text-navy mb-1">6ч</div>
                <div className="text-xs text-navy/60">Резервное копирование</div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl bg-white border border-navy-100 hover:border-navy-200 hover:shadow-lg hover:shadow-navy/5 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                      <Icon className="w-5 h-5 text-navy" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-navy/60 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
