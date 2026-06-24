import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="page-bg-fixed bg-blue" aria-hidden="true" />
      <div className="page-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "var(--sp6)" }}>
        <div>
          <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(5rem,15vw,10rem)", color: "var(--yellow)", letterSpacing: "0.05em", textShadow: "4px 4px 0 rgba(0,0,0,0.3)", lineHeight: 1 }}>404</div>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-3xl)", color: "var(--white)", marginBottom: "var(--sp4)", letterSpacing: "0.05em", textShadow: "2px 2px 0 rgba(0,0,0,0.3)" }}>PAGE NOT FOUND</h1>
          <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "var(--sp8)", textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>このページは存在しないか、移動された可能性があります。</p>
          <Link href="/" className="btn-more yellow-btn" style={{ fontSize: "var(--text-base)", padding: "var(--sp3) var(--sp8)" }}>← ホームへ戻る</Link>
        </div>
      </div>
    </>
  );
}
