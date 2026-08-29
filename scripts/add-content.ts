import fs from 'node:fs';
import path from 'node:path';
import { parse, stringify } from 'yaml';

type ContentType = 'articles' | 'projects' | 'tools';
type ContentItem = {
  slug: string;
  title: string;
  description: string;
  url?: string;
  repository_url?: string;
  published_at: string;
  enable: boolean;
  icon: string;
  tags: string[];
  source: string;
};

type PageMetadata = {
  title: string;
  description: string;
  tags: string[];
  source: string;
  publishedAt?: string;
  bodyText: string;
};

const CONTENT_TYPES = new Set<ContentType>(['articles', 'projects', 'tools']);
const DEFAULT_ICONS: Record<ContentType, string> = {
  articles: '📝',
  projects: '🚀',
  tools: '🛠️',
};

const HELP = `Usage:
  pnpm content:add <articles|projects|tools> [URL] [options]

Options:
  --ollama                 Ollamaでタイトル・説明・タグ・出典を補正
  --model <name>           Ollamaモデル名（既定: qwen3.5:9b）
  --ollama-url <URL>       Ollama API URL（既定: http://localhost:11434）
  --repository-url <URL>   projects/toolsのGitHubリポジトリURL
  --published-at <ISO>     公開日時をUTCで指定（例: 2026-08-30T12:00:00Z）
  --disable                enable: false で追加
  --file <name.yml>        出力ファイル名（既定: generated.yml）
  --dry-run                YMLを変更せず生成内容だけ表示
  --help                   このヘルプを表示

Examples:
  pnpm content:add articles https://example.com/post
  pnpm content:add projects https://example.com/app --repository-url https://github.com/user/repo --ollama
  pnpm content:add projects --repository-url https://github.com/user/repo
  pnpm content:add tools https://example.com/tool --ollama --model gemma3:12b
`;

function decodeHtml(value: string): string {
  const entities: Record<string, string> = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    nbsp: ' ',
  };
  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (_, entity: string) => {
    if (entity.startsWith('#x'))
      return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
    if (entity.startsWith('#'))
      return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
    return entities[entity.toLowerCase()] ?? `&${entity};`;
  });
}

function cleanText(value: string): string {
  return decodeHtml(value).replace(/\s+/g, ' ').trim();
}

function getMeta(html: string, names: string[]): string | undefined {
  for (const name of names) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const patterns = [
      new RegExp(
        `<meta[^>]+(?:name|property)=["']${escaped}["'][^>]+content=["']([^"']*)["'][^>]*>`,
        'i'
      ),
      new RegExp(
        `<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${escaped}["'][^>]*>`,
        'i'
      ),
    ];
    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) return cleanText(match[1]);
    }
  }
  return undefined;
}

function readJsonLd(html: string): Record<string, unknown>[] {
  const documents: Record<string, unknown>[] = [];
  for (const match of html.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )) {
    try {
      const value = JSON.parse(decodeHtml(match[1]));
      const values = Array.isArray(value)
        ? value
        : (value['@graph'] ?? [value]);
      if (Array.isArray(values)) {
        documents.push(
          ...values.filter((item): item is Record<string, unknown> =>
            Boolean(item && typeof item === 'object')
          )
        );
      }
    } catch {
      // Invalid JSON-LD should not prevent the remaining metadata from being used.
    }
  }
  return documents;
}

function firstString(...values: unknown[]): string | undefined {
  return values.find(
    (value): value is string => typeof value === 'string' && value.trim() !== ''
  );
}

function normalizeUtc(
  value: string | undefined,
  fallback = new Date()
): string {
  if (!value) return fallback.toISOString().replace(/\.\d{3}Z$/, 'Z');
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return `${value}T00:00:00Z`;
  if (!/(?:Z|[+-]\d{2}:\d{2})$/.test(value)) {
    throw new Error(`日時にはタイムゾーンが必要です: ${value}`);
  }
  const date = new Date(value);
  if (!Number.isFinite(date.getTime()))
    throw new Error(`無効な日時です: ${value}`);
  return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
}

