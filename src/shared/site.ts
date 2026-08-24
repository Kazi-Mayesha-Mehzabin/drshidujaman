import female from "../assets/female.png";
import student from "../assets/student2.png";
import student2 from "../assets/female.png";
import test from "../assets/test.png";
import student31 from "../assets/student31.png";

export type Publication = { title: string; venue: string; authors: string };

export const PUBLICATIONS: Publication[] = [
  { title: "Meaningful Place: A Phenomenological Approach to the Design of Spatial Experience in Open-world Games", venue: "Games and Culture, 2023", authors: "Bo Wang, Zhenlin Gao, M. Shidujaman" },
  { title: "The Art of Artificial Intelligent Generated Content for Mobile Photography", venue: "HCI International 2023, Springer", authors: "Z. Wu, M. Fan, R. Tang, D. Ji, M. Shidujaman" },
  { title: "Design Strategy on Interaction Techniques for Social Robots", venue: "PhD Thesis, Tsinghua University, 2021", authors: "M. Shidujaman" },
  { title: "AI Creativity and the Human-AI Co-Creation Model", venue: "HCI International 2021, Springer", authors: "Z. Wu, D. Ji, K. Yu, X. Zeng, D. Wu, M. Shidujaman" },
  { title: "RoboQuin: A Mannequin Robot with Natural Humanoid Movements", venue: "27th IEEE RO-MAN, Nanjing, 2018", authors: "M. Shidujaman, S. Zhang, R. Elder, H. Mi" },
  { title: "“Which Country Are You From?”: A Cross-Cultural Study on Greeting Interaction Design for Social Robot", venue: "Cross-Cultural Design, HCII 2018, Springer LNCS 10911", authors: "M. Shidujaman, H. Mi" },
];

export const EMAIL = "shidujaman@iub.edu.bd";
export const SCHOLAR = "https://scholar.google.com/citations?user=4U9RcZAAAAAJ";

export type NavItem = { to: string; label: string };

export const NAV: NavItem[] = [
  { to: "/works", label: "Works" },
  { to: "/lab", label: "Lab" },
  { to: "/publications", label: "Publications" },
  { to: "/events", label: "Events" },
];

export type Member = { name: string; role: string; project: string; photo?: string };

export const DEFAULT_TEAM: Member[] = [
  { name: "KM Mayesha", role: "Research Assistant", project: "HYM — A mental health ecosystem for University Settings", photo: student31 },
  { name: "Achiyya Sultana", role: "Adjunct Lecturer", project: "WellBot — empathetic companion robot for healthcare support", photo: test },
  { name: "David Lesbon", role: "Research Assistant", project: "RoboInsight — affordable library-guidance robot", photo: student },
  { name: "Shreya Amin", role: "Undergraduate thesis", project: "Museum Robot — guidance and interaction study", photo: student2 },
  { name: "Karima Islam", role: "Undergraduate thesis", project: "Nursing Robot — assistive interaction for care settings", photo: student },
  { name: "Ariba Khan", role: "Student researcher", project: "Explainable AI — hate-speech detection and bias mitigation", photo: student31 },
];

export const LENSES = [
  {
    n: "01",
    title: "Interaction",
    body: "Expressive behaviour, greeting gestures and anthropomorphic cues that make a robot legible at a glance. His doctoral thesis, Design Strategy on Interaction Techniques for Social Robots, sits here.",
  },
  {
    n: "02",
    title: "Culture",
    body: "Cross-cultural design studies asking how the same machine reads differently in Dhaka, Beijing or Athens — from greeting interaction to educational robots designed across Europe.",
  },
  {
    n: "03",
    title: "Responsibility",
    body: "AI ethics and policy, explainable AI, and assistive technology for education, healthcare and entertainment — including work on hate speech and racial bias in social media.",
  },
];

export const INTERESTS = [
  "Human–Robot Interaction", "Social Robotics", "Human–Computer Interaction", "AI Ethics & Policy",
  "AI-Generated Creativity", "Cross-Cultural Design", "Cognitive Psychology", "User-Centred Design",
  "Assistive Technology", "Anthropomorphism", "Robotics & AI for Society",
];

export const PROJECTS = [
  { n: "01", title: "Explainable AI for Trustworthy AI", body: "A community-empowered AI system to detect hate speech and mitigate racial bias in social media.", meta: "Co-I: Saadia Binte Alam, PhD · Ishtiaque Ahmed, PhD" },
  { n: "02", title: "WellBot", body: "An empathetic companion robot combining AI-enhanced healthcare support with interactive learning.", meta: "Companion robotics" },
  { n: "03", title: "RoboInsight", body: "An affordable library-guidance robot integrating natural language processing, image processing and interactive engagement.", meta: "Service robotics" },
  { n: "04", title: "TINY", body: "A low-cost, voice-interactive children's educational robot built with natural language processing.", meta: "Undergraduate thesis project, ongoing" },
];

