import { CSS } from "../shared/site";
import { Footer, Header, PageHero } from "../shared/Layout";

export default function Events() {
  return (
    <div className="sj" id="top">
      <style>{CSS}</style>
      <Header />

      <PageHero
        eyebrow="News"
        title="Events"
        lead="Talks, conference service and lab news will be posted here."
      />

      <section className="sj-wrap sj-sec" style={{ paddingTop: 0 }}>
        <div style={{ borderRadius: 26, border: "1px dashed rgba(14,105,140,.22)", background: "linear-gradient(150deg,#f7fdfe,#fbfdff 55%,#f6fdfa)", padding: "clamp(40px,6vw,72px) clamp(24px,4vw,40px)", textAlign: "center" }}>
          <div className="sj-mono-label">Coming soon</div>
          <p style={{ margin: "14px auto 0", maxWidth: "48ch", fontSize: 14.5, lineHeight: 1.7, color: "var(--body)" }}>
            Nothing published yet — check back for upcoming talks, workshops and conference appearances.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
