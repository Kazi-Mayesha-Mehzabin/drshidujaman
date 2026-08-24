import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EMAIL, NAV, SCHOLAR } from "./site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const sync = () => {
      const n = window.innerWidth < 900;
      setNarrow(n);
      if (!n) setMenuOpen(false);
    };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    sync();
    window.addEventListener("resize", sync);
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("resize", sync); window.removeEventListener("keydown", key); };
  }, []);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 60, backdropFilter: "blur(14px)", background: "rgba(255,255,255,0.88)", borderBottom: "1px solid var(--line)" }}>
      <div className="sj-wrap" style={{ paddingBlock: 14, display: "flex", alignItems: "center", gap: 20, justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
          <span style={{ width: 80, height: 40, flex: "none", borderRadius: 13, display: "grid", placeItems: "center", background: "linear-gradient(140deg,#4fc3dd,#2b9fd6 55%,#21b3a6)", color: "#fff", fontWeight: 800, fontSize: 15, boxShadow: "0 8px 18px rgba(24,146,183,.3)" }}>MSLab</span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, minWidth: 0 }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: "#123845", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Dr. Mohammad Shidujaman</span>
            <span className="sj-mono-label" style={{ fontSize: 10.5, letterSpacing: ".14em" }}>HRI · HCI · Design</span>
          </span>
        </Link>

        {!narrow && (
          <nav style={{ display: "flex", alignItems: "center", gap: "clamp(14px,2vw,30px)" }}>
            {NAV.map(n => <Link key={n.to} className="sj-nav-link" to={n.to}>{n.label}</Link>)}
            <a className="sj-btn" href={`mailto:${EMAIL}`} style={{ padding: "11px 20px", fontSize: 13.5, marginLeft: 6 }}>Contact</a>
          </nav>
        )}

        {narrow && (
          <button type="button" aria-label="Menu" onClick={() => setMenuOpen(o => !o)}
            style={{ display: "flex", flexDirection: "column", gap: 5, alignItems: "center", justifyContent: "center", width: 44, height: 44, flex: "none", borderRadius: 13, border: "1.5px solid var(--ink-2)", background: "transparent", cursor: "pointer" }}>
            <span style={{ width: 18, height: 2, borderRadius: 2, background: "#1d5f75" }} />
            <span style={{ width: 18, height: 2, borderRadius: 2, background: "#1d5f75" }} />
          </button>
        )}
      </div>

      {narrow && menuOpen && (
        <div style={{ borderTop: "1px solid var(--line)", background: "#fbfeff", padding: "10px clamp(18px,4vw,40px) 20px", display: "grid", gap: 2 }}>
          {NAV.map(n => (
            <Link key={n.to} to={n.to} onClick={() => setMenuOpen(false)}
              style={{ padding: "13px 4px", fontSize: 15, fontWeight: 600, color: "#23556a", borderBottom: "1px solid rgba(14,105,140,.08)" }}>{n.label}</Link>
          ))}
          <a className="sj-btn" href={`mailto:${EMAIL}`} style={{ marginTop: 12, justifyContent: "center", fontSize: 14 }}>{EMAIL}</a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contact" style={{ marginTop: "clamp(56px,9vw,120px)", background: "linear-gradient(160deg,#f4fbfd,#f8fcff 60%,#f4fcf9)", borderTop: "1px solid var(--line)" }}>
      <div className="sj-wrap" style={{ paddingBlock: "clamp(40px,6vw,84px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(28px,4vw,56px)" }}>
          <div>
            <h2 className="sj-h2" style={{ margin: "0 0 14px", fontSize: "clamp(22px,2.8vw,32px)", maxWidth: "20ch" }}>Let's collaborate.</h2>
            <a className="sj-btn" href={`mailto:${EMAIL}`} style={{ marginTop: 12 }}>{EMAIL}</a>
          </div>
          <div style={{ display: "grid", gap: 10, fontSize: 14, lineHeight: 1.65, color: "#3c6474" }}>
            <div className="sj-mono-label">Office</div>
            <div style={{ textAlign: "justify" }}>Room C7013, IUB Campus<br />Plot 16, Aftab Uddin Ahmed Road<br />Baridhara, Dhaka 1229, Bangladesh</div>
            <div className="sj-mono-label" style={{ marginTop: 10 }}>ORCID</div>
            <a href="https://orcid.org/0000-0002-7906-2508" target="_blank" rel="noopener noreferrer">0000-0002-7906-2508</a>
          </div>
          <div style={{ display: "grid", gap: 10, alignContent: "start", fontSize: 14 }}>
            <div className="sj-mono-label">Profiles</div>
            <a href="https://shidujaman.com/" target="_blank" rel="noopener noreferrer">Personal website ↗</a>
            <a href={SCHOLAR} target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
            <a href="https://www.researchgate.net/profile/Mohammad-Shidujaman" target="_blank" rel="noopener noreferrer">ResearchGate ↗</a>
            <a href="http://www.cse.iub.edu.bd/index.php/faculties/75" target="_blank" rel="noopener noreferrer">IUB faculty page ↗</a>
            <a href="https://hk.linkedin.com/in/mohammad-shidujaman-phd-104a2848" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div style={{ marginTop: "clamp(30px,4vw,54px)", paddingTop: 22, borderTop: "1px solid rgba(14,105,140,.12)", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase", color: "#6b96a4" }}>
          <span>Dr. Mohammad Shidujaman · CSE, SETS, IUB</span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}

export const PageHero: React.FC<{ eyebrow: string; title: string; lead?: string }> = ({ eyebrow, title, lead }) => (
  <section className="sj-wrap" style={{ paddingTop: "clamp(38px,6.5vw,80px)", paddingBottom: "clamp(24px,3.5vw,40px)" }}>
    <span className="sj-eyebrow">{eyebrow}</span>
    <h1 className="sj-page-title" style={{ margin: "12px 0 0" }}>{title}</h1>
    {lead && <p className="sj-lead" style={{ marginTop: 16, maxWidth: "58ch", textAlign: "justify" }}>{lead}</p>}
  </section>
);

export const Slot: React.FC<{ src?: string; alt?: string; label: string; ratio?: string; radius?: number | string }> = ({
  src, alt, label, ratio = "4 / 5", radius = 22,
}) => (
  <div style={{ borderRadius: radius, overflow: "hidden", aspectRatio: ratio, width: "100%", border: "2px solid var(--ink-2)" }}>
    {src
      ? <img src={src} alt={alt ?? label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      : <div className="sj-slot" style={{ height: "100%" }}>{label}</div>}
  </div>
);
