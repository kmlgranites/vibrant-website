// Home.jsx — brand-awareness homepage spanning both arms (Publishing + Technology)

const CAPABILITIES = [
  { icon: "pen-tool", name: "Editorial", desc: "Copyediting, proofreading, indexing.", href: "services.html", tone: "blue" },
  { icon: "layout-template", name: "Production & Typesetting", desc: "InDesign, 3B2, QuarkXPress, LaTeX.", href: "services.html", tone: "green" },
  { icon: "sparkles", name: "Creative", desc: "Covers, jackets, graphics, restoration.", href: "services.html", tone: "coral" },
  { icon: "repeat", name: "Content Transformation", desc: "Word/PDF/XML/HTML + eBook (EPUB/MOBI).", href: "services.html", tone: "blue" },
  { icon: "book-open", name: "Manga Studio", desc: "Retouching, lettering, scanning.", href: "manga-studio.html", tone: "coral", star: true },
  { icon: "code-2", name: "Extended IT Team", desc: "Full-stack, cloud, DevOps, AI/ML.", href: "it-services.html", tone: "blue", star: true },
  { icon: "grid-2x2", name: "Microsoft 365", desc: "SharePoint, Power Apps, Power Automate.", href: "it-services.html", tone: "green" },
  { icon: "database", name: "Business Process Mgmt", desc: "Research, data, forms processing.", href: "services.html", tone: "gray" },
];

const VALUES = [
  ["People", "users", "The backbone of any organization — mutual respect, trust, and open communication."],
  ["Agility", "zap", "We adapt fast: continuous learning lets us see challenges coming and respond."],
  ["Teamwork", "handshake", "A flat hierarchy by design — and that partnership extends to our clients."],
  ["Integrity", "shield-check", "The highest bar for quality, IP, and confidentiality. Everyone owns their work."],
  ["Excellence", "award", "Best-in-class results, held to the highest industry standards, always improving."],
];

const TESTIMONIALS = [
  { quote: "Vibrant's editing transformed my illustrations into a professional Manga. From sound labeling to the quirky lettering, the editing and proofreading would have been extremely difficult without them.", who: "Manga creator", tag: "Lettering · Editorial" },
  { quote: "They understood my vision and created the perfect jacket design. They even convinced me to add an index — which got great feedback from my readers. I'm definitely coming back.", who: "Graphic novelist", tag: "Creative · Indexing" },
  { quote: "Highly evident they've done thorough research with expert knowledge and real industry experience. They enhanced my Manga and helped me better my writing. My book sales are already going up.", who: "Published author", tag: "Content · Editorial" },
];

