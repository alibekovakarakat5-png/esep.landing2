# Esep Enterprise — Landing для крупных клиентов

Премиальный лендинг для корпоративных клиентов: курьерских платформ,
маркетплейсов, агрегаторов Казахстана.

**Стек:** Next.js 14 · React 18 · TypeScript · Tailwind CSS · Framer Motion

---

## 🚀 Деплой на Vercel — 3 шага (10 минут)

### Шаг 1 — создать репозиторий на GitHub

```bash
cd C:\Users\USER\Desktop\esep\enterprise-landing
git init
git add .
git commit -m "feat: enterprise landing v1"
```

Создай новый репо на GitHub (например `esep-enterprise-landing`),
скопируй URL и:

```bash
git remote add origin https://github.com/alibekovakarakat5-png/esep-enterprise-landing.git
git push -u origin main
```

### Шаг 2 — подключить Vercel

1. Открой https://vercel.com → войди через GitHub
2. New Project → выбрать `esep-enterprise-landing`
3. Framework: Next.js (определит автоматически)
4. Build command: `npm run build` (по умолчанию)
5. Deploy

Vercel задеплоит за 2-3 минуты. Получишь URL типа
`esep-enterprise-landing.vercel.app`.

### Шаг 3 — подключить домен

В Vercel → Project Settings → Domains:
- Добавь `enterprise.esepkz.com` (или другой поддомен)
- В DNS-настройках esepkz.com на Vercel укажи CNAME:
  - Type: CNAME
  - Name: enterprise
  - Value: cname.vercel-dns.com

Через ~10 минут заработает.

---

## 🛠 Локальный запуск

```bash
cd enterprise-landing
npm install
npm run dev
# → http://localhost:3000
```

---

## 📁 Структура

```
enterprise-landing/
├── app/
│   ├── layout.tsx          # Корневой layout + шрифты + метатеги
│   ├── page.tsx            # Главная страница (просто импортирует секции)
│   └── globals.css         # Tailwind + утилиты + анимации
│
├── components/
│   ├── Nav.tsx             # Шапка с прозрачным фоном → glass при скролле
│   ├── Hero.tsx            # Главный экран с aurora-эффектом + 4 stats
│   ├── Marquee.tsx         # Бегущая лента терминов
│   ├── Problem.tsx         # 4 боли клиента
│   ├── Solution.tsx        # 3 ключевых УТП с цифрами
│   ├── Services.tsx        # 9 карточек сервисов
│   ├── Architecture.tsx    # Диаграмма «клиент → Esep → гос-системы»
│   ├── Process.tsx         # Timeline внедрения (6 шагов)
│   ├── Pricing.tsx         # 3 тарифа (Старт / Бизнес / Корп)
│   ├── Security.tsx        # Безопасность + SLA + 4 stats
│   ├── FAQ.tsx             # 8 вопросов с accordion-анимацией
│   ├── CTA.tsx             # Финальная форма заявки
│   └── Footer.tsx          # Контакты + ссылки
│
├── tailwind.config.ts      # Брендовая палитра + анимации
├── tsconfig.json           # TypeScript конфиг с @/ aliases
├── next.config.mjs         # Next.js конфиг + optimizePackageImports
└── package.json
```

---

## 🎨 Брендовая палитра

```
navy:        #0F2B46  (основной тёмно-синий)
navy-700:    #1E3A5F  (градиенты)
navy-50:     #F0F4F8  (светлый фон)
sky-500:     #0EA5E9  (акцент-голубой)
accent-green:#22C55E  (успех)
accent-amber:#F59E0B  (предупреждение)
```

Светлый фон страницы: `#FAFCFF` (почти белый с голубым оттенком).

---

## ✨ Что особенного в анимациях

- **Aurora-эффект** в Hero — три плывущих цветных пятна (CSS keyframes)
- **Marquee** — бесконечная бегущая строка с градиентными краями
- **Scroll-reveal** — каждая секция появляется с задержкой через Framer Motion
- **Stagger animations** — карточки появляются по очереди
- **Glass-эффект** на навигации при скролле (backdrop-filter)
- **Аккордеон-FAQ** с плавным height-animation
- **Hover-states** на каждой карточке — lift + glow + accent border
- **Number animations** в stats (можно добавить framer-motion `useInView` + counter)

---

## 🔌 Что нужно подключить позже (TODO)

1. **API формы** `/api/leads` — сейчас в `CTA.tsx` стоит фейковый
   `setTimeout(800)`. Подключить либо к Esep backend (`https://api.esepkz.com/api/leads`)
   через CORS, либо к Vercel Edge Function, либо через Formspree.

2. **Аналитика** — Google Analytics 4 или Plausible. Добавить в `layout.tsx`.

3. **Открытые графы** — добавить `og:image` (картинку 1200x630 для соцсетей).

4. **Sitemap + robots.txt** — для SEO.

5. **Favicon** — пока стандартный Next.js, заменить на брендовый.

---

## 📝 Контент-копи (для редактирования)

Все тексты внутри компонентов как константы массивов:
- `Problem.tsx` → `PROBLEMS`
- `Services.tsx` → `SERVICES`
- `Pricing.tsx` → `TIERS`
- `Process.tsx` → `STEPS`
- `Security.tsx` → `ITEMS`
- `FAQ.tsx` → `FAQ_DATA`

Меняй текст прямо в массивах — пересборка не нужна, Vercel автоматически
задеплоит при `git push`.

---

## 🏗 Что добавить, когда будут реальные кейсы

1. **Логотипы клиентов** в Hero/Marquee (заменить мокап-список)
2. **Case studies** — отдельная страница `/cases` с реальными цифрами
3. **Тестимониалы** — карусель с цитатами
4. **Calculator** — интерактивный калькулятор «сколько вы платите
   сейчас vs сколько сэкономите с Esep»
5. **Live demo** — iframe с `https://api.esepkz.com/platform.html`

---

## 🧪 Проверка перед деплоем

```bash
npm run build  # должно собраться без ошибок
npm run start  # production-сборка локально
```

Если есть ошибки TypeScript — обычно это путь импорта `@/components/...`,
проверь `tsconfig.json paths`.
