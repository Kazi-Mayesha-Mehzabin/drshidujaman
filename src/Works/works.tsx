import { CSS, PROJECTS } from "../shared/site";
import { Footer, Header, PageHero } from "../shared/Layout";

export default function Works() {
  return (
    <div className="sj" id="top">
      <style>{CSS}</style>
      <Header />

      <PageHero
        eyebrow="Portfolio"
        title="Works"
        lead="Current projects out of IUB, spanning social robotics, assistive interaction and explainable AI."
      />

      <section className="sj-wrap sj-sec" style={{ paddingTop: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(16px,2vw,24px)" }}>
          {PROJECTS.map(p => (
            <article key={p.n} className="sj-card" style={{ display: "flex", flexDirection: "column", gap: 14, padding: "clamp(24px,3vw,34px)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <h2 style={{ margin: 0, fontSize: "clamp(18px,1.9vw,22px)", fontWeight: 700, color: "var(--ink-2)" }}>{p.title}</h2>
                <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#6fa7b6" }}>{p.n}</span>
              </div>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "var(--body)", textAlign: "justify" }}>{p.body}</p>
              <div style={{ marginTop: "auto", paddingTop: 8, fontFamily: "var(--mono)", fontSize: 11, color: "#7ba6b3" }}>{p.meta}</div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
