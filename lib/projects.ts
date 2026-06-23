import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured: boolean;
  github?: string;
  demo?: string;
  related?: string[];
  content: string;
}

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function ensureDir() {
  if (!fs.existsSync(PROJECTS_DIR)) {
    fs.mkdirSync(PROJECTS_DIR, { recursive: true });
  }
}

export async function getAllProjects(): Promise<Project[]> {
  ensureDir();
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const projects = files.map((file) => {
    const slug = file.replace(/\.(mdx?|md)$/, "");
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      featured: data.featured ?? false,
      github: data.github,
      demo: data.demo,
      related: data.related ?? [],
      content,
    } as Project;
  });

  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.date.localeCompare(a.date);
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  ensureDir();
  const mdxPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const mdPath  = path.join(PROJECTS_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: data.featured ?? false,
    github: data.github,
    demo: data.demo,
    related: data.related ?? [],
    content,
  };
}
