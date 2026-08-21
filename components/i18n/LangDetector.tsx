'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

/**
 * ブラウザの言語設定を検出して初回訪問時のみリダイレクトする。
 * ルール:
 *   - /jp/* と /en/* はそのまま表示
 *   - プレフィックスなしは、同じパスの /jp/* または /en/* へ移動
 */
export function LangDetector() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith('/en') ? 'en' : 'ja';

    if (pathname.startsWith('/en') || pathname.startsWith('/jp')) return;

    // ブラウザ言語を確認
    const lang = navigator.language || '';
    const isJapanese = lang.startsWith('ja');

    const prefix = isJapanese ? '/jp' : '/en';
    const localizedPath = `${prefix}${pathname === '/' ? '' : pathname}`;
    router.replace(localizedPath);
  }, [pathname, router]);

  return null;
}