export const APPOINTMENTS = [
  { when: "2023 —", role: "Assistant Professor, CSE", org: "Independent University, Bangladesh" },
  { when: "2023", role: "Visiting Faculty, MiLab", org: "Tsinghua University" },
  { when: "2021–23", role: "Assistant Professor, EEE", org: "American International University-Bangladesh" },
  { when: "2017–21", role: "Doctoral Researcher, MiLab & Future Laboratory", org: "Academy of Arts and Design, Tsinghua University" },
  { when: "2013–15", role: "Research Assistant, AIART Lab", org: "National Taipei University, Taiwan" },
];

export const HONOURS = [
  { year: "2021", text: "Honorable Recognition, Highly Impactful Paper (Patent) Award — 10th ICIEV / 4th ICIVPR, Japan" },
  { year: "2020", text: "Finalist, Robot Design Competition — 12th ICSR, Colorado, USA" },
  { year: "2015", text: "MSc Best Student Award (飛鳶獎) — National Taipei University, Taiwan" },
];

export const SERVICE = "Program Board, HCI International (2022–2024) · Organizing Chair, ICMIR 2023 & 2024 · Publicity Chair, ICSR 2023 · Associate Editor, IEEE ARSO 2021 & 2023 · Editorial Board, Archives of Advanced Engineering Science";

export type ConferenceHighlight = { year: string; role: string; conference: string; tag: string };

// Selected service — session chairing at HCII and ICIPRoB. Shown as the 3-card summary on the home page.
export const CONFERENCE_HIGHLIGHTS: ConferenceHighlight[] = [
  { year: "2025", role: "Session Chair", conference: "HCI International 2025", tag: "HCII25" },
  { year: "2026", role: "Session Chair", conference: "HCI International 2026", tag: "HCII26" },
  { year: "2025", role: "Session Chair", conference: "ICIPRoB 2025", tag: "ICIPRoB25" },
];

export const EDUCATION = [
  { degree: "PhD, Design — 2021", place: "Tsinghua University, Beijing", note: "Thesis: “Design Strategy on Interaction Techniques for Social Robots.” Supervisor: Prof. Haipeng Mi, MiLab." },
  { degree: "MSc, Electrical Engineering — 2015", place: "National Taipei University, Taiwan", note: "Wireless power transmission robot design; research base: AIART Lab." },
  { degree: "BSc — 2012", place: "American International University-Bangladesh", note: "Thesis on an economically viable electronic anemometer for wind speed measurement." },
];

