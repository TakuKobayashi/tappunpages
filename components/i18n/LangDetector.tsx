'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

/**
 * ブラウザの言語設定を検出して初回訪問時のみリダイレクトする。
 * localStorage に "lang-detected" を保存して二回目以降はスキップ。
 *
 * ルール:
 *   - ja / ja-JP → そのまま（日本語）
 *   - それ以外   → /en/* へリダイレクト
 */
export function LangDetector() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // すでに /en/* にいるか、検出済みならスキップ
    const detected = sessionStorage.getItem('lang-detected');
    if (detected) return;

    sessionStorage.setItem('lang-detected', '1');

    // すでに /en/* にいる場合はリダイレクト不要
    if (pathname.startsWith('/en')) return;

    // ブラウザ言語を確認
    const lang = navigator.language || '';
    const isJapanese = lang.startsWith('ja');

    if (!isJapanese) {
      // 日本語以外 → 英語版へ
      const enPath = `/en${pathname === '/' ? '' : pathname}`;
      router.replace(enPath);
    }
    // 日本語 → そのまま
  }, [pathname, router]);

  return null;
}
