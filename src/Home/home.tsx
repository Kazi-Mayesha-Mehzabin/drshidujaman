import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  APPOINTMENTS, CONFERENCE_HIGHLIGHTS, CSS, DEFAULT_TEAM, EDUCATION, EMAIL, HONOURS, INTERESTS,
  LENSES, PROJECTS, SCHOLAR, SERVICE,
} from "../shared/site";
import type { Member } from "../shared/site";
import { Footer, Header, Slot } from "../shared/Layout";
import g01 from "../assets/robot.avif";
import g02 from "../assets/shake.avif";
import g03 from "../assets/index1.avif";
import g04 from "../assets/bg1About.avif";
import g05 from "../assets/ka.avif";
import g06 from "../assets/robot3.jpg";
import tr from "../assets/tr.png";
import robot2 from "../assets/robot2.jpg";

const GALLERY = [
  { src: g01, alt: "Social robot interaction study", label: "Interaction study" },
  { src: g02, alt: "Greeting gesture design sketches", label: "Greeting gestures" },
  { src: g03, alt: "Explainable AI node diagram", label: "Explainable AI" },
  { src: g04, alt: "WellBot companion robot concept", label: "WellBot concept" },
  { src: g05, alt: "Robot chassis wireframe study", label: "Chassis study" },
  { src: g06, alt: "Human-robot handover study", label: "Handover study" },
];

// Two visual accent tones layered onto the existing palette (var(--*) from CSS) for the mono index labels.
const FAINT = "#8fb4c0";
const MONO = "'IBM Plex Mono', monospace";

const LENS_THEMES = [
  { accent: "#1fa9bd", soft: "rgba(31,169,185,.12)", shadow: "rgba(31,169,185,.30)", grad: "linear-gradient(135deg, rgba(31,169,185,.14), rgba(31,169,185,0) 70%)" },
  { accent: "#7c6bee", soft: "rgba(124,107,238,.12)", shadow: "rgba(124,107,238,.28)", grad: "linear-gradient(135deg, rgba(124,107,238,.15), rgba(124,107,238,0) 70%)" },
  { accent: "#e0865f", soft: "rgba(224,134,95,.14)", shadow: "rgba(224,134,95,.28)", grad: "linear-gradient(135deg, rgba(224,134,95,.16), rgba(224,134,95,0) 70%)" },
];

// Wider rotation for the research-interest grid (more items than the three lenses).
const INTEREST_THEMES = [
  { accent: "#1fa9bd", soft: "rgba(31,169,185,.12)", shadow: "rgba(31,169,185,.28)", grad: "radial-gradient(120% 100% at 100% 0%, rgba(31,169,185,.16), transparent 60%)" },
  { accent: "#7c6bee", soft: "rgba(124,107,238,.12)", shadow: "rgba(124,107,238,.26)", grad: "radial-gradient(120% 100% at 100% 0%, rgba(124,107,238,.17), transparent 60%)" },
  { accent: "#e0865f", soft: "rgba(224,134,95,.14)", shadow: "rgba(224,134,95,.26)", grad: "radial-gradient(120% 100% at 100% 0%, rgba(224,134,95,.18), transparent 60%)" },
  { accent: "#1fb37a", soft: "rgba(31,179,122,.12)", shadow: "rgba(31,179,122,.26)", grad: "radial-gradient(120% 100% at 100% 0%, rgba(31,179,122,.17), transparent 60%)" },
  { accent: "#d6598a", soft: "rgba(214,89,138,.13)", shadow: "rgba(214,89,138,.26)", grad: "radial-gradient(120% 100% at 100% 0%, rgba(214,89,138,.17), transparent 60%)" },
];

function SectionHeader({ index, eyebrow, title, lead }: { index: string; eyebrow: string; title: string; lead?: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(20px,4vw,64px)", alignItems: "end", marginBottom: "clamp(36px,5vw,64px)" }}>
      <div>
        <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: ".16em", textTransform: "uppercase", color: FAINT }}>{index} — {eyebrow}</div>
        <h2 style={{ margin: "14px 0 0", fontSize: "clamp(30px,3.6vw,46px)", lineHeight: 1.08, letterSpacing: "-.03em", fontWeight: 500 }}>{title}</h2>
        <div style={{ marginTop: 14, width: 56, height: 3, borderRadius: 2, background: "var(--ink-2)" }} />
      </div>
      {lead && <p style={{ margin: 0, fontSize: 15, lineHeight: 1.78, color: "var(--muted)", maxWidth: "46ch", textWrap: "pretty" as any }}>{lead}</p>}
    </div>
  );
}

