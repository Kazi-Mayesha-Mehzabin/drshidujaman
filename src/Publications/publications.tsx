import { CSS, PUBLICATIONS, SCHOLAR } from "../shared/site";
import { Footer, Header, PageHero } from "../shared/Layout";

export default function Publications() {
  return (
    <div className="sj" id="top">
      <style>{CSS}</style>
      <Header />

      <PageHero eyebrow="Research output" title="Publications" lead={`${PUBLICATIONS.length} entries, 2012–2023.`} />

      <section className="sj-wrap sj-sec" style={{ paddingTop: 0 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: "clamp(24px,3vw,36px)" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#5c8b9b" }}>
            {PUBLICATIONS.length} publications
          </span>
          <a className="sj-btn" href={SCHOLAR} target="_blank" rel="noopener noreferrer" style={{ marginBottom: 0 }}>
            Google Scholar <span>↗</span>
          </a>
        </div>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {PUBLICATIONS.map((p, idx) => (
            <article key={p.title} className="sj-pub-item">
              <span className="sj-pub-index">{String(idx + 1).padStart(2, "0")}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 className="sj-pub-title">{p.title}</h2>
                <p className="sj-pub-venue">{p.venue}</p>
                <p className="sj-pub-authors">{p.authors}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
