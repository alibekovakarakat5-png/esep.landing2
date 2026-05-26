import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Блог — Esep для бизнеса',
  description:
    'Compliance-разборы для платформ Казахстана: НК 2026, платформенная занятость, фискализация, ИИН-валидация, выплаты самозанятым.',
  keywords:
    'НК 2026, compliance, курьерская служба, таксопарк, маркетплейс, фискальный чек, 300 МРП, статьи',
};

interface Article {
  slug: string;
  title: string;
  description: string;
  readMinutes: number;
  category: string;
  publishedAt: string;
}

// По мере появления — добавляем сюда. Порядок: новые сверху.
const articles: Article[] = [
  {
    slug: '12-punktov-compliance-kuryerka-2026',
    title: 'Курьерская служба и НК РК 2026: 12-пунктный чек-лист соответствия',
    description:
      'Конкретный список из 12 пунктов, которые надо закрыть к 1 июля 2026, чтобы избежать штрафов 15-50 МРП за каждую неправильно оформленную выплату курьеру.',
    readMinutes: 8,
    category: 'Курьерские службы',
    publishedAt: '2026-05-25',
  },
];

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 px-6">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm text-sky-600 font-semibold uppercase tracking-widest mb-3">
            Блог
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Compliance-разборы для платформ
          </h1>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto">
            НК РК 2026, платформенная занятость, фискализация, выплаты самозанятым.
            Без воды — конкретные пункты для CFO и финдиректора.
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="block p-7 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-3 text-xs text-navy-400">
                <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-medium">
                  {a.category}
                </span>
                <span>·</span>
                <span>{a.readMinutes} мин чтения</span>
                <span>·</span>
                <span>{new Date(a.publishedAt).toLocaleDateString('ru-KZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-2 leading-tight">
                {a.title}
              </h2>
              <p className="text-navy-500 text-base leading-relaxed">{a.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sky-600 font-semibold text-sm">
                Читать статью
                <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-20 p-8 rounded-2xl bg-gradient-to-br from-navy to-slate-900 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Нужна консультация прицельно?</h3>
          <p className="text-slate-200 mb-6">
            15-минутный звонок без обязательств — разберём ваш конкретный кейс
            и покажем, как закрываются compliance-пункты одним API.
          </p>
          <a
            href="tel:+77059914789"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy font-semibold hover:scale-105 transition-transform"
          >
            +7 705 991 47 89
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
