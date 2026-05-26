import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import IinValidatorForm from './IinValidatorForm';

export const metadata: Metadata = {
  title: 'Онлайн ИИН-валидатор — Esep для бизнеса',
  description:
    'Бесплатная мгновенная проверка ИИН Казахстана: контрольная цифра, дата рождения, пол. Алгоритм по Постановлению РК № 853. Для платформ — есть API.',
  keywords:
    'ИИН валидатор, проверка ИИН, ИИН Казахстана, контрольная цифра ИИН, ПП 853, как проверить ИИН',
  openGraph: {
    title: 'Онлайн ИИН-валидатор — мгновенная проверка',
    description:
      'Бесплатная проверка ИИН по официальному алгоритму ПП РК № 853. Без отправки на сервер.',
    type: 'website',
  },
};

export default function IinValidatorPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 px-6">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm text-sky-600 font-semibold uppercase tracking-widest mb-3">
            Бесплатный инструмент
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Онлайн-валидатор ИИН
          </h1>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto">
            Мгновенная проверка по официальному алгоритму{' '}
            <strong>Постановления РК № 853 от 26.08.2013</strong>. Без отправки
            данных на сервер — всё считается у вас в браузере.
          </p>
        </header>

        <IinValidatorForm />

        {/* Что мы проверяем */}
        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-navy mb-6">Что проверяет валидатор</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { t: 'Длина и формат', d: 'Ровно 12 цифр, без пробелов и других символов.' },
              { t: 'Месяц и день рождения', d: 'Месяц 01-12, день 01-31. Невозможные даты — отклоняются.' },
              { t: 'Код века и пола', d: '7-я цифра: 1/2 — XX век, 3/4 — XXI век, 5/6 — XXII (с fallback на XXI для текущих ИИН).' },
              { t: 'Контрольная цифра', d: 'Алгоритм с двумя проходами весовых коэффициентов по ПП № 853.' },
              { t: 'Дата не в будущем', d: 'Расшифрованная дата рождения не может быть позже сегодняшнего дня.' },
              { t: 'Расшифровка', d: 'Возвращает дату рождения, пол и порядковый номер из ИИН.' },
            ].map((f) => (
              <div key={f.t} className="p-5 rounded-xl bg-white border border-slate-200">
                <h3 className="font-bold text-navy mb-1">{f.t}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA на API */}
        <section className="max-w-3xl mx-auto mt-16">
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-navy to-slate-900 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Нужна валидация ИИН в вашем бэкенде?
            </h2>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-3">
              Тот же алгоритм есть как REST API эндпоинт{' '}
              <code className="px-2 py-0.5 rounded bg-white/10 text-white">
                POST /api/platform/iin/validate
              </code>
              {' '}— в составе Esep Platform API.
            </p>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-6">
              Плюс: проверка статуса налогоплательщика (ИП / самозанятый / ТОО),
              контроль лимита 300 МРП в месяц, фискализация выплат, аудит-журнал.
              Один HTTP-вызов на каждую выплату исполнителю — закрывает требования
              НК РК 2026 для платформ.
            </p>
            <a
              href="/#cta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy font-bold hover:scale-105 transition-transform"
            >
              Узнать про Platform API →
            </a>
          </div>
        </section>

        {/* Технические детали для разработчиков */}
        <section className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-navy mb-4">Алгоритм коротко</h2>
          <p className="text-navy-700 leading-relaxed mb-4">
            Берём первые 11 цифр, умножаем каждую на вес из ряда{' '}
            <code className="px-1.5 py-0.5 rounded bg-slate-100 text-sm">[1..11]</code>,
            суммируем, берём по модулю 11. Результат — контрольная цифра, сравниваем
            с 12-й цифрой ИИН.
          </p>
          <p className="text-navy-700 leading-relaxed mb-4">
            Если результат равен 10 — пересчитываем с альтернативными весами{' '}
            <code className="px-1.5 py-0.5 rounded bg-slate-100 text-sm">[3,4,5,6,7,8,9,10,11,1,2]</code>.
            Если снова 10 — ИИН формально недействителен.
          </p>
          <p className="text-navy-700 leading-relaxed">
            Источник:{' '}
            <a
              href="https://adilet.zan.kz/rus/docs/P1300000853"
              className="text-sky-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Постановление Правительства РК № 853 от 26.08.2013
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
