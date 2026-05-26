'use client';

import { useState, useMemo } from 'react';
import { validateIin } from '@/lib/iin-validate';
import clsx from 'clsx';

const SAMPLE_VALID = '850101100012';
const SAMPLE_INVALID = '999999999999';

function formatBirthDate(iso: string | undefined): string {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ];
  return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`;
}

export default function IinValidatorForm() {
  const [iin, setIin] = useState('');

  // Валидируем «вживую» только когда 12 цифр — иначе показываем подсказку
  const trimmed = iin.replace(/\D+/g, '').slice(0, 12);
  const result = useMemo(() => {
    if (trimmed.length !== 12) return null;
    return validateIin(trimmed);
  }, [trimmed]);

  const ready = trimmed.length === 12;

  return (
    <div className="max-w-2xl mx-auto">
      {/* INPUT */}
      <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <label htmlFor="iin-input" className="block text-sm font-semibold text-navy mb-3">
          Введите ИИН (12 цифр)
        </label>
        <input
          id="iin-input"
          type="text"
          inputMode="numeric"
          value={trimmed}
          onChange={(e) => setIin(e.target.value)}
          placeholder="850101100012"
          maxLength={12}
          autoFocus
          className={clsx(
            'w-full px-4 py-3 text-2xl font-mono tracking-widest text-navy rounded-xl border-2 outline-none transition-colors',
            ready
              ? result?.valid
                ? 'border-emerald-400 bg-emerald-50/30 focus:border-emerald-500'
                : 'border-rose-400 bg-rose-50/30 focus:border-rose-500'
              : 'border-slate-200 focus:border-sky-400'
          )}
        />
        <div className="flex flex-wrap gap-2 mt-3 text-xs">
          <span className="text-navy-400">Попробовать пример:</span>
          <button
            type="button"
            onClick={() => setIin(SAMPLE_VALID)}
            className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-mono font-medium hover:bg-emerald-100 transition-colors"
          >
            {SAMPLE_VALID} (валидный)
          </button>
          <button
            type="button"
            onClick={() => setIin(SAMPLE_INVALID)}
            className="px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 font-mono font-medium hover:bg-rose-100 transition-colors"
          >
            {SAMPLE_INVALID} (битый)
          </button>
        </div>
      </div>

      {/* RESULT */}
      {ready && result && (
        <div
          className={clsx(
            'mt-6 p-6 md:p-8 rounded-2xl border-2',
            result.valid
              ? 'border-emerald-200 bg-emerald-50/40'
              : 'border-rose-200 bg-rose-50/40'
          )}
        >
          {result.valid ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-emerald-700">
                  ИИН валиден
                </h3>
              </div>
              <dl className="space-y-3 text-base">
                <div className="flex justify-between gap-4 py-2 border-b border-emerald-200/60">
                  <dt className="text-navy-600">Дата рождения</dt>
                  <dd className="font-semibold text-navy">
                    {formatBirthDate(result.details.birthDate)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-2 border-b border-emerald-200/60">
                  <dt className="text-navy-600">Пол</dt>
                  <dd className="font-semibold text-navy">
                    {result.details.gender === 'male' ? 'мужской' : 'женский'}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-2 border-b border-emerald-200/60">
                  <dt className="text-navy-600">Век</dt>
                  <dd className="font-semibold text-navy">
                    {result.details.century === 1900 && 'XX (1900-е)'}
                    {result.details.century === 2000 && 'XXI (2000-е)'}
                    {result.details.century === 2100 && 'XXII (2100-е)'}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-2">
                  <dt className="text-navy-600">Порядковый номер</dt>
                  <dd className="font-mono font-semibold text-navy">
                    {String(result.details.sequenceNumber).padStart(4, '0')}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-navy-500 leading-relaxed">
                Контрольная цифра сошлась по алгоритму ПП РК № 853.
                Расшифрованы дата рождения и пол. Это математическая
                валидность; для проверки существования в реестре КГД нужен
                запрос в государственные API.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white text-xl font-bold">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-rose-700">ИИН не валиден</h3>
              </div>
              <p className="text-base text-navy-700 leading-relaxed">
                <strong>Причина:</strong> {result.reason}
              </p>
              {result.details.expected !== undefined && (
                <p className="mt-2 text-sm text-navy-600">
                  Ожидаемая контрольная цифра:{' '}
                  <strong className="font-mono">{result.details.expected}</strong>,
                  в ИИН: <strong className="font-mono">{result.details.actual}</strong>.
                </p>
              )}
            </>
          )}
        </div>
      )}

      {/* Подсказка пока меньше 12 */}
      {!ready && trimmed.length > 0 && (
        <div className="mt-4 px-4 py-3 rounded-xl bg-slate-50 text-sm text-navy-500">
          Введите ещё {12 - trimmed.length}{' '}
          {12 - trimmed.length === 1 ? 'цифру' : 'цифр'} для проверки.
        </div>
      )}
    </div>
  );
}