function parsePage(html: string, pageUrl: URL): PageMetadata {
  const jsonLd = readJsonLd(html);
  const titleTag = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  const title = firstString(
    getMeta(html, ['og:title', 'twitter:title']),
    ...jsonLd.map((item) => item.headline ?? item.name),
    titleTag && cleanText(titleTag)
  );
  if (!title) throw new Error('ページからタイトルを取得できませんでした');

  const description =
    firstString(
      getMeta(html, ['og:description', 'twitter:description', 'description']),
      ...jsonLd.map((item) => item.description)
    ) ?? `${title}について紹介します。`;
  const keywordValues = [
    getMeta(html, ['keywords', 'article:tag']),
    ...jsonLd.map((item) => item.keywords),
  ];
  const tags = keywordValues
    .flatMap((value) =>
      Array.isArray(value)
        ? value
        : typeof value === 'string'
          ? value.split(/[,、]/)
          : []
    )
    .map((value) => cleanText(String(value)))
    .filter(Boolean)
    .slice(0, 8);
  const publishedAt = firstString(
    getMeta(html, ['article:published_time', 'datePublished', 'date']),
    ...jsonLd.map((item) => item.datePublished)
  );
  const bodyText = cleanText(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  ).slice(0, 14_000);

  return {
    title: cleanText(title),
    description: cleanText(description).slice(0, 300),
    tags,
    source: pageUrl.hostname.replace(/^www\./, ''),
    publishedAt,
    bodyText,
  };
}

function createSlug(url: URL, title: string): string {
  const qiitaId =
    url.hostname === 'qiita.com' &&
    url.pathname.match(/\/items\/([0-9a-f]{20})/)?.[1];
  if (qiitaId) return `qiita-${qiitaId}`;
  const pathPart =
    decodeURIComponent(url.pathname).split('/').filter(Boolean).at(-1) ?? '';
  const candidate = pathPart || title;
  const normalized = candidate
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 72);
  if (normalized) return normalized;
  return `${url.hostname.replace(/[^a-z0-9]+/gi, '-')}-${Date.now().toString(36)}`.toLowerCase();
}

async function fetchPage(url: URL): Promise<string> {
  const response = await fetch(url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(20_000),
    headers: {
      'user-agent': 'tappunpages-content-importer/1.0',
      accept: 'text/html,application/xhtml+xml',
    },
  });
  if (!response.ok)
    throw new Error(`URLの取得に失敗しました: HTTP ${response.status}`);
  const contentType = response.headers.get('content-type') ?? '';
  if (
    !contentType.includes('text/html') &&
    !contentType.includes('application/xhtml+xml')
  ) {
    throw new Error(
      `HTMLページではありません: ${contentType || 'unknown content-type'}`
    );
  }
  return response.text();
}

async function enrichWithOllama(
  metadata: PageMetadata,
  type: ContentType,
  pageUrl: URL,
  model: string,
  ollamaUrl: string
): Promise<Pick<PageMetadata, 'title' | 'description' | 'tags' | 'source'>> {
  const schema = {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      tags: { type: 'array', items: { type: 'string' }, maxItems: 8 },
      source: { type: 'string' },
    },
    required: ['title', 'description', 'tags', 'source'],
  };
  const prompt = `次のWebページをポートフォリオの${type}一覧へ登録します。
事実を追加・推測せず、日本語で簡潔かつ自然なタイトルと120文字程度の説明、関連技術タグ（最大8件）、短い出典名を作ってください。
JSON Schemaに厳密に従ってください。

URL: ${pageUrl.href}
取得タイトル: ${metadata.title}
取得説明: ${metadata.description}
本文:
${metadata.bodyText}`;
  const endpoint = new URL('/api/generate', ollamaUrl).href;
  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      signal: AbortSignal.timeout(120_000),
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        model,
        prompt,
        stream: false,
        think: false,
        format: schema,
        options: { temperature: 0 },
      }),
    });
  } catch (error) {
    throw new Error(
      `Ollamaへ接続できませんでした (${endpoint}): ${error instanceof Error ? error.message : error}`
    );
  }
  if (!response.ok)
    throw new Error(
      `Ollama APIエラー: HTTP ${response.status} ${await response.text()}`
    );
  const result = (await response.json()) as { response?: string };
  if (!result.response) throw new Error('Ollamaから応答本文が返りませんでした');
  const value = JSON.parse(result.response) as Partial<PageMetadata>;
  if (
    !value.title ||
    !value.description ||
    !Array.isArray(value.tags) ||
    !value.source
  ) {
    throw new Error('Ollamaの応答に必要な項目がありません');
  }
  return {
    title: cleanText(value.title),
    description: cleanText(value.description).slice(0, 300),
    tags: value.tags.map(String).map(cleanText).filter(Boolean).slice(0, 8),
    source: cleanText(value.source),
  };
}

function readItems(filePath: string): ContentItem[] {
  if (!fs.existsSync(filePath)) return [];
  const value = parse(fs.readFileSync(filePath, 'utf8')) as unknown;
  if (!Array.isArray(value))
    throw new Error(`${filePath}: YMLのトップレベルは配列である必要があります`);
  return value as ContentItem[];
}

