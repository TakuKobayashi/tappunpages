import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/components/seo/metadata";
import { en as t } from "@/lib/i18n/dictionaries";

export const metadata: Metadata = buildMetadata("en", t.about.meta);

export default function EnAboutPage() {
  const a = t.about;
  return (
    <>
      <div className="page-bg-fixed bg-blue" aria-hidden="true" />
      <div className="page-wrap">
        <section style={{ padding:"var(--sp12) var(--sp6) var(--sp8)" }}>
          <div className="container">
            <h1 className="section-heading yellow" style={{ textAlign:"left",marginBottom:"var(--sp4)" }}>{a.heading}</h1>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 300px",gap:"var(--sp10)",alignItems:"start" }}>
              <div style={{ background:"rgba(255,255,255,0.88)",borderRadius:"var(--r-xl)",padding:"var(--sp6)",boxShadow:"var(--shadow-md)",lineHeight:1.85,color:"var(--text-mid)" }}>
                {a.bio.map((p, i) => <p key={i} style={{ marginBottom:"var(--sp4)" }}>{p}</p>)}
              </div>
              <aside style={{ background:"rgba(255,255,255,0.9)",borderRadius:"var(--r-xl)",padding:"var(--sp5)",boxShadow:"var(--shadow-md)" }}>
                <div style={{ width:72,height:72,borderRadius:"var(--r-lg)",background:"var(--grad-yellow)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-logo)",fontSize:"1.4rem",border:"2px solid var(--border-gray)",marginBottom:"var(--sp3)" }}>tp</div>
                <div style={{ fontWeight:700,fontSize:"var(--text-lg)",marginBottom:2 }}>taptappun</div>
                <div style={{ fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",color:"var(--sky)",marginBottom:"var(--sp3)" }}>{a.role}</div>
                <div style={{ fontSize:"var(--text-sm)",color:"var(--text-mid)",marginBottom:"var(--sp4)" }}>{a.location}</div>
              </aside>
            </div>
          </div>
        </section>

        <div style={{ height:50,background:"linear-gradient(to bottom right,#5AC8E8 50%,#7CC87A 50%)" }} aria-hidden="true" />

        <section className="section-band band-green" aria-label="Career timeline">
          <div className="container">
            <h2 className="section-heading white">{a.timeline.heading}</h2>
            <div style={{ maxWidth:720,margin:"0 auto",position:"relative",paddingLeft:"var(--sp8)" }}>
              <div style={{ position:"absolute",left:"var(--sp3)",top:8,bottom:0,width:2,background:"linear-gradient(to bottom,var(--yellow-dark),rgba(255,255,255,0.3))" }} aria-hidden="true" />
              {a.timeline.items.map(item => (
                <div key={item.year} style={{ position:"relative",marginBottom:"var(--sp8)" }}>
                  <div style={{ position:"absolute",left:"calc(-1 * var(--sp8) + var(--sp3) - 5px)",top:6,width:12,height:12,background:"var(--yellow-dark)",border:"2px solid var(--white)",borderRadius:"50%",boxShadow:"0 0 6px rgba(255,220,108,0.6)" }} aria-hidden="true" />
                  <div style={{ background:"rgba(255,255,255,0.88)",borderRadius:"var(--r-lg)",padding:"var(--sp4) var(--sp5)",boxShadow:"var(--shadow-card)" }}>
                    <div style={{ fontFamily:"var(--font-mono)",fontSize:"var(--text-xs)",color:"var(--sky)",marginBottom:"var(--sp1)" }}>{item.year}</div>
                    <div style={{ fontWeight:700,fontSize:"var(--text-lg)",marginBottom:2 }}>{item.title}</div>
                    <div style={{ fontSize:"var(--text-sm)",color:"var(--text-muted)",marginBottom:"var(--sp2)" }}>{item.org}</div>
                    <p style={{ fontSize:"var(--text-sm)",color:"var(--text-mid)",lineHeight:1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ height:50,background:"linear-gradient(to bottom right,#7CC87A 50%,#FFE180 50%)" }} aria-hidden="true" />

        <section className="section-band band-yellow" aria-label="Values">
          <div className="container">
            <h2 className="section-heading" style={{ color:"var(--text-dark)" }}>{a.values.heading}</h2>
            <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"var(--sp4)" }}>
              {a.values.items.map(v => (
                <div key={v.title} style={{ background:"rgba(255,255,255,0.88)",borderRadius:"var(--r-lg)",padding:"var(--sp5)",boxShadow:"var(--shadow-card)" }}>
                  <div style={{ fontSize:"1.8rem",marginBottom:"var(--sp3)" }} aria-hidden="true">{v.icon}</div>
                  <div style={{ fontWeight:700,marginBottom:"var(--sp2)" }}>{v.title}</div>
                  <p style={{ fontSize:"var(--text-sm)",color:"var(--text-mid)",lineHeight:1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-cta">
          <h2>{a.cta.heading}</h2>
          <p>&nbsp;</p>
          <Link href="/en/contact" className="btn-more yellow-btn" style={{ fontSize:"var(--text-base)",padding:"var(--sp3) var(--sp8)" }}>{a.cta.btn}</Link>
        </section>
      </div>
    </>
  );
}
