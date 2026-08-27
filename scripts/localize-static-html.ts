import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function collectHtmlFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const filePath = join(directory, entry.name);
      if (entry.isDirectory()) return collectHtmlFiles(filePath);
      return entry.isFile() && entry.name.endsWith('.html') ? [filePath] : [];
    }),
  );
  return files.flat();
}

async function main(): Promise<void> {
  const englishDirectory = join(process.cwd(), 'out', 'en');
  const files = await collectHtmlFiles(englishDirectory);

  const localized = await Promise.all(
    files.map(async (filePath) => {
      const html = await readFile(filePath, 'utf8');
      if (!html.includes('<html lang="ja"')) return false;
      await writeFile(filePath, html.replace('<html lang="ja"', '<html lang="en"'), 'utf8');
      return true;
    }),
  );

  console.log(`Localized ${localized.filter(Boolean).length} English HTML file(s).`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
