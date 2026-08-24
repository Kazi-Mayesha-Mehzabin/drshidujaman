import { CSS, DEFAULT_TEAM } from "../shared/site";
import { Footer, Header, PageHero, Slot } from "../shared/Layout";
import sir from "../assets/sir.png";

export default function Lab() {
  return (
    <div className="sj" id="top">
      <style>{CSS}</style>
      <Header />

      <PageHero
        eyebrow="Team"
        title="Lab"
        lead="Research assistants and undergraduate thesis students working with Dr. Shidujaman in the Department of Computer Science and Engineering at IUB, across social robotics, assistive robots and explainable AI."
      />

      <section className="sj-wrap sj-sec" style={{ paddingTop: 0, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ position: "relative", width: "clamp(190px,26vw,260px)" }}>
          <div style={{ position: "absolute", inset: -18, borderRadius: "50%", background: "linear-gradient(150deg,rgba(94,205,224,.22),rgba(32,178,166,.12))" }} />
          <div style={{ position: "relative", padding: 10, borderRadius: "50%", background: "#fff", border: "1px solid rgba(14,105,140,.12)", boxShadow: "0 26px 54px rgba(16,92,120,.16)" }}>
            <div style={{ borderRadius: "50%", overflow: "hidden", aspectRatio: "1 / 1", width: "100%" }}>
              <img src={sir} alt="Dr. Mohammad Shidujaman" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "50%", bottom: -14, transform: "translateX(-50%)", whiteSpace: "nowrap", padding: "8px 16px", borderRadius: 999, background: "#fff", border: "1px solid rgba(14,105,140,.12)", boxShadow: "0 12px 26px rgba(16,92,120,.12)", fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".12em", textTransform: "uppercase", color: "#2b7f96" }}>Supervisor</div>
        </div>
        <div style={{ margin: "30px 0 0", fontSize: "clamp(17px,1.8vw,20px)", fontWeight: 700, color: "var(--ink-2)" }}>Dr. Mohammad Shidujaman</div>
        <div style={{ marginTop: 6, fontSize: 13.5, color: "var(--muted)" }}>Assistant Professor, CSE · PhD (Design), Tsinghua University</div>
      </section>

      <section className="sj-wrap sj-sec">
        <h2 className="sj-h2" style={{ marginBottom: "clamp(20px,3vw,30px)" }}>Research assistants &amp; students</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "clamp(16px,2vw,24px)" }}>
          {DEFAULT_TEAM.map((m, i) => (
            <article key={i} className="sj-card" style={{ padding: 20, borderRadius: 24 }}>
              <Slot src={m.photo} label="photo" ratio="1 / 1" radius={18} alt={m.name} />
              <div style={{ marginTop: 16, fontSize: 16, fontWeight: 700, color: "var(--ink-2)" }}>{m.name}</div>
              <div style={{ marginTop: 4, fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".12em", textTransform: "uppercase", color: "#2b9cb0" }}>{m.role}</div>
              <div style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.6, color: "var(--muted)", textAlign: "justify" }}>{m.project}</div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
