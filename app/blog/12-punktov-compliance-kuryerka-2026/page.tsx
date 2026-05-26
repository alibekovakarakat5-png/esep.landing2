import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title:
    'Курьерская служба и НК РК 2026: 12-пунктный чек-лист — Esep для бизнеса',
  description:
    '12 пунктов compliance к 1 июля 2026: фискализация каждой выплаты, лимит 300 МРП, удержания соцплатежей, аудит-журнал. Для CFO и главбуха курьерской службы Казахстана.',
  keywords:
    'НК 2026, курьерская служба, compliance, фискальный чек, 300 МРП, самозанятые, платформенная занятость, штрафы за нефискализацию',
  openGraph: {
    title: 'Курьерская служба и НК РК 2026: 12-пунктный чек-лист',
    description:
      '12 пунктов compliance к 1 июля 2026 для курьерских служб Казахстана.',
    type: 'article',
    publishedTime: '2026-05-25T00:00:00Z',
  },
};

// Утилитки стилей для повторного использования
const H2 = ({ n, children }: { n: number; children: React.ReactNode }) => (
  <h2 className="flex items-start gap-4 mt-12 mb-4 text-2xl md:text-3xl font-bold text-navy scroll-mt-24">
    <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-accent-green text-white text-base font-bold">
      {n}
    </span>
    <span className="pt-1">{children}</span>
  </h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-navy-700 text-base md:text-lg leading-relaxed mb-4">
    {children}
  </p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="space-y-2 mb-4 pl-1">{children}</ul>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3 text-navy-700 text-base md:text-lg leading-relaxed">
    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-sky-500" />
    <span>{children}</span>
  </li>
);

const Action = ({ children }: { children: React.ReactNode }) => (
  <div className="my-4 p-4 rounded-xl bg-sky-50 border-l-4 border-sky-500">
    <p className="text-navy-800 text-base leading-relaxed m-0">
      <span className="font-semibold text-sky-700">Что сделать:</span>{' '}
      {children}
    </p>
  </div>
);

