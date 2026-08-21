import type { Locale } from './dictionaries';

/**
 * パスとロケールから実際のURLパスを返す
 * ja: /about → /jp/about
 * en: /about → /en/about
 */
export function localePath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'ja') {
    if (cleanPath.startsWith('/jp')) return cleanPath;
    return `/jp${cleanPath === '/' ? '' : cleanPath}`;
  }
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
 * /jp/about    → /en/about   (ja→en)
 * /en/about    → /jp/about   (en→ja)
 */
export function switchLocalePath(pathname: string, toLocale: Locale): string {
  const isEn = pathname.startsWith('/en');
  const isJa = pathname.startsWith('/jp');
  const pathWithoutLocale = isEn || isJa ? pathname.slice(3) || '/' : pathname;

  if (toLocale === 'en') {
    if (isEn) return pathname; // already en
    return `/en${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  } else {
    if (isJa) return pathname;
    return `/jp${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  }
}