export const CSS = `
.sj { --ink:#10333f; --ink-2:#14404e; --body:#4c7482; --muted:#5b8493; --line:rgba(14,105,140,0.10);
  --sky:#1a8ec6; --teal:#14a498; --mono:'IBM Plex Mono',ui-monospace,monospace;
  font-family:Manrope,Helvetica,Arial,sans-serif; color:var(--ink); background:#fff;
  overflow-x:hidden; -webkit-font-smoothing:antialiased;
  background-image:radial-gradient(90% 60% at 92% -8%, rgba(196,235,242,.45) 0%, rgba(217,242,245,0) 62%),
    radial-gradient(70% 50% at 0% 2%, rgba(214,235,250,.38) 0%, rgba(219,238,251,0) 58%); }
.sj *,.sj *::before,.sj *::after { box-sizing:border-box; }
.sj a { color:#0b7fa8; text-decoration:none; }
.sj a:hover { color:#0e9b93; }
.sj h1,.sj h2,.sj h3 { letter-spacing:-.02em; text-wrap:pretty; }
.sj-wrap { max-width:1240px; margin:0 auto; padding-inline:clamp(18px,4vw,40px); }
.sj-sec { padding-top:clamp(50px,8vw,110px); }
.sj-eyebrow { font-family:var(--mono); font-size:11px; letter-spacing:.16em; text-transform:uppercase; color:#4c93a8; font-weight:500; }
.sj-h2 { margin:0; font-size:clamp(20px,2.2vw,28px); line-height:1.2; font-weight:600; color:var(--ink); letter-spacing:-.01em; }
.sj-page-title { margin:0; font-size:clamp(32px,4.6vw,52px); line-height:1.05; font-weight:750; letter-spacing:-.03em; color:var(--ink); }
.sj-lead { margin:0; font-size:15.5px; line-height:1.72; color:#48707f; }
.sj-card { background:#fff; border:1px solid var(--line); border-radius:26px; box-shadow:0 16px 36px rgba(16,92,120,.07);
  transition:transform .25s ease, box-shadow .25s ease; }
.sj-card:hover { transform:translateY(-6px); box-shadow:0 28px 54px rgba(16,92,120,.13); }
.sj-btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:14px 24px; border:2px solid var(--ink-2); border-radius:999px; cursor:pointer;
  font:inherit; font-size:13.5px; font-weight:600; letter-spacing:.01em; color:var(--ink-2); background:transparent; margin-bottom:12px; white-space:nowrap;
  transition:background .25s ease, color .25s ease, border-color .25s ease, transform .25s ease, box-shadow .25s ease; }
.sj-btn:hover { background:var(--ink-2); color:#fff; border-color:var(--ink-2); transform:translateY(-2px); box-shadow:0 14px 28px rgba(20,64,78,.24); }
.sj-btn:active { transform:translateY(0); box-shadow:none; }
.sj-btn--ghost { color:var(--ink-2); background:transparent; border:2px solid var(--ink-2); margin-bottom:12px; }
.sj-btn--ghost:hover { background:var(--ink-2); color:#fff; }
.sj-chip { padding:12px 18px; border-radius:999px; background:#fff; border:1px solid var(--line);
  font-size:14px; font-weight:600; color:#1f5e73; box-shadow:0 6px 16px rgba(16,92,120,.06); }
.sj-slot { display:grid; place-items:center; width:100%; background:
  repeating-linear-gradient(135deg,#f2fafc 0 8px,#e8f5f9 8px 16px); color:#7ba6b3;
  font-family:var(--mono); font-size:11px; letter-spacing:.08em; text-align:center; padding:12px; }
.sj-rail { display:flex; gap:clamp(14px,1.8vw,22px); overflow-x:auto; scroll-behavior:smooth;
  scroll-snap-type:x mandatory; padding:6px 2px 22px; scrollbar-width:none; }
.sj-rail::-webkit-scrollbar { display:none; }
.sj-rail > article { flex:0 0 clamp(230px,26vw,272px); scroll-snap-align:start; }
.sj-nav-link { font-size:13px; font-weight:600; letter-spacing:.04em; text-transform:uppercase; color:#2b5866; padding:6px 0; }
.sj-nav-link:hover { color:#0e9b93; }
.sj-round { width:46px; height:46px; border-radius:50%; display:grid; place-items:center; cursor:pointer;
  font-size:16px; border:2px solid var(--ink-2); background:transparent; color:var(--ink-2);
  transition:background .25s ease, color .25s ease, transform .25s ease, box-shadow .25s ease; }
.sj-round:hover { background:var(--ink-2); color:#fff; transform:translateY(-2px); box-shadow:0 10px 22px rgba(20,64,78,.22); }
.sj-mono-label { font-family:var(--mono); font-size:10.5px; letter-spacing:.14em; text-transform:uppercase; color:#5c8b9b; }
.sj-index-item { transition:padding-left .22s ease, background .22s ease; }
.sj-index-item:hover { padding-left:12px !important; background:linear-gradient(90deg,rgba(87,202,221,.07),rgba(87,202,221,0) 70%); }
.sj-index-item:hover span:last-child { color:#0e9b93; }
.sj-masonry { column-count:3; column-gap:clamp(14px,1.8vw,22px); }
.sj-masonry > * { display:block; break-inside:avoid; margin-bottom:clamp(14px,1.8vw,22px); }
@media (max-width:860px) { .sj-masonry { column-count:2; } }
@media (max-width:520px) { .sj-masonry { column-count:1; } }
.sj-gallery-item { position:relative; display:block; border-radius:22px; overflow:hidden; box-shadow:0 16px 36px rgba(16,92,120,.10); }
.sj-gallery-item img { display:block; width:100%; transition:transform .5s ease; }
.sj-gallery-item:hover img { transform:scale(1.045); }
.sj-gallery-cap { position:absolute; left:0; right:0; bottom:0; padding:14px 16px; font-family:var(--mono); font-size:10.5px; letter-spacing:.12em;
  text-transform:uppercase; color:#fff; background:linear-gradient(0deg,rgba(10,40,50,.75),rgba(10,40,50,0));
  opacity:0; transform:translateY(6px); transition:opacity .3s ease, transform .3s ease; }
.sj-gallery-item:hover .sj-gallery-cap { opacity:1; transform:translateY(0); }
@keyframes sjRise { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
@keyframes sjFade { from { opacity:0; } to { opacity:1; } }
@keyframes sjFloat { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }

/* team slider — each slide is a page of up to 4 avatars, centered; arrows/dots page between slides */
.sj-team-page { flex:0 0 100%; display:flex; justify-content:center; align-items:flex-start; gap:16px; }
/* fixed avatar width sized off a virtual 4-column row (3 gaps of 16px), capped so photos stay compact */
.sj-team-slide { flex:0 0 clamp(56px, calc((100% - 48px) / 4), 160px); display:flex; justify-content:center; }
.sj-team-slide > div { width:100%; transition:transform .35s cubic-bezier(.22,.9,.34,1), box-shadow .35s ease, border-color .35s ease; box-shadow:0 12px 26px rgba(16,92,120,.14); }
.sj-team-slide:hover > div { transform:translateY(-8px) scale(1.05); box-shadow:0 26px 46px rgba(16,92,120,.24); border-color:#1fa9bd; }

/* hero image */
.sj-hero-blob { position:absolute; left:6%; right:6%; bottom:-8%; height:75%; z-index:0; pointer-events:none;
  filter:blur(46px); animation:sjFloat 7s ease-in-out infinite; }
.sj-hero-frame { position:relative; z-index:1; border-radius:32px; overflow:hidden; aspect-ratio:4/3; width:100%;;
   }

/* three lenses */
.sj-lens-card { position:relative; overflow:hidden; padding:clamp(28px,3vw,36px) clamp(24px,2.6vw,30px); border-radius:22px;
  border:1px solid rgba(14,105,140,.12); background:#fff;
  transition:transform .35s cubic-bezier(.22,.9,.34,1), box-shadow .35s ease, border-color .35s ease; }
.sj-lens-card::before { content:''; position:absolute; inset:0; opacity:.65; background:var(--lens-grad); pointer-events:none; transition:opacity .35s ease; }
.sj-lens-card:hover { transform:translateY(-8px); border-color:var(--lens-accent); box-shadow:0 28px 52px -16px var(--lens-shadow); }
.sj-lens-card:hover::before { opacity:1; }
.sj-lens-num { position:relative; z-index:1; display:inline-flex; align-items:center; justify-content:center; width:42px; height:42px; border-radius:13px;
  background:var(--lens-soft); color:var(--lens-accent); font-family:var(--mono); font-size:13px; font-weight:700; transition:transform .35s ease; }
.sj-lens-card:hover .sj-lens-num { transform:scale(1.08) rotate(-4deg); }
.sj-lens-title { position:relative; z-index:1; margin:20px 0 12px; font-size:19px; font-weight:600; letter-spacing:-.015em; }
.sj-lens-body { position:relative; z-index:1; margin:0; font-size:14.5px; line-height:1.75; color:var(--muted); }
.sj-lens-bar { position:relative; z-index:1; margin-top:18px; width:30px; height:3px; border-radius:2px; background:var(--lens-accent); transition:width .35s ease; }
.sj-lens-card:hover .sj-lens-bar { width:54px; }

/* projects */
.sj-project-card { position:relative; padding:clamp(26px,3vw,34px) clamp(22px,2.6vw,28px) clamp(28px,3vw,32px); border-radius:22px;
  background:linear-gradient(165deg,#fff,#f8fdfe); border:1px solid rgba(14,105,140,.12); box-shadow:0 10px 26px rgba(16,92,120,.06);
  display:flex; flex-direction:column; height:100%;
  transition:transform .35s cubic-bezier(.22,.9,.34,1), box-shadow .35s ease, border-color .35s ease; }
.sj-project-card:hover { transform:translateY(-8px); box-shadow:0 30px 54px rgba(16,92,120,.16); border-color:rgba(31,169,185,.4); }
.sj-project-num { flex:0 0 auto; font-family:var(--mono); font-size:11px; font-weight:700; letter-spacing:.04em; color:#fff;
  background:linear-gradient(135deg,#1fa9bd,#0e7f96); padding:6px 12px; border-radius:999px; }
.sj-project-meta { display:inline-flex; align-items:center; gap:8px; margin-top:auto; padding-top:18px;
  font-family:var(--mono); font-size:10.5px; letter-spacing:.08em; text-transform:uppercase; color:#2b7f96; }
.sj-project-meta::before { content:''; width:6px; height:6px; border-radius:50%; background:#1fb3a4; flex:none; }

/* research interests */
.sj-badge { display:inline-flex; align-items:center; gap:9px; padding:10px 16px 10px 14px; border-radius:999px; background:#fff;
  border:1.5px solid rgba(14,105,140,.18); font-size:12.5px; font-weight:600; color:#1f5e73;
  box-shadow:0 6px 16px rgba(16,92,120,.06); transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.sj-badge:hover { transform:translateY(-3px); box-shadow:0 16px 30px rgba(16,92,120,.14); border-color:#1fa9bd; }
.sj-badge-dot { width:7px; height:7px; border-radius:50%; background:#1fb3a4; flex:none; }
.sj-badge-key { font-family:var(--mono); font-size:10px; letter-spacing:.08em; color:#0e7f96; }
.sj-interest-card { position:relative; overflow:hidden; padding:24px 22px 28px; border-radius:18px;
  border:1px solid rgba(14,105,140,.12); background:#fff;
  transition:transform .35s cubic-bezier(.22,.9,.34,1), box-shadow .35s ease, border-color .35s ease; }
.sj-interest-card::before { content:''; position:absolute; inset:0; opacity:.55; background:var(--int-grad); pointer-events:none; transition:opacity .35s ease; }
.sj-interest-card:hover { transform:translateY(-6px); border-color:var(--int-accent); box-shadow:0 22px 40px -14px var(--int-shadow); }
.sj-interest-card:hover::before { opacity:1; }
.sj-interest-num { position:relative; z-index:1; display:block; font-family:var(--mono); font-size:12.5px; font-weight:700; color:var(--int-accent); font-variant-numeric:tabular-nums; }
.sj-interest-icon { position:relative; z-index:1; margin-top:16px; width:42px; height:42px; border-radius:12px; background:var(--int-soft);
  display:grid; place-items:center; transition:transform .35s ease; }
.sj-interest-card:hover .sj-interest-icon { transform:scale(1.08) rotate(-6deg); }
.sj-interest-diamond { width:11px; height:11px; border:1.5px solid var(--int-accent); transform:rotate(45deg); }
.sj-interest-label { position:relative; z-index:1; margin-top:16px; font-size:15.5px; font-weight:600; color:var(--ink-2); line-height:1.32; letter-spacing:-.01em; }
.sj-interest-bar { position:relative; z-index:1; margin-top:14px; width:24px; height:2px; border-radius:2px; background:var(--int-accent); transition:width .35s ease; }
.sj-interest-card:hover .sj-interest-bar { width:40px; }

/* profile modal */
.sj-modal-backdrop { position:fixed; inset:0; z-index:90; overflow-y:auto; -webkit-overflow-scrolling:touch;
  background:#fff; animation:sjFade .2s ease both; }
.sj-modal-panel { position:relative; width:100%; min-height:100%; background:#fff;
  animation:sjRise .3s cubic-bezier(.22,.9,.34,1) both; }
.sj-modal-accent { height:5px; background:linear-gradient(90deg,#1fa9bd,#7c6bee,#e0865f); }
.sj-modal-close { position:fixed; top:20px; right:20px; z-index:2; background:#fff; }
.sj-modal-col { padding:clamp(32px,4.2vw,52px) clamp(24px,3.2vw,42px); }
.sj-modal-col--tint { background:linear-gradient(165deg,#f3fbfd,#eef8fb); border-bottom:1px solid rgba(14,105,140,.08); }
@media (min-width:720px) { .sj-modal-col--tint { border-bottom:none; border-right:1px solid rgba(14,105,140,.08); } }
.sj-modal-photo { width:min(420px,100%); border-radius:20px; overflow:hidden; }

/* publications list */
.sj-pub-item { display:flex; gap:clamp(16px,3vw,32px); padding:clamp(22px,3vw,32px) clamp(6px,1vw,10px); border-bottom:1px solid var(--line);
  border-radius:14px; transition:background .3s ease, padding-left .3s ease; }
.sj-pub-item:hover { background:linear-gradient(90deg, rgba(31,169,185,.06), rgba(31,169,185,0) 70%); padding-left:14px; }
.sj-pub-index { flex:0 0 auto; font-family:var(--mono); font-size:11px; color:#9dc0cb; min-width:30px; padding-top:4px; }
.sj-pub-title { margin:0; font-size:clamp(15px,1.6vw,17px); font-weight:600; color:var(--ink-2); line-height:1.55; letter-spacing:-.01em; }
.sj-pub-venue { margin:10px 0 0; font-size:13px; color:var(--muted); line-height:1.6; }
.sj-pub-authors { margin:6px 0 0; font-family:var(--mono); font-size:11px; color:#7ba6b3; letter-spacing:.02em; }
@media (max-width:640px) { .sj-pub-item { flex-direction:column; gap:6px; } .sj-pub-index { padding-top:0; } }
`;