export default function Article() {
  return (
    <>
      <Nav />
      <article className="pt-32 pb-20 px-6">
        {/* HEADER */}
        <header className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-4 text-xs text-navy-400">
            <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-medium uppercase tracking-wider">
              Compliance · НК 2026
            </span>
            <span>·</span>
            <span>8 мин чтения</span>
            <span>·</span>
            <span>25 мая 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-navy leading-tight mb-6">
            Курьерская служба и НК РК 2026: 12-пунктный чек-лист соответствия
          </h1>
          <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
            <p className="text-navy-700 text-base leading-relaxed mb-2">
              <strong>Для кого:</strong> руководитель, финдиректор или главный
              бухгалтер курьерской службы / сервиса доставки.
            </p>
            <p className="text-navy-700 text-base leading-relaxed mb-0">
              <strong>Что вы получите:</strong> конкретный список из 12 пунктов
              для закрытия к 1 июля 2026, чтобы избежать штрафов{' '}
              <strong>15-50 МРП за каждую неправильно оформленную выплату</strong>
              {' '}курьеру.
            </p>
          </div>
        </header>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 mt-4">
            Коротко: почему курьерская служба попала под удар
          </h2>

          <P>
            С 1 января 2026 года в РК действует новая глава НК —{' '}
            <strong>платформенная занятость</strong>. Если ваша компания платит
            курьерам-физлицам (через ГПХ-договор, ИП или самозанятых), вы
            автоматически становитесь <strong>налоговым агентом</strong>.
          </P>
          <P>Это значит — вы обязаны:</P>
          <UL>
            <LI>удерживать с каждой выплаты социальные платежи (ОПВ, ОПВР, СО, ОСМС);</LI>
            <LI>оформлять фискальный чек по КАЖДОЙ выплате;</LI>
            <LI>
              следить, чтобы каждый курьер-самозанятый не превысил лимит{' '}
              <strong>300 МРП (1 297 500 ₸) в месяц</strong>;
            </LI>
            <LI>хранить аудит-журнал для проверок КГД.</LI>
          </UL>
          <P>
            За первый год пилота платформенной занятости (2025){' '}
            <strong>108 000 ИП</strong> прошли через систему и в бюджет ушло{' '}
            <strong>6,3 млрд ₸</strong>. То есть КГД уже знает, что и кого
            проверять; ваша курьерская служба не «маленькая незаметная компания».
          </P>
          <P>
            Штрафы за невыполнение —{' '}
            <strong>15-50 МРП за каждую невыписанную выплату</strong>. На 100
            курьеров × 20 выплат в месяц = 2000 операций; недосдача по 200 =
            риск 600 000 — 2 000 000 ₸ штрафа в месяц.
          </P>
          <P>
            Ниже — 12 пунктов, по которым стоит пройтись до того, как КГД
            пришлёт первое уведомление.
          </P>

          {/* 1 */}
          <H2 n={1}>Определите статус каждого курьера</H2>
          <P>Курьер может быть:</P>
          <UL>
            <LI>
              <strong>Самозанятым (СНР).</strong> Лимит 300 МРП в месяц. Учёт
              через приложение E-Salyq Business. ИПН = 0%, 4% соцплатежей
              удерживает платформа.
            </LI>
            <LI>
              <strong>ИП (упрощёнка 910 или ОУР).</strong> Лимит 600 000 МРП в год.
              Самостоятельно сдают форму 910. Платформа НЕ налоговый агент.
            </LI>
            <LI>
              <strong>Физлицо без статуса</strong> — оформление по ГПХ. Платформа
              удерживает ИПН + соцплатежи.
            </LI>
          </UL>
          <Action>
            собрать со всех курьеров копии ИИН + справку о статусе. Запросить в
            КГД (или через E-Salyq Business) выписку для подтверждения статуса
            самозанятого.
          </Action>

          {/* 2 */}
          <H2 n={2}>Подключите фискализацию каждой выплаты</H2>
          <P>
            С 2026 года{' '}
            <strong>
              каждая выплата курьеру = отдельный фискальный чек, зарегистрированный
              в КГД
            </strong>
            . Не сумма за неделю. Не «итого за месяц». Каждая отдельная транзакция.
          </P>
          <P>Варианты:</P>
          <UL>
            <LI>
              Договор напрямую с оператором фискальных данных (Webkassa, OFD KZ
              и др.) — 50 000 — 100 000 ₸/мес базовый + комиссия за чек.
            </LI>
            <LI>
              Собственная разработка интеграции — 3-6 месяцев + 1-3 млн ₸
              разработки + поддержка.
            </LI>
            <LI>
              Готовый API-сервис, который абстрагирует ОФД (например, Esep
              Platform API) — один HTTP-вызов на выплату, договоры с ОФД на их
              стороне.
            </LI>
          </UL>
          <Action>
            выбрать путь до конца мая. После — ваше окно для интеграции до 1
            июля минимум 2-3 недели.
          </Action>

          {/* 3 */}
          <H2 n={3}>Считайте лимит 300 МРП в реальном времени</H2>
          <P>
            По НК самозанятый не может <strong>получить</strong> больше 300 МРП
            в календарный месяц. Если на 28-м числе у курьера накопилось
            1 250 000 ₸, а вы ему ещё пытаетесь выплатить 60 000 — превышение,
            оба попадаете на проблему (он лишается режима, вы оформляете не по
            тому статусу).
          </P>
          <Action>
            автоматизировать счётчик. Каждая выплата должна проверяться:
            «сколько у этого ИИН в этом месяце». Вручную в Excel — вы пропустите.
          </Action>

          {/* 4 */}
          <H2 n={4}>Удерживайте правильную сумму соцплатежей</H2>
          <P>
            Для самозанятого по новой норме — <strong>ИПН = 0%</strong>,
            удержание 4% — это <strong>только соцплатежи</strong>:
          </P>
          <UL>
            <LI>ОПВ — 1% (пенсионные взносы)</LI>
            <LI>ОПВР — 1% (взносы работодателя в пенсию)</LI>
            <LI>СО — 1% (социальные отчисления)</LI>
            <LI>ОСМС — 1% (медстраховка)</LI>
          </UL>
          <P>
            <strong>Частая ошибка:</strong> удержать «4% единым платежом в
            бюджет». Нет, это четыре отдельных перечисления в разные фонды на
            разные КБК.
          </P>
          <Action>
            проверить с бухгалтером, что в вашей системе оплат правильно
            настроены КБК для каждого из 4 платежей.
          </Action>

          {/* 5 */}
          <H2 n={5}>Проверьте подлинность ИИН курьера</H2>
          <P>
            ИИН — 12 цифр с контрольной цифрой по алгоритму ПП РК № 853 от
            26.08.2013. Любая опечатка → выплата на «несуществующий ИИН» → ваш
            учёт с дырой.
          </P>
          <Action>
            добавить онлайн-валидацию ИИН в форму регистрации курьера. Можно
            через open-source библиотеки или бесплатный валидатор (наш endpoint).
          </Action>

          {/* 6 */}
          <H2 n={6}>Сверяйте номер телефона курьера с WhatsApp</H2>
          <P>
            Если общение с курьером идёт через WhatsApp (а это 90% курьерских
            служб) — landline-номер или номер без WA в базе = неработающий
            курьер. Который при этом будет числиться в учёте и съест ваше время
            на выяснение.
          </P>
          <Action>
            при онбординге курьера автоматически проверить номер через WhatsApp
            API (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">onWhatsApp</code>).
            Если не на WA — попросить другой номер ДО подписания договора.
          </Action>

          {/* 7 */}
          <H2 n={7}>Договоритесь с курьерами о возврате чеков</H2>
          <P>
            По НК 2026 при отмене заказа <strong>до пробития чека</strong> —
            soft cancel, deletion, нет проблем. Но если чек уже{' '}
            <strong>фискализирован</strong> (отослан в КГД), отмена возможна
            только через <strong>возвратный чек</strong>. Это отдельная
            процедура с подписями обеих сторон.
          </P>
          <Action>
            добавить в договор ГПХ с курьером пункт «обязуется подписать
            возвратный чек в течение 3 дней при отмене заказа после
            фискализации». Иначе ваш кешфлоу зависнет.
          </Action>

          {/* 8 */}
          <H2 n={8}>Настройте веб-хук для уведомления о фискализации</H2>
          <P>
            ОФД (Webkassa) после регистрации чека в КГД присылает уведомление.
            Если у вас нет endpoint для приёма уведомлений → вы не знаете,
            прошёл чек или нет. Курьер может думать, что зарегистрировал, а на
            самом деле нет.
          </P>
          <Action>
            на стороне вашего бэкенда настроить endpoint, на который ОФД будет
            слать уведомления. Адрес зарегистрировать в личном кабинете ОФД.
          </Action>

          {/* 9 */}
          <H2 n={9}>Ведите аудит-журнал всех операций</H2>
          <P>
            КГД может прийти с проверкой и спросить: «вот эта выплата 27 февраля
            курьеру с ИИН XYZ — где фискальный чек? Почему сумма 47 800, а в
            выписке банка 50 000?»
          </P>
          <Action>
            хранить лог каждой операции: timestamp + ИИН + сумма + номер чека +
            решение системы (PROCEED / BLOCK / WARNING) + кто из ваших
            сотрудников запустил. Срок хранения — рекомендация 5 лет, как и для
            бухгалтерии.
          </Action>

          {/* 10 */}
          <H2 n={10}>Подключите Webkassa или альтернативного ОФД</H2>
          <P>
            Без оператора фискальных данных вы не можете регистрировать чеки в
            КГД. Самые популярные в РК:
          </P>
          <UL>
            <LI>
              <strong>Webkassa</strong> — крупнейший, лучший Integrators API.
              Цена ~50-100k/мес + комиссия. Сложнее всего интегрироваться напрямую.
            </LI>
            <LI>
              <strong>OFD KZ</strong> — государственный, обязателен для крупных.
              Дороже.
            </LI>
            <LI>
              <strong>Kassa24</strong> — попроще, но мобильное приложение для
              курьеров слабое.
            </LI>
          </UL>
          <P>
            <strong>Совет:</strong> если у вас 100+ курьеров — выбирайте
            Webkassa или агрегатор поверх него. Если 20-50 — можно начать с
            Kassa24.
          </P>

          {/* 11 */}
          <H2 n={11}>Подготовьте отчётность для КГД</H2>
          <P>
            С 2026 года по Приказу Минфина РК от 21.10.2025 платформа-оператор
            обязана <strong>ежемесячно до 5 числа</strong> сдавать в КГД сведения
            обо всех выплатах физлицам-резидентам.{' '}
            <strong>Личная ответственность руководителя</strong> за достоверность
            и сроки.
          </P>
          <Action>
            настроить выгрузку из вашей системы в формате, который примет ИСНА.
            Форма утверждена приказом 21.10.2025 — спросите у вашего ОФД или
            бухгалтера актуальную версию.
          </Action>

          {/* 12 */}
          <H2 n={12}>Назначьте ответственного и план реагирования</H2>
          <P>
            Если ОФД ляжет, если КГД пришлёт уведомление о превышении лимита,
            если у курьера заблокировался кабинет E-Salyq — кто принимает
            решение и за какое время? Без чёткого ответственного через 3 месяца
            будет хаос.
          </P>
          <Action>
            один человек в команде (CFO / главбух / COO) — владелец
            compliance-зоны. У него прямой канал в ОФД и КГД. Плюс — поставьте
            мониторинг доставки чеков: если за час 0 успешных пробитий — alert
            по WhatsApp или Telegram.
          </Action>

          {/* CTA */}
          <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-navy to-slate-900 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Что закрывает эти 12 пунктов один API
            </h3>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-4">
              Сделать всё перечисленное в одиночку — это договор с КГД, договор
              с ОФД, 3-6 месяцев разработки и штат compliance.
            </p>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-4">
              Альтернатива: использовать готовый API, который абстрагирует ОФД и
              КГД. Один HTTP-вызов на выплату курьеру — внутри идёт валидация
              ИИН, проверка лимита 300 МРП, оформление чека через ОФД,
              аудит-журнал, веб-хук уведомлений. Договоры с КГД и Webkassa —
              на стороне сервиса.
            </p>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-6">
              Мы построили такой API — <strong className="text-white">Esep Platform API</strong>.
              Сейчас открыто 5 founding-мест по тарифу{' '}
              <strong className="text-white">50 000 ₸/мес</strong>, зафиксированы
              на 12 месяцев (стандарт будет 150k+). Интеграция 1-2 дня одному
              разработчику, joint-integration sprint с основателем первые 2 недели.
            </p>
            <a
              href="tel:+77059914789"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy font-bold hover:scale-105 transition-transform"
            >
              +7 705 991 47 89 — связаться
            </a>
          </div>

          {/* SOURCES */}
          <h3 className="mt-16 mb-4 text-xl font-bold text-navy">Источники</h3>
          <UL>
            <LI>
              <a
                href="https://adilet.zan.kz/rus/docs/K2500000214"
                className="text-sky-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                НК РК 2026 (Закон 214-VIII)
              </a>
            </LI>
            <LI>
              <a
                href="https://adilet.zan.kz/rus/docs/Z2400000104"
                className="text-sky-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Закон Z2400000104 (платформенная занятость)
              </a>
            </LI>
            <LI>
              <a
                href="https://adilet.zan.kz/rus/docs/K2300000224"
                className="text-sky-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Социальный кодекс РК, ст. 102
              </a>
            </LI>
            <LI>
              <a
                href="https://www.zakon.kz/pravo/6495800-novye-pravila-predstavleniya-internetploshchadkami-dannykh-v-kgd-vvedut-v-kazakhstane-s-2026-goda.html"
                className="text-sky-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Приказ Минфина РК от 21.10.2025
              </a>
            </LI>
            <LI>
              <a
                href="https://adilet.zan.kz/rus/docs/P1300000853"
                className="text-sky-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Постановление № 853 от 26.08.2013 (алгоритм ИИН)
              </a>
            </LI>
          </UL>
        </div>
      </article>
      <Footer />
    </>
  );
}
