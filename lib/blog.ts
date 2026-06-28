import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** 表示順。デフォルトは date を YYYYMMDD の数値に変換した値 */
  order: number;
  /** 一覧表示用アイコン。絵文字 ("📝") または画像パス ("/images/icon.png") */
  icon?: string;
  tags?: string[];
  readingTime?: string;
  /**
   * 外部リンク URL。指定ありの場合、一覧で外部リンクとして開く。
   * 指定なしの場合、詳細ページ (/blog/slug) を表示する。
   */
  externalUrl?: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function ensureDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

/**
 * date 文字列 (YYYY-MM-DD) を order のデフォルト値 (YYYYMMDD の数値) に変換する。
 * 例: "2024-11-01" → 20241101
 */
function dateToOrder(date: string): number {
  if (!date) return 0;
  const cleaned = date.replace(/-/g, '');
  const num = parseInt(cleaned, 10);
  return isNaN(num) ? 0 : num;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  ensureDir();
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.(mdx?|md)$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    const date = data.date ?? '';
    const order =
      data.order !== undefined ? Number(data.order) : dateToOrder(date);

    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? '',
      date,
      order,
      icon: data.icon,
      tags: Array.isArray(data.tags) ? data.tags : [],
      readingTime: `${Math.ceil(rt.minutes)} min read`,
      externalUrl: data.externalUrl,
      content,
    } as BlogPost;
  });

  // order 昇順（同値なら date 降順）
  return posts.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return b.date.localeCompare(a.date);
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensureDir();
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  const date = data.date ?? '';
  const order =
    data.order !== undefined ? Number(data.order) : dateToOrder(date);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date,
    order,
    icon: data.icon,
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: `${Math.ceil(rt.minutes)} min read`,
    externalUrl: data.externalUrl,
    content,
  };
}
