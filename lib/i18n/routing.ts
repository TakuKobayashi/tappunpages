import type { Locale } from './dictionaries';

/**
 * パスとロケールから実際のURLパスを返す
 * ja: /about → /about
 * en: /about → /en/about
 */
export function localePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'ja') return cleanPath;
  // /en が既についていたら重複しない
  if (cleanPath.startsWith('/en')) return cleanPath;
  return `/en${cleanPath === '/' ? '' : cleanPath}`;
}

/**
 * 現在のpathname からロケールを判定する
 */
export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'ja';
}

/**
 * 現在のpathname を別のロケールに切り替えたパスを返す
 * /about       → /en/about   (ja→en)
 * /en/about    → /about      (en→ja)
 * /en          → /           (en→ja)
 */
export function switchLocalePath(pathname: string, toLocale: Locale): string {
  const isEn = pathname.startsWith('/en');

  if (toLocale === 'en') {
    if (isEn) return pathname; // already en
    return `/en${pathname === '/' ? '' : pathname}`;
  } else {
    if (!isEn) return pathname; // already ja
    const stripped = pathname.slice(3); // remove "/en"
    return stripped === '' ? '/' : stripped;
  }
}
