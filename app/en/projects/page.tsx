import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/components/seo/metadata";
import { en as t } from "@/lib/i18n/dictionaries";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = buildMetadata("en", t.projects.meta);

export default async function EnProjectsPage() {
  const projects = await getAllProjects();
  return (
    <>
      <div className="page-bg-fixed bg-green" aria-hidden="true" />
      <div className="page-wrap">
        <section style={{ padding:"var(--sp12) var(--sp6) var(--sp8)" }}>
          <div className="container">
            <h1 className="section-heading white">{t.projects.heading}</h1>
            <div className="list-container">
              <ul className="list-items">
                {projects.map(p => (
                  <li key={p.slug} className="list-item">
                    <Link href={`/en/projects/${p.slug}`}>
                      <div className="li-thumb" style={{ background:"linear-gradient(135deg,#a8e4f4,#5ac8e8)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                        <span style={{ fontSize:"1.6rem" }}>🎮</span>
                      </div>
                      <div className="li-body">
                        <span className="li-title">
                          {p.featured && <span style={{ fontSize:"var(--text-xs)",background:"var(--yellow-dark)",color:"var(--text-dark)",padding:"1px 5px",borderRadius:"var(--r-sm)",marginRight:"var(--sp2)",fontWeight:700 }}>{t.projects.featured}</span>}
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
