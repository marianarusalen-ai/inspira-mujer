import type { Locale, TranslationKeys } from '@/types';
import { es } from './locales/es';

const translations: Record<Locale, TranslationKeys> = { es };

export function getTranslations(locale: Locale = 'es'): TranslationKeys {
  return translations[locale];
}

export function useTranslations(locale: Locale = 'es') {
  const t = getTranslations(locale);
  return (key: string): string => {
    const keys = key.split('.');
    let result: unknown = t;
    for (const k of keys) {
      if (result !== null && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof result === 'string' ? result : key;
  };
}

export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) =>
    String(vars[key] ?? `{{${key}}}`)
  );
}
