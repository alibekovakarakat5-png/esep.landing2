/**
 * Чисто математическая валидация ИИН (Индивидуального Идентификационного
 * Номера) Казахстана. Порт с server/src/services/iin_algorithm.js на TypeScript
 * для клиентского использования (без сетевого вызова).
 *
 * Источник: Постановление Правительства РК № 853 от 26.08.2013
 *
 * НЕ проверяет существование в реестре КГД — только корректность формата
 * и контрольной цифры.
 */

export type IinGender = 'male' | 'female';

export interface IinValidationResult {
  valid: boolean;
  reason: string | null;
  details: {
    birthDate?: string;       // YYYY-MM-DD
    gender?: IinGender;
    century?: number;          // 1900 / 2000 / 2100
    sequenceNumber?: number;
    controlDigit?: number;
    expected?: number;         // если контрольная не сошлась
    actual?: number;
  };
}

export function validateIin(input: string): IinValidationResult {
  const iin = (input || '').trim();

  if (!/^\d{12}$/.test(iin)) {
    return {
      valid: false,
      reason: 'ИИН должен содержать ровно 12 цифр',
      details: {},
    };
  }

  const digits = iin.split('').map(Number);

  // Дата
  const yy = parseInt(iin.substring(0, 2), 10);
  const mm = parseInt(iin.substring(2, 4), 10);
  const dd = parseInt(iin.substring(4, 6), 10);

  if (mm < 1 || mm > 12) {
    return { valid: false, reason: `Неверный месяц рождения: ${mm}`, details: {} };
  }
  if (dd < 1 || dd > 31) {
    return { valid: false, reason: `Неверный день рождения: ${dd}`, details: {} };
  }

  // Век + пол по 7-й цифре
  const centuryCode = digits[6];
  let century: number;
  let gender: IinGender;
  if (centuryCode === 1 || centuryCode === 2) {
    century = 1900;
    gender = centuryCode === 1 ? 'male' : 'female';
  } else if (centuryCode === 3 || centuryCode === 4) {
    century = 2000;
    gender = centuryCode === 3 ? 'male' : 'female';
  } else if (centuryCode === 5 || centuryCode === 6) {
    century = 2100;
    gender = centuryCode === 5 ? 'male' : 'female';
    const tryYear = 2100 + yy;
    if (tryYear > new Date().getFullYear()) {
      century = 2000; // fallback на XXI век
    }
  } else {
    return {
      valid: false,
      reason: `Неверный код века/пола (7-я цифра): ${centuryCode}`,
      details: {},
    };
  }

  const fullYear = century + yy;
  const birthDate = new Date(fullYear, mm - 1, dd);
  if (birthDate > new Date()) {
    return {
      valid: false,
      reason: `Дата рождения в будущем: ${fullYear}-${mm}-${dd}`,
      details: {},
    };
  }

  // Контрольная цифра — первый проход
  const w1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const sum1 = w1.reduce((acc, w, i) => acc + digits[i] * w, 0);
  let control = sum1 % 11;

  if (control === 10) {
    const w2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
    const sum2 = w2.reduce((acc, w, i) => acc + digits[i] * w, 0);
    control = sum2 % 11;
    if (control === 10) {
      return {
        valid: false,
        reason: 'ИИН недействителен: контрольная цифра не вычисляется',
        details: {},
      };
    }
  }

  if (control !== digits[11]) {
    return {
      valid: false,
      reason: `Контрольная цифра не сходится. Ожидалось ${control}, в ИИН: ${digits[11]}`,
      details: { expected: control, actual: digits[11] },
    };
  }

  return {
    valid: true,
    reason: null,
    details: {
      birthDate: `${fullYear}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`,
      gender,
      century,
      sequenceNumber: parseInt(iin.substring(7, 11), 10),
      controlDigit: digits[11],
    },
  };
}
