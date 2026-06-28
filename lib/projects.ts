import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  /** 表示順。デフォルトは date を YYYYMMDD の数値に変換した値 */
  order: number;
  /** 一覧表示用アイコン。絵文字 ("🤖") または画像パス ("/images/icon.png") */
  icon?: string;
  tags: string[];
  featured: boolean;
  /**
   * 外部リンク URL。指定ありの場合、一覧で外部リンクとして開く。
   * 指定なしの場合、詳細ページ (/projects/slug) を表示する。
   */
  externalUrl?: string;
  github?: string;
  demo?: string;
  related?: string[];
  content: string;
}

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects');

function ensureDir() {
  if (!fs.existsSync(PROJECTS_DIR)) {
    fs.mkdirSync(PROJECTS_DIR, { recursive: true });
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

export async function getAllProjects(): Promise<Project[]> {
  ensureDir();
  const files = fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));

  const projects = files.map((file) => {
    const slug = file.replace(/\.(mdx?|md)$/, '');
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf-8');
    const { data, content } = matter(raw);

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
      featured: data.featured ?? false,
      externalUrl: data.externalUrl,
      github: data.github,
      demo: data.demo,
      related: data.related ?? [],
      content,
    } as Project;
  });

  // order 昇順（同値なら featured 優先、次に date 降順）
  return projects.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.date.localeCompare(a.date);
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  ensureDir();
  const mdxPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const mdPath = path.join(PROJECTS_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

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
    featured: data.featured ?? false,
    externalUrl: data.externalUrl,
    github: data.github,
    demo: data.demo,
    related: data.related ?? [],
    content,
  };
}
