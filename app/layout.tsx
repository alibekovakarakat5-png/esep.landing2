import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Esep Enterprise — Compliance Infrastructure для платформенной экономики',
  description:
    'Один API закрывает обязательства налогового агента по НК РК 2026. Внедрение за 2 недели вместо 6 месяцев собственной разработки. Для курьерских служб, маркетплейсов и агрегаторов Казахстана.',
  keywords:
    'НК РК 2026, налоговый агент, платформенная экономика, фискализация, самозанятые, compliance API, курьерская служба, маркетплейс',
  openGraph: {
    title: 'Esep Enterprise — Compliance Infrastructure',
    description: 'API для compliance платформ по НК РК 2026',
    type: 'website',
    locale: 'ru_KZ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