type InterestTheme = { accent: string; soft: string; shadow: string; grad: string };

// On-brand "interest card" — index, a colored diamond mark, title, accent underline; hue rotates per card.
function InterestCard({ n, label, theme, animate, delay }: { n: string; label: string; theme: InterestTheme; animate?: boolean; delay?: number }) {
  return (
    <div
      className="sj-interest-card"
      style={{
        "--int-accent": theme.accent, "--int-soft": theme.soft, "--int-shadow": theme.shadow, "--int-grad": theme.grad,
        animation: animate ? `sjRise .45s ease ${delay ?? 0}s both` : undefined,
      } as any}
    >
      <span className="sj-interest-num">{n}</span>
      <div className="sj-interest-icon">
        <span className="sj-interest-diamond" />
      </div>
      <div className="sj-interest-label">{label}</div>
      <div className="sj-interest-bar" />
    </div>
  );
}

export type ShidujamanLandingProps = { team?: Member[] };

export default function ShidujamanLanding({ team = DEFAULT_TEAM }: ShidujamanLandingProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [showAllInterests, setShowAllInterests] = useState(false);
  const [teamPage, setTeamPage] = useState(0);
  const visibleInterests = showAllInterests ? INTERESTS : INTERESTS.slice(0, 4);
  const hasMoreInterests = INTERESTS.length > 4;
  const teamPerPage = 4;
  const teamPages = Math.max(1, Math.ceil(team.length / teamPerPage));

  useEffect(() => {
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [modalOpen]);

  const teamPrev = () => setTeamPage((p) => (p - 1 + teamPages) % teamPages);
  const teamNext = () => setTeamPage((p) => (p + 1) % teamPages);

  return (
    <div className="sj" id="top">
      <style>{CSS}</style>
      <Header />

      {/* hero */}
      <section className="sj-wrap" style={{ paddingTop: "clamp(26px,9vw,0px)", paddingBottom: "clamp(48px,7vw,96px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(40px,6vw,88px)", alignItems: "center" }}>
          <div style={{ animation: "sjRise .7s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: MONO, fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: "#2b7f96" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1fb3a4" }} />
              Independent University, Bangladesh
            </div>
            <h1 style={{ margin: "26px 0 0", fontSize: "clamp(40px,5.4vw,66px)", lineHeight: 1.02, letterSpacing: "-.035em", fontWeight: 500 }}>
              Mohammad<br />Shidujaman<span style={{ color: "#1fa9bd" }}>.</span>
            </h1>
            <p style={{ margin: "22px 0 0", fontSize: "clamp(15.5px,1.4vw,18px)", fontWeight: 400, lineHeight: 1.55, color: "#1d6a83", maxWidth: "34ch" }}>
              Assistant Professor of Computer Science and Engineering — designing how people and robots understand each other.
            </p>
            <p style={{ margin: "24px 0 0", maxWidth: "56ch", fontSize: 15, lineHeight: 1.78, color: "var(--muted)", textWrap: "pretty" as any }}>
              He teaches at IUB and holds a PhD in Design from Tsinghua University's MiLab, where he researched expressive interaction design for social robots. His work spans robotics, human–robot interaction and AI ethics, with recurring threads in cross-cultural design and cognitive psychology.
            </p>
            <div style={{ margin: "36px 0 0", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <button type="button" onClick={() => setModalOpen(true)} className="sj-btn" style={{ minWidth: 178 }}>
                Read more <span style
                ={{ fontSize: 13 }}>→</span>
              </button>
              <a href="#research" className="sj-btn" style={{ minWidth: 178 }}>Research focus <span>→</span></a>
            </div>
          </div>

          <div style={{ position: "relative", animation: "sjRise .8s .1s ease both" }}>
            <div aria-hidden className="sj-hero-blob" style={{
              background: `
                radial-gradient(55% 65% at 25% 55%, rgba(31,169,185,.48) 0%, transparent 70%),
                radial-gradient(50% 60% at 75% 65%, rgba(124,107,238,.36) 0%, transparent 70%),
                radial-gradient(48% 55% at 50% 100%, rgba(255,177,110,.32) 0%, transparent 70%)`,
            }} />
            <div className="sj-hero-frame">
              <img src={tr} alt="Dr. Mohammad Shidujaman" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
            </div>
            <div style={{ position: "relative", zIndex: 1, marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, fontFamily: MONO, fontSize: 10.5, letterSpacing: ".12em", textTransform: "uppercase", color: "#7ba6b3" }}>
              <span>Social robotics &amp; HRI</span>
              <span>MSLab · Tsinghua alumnus</span>
            </div>
          </div>
        </div>
      </section>

      {/* approach */}
      <section id="about" className="sj-wrap sj-sec" style={{ borderTop: "1px solid rgba(14,105,140,.10)" }}>
        <SectionHeader index="01" eyebrow="Approach" title="Three Lenses" lead="How should machines behave so that people trust, understand and enjoy working with them — across cultures, ages and abilities?" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(22px,3vw,32px)" }}>
          {LENSES.map((l, idx) => {
            const t = LENS_THEMES[idx % LENS_THEMES.length];
            return (
              <div key={l.n} className="sj-lens-card" style={{ "--lens-accent": t.accent, "--lens-soft": t.soft, "--lens-shadow": t.shadow, "--lens-grad": t.grad } as any}>
                <div className="sj-lens-num">{l.n}</div>
                <h3 className="sj-lens-title">{l.title}</h3>
                <p className="sj-lens-body" style={{ textWrap: "pretty" as any }}>{l.body}</p>
                <div className="sj-lens-bar" />
              </div>
            );
          })}
        </div>
      </section>

      {/* research interests */}
      <section id="research" className="sj-wrap sj-sec" style={{ borderTop: "1px solid rgba(14,105,140,.10)" }}>
        <SectionHeader index="02" eyebrow="Research" title="Research Interests" lead="Recurring areas across his publications, supervision and conference organising." />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "clamp(30px,4vw,48px)" }}>
          {[["IEEE", "Member · RAS Cognitive Robotics TC"], ["ACM", "Member"], ["BEIS", "Life Fellow"]].map(([k, v]) => (
            <span key={k} className="sj-badge">
              <span className="sj-badge-dot" />
              <span className="sj-badge-key">{k}</span>{v}
            </span>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "clamp(16px,2vw,22px)" }}>
          {visibleInterests.map((i, idx) => (
            <InterestCard key={i} n={String(idx + 1).padStart(2, "0")} label={i} theme={INTEREST_THEMES[idx % INTEREST_THEMES.length]} animate={idx >= 4} delay={(idx - 4) * 0.05} />
          ))}
        </div>
        {hasMoreInterests && (
          <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
            <button type="button" onClick={() => setShowAllInterests((v) => !v)} className="sj-btn">
              {showAllInterests ? "Show less" : "Load more"}
            </button>
          </div>
        )}
      </section>

      {/* projects */}
      <section id="projects" className="sj-wrap sj-sec" style={{ borderTop: "1px solid rgba(14,105,140,.10)" }}>
        <SectionHeader index="03" eyebrow="Current work" title="Projects" lead="Ongoing studies run with research assistants and thesis students at IUB." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(20px,2.6vw,28px)" }}>
          {PROJECTS.map((p) => (
            <article key={p.n} className="sj-project-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, letterSpacing: "-.015em" }}>{p.title}</h3>
                <span className="sj-project-num">{p.n}</span>
              </div>
              <p style={{ margin: "16px 0 0", fontSize: 14.5, lineHeight: 1.75, color: "var(--muted)", textWrap: "pretty" as any }}>{p.body}</p>
              <div className="sj-project-meta">{p.meta}</div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
          <Link to="/works" className="sj-btn">View all works <span>→</span></Link>
        </div>
      </section>

      {/* gallery */}
      <section id="gallery" className="sj-wrap sj-sec" style={{ borderTop: "1px solid rgba(14,105,140,.10)" }}>
        <SectionHeader index="04" eyebrow="Gallery" title="Selected Works" lead="Prototypes, sketches and study documentation from the lab." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "clamp(14px,1.6vw,20px)" }}>
          {GALLERY.map((g) => (
            <Link key={g.src} to="/works" className="sj-gallery-item" style={{ position: "relative", display: "block", aspectRatio: "4 / 3", overflow: "hidden" }}>
              <img src={g.src} alt={g.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", objectFit: "cover" }} loading="lazy" />
              <span className="sj-gallery-cap">{g.label}</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
          <Link to="/works" className="sj-btn">View more <span>→</span></Link>
        </div>
      </section>

      {/* lab */}
      <section id="lab" className="sj-wrap sj-sec" style={{ borderTop: "1px solid rgba(14,105,140,.10)" }}>
        <SectionHeader index="05" eyebrow="The lab" title="MS Lab" />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20, paddingBottom: "clamp(36px,5vw,64px)", borderBottom: "1px solid rgba(14,105,140,.10)" }}>
          <div style={{ width: "min(220px,60%)", borderRadius: "50%", overflow: "hidden", aspectRatio: "1 / 1", border: "2px solid var(--ink-2)" }}>
            <img src={tr} alt="Dr. Mohammad Shidujaman" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          </div>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "#2b9cb0" }}>Supervisor</div>
            <div style={{ marginTop: 12, fontSize: 20, fontWeight: 500, letterSpacing: "-.02em" }}>Dr. Mohammad Shidujaman</div>
            <div style={{ marginTop: 8, fontSize: 14, color: "var(--muted)" }}>Assistant Professor, CSE · PhD (Design), Tsinghua University</div>
            <p style={{ marginTop: 16, fontSize: 14.5, lineHeight: 1.75, color: "var(--muted)", maxWidth: "46ch", textWrap: "pretty" as any }}>Research assistants and undergraduate thesis students working with Dr. Shidujaman in the Department of Computer Science and Engineering at IUB, across social robotics, assistive robots and explainable AI.</p>
          </div>
        </div>

        <div style={{ marginTop: "clamp(30px,4vw,52px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 500, letterSpacing: "-.01em" }}>Research assistants &amp; students</h3>
          {teamPages > 1 && (
            <div style={{ display: "flex", gap: 10 }}>
              <button type="button" aria-label="Previous" onClick={teamPrev} className="sj-round">←</button>
              <button type="button" aria-label="Next" onClick={teamNext} className="sj-round">→</button>
            </div>
          )}
        </div>

        <div style={{ marginTop: 14, overflow: "hidden" }}>
          <div style={{ display: "flex", transform: `translateX(-${teamPage * 100}%)`, transition: "transform .45s cubic-bezier(.22,.9,.34,1)" }}>
            {Array.from({ length: teamPages }).map((_, p) => (
              <div key={p} className="sj-team-page">
                {team.slice(p * teamPerPage, p * teamPerPage + teamPerPage).map((m, i) => (
                  <div key={i} className="sj-team-slide">
                    <Slot src={m.photo} label="photo" ratio="1 / 1" radius="50%" alt={m.name} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {teamPages > 1 && (
          <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 8 }}>
            {Array.from({ length: teamPages }).map((_, p) => (
              <button key={p} type="button" aria-label={`Go to slide ${p + 1}`} onClick={() => setTeamPage(p)}
                style={{ width: p === teamPage ? 22 : 8, height: 8, borderRadius: 999, border: `1px solid ${p === teamPage ? "var(--ink-2)" : "rgba(14,105,140,.25)"}`, background: "transparent", padding: 0, cursor: "pointer", transition: "width .25s ease, border-color .25s ease" }} />
            ))}
          </div>
        )}

        <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
          <Link to="/lab" className="sj-btn">View lab <span>→</span></Link>
        </div>
      </section>

      {/* conferences */}
      <section id="conferences" className="sj-wrap sj-sec" style={{ borderTop: "1px solid rgba(14,105,140,.10)" }}>
        <SectionHeader index="06" eyebrow="Service" title="Conferences" lead="Selected conference service — session chairing at HCI International and ICIPRoB." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(22px,3vw,32px)" }}>
          {CONFERENCE_HIGHLIGHTS.map((c, idx) => {
            const t = LENS_THEMES[idx % LENS_THEMES.length];
            return (
              <div key={c.tag} className="sj-lens-card" style={{ "--lens-accent": t.accent, "--lens-soft": t.soft, "--lens-shadow": t.shadow, "--lens-grad": t.grad } as any}>
                <div className="sj-lens-num">{c.year}</div>
                <h3 className="sj-lens-title">{c.role}</h3>
                <p className="sj-lens-body">{c.conference} <span style={{ fontFamily: MONO, fontSize: 11, color: "#9dc0cb" }}>· {c.tag}</span></p>
                <div className="sj-lens-bar" />
              </div>
            );
          })}
        </div>
      </section>

      <Footer />

      {/* modal */}
      {modalOpen && (
        <div onClick={() => setModalOpen(false)} className="sj-modal-backdrop">
          <div onClick={(e) => e.stopPropagation()} className="sj-modal-panel">
            <div className="sj-modal-accent" />
            <button type="button" aria-label="Close" onClick={() => setModalOpen(false)} className="sj-round sj-modal-close">✕</button>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
              <div className="sj-modal-col sj-modal-col--tint">
                <div className="sj-modal-photo">
                  <img src={robot2} alt="Dr. Mohammad Shidujaman" style={{ width: "100%", aspectRatio: "6 / 5", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ marginTop: 24 }}>
                  <div className="sj-mono-label">Profession</div>
                  <div style={{ marginTop: 8, fontSize: 16, fontWeight: 700, color: "var(--ink-2)", lineHeight: 1.45 }}>Assistant Professor · Researcher in HRI &amp; Interaction Design</div>
                  <div style={{ marginTop: 6, fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>Department of Computer Science and Engineering, SETS, Independent University, Bangladesh</div>
                </div>

                <div style={{ marginTop: 26 }}>
                  <div className="sj-mono-label">Career path</div>
                  <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                    {APPOINTMENTS.map((a) => (
                      <div key={a.role} style={{ display: "flex", gap: 12, fontSize: 12.5, lineHeight: 1.55 }}>
                        <span style={{ flex: "0 0 auto", fontFamily: MONO, fontSize: 10.5, color: "#7ba6b3", minWidth: 48, paddingTop: 1 }}>{a.when}</span>
                        <span style={{ color: "var(--muted)" }}><strong style={{ color: "var(--ink-2)", fontWeight: 700 }}>{a.role}</strong><br />{a.org}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 26 }}>
                  <div className="sj-mono-label">Recognition</div>
                  <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                    {HONOURS.map((h) => (
                      <div key={h.year} style={{ display: "flex", gap: 12, fontSize: 12.5, lineHeight: 1.55 }}>
                        <span style={{ flex: "0 0 auto", fontFamily: MONO, fontSize: 10.5, color: "#7ba6b3", minWidth: 48, paddingTop: 1 }}>{h.year}</span>
                        <span style={{ color: "var(--muted)", fontWeight: 600 }}>{h.text}</span>
                      </div>
                    ))}
                    <div style={{ fontSize: 12, lineHeight: 1.6, color: "var(--muted)" }}>
                      <strong style={{ color: "var(--ink-2)" }}>Service —</strong> {SERVICE}
                    </div>
                  </div>
                </div>
              </div>

              <div className="sj-modal-col">
                <h2 style={{ margin: 0, fontSize: "clamp(24px,3vw,34px)", lineHeight: 1.08, letterSpacing: "-.03em", fontWeight: 750 }}>Dr. Mohammad Shidujaman</h2>
                <div style={{ marginTop: 10, fontFamily: MONO, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#2b9cb0" }}>PhD (Design), Tsinghua University</div>

                <div style={{ marginTop: 26, display: "grid", gap: 22 }}>
                  <div>
                    <div className="sj-mono-label">Years of experience</div>
                    <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {["13+ years in research & teaching (since 2013)", "Faculty since 2021", "At IUB since Jan 2023"].map((t) => (
                        <span key={t} style={{ padding: "10px 16px", borderRadius: 14, border: "1px solid rgba(14,105,140,.12)", fontSize: 13.5, fontWeight: 600, color: "#1f5e73" }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="sj-mono-label">Education</div>
                    <div style={{ marginTop: 12, display: "grid", gap: 1, border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
                      {EDUCATION.map((e) => (
                        <div key={e.degree} style={{ padding: "16px 18px", background: "#fff" }}>
                          <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
                            <span style={{ fontSize: 15, fontWeight: 700, color: "var(--ink-2)" }}>{e.degree}</span>
                            <span style={{ fontFamily: MONO, fontSize: 11, color: "#7ba6b3" }}>{e.place}</span>
                          </div>
                          <div style={{ marginTop: 6, fontSize: 13.5, lineHeight: 1.6, color: "var(--muted)" }}>{e.note}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="sj-mono-label">Areas of expertise</div>
                    <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {INTERESTS.slice(0, 8).map((i) => (
                        <span key={i} style={{ padding: "9px 15px", borderRadius: 999, border: "1px solid var(--line)", fontSize: 13, fontWeight: 600, color: "#1f5e73" }}>{i}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <a className="sj-btn" href={`mailto:${EMAIL}`}>Email</a>
                  <a className="sj-btn" href={SCHOLAR} target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