function assertUnique(contentRoot: string, item: ContentItem): void {
  for (const type of CONTENT_TYPES) {
    const directory = path.join(contentRoot, type);
    for (const fileName of fs
      .readdirSync(directory)
      .filter((name) => /\.ya?ml$/i.test(name))) {
      for (const existing of readItems(path.join(directory, fileName))) {
        const itemUrls = [item.url, item.repository_url].filter(Boolean);
        const existingUrls = [existing.url, existing.repository_url].filter(
          Boolean
        );
        if (itemUrls.some((url) => existingUrls.includes(url)))
          throw new Error(`URLは登録済みです: ${type}/${fileName}`);
        if (existing.slug === item.slug)
          throw new Error(
            `slugは登録済みです: ${item.slug} (${type}/${fileName})`
          );
      }
    }
  }
}

function parseArguments(args: string[]) {
  if (args[0] === '--') args = args.slice(1);
  if (args.includes('--help') || args.length === 0)
    return { help: true } as const;
  const [rawType, ...remainingArgs] = args;
  if (!CONTENT_TYPES.has(rawType as ContentType))
    throw new Error(`種別が不正です: ${rawType}`);
  const rawUrl =
    remainingArgs[0] && !remainingArgs[0].startsWith('--')
      ? remainingArgs.shift()
      : undefined;
  const options = remainingArgs;
  const values = new Map<string, string>();
  const flags = new Set<string>();
  for (let index = 0; index < options.length; index += 1) {
    const option = options[index];
    if (['--ollama', '--disable', '--dry-run'].includes(option)) {
      flags.add(option);
      continue;
    }
    if (
      [
        '--model',
        '--ollama-url',
        '--repository-url',
        '--published-at',
        '--file',
      ].includes(option)
    ) {
      const value = options[index + 1];
      if (!value || value.startsWith('--'))
        throw new Error(`${option}の値を指定してください`);
      values.set(option, value);
      index += 1;
      continue;
    }
    throw new Error(`不明なオプションです: ${option}`);
  }
  const fileName = values.get('--file') ?? 'generated.yml';
  if (!/^[a-zA-Z0-9._-]+\.ya?ml$/.test(fileName))
    throw new Error('--fileにはYMLファイル名だけを指定してください');
  const useOllama = flags.has('--ollama');
  const model = values.get('--model') ?? 'qwen3.5:9b';
  const repositoryUrl = values.get('--repository-url');
  if (rawType === 'articles' && !rawUrl)
    throw new Error('articlesにはURLが必要です');
  if (!rawUrl && !repositoryUrl)
    throw new Error('URLまたは--repository-urlを指定してください');
  return {
    help: false,
    type: rawType as ContentType,
    url: rawUrl ? new URL(rawUrl) : undefined,
    repositoryUrl: repositoryUrl ? new URL(repositoryUrl) : undefined,
    useOllama,
    disable: flags.has('--disable'),
    dryRun: flags.has('--dry-run'),
    model,
    ollamaUrl:
      values.get('--ollama-url') ??
      process.env.OLLAMA_URL ??
      'http://localhost:11434',
    publishedAt: values.get('--published-at'),
    fileName,
  } as const;
}

async function main(): Promise<void> {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    console.log(HELP);
    return;
  }
  for (const url of [options.url, options.repositoryUrl]) {
    if (url && !['http:', 'https:'].includes(url.protocol))
      throw new Error('http(s) URLだけを指定できます');
  }

  const metadataUrl = options.url ?? options.repositoryUrl!;
  console.log(`URLを取得しています: ${metadataUrl.href}`);
  const html = await fetchPage(metadataUrl);
  const metadata = parsePage(html, metadataUrl);
  const enriched = options.useOllama
    ? await enrichWithOllama(
        metadata,
        options.type,
        metadataUrl,
        options.model,
        options.ollamaUrl
      )
    : metadata;
  const item: ContentItem = {
    slug: createSlug(metadataUrl, enriched.title),
    title: enriched.title,
    description: enriched.description,
    ...(options.url ? { url: options.url.href } : {}),
    ...(options.repositoryUrl
      ? { repository_url: options.repositoryUrl.href }
      : {}),
    published_at: normalizeUtc(options.publishedAt ?? metadata.publishedAt),
    enable: !options.disable,
    icon: DEFAULT_ICONS[options.type],
    tags: enriched.tags,
    source: enriched.source,
  };

  const outputPath = path.join(
    process.cwd(),
    'content',
    options.type,
    options.fileName
  );
  assertUnique(path.join(process.cwd(), 'content'), item);
  if (options.dryRun) {
    console.log(stringify([item], { lineWidth: 120 }));
    return;
  }
  const items = readItems(outputPath);
  items.push(item);
  items.sort((a, b) => b.published_at.localeCompare(a.published_at));
  fs.writeFileSync(outputPath, stringify(items, { lineWidth: 120 }), 'utf8');
  console.log(
    `追加しました: ${path.relative(process.cwd(), outputPath)} (${item.slug})`
  );
}

main().catch((error) => {
  console.error(`Error: ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
});
