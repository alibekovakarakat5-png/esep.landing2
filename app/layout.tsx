import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Esep для бизнеса — Сервис для платформ под Налоговый кодекс 2026',
  description:
    'Один сервис закрывает все требования нового Налогового кодекса для платформ. Подключение за 14 дней вместо 6 месяцев собственной разработки. Для курьерских служб, маркетплейсов и агрегаторов Казахстана.',
  keywords:
    'Налоговый кодекс 2026, налоговый агент, платформенная экономика, фискальные чеки, самозанятые, курьерская служба, маркетплейс, агрегатор',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Esep для бизнеса — налоговое сопровождение платформ',
    description:
      'Сервис для платформ Казахстана под Налоговый кодекс 2026. Подключение за 14 дней.',
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
