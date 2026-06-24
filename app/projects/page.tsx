import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack Product Engineer として開発したプロジェクト一覧。",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <>
      <div className="page-bg-fixed bg-green" aria-hidden="true" />
      <div className="page-wrap">

        {/* Header band */}
        <section style={{ padding: "var(--sp12) var(--sp6) var(--sp8)" }}>
          <div className="container">
            <h1 className="section-heading white">PROJECTS</h1>

            <div className="list-container">
              <ul className="list-items">
                {projects.map(p => (
                  <li key={p.slug} className="list-item">
                    <Link href={`/projects/${p.slug}`}>
                      <div className="li-thumb" style={{
                        background: "linear-gradient(135deg, #a8e4f4 0%, #5ac8e8 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <span style={{ fontSize: "1.6rem" }}>🎮</span>
                      </div>
                      <div className="li-body">
                        <span className="li-title">
                          {p.featured && <span style={{ fontSize: "var(--text-xs)", background: "var(--yellow-dark)", color: "var(--text-dark)", padding: "1px 5px", borderRadius: "var(--r-sm)", marginRight: "var(--sp2)", fontWeight: 700 }}>★</span>}
                          {p.title}
                        </span>
                        <span className="li-desc">{p.description}</span>
                      </div>
                      <div className="li-arrow">▶</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
