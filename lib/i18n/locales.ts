import type { Locale } from './dictionaries';

export type RouteLocale = 'jp' | 'en';

export const routeLocales: RouteLocale[] = ['jp', 'en'];

export function toDictionaryLocale(locale: RouteLocale): Locale {
  return locale === 'jp' ? 'ja' : 'en';
}
