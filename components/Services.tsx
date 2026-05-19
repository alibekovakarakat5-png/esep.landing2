'use client';

import { motion } from 'framer-motion';
import {
  Zap, Search, Users, ShieldCheck, XCircle, Receipt, TrendingUp, Database, Heart,
} from 'lucide-react';

const SERVICES = [
  {
    n: '01', icon: Zap, status: 'live', flag: 'ГЛАВНЫЙ',
    title: 'Выплата курьеру',
    sub: 'Универсальный сервис. Один запрос = все проверки + чек.',
    detail: 'Передайте ИИН курьера, сумму и номер заказа. За миллисекунды: проверка ИИН, статуса, контроль месячного лимита, выдача фискального чека. В ответ — однозначное решение: «можно платить», «осторожно» или «запрещено» с указанием причины.',
    code: 'Главный сервис',
  },
  {
    n: '02', icon: Search, status: 'live',
    title: 'Проверка СНР и ОКЭД',
    sub: 'Реестр налогоплательщиков КГД и stat.gov.kz в одном запросе.',
    detail: 'Введите БИН или ИИН — получите наименование, ОКЭД, тип регистрации, дату начала деятельности, налоговый орган. Источник — официальные данные КГД с запасным каналом через структуру БИН.',
    code: 'Поиск налогоплательщика',
  },
  {
    n: '03', icon: Users, status: 'live',
    title: 'Статус ИП / ФЛ / ТОО',
    sub: 'Тип юридической формы из официального реестра.',
    detail: 'Определяем форму: ИП / самозанятый / ТОО / АО / филиал / физлицо. Критично для проверки прав платформы платить курьеру как самозанятому.',
    code: 'Тип юридической формы',
  },
  {
    n: '04', icon: ShieldCheck, status: 'live',
    title: 'Проверка ИИН',
    sub: 'Алгоритмическая проверка контрольной цифры.',
    detail: 'Математическая проверка по Постановлению Правительства РК № 853 от 26.08.2013. Возвращает: правильность, дату рождения, пол, век, серию. Без обращения к сети, мгновенно.',
    code: 'Проверка контрольной цифры',
  },
  {
    n: '05', icon: XCircle, status: 'live',
    title: 'Отмена заказа',
    sub: 'Аннулирование до выдачи чека курьером.',
    detail: 'Если заказ не доставлен и чек ещё не пробит — отменяем без последствий. Откатываем учёт лимита. Если чек уже выдан — оформляем возвратный чек через КГД.',
    code: 'Отмена заказа',
  },
  {
    n: '06', icon: Receipt, status: 'live',
    title: 'Статус фискального чека',
    sub: 'QR-код и фискальный номер от КГД.',
    detail: 'После пробития чека курьером оператор фискальных данных отправляет нам уведомление с фискальным номером и временем. Вы получаете готовую ссылку на QR-код от КГД для приложения к договору.',
    code: 'Получение статуса',
  },
  {
    n: '07', icon: TrendingUp, status: 'live',
    title: 'Лимит 300 МРП в месяц',
    sub: 'Контроль превышения у самозанятого в реальном времени.',
    detail: 'Накопительный счётчик доходов каждого курьера. При приближении к лимиту — предупреждение. При попытке превысить — запрет с подсказкой «курьер должен зарегистрироваться как ИП».',
    code: 'Контроль лимита',
  },
  {
    n: '08', icon: Database, status: 'demo',
    title: 'Реестр самозанятых',
    sub: 'Прямой доступ к реестру КГД ИСНА.',
    detail: 'Поиск зарегистрированных самозанятых по ИИН и регионам. Проверка статуса до приёма курьера на платформу. Подключение через договор с КГД (в процессе оформления).',
    code: 'Реестр самозанятых',
  },
  {
    n: '09', icon: Heart, status: 'demo',
    title: 'Льготы самозанятых',
    sub: 'Категории: молодёжь, многодетные, инвалиды.',
    detail: 'Для каждого курьера — список применимых льгот, влияющих на расчёт удержаний. Источник: КГД ИСНА. Используется при формировании корректной налоговой базы.',
    code: 'Проверка льгот',
  },
];

const statusStyles: Record<string, { badge: string; text: string; label: string }> = {
  live: {
    badge: 'bg-accent-green/10 border-accent-green/20',
    text: 'text-accent-green',
    label: 'БОЕВОЙ',
  },
  demo: {
    badge: 'bg-accent-amber/10 border-accent-amber/20',
    text: 'text-accent-amber',
    label: 'СКОРО',
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            9 сервисов
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1] text-balance">
            Каждое требование закона — <span className="text-navy/40">отдельный сервис.</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 leading-relaxed">
            Можно использовать сервисы по отдельности или вызывать
            универсальный сервис <b>«Выплата курьеру»</b>, который объединяет
            7 проверок в один запрос с ответом за миллисекунды.
          </p>
        </motion.div>

        {/* Grid карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const styles = statusStyles[s.status];
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative p-6 rounded-3xl bg-white border border-navy-100 hover:border-navy-200 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500 overflow-hidden"
              >
                {/* Декоративный градиент при hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-sky-50/0 group-hover:from-sky-50/40 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="relative">
                  {/* Header: номер + статус */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-navy/30 tracking-wider">
                        {s.n}
                      </span>
                      {s.flag && (
                        <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-sky-500 to-accent-green text-white text-[10px] font-bold uppercase tracking-wider">
                          {s.flag}
                        </span>
                      )}
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full ${styles.badge} ${styles.text} text-[10px] font-bold uppercase tracking-wider border`}
                    >
                      {styles.label}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-100 transition-all">
                    <Icon className="w-5 h-5 text-sky-600" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-navy/60 mb-4 leading-relaxed">
                    {s.sub}
                  </p>

                  {/* Detail при hover (или всегда?) */}
                  <p className="text-xs text-navy/50 leading-relaxed mb-5 line-clamp-3">
                    {s.detail}
                  </p>

                  {/* Endpoint code */}
                  <div className="font-mono text-[11px] text-navy-400 bg-navy-50/50 px-3 py-2 rounded-lg border border-navy-100">
                    {s.code}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