function HomePage() {
  return (
    <main id="top" className="page-enter">
      <Hero />
      <TrustStrip />
      <Divisions />
      <Capabilities />
      <MangaSpotlight />
      <ITSpotlight />
      <WhyVibrant />
      <StatsBand />
      <Testimonials />
      <VisionBand />
      <ClosingCTA
        slug="№ 09 / GET STARTED"
        title={<>Tell us what you're building or <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-orange)" }}>publishing.</em></>}
        sub="One brief, one partner. We'll come back with the right mix of people and services, a timeline, and a quote that fits your budget."
        note="No project too big or too small"
      />
    </main>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section style={{ background: "var(--canvas-deep-teal)", color: "#fff", paddingTop: 88, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", right: -120, top: 60, width: 360, height: 360, background: "var(--vibrant-orange)", clipPath: "polygon(0 0,100% 0,0 100%)", opacity: 0.08 }} />
      <div aria-hidden style={{ position: "absolute", left: -90, bottom: -200, width: 440, height: 440, background: "var(--vibrant-blue)", clipPath: "polygon(100% 0,100% 100%,0 100%)", opacity: 0.07 }} />
      <div className="container">
        <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1.08fr 0.92fr", gap: 72, alignItems: "center" }}>
          <div>
            <div className="slug" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 26 }}>EST. 2014 · NULLI SECUNDUS — SECOND TO NONE</div>
            <h1 className="display-xxl" style={{ color: "#fff", fontSize: "clamp(48px, 7vw, 104px)" }}>
              Your extended<br/>team for{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                publishing
                <svg width="100%" height="12" viewBox="0 0 300 12" preserveAspectRatio="none" style={{ position: "absolute", left: 0, bottom: -2 }}>
                  <path d="M2 7 Q 80 1 160 6 T 298 4" stroke="var(--vibrant-green)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}&amp;{" "}
              <span style={{ color: "var(--vibrant-blue)" }}>technology</span><span style={{ color: "var(--vibrant-orange)" }}>.</span>
            </h1>
            <p style={{ marginTop: 30, fontSize: 20, lineHeight: 1.55, color: "rgba(255,255,255,0.8)", maxWidth: 560 }}>
              From manuscript to Manga, from MVP to Microsoft 365 — Vibrant gives publishers and businesses pre-vetted experts who integrate seamlessly and deliver. One partner, end to end.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
              <a href="contact.html" className="btn btn--primary btn--lg">Get a free consultation <span aria-hidden>→</span></a>
              <a href="#divisions" className="btn btn--ghost-light btn--lg">Explore what we do</a>
            </div>
            <div style={{ display: "flex", gap: 28, marginTop: 44, flexWrap: "wrap" }}>
              {[["10+ yrs", "delivering since 2014"], ["Global", "publishers & businesses"], ["7-day", "team onboarding"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "#fff" }}>{n}</div>
                  <div className="slug" style={{ color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Placeholder label="Hero image — studio + engineering team at work (Magnific)" ratio="4 / 5" tone="teal" rounded={12} icon="image" style={{ transform: "rotate(-1.4deg)", boxShadow: "0 30px 70px rgba(0,0,0,0.4)" }} />
            <div style={{ position: "absolute", bottom: -22, left: -22, background: "#fff", borderRadius: 12, padding: "16px 20px", boxShadow: "var(--shadow-lg)", display: "flex", alignItems: "center", gap: 12 }}>
              <span className="icon-badge icon-badge--green"><Icon name="badge-check" size={24} /></span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--fg-strong)" }}>Pre-vetted experts</div>
                <div style={{ fontSize: 12.5, color: "var(--fg-muted)" }}>that feel like your own team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST STRIP ---------------- */
function TrustStrip() {
  return (
    <section style={{ padding: "36px 0", background: "#0d1820", color: "#fff" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap", justifyContent: "space-between" }}>
        <div className="slug" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 300 }}>TRUSTED BY PUBLISHERS & BUSINESSES WORLDWIDE</div>
        <div style={{ display: "flex", gap: 36, alignItems: "center", flexWrap: "wrap", opacity: 0.72 }}>
          {["PUBLISHER", "IMPRINT", "STARTUP", "ENTERPRISE", "ACADEMIC PRESS"].map(p => (
            <span key={p} style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, letterSpacing: "0.04em", color: "rgba(255,255,255,0.85)" }}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TWO DIVISIONS ---------------- */
function Divisions() {
  const arms = [
    {
      tag: "Publishing Studio", icon: "book-open-text", tone: "coral",
      title: "We finish the book.",
      desc: "Editorial, production, creative, content transformation, and a dedicated Manga Studio — turning manuscripts and raw pages into polished, print-ready work.",
      bullets: ["Copyediting & proofreading", "Typesetting & eBook conversion", "Manga retouching & lettering", "Covers, jackets & graphics"],
      href: "services.html", cta: "Explore publishing",
    },
    {
      tag: "Technology", icon: "cpu", tone: "blue",
      title: "We extend your team.",
      desc: "Pre-vetted developers, cloud & DevOps engineers, M365 specialists, and AI/ML talent who integrate into your sprints and ship — onboarded in days, not months.",
      bullets: ["Full-stack product & platform", "Microsoft 365 & Power Platform", "Cloud, DevOps & automation", "Data engineering & AI/ML"],
      href: "it-services.html", cta: "Explore IT services",
    },
  ];
  return (
    <section id="divisions" style={{ background: "#fff" }}>
      <div className="container">
        <SectionHead slug="№ 01 / TWO STUDIOS" eyebrow="One partner, two strengths" title="Whatever the work, we take it off your plate." kicker="Vibrant brings the same craft and reliability to both worlds we live in — finished publishing and shipped software." />
        <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          {arms.map(a => {
            const accent = { coral: "var(--vibrant-orange)", blue: "var(--vibrant-blue)" }[a.tone];
            return (
              <a key={a.tag} href={a.href} className="card-lift" style={{ display: "block", textDecoration: "none", color: "inherit", border: "1px solid var(--border-hairline)", borderRadius: 16, padding: 40, background: "var(--bg-muted)", borderTop: `4px solid ${accent}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                  <span className={`icon-badge icon-badge--${a.tone}`}><Icon name={a.icon} size={26} /></span>
                  <span className={`chip chip--${a.tone === "coral" ? "orange" : "blue"}`}>{a.tag}</span>
                </div>
                <h3 className="display-md" style={{ fontSize: 32, marginBottom: 12 }}>{a.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-muted)", margin: 0, maxWidth: 460 }}>{a.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 26 }}>
                  {a.bullets.map(b => (
                    <div key={b} className="check-row"><span className="ck"><Icon name="check" size={17} /></span><span style={{ fontSize: 14, color: "var(--fg-default)" }}>{b}</span></div>
                  ))}
                </div>
                <div style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8, color: accent, fontWeight: 600, fontSize: 15 }}>{a.cta} <span aria-hidden>→</span></div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CAPABILITIES ---------------- */
function Capabilities() {
  return (
    <section style={{ background: "var(--bg-muted)" }}>
      <div className="container">
        <SectionHead slug="№ 02 / CAPABILITIES" eyebrow="Everything, under one roof" title="A wide menu, priced to suit your budget." kicker="Pick a single service or hand us the whole pipeline. From a first-time Manga creator to a large enterprise rollout — there's a Vibrant team for it." />
        <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border-hairline)", border: "1px solid var(--border-hairline)", borderRadius: 14, overflow: "hidden" }}>
          {CAPABILITIES.map(c => (
            <a key={c.name} href={c.href} className="card-lift" style={{ background: "#fff", padding: 28, textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 14, minHeight: 188 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className={`icon-badge icon-badge--${c.tone === "gray" ? "blue" : c.tone}`} style={c.tone === "gray" ? { background: "var(--gray-100)", color: "var(--gray-600)" } : {}}><Icon name={c.icon} size={24} /></span>
                {c.star && <span className="chip chip--green" style={{ fontSize: 10 }}>★ Flagship</span>}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "var(--fg-strong)", marginBottom: 6 }}>{c.name}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--fg-muted)", margin: 0 }}>{c.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MANGA SPOTLIGHT ---------------- */
function MangaSpotlight() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="container">
        <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <Placeholder label="Before / after — retouched Manga page (Magnific)" ratio="4 / 5" tone="coral" icon="book-image" />
            <div style={{ position: "absolute", top: 16, left: 16, padding: "5px 10px", background: "rgba(13,24,32,0.78)", color: "#fff", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", borderRadius: 4 }}>BEFORE</div>
            <div style={{ position: "absolute", bottom: 16, right: 16, padding: "5px 10px", background: "var(--vibrant-blue)", color: "#fff", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", borderRadius: 4 }}>AFTER</div>
          </div>
          <div>
            <div className="eyebrow eyebrow--orange" style={{ marginBottom: 14 }}>★ Flagship — The Manga Studio</div>
            <h2 className="display-lg">Raw pages in. <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-orange)" }}>Reader-ready</em> Manga out.</h2>
            <p className="lead" style={{ marginTop: 18, maxWidth: 520 }}>
              Our specialist studio sharpens lines, fills colour gaps, removes imperfections, and letters every panel by hand — from basic sound labeling to characterful, quirky lettering.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
              {[["Retouching", "Saturation, contrast, density & colour correction — full document enhancement."], ["Lettering", "Hand-tuned panel by panel; no template fonts."], ["Scanning", "High-resolution capture of every line and tone."]].map(([t, d]) => (
                <div key={t} className="check-row"><span className="ck"><Icon name="check-circle" size={20} /></span>
                  <div><span style={{ fontWeight: 600, color: "var(--fg-strong)" }}>{t}.</span> <span style={{ color: "var(--fg-muted)" }}>{d}</span></div>
                </div>
              ))}
            </div>
            <a href="manga-studio.html" className="btn btn--dark btn--lg" style={{ marginTop: 32 }}>Visit the Manga Studio <span aria-hidden>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- IT SPOTLIGHT ---------------- */
function ITSpotlight() {
  const feats = [
    ["rocket", "Onboard in days", "Pre-vetted engineers ready to work on your product, cloud, or M365 — no recruitment burden."],
    ["trending-up", "Scale any stage", "Scale capacity up or down by roadmap and budget. Pay only for what you use."],
    ["plug", "Seamless integration", "Our engineers work in your tools, sprints, and channels — just like your internal team."],
    ["grid-2x2", "Microsoft 365 experts", "SharePoint, Power Apps, Power Automate, Teams, security, governance & migration."],
  ];
  return (
    <section style={{ background: "var(--canvas-deep-teal)", color: "#fff" }}>
      <div className="container">
        <SectionHead slug="№ 03 / TECHNOLOGY" eyebrow="The Extended IT Team" title={<span style={{ color: "#fff" }}>Build faster with India's top engineering talent.</span>} kicker={<span style={{ color: "rgba(255,255,255,0.72)" }}>Instant access to expert developers, cloud engineers, M365 specialists, DevOps, AI/ML, and product leaders — from our high-quality engineering hub in Coimbatore.</span>} dark />
        <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {feats.map(([icon, t, d]) => (
            <div key={t} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: 28 }}>
              <span className="icon-badge icon-badge--teal" style={{ marginBottom: 18 }}><Icon name={icon} size={24} /></span>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#fff", marginBottom: 8 }}>{t}</div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.68)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <a href="it-services.html" className="btn btn--primary btn--lg">Build your IT team <span aria-hidden>→</span></a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY VIBRANT ---------------- */
function WhyVibrant() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="container">
        <SectionHead slug="№ 04 / WHY VIBRANT" eyebrow="The simple answer" title={<>We ask the right questions. We listen. We deliver <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-blue)" }}>brilliance.</em></>} kicker="Our values aren't a poster on the wall — they're how every project gets done, whether it's a book or a backlog." />
        <div className="grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, borderTop: "1px solid var(--border-default)" }}>
          {VALUES.map(([t, icon, d], i) => (
            <div key={t} style={{ padding: "32px 22px 28px", borderRight: i < 4 ? "1px solid var(--border-hairline)" : "none" }}>
              <span className="icon-badge icon-badge--blue" style={{ marginBottom: 16, width: 44, height: 44 }}><Icon name={icon} size={20} /></span>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "var(--fg-strong)", marginBottom: 10 }}>{t}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--fg-muted)", margin: 0 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS BAND ---------------- */
function StatsBand() {
  const stats = [["2014", "Founded", "blue"], ["8", "Service families", "green"], ["15–30 days", "To onboard a team", "coral"], ["Global", "Delivery model", "blue"]];
  return (
    <section style={{ background: "var(--bg-muted)", padding: "64px 0" }}>
      <div className="container">
        <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {stats.map(([n, l, tone], i) => (
            <div key={l} style={{ padding: "8px 28px", borderRight: i < 3 ? "1px solid var(--border-default)" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, letterSpacing: "-0.02em", color: { blue: "var(--vibrant-blue)", green: "var(--vibrant-green)", coral: "var(--vibrant-orange)" }[tone] }}>{n}</div>
              <div className="slug" style={{ marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="container">
        <SectionHead slug="№ 05 / VOICES" eyebrow="What clients say" title="The work speaks. So do the people behind it." />
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} style={{ margin: 0, background: "var(--bg-muted)", border: "1px solid var(--border-hairline)", borderRadius: 14, padding: "32px 30px", display: "flex", flexDirection: "column", gap: 20 }}>
              <span style={{ color: "var(--vibrant-orange)" }}><Icon name="quote" size={28} /></span>
              <blockquote className="serif" style={{ margin: 0, fontSize: 17.5, lineHeight: 1.5, color: "var(--fg-strong)", fontStyle: "italic" }}>{t.quote}</blockquote>
              <figcaption style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "1px solid var(--border-hairline)" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--gray-200)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gray-500)" }}><Icon name="user" size={20} /></div>
                <div><div style={{ fontWeight: 600, fontSize: 14, color: "var(--fg-strong)" }}>{t.who}</div><div className="slug">{t.tag}</div></div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VISION BAND ---------------- */
function VisionBand() {
  return (
    <section style={{ background: "var(--canvas-deep-teal)", color: "#fff", padding: "100px 0" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="eyebrow eyebrow--white" style={{ marginBottom: 22 }}>Our vision</div>
        <div className="serif" style={{ fontStyle: "italic", fontSize: 26, color: "var(--vibrant-green)", marginBottom: 16 }}>nulli secundus</div>
        <h2 className="display-xl" style={{ color: "#fff", maxWidth: 940, margin: "0 auto" }}>To be a global platform delivering value second to none.</h2>
        <p className="lead" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 620, margin: "24px auto 0" }}>
          Happy customers and satisfied teams, powered by innovation, technology, and a relentless habit of learning and improving.
        </p>
      </div>
    </section>
  );
}

window.HomePage = HomePage;
