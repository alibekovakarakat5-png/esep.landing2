'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Check, MessageCircle, Phone } from 'lucide-react';

const PHONE = '+7 705 991 47 89';
const PHONE_TEL = '+77059914789';
const WHATSAPP_TEXT = encodeURIComponent(
  'Здравствуйте! Интересует подключение к Esep для бизнеса.',
);
const WHATSAPP_URL = `https://wa.me/77059914789?text=${WHATSAPP_TEXT}`;

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);

    // TODO: подключить реальный POST на esep API когда будет endpoint
    // await fetch('/api/leads', { method: 'POST', body: data });
    await new Promise((r) => setTimeout(r, 800));

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      id="cta"
      className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden"
    >
      {/* Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl aurora-1" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-green/15 rounded-full blur-3xl aurora-2" />
      </div>
      <div className="absolute inset-0 dot-grid opacity-[0.05]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] text-balance">
            Готовы быть налоговым агентом
            <br />
            <span className="gradient-text-light">без боли?</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Свяжитесь с менеджером — обсудим вашу задачу и пришлём
            индивидуальное предложение в течение одного рабочего дня.
          </p>
        </motion.div>

        {/* Главный путь — WhatsApp + телефон */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-accent-green hover:bg-emerald-600 text-white font-semibold shadow-2xl shadow-accent-green/20 hover:shadow-accent-green/40 hover:scale-[1.01] transition-all"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
            <span>Написать в WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="group flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            <span>{PHONE}</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 text-white/40 text-xs">
            <span className="h-px w-12 bg-white/10" />
            или оставьте заявку — менеджер свяжется сам
            <span className="h-px w-12 bg-white/10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-dark rounded-3xl p-6 md:p-10"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-green/20 mb-4">
                <Check className="w-8 h-8 text-accent-green" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Заявка получена
              </h3>
              <p className="text-white/60">
                Наш менеджер свяжется с вами в течение одного рабочего дня
                по указанному контакту.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field name="company" label="Компания" required placeholder="ТОО Курьерская служба" />
              <Field name="contact" label="Контактное лицо" required placeholder="Имя Фамилия" />
              <Field name="email" type="email" label="Email" required placeholder="ceo@company.kz" />
              <Field name="phone" label="Телефон" required placeholder="+7 777 000 00 00" />

              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-wider text-white/40 font-bold mb-2">
                  Размер бизнеса
                </label>
                <select
                  name="size"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors"
                >
                  <option value="" className="bg-navy">Выберите...</option>
                  <option value="<1000" className="bg-navy">До 1 000 курьеров / продавцов</option>
                  <option value="1k-10k" className="bg-navy">1 000 – 10 000</option>
                  <option value="10k-100k" className="bg-navy">10 000 – 100 000</option>
                  <option value="100k+" className="bg-navy">Более 100 000</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-wider text-white/40 font-bold mb-2">
                  Расскажите кратко о задаче
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Какие проблемы хотите решить? Какой у вас сейчас ОФД?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="md:col-span-2 group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-semibold shadow-2xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Отправляем...' : 'Получить корпоративное предложение'}
                {!loading && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>

              <p className="md:col-span-2 text-xs text-white/40 text-center">
                Нажимая «Получить», вы соглашаетесь на обработку персональных
                данных согласно Закону РК 94-V. NDA подпишем до первого
                созвона.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  name,
  type = 'text',
  label,
  required,
  placeholder,
}: {
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-white/40 font-bold mb-2">
        {label} {required && <span className="text-sky-400">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors"
      />
    </div>
  );
}
