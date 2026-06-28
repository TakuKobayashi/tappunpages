/**
 * scripts/optimize-images.mjs
 *
 * ビルド前に public/images/ の PNG・JPG を WebP に変換するスクリプト。
 *
 * 変換ルール:
 *   - 同名の SVG が存在する場合         → スキップ（SVG を優先）
 *   - アルファが実際に使われている PNG  → WebP lossless（透明度完全保持）
 *   - アルファが未使用 (全不透明) PNG   → WebP lossy（高圧縮）
 *   - JPG / JPEG                        → WebP lossy（高圧縮）
 *   - SVG                               → 変換しない（そのまま維持）
 *
 * "アルファが実際に使われている" = いずれかのピクセルのアルファ値 < 255
 * RGBA モードでも全ピクセルが不透明なら lossy で問題なし。
 *
 * SVG は WebP より軽量で表示も高速なため、SVG がある場合は必ず優先する。
 * WebP はアルファチャンネルを完全サポートしており、lossless モードで
 * PNG と同等の透明度を保持できる。
 *
 * 使い方:
 *   node scripts/optimize-images.mjs   # 単体実行
 *   npm run optimize:images             # npm script
 *   npm run build                       # build 前に自動実行
 */

import sharp from 'sharp';
import { readdir, stat, access } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';

// 変換対象ディレクトリ
const TARGET_DIRS = ['public/images'];

// 変換対象の拡張子
const CONVERT_EXTS = new Set(['.png', '.jpg', '.jpeg']);

// Lossy WebP の品質設定
const LOSSY_QUALITY = 85;

/**
 * 同名の SVG ファイルが存在するか確認する
 * 例: bg-blue.png → bg-blue.svg が存在すれば true
 */
async function hasSvgSibling(filePath) {
  const dir = dirname(filePath);
  const ext = extname(filePath);
  const name = basename(filePath, ext);
  const svgPath = join(dir, `${name}.svg`);
  try {
    await access(svgPath);
    return true;
  } catch {
    return false;
  }
}

/**
 * PNG ファイルにアルファが「実際に使われているか」を確認する。
 *
 * RGBA モードでも全ピクセルのアルファが 255 (完全不透明) なら
 * lossy 変換で問題なし。半透明/透明ピクセルが存在する場合のみ
 * lossless を使う。
 */
async function hasRealAlpha(filePath) {
  try {
    const metadata = await sharp(filePath).metadata();
    if (!metadata.hasAlpha) return false;

    // アルファチャンネルだけ抽出して最小値を確認
    const { data } = await sharp(filePath)
      .extractChannel('alpha')
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (const byte of data) {
      if (byte < 255) return true; // 透明ピクセルあり
    }
    return false; // 全不透明
  } catch {
    return false;
  }
}

/**
 * 1枚の画像を WebP に変換する
 */
async function convertToWebP(filePath) {
  const ext = extname(filePath).toLowerCase();
  const dir = dirname(filePath);
  const name = basename(filePath, ext);
  const outPath = join(dir, `${name}.webp`);

  let mode = 'lossy';
  let note = '';

  if (ext === '.png') {
    const realAlpha = await hasRealAlpha(filePath);
    if (realAlpha) {
      mode = 'lossless';
      note = ' (alpha preserved)';
    } else {
      note = ' (RGBA→RGB, no real alpha)';
    }
  }

  try {
    const sharpInstance = sharp(filePath);

    if (mode === 'lossless') {
      // 実アルファあり → lossless WebP（透明度完全保持）
      await sharpInstance.webp({ lossless: true }).toFile(outPath);
    } else {
      // 実アルファなし / JPG → lossy WebP（高圧縮）
      await sharpInstance
        .flatten({ background: { r: 255, g: 255, b: 255 } })
        .webp({ quality: LOSSY_QUALITY, lossless: false })
        .toFile(outPath);
    }

    const [srcStat, dstStat] = await Promise.all([stat(filePath), stat(outPath)]);
    const ratio = ((1 - dstStat.size / srcStat.size) * 100).toFixed(1);
    const saved = ratio > 0 ? `▼${ratio}%` : `▲${Math.abs(ratio)}%`;

    console.log(
      `  ✓ ${basename(filePath).padEnd(30)} → ${basename(outPath)}` +
        `  [${mode}]${note}` +
        `  ${(srcStat.size / 1024).toFixed(0)}KB → ${(dstStat.size / 1024).toFixed(0)}KB  ${saved}`,
    );
  } catch (err) {
    console.error(`  ✗ ${basename(filePath)}: ${err.message}`);
  }
}

/**
 * ディレクトリ内の変換対象ファイルを列挙する
 */
async function collectFiles(dir) {
  const results = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        const sub = await collectFiles(fullPath);
        results.push(...sub);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (CONVERT_EXTS.has(ext)) {
          results.push(fullPath);
        }
      }
    }
  } catch {
    // ディレクトリが存在しない場合はスキップ
  }
  return results;
}

// メイン処理
async function main() {
  console.log('\n🖼  Image optimization (PNG/JPG → WebP)\n');

  let converted = 0;
  let skippedSvg = 0;
  let lossless = 0;
  let lossy = 0;

  for (const dir of TARGET_DIRS) {
    const files = await collectFiles(dir);
    if (files.length === 0) {
      console.log(`  (no PNG/JPG files in ${dir})`);
      continue;
    }

    console.log(`📁 ${dir}/`);

    for (const file of files) {
      // 同名SVGが存在する場合はスキップ
      if (await hasSvgSibling(file)) {
        console.log(`  ⏭ ${basename(file).padEnd(30)}  [skipped — SVG exists]`);
        skippedSvg++;
        continue;
      }

      const ext = extname(file).toLowerCase();
      const isLossless = ext === '.png' && (await hasRealAlpha(file));
      await convertToWebP(file);
      converted++;
      if (isLossless) lossless++;
      else lossy++;
    }
  }

  console.log(
    `\n✅ ${converted} file(s) converted  (lossless: ${lossless}, lossy: ${lossy})` +
      (skippedSvg > 0 ? `  ⏭ ${skippedSvg} skipped (SVG exists)` : '') +
      '\n',
  );
}

main().catch((err) => {
  console.error('Image optimization failed:', err);
  process.exit(1);
});
