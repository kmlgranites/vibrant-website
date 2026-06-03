// Services.jsx — publishing services hub
const FAMILIES = [
  {
    id: "content", n: "01", icon: "file-pen", tone: "blue",
    name: "Content Development",
    lead: "Enhance your Manga and books with editing, rewriting, and fresh material for your fanbase. Give us your brief and we make it happen.",
    subs: [
      ["Supplement creation", "Exclusive behind-the-scenes content and canon material that keeps readers hooked."],
      ["Alt-text writing", "Quality alternative text so visually-impaired readers can engage with the right visual cues."],
      ["Content enhancement", "Meticulous attention to detail, adapting to your style to develop captivating content."],
    ],
  },
  {
    id: "editorial", n: "02", icon: "spell-check", tone: "green",
    name: "Editorial Services",
    lead: "Grammatical errors? Hard-to-read sentences? Mechanical writing? Not at Vibrant. We keep your work error-free and fun to read.",
    subs: [
      ["Copyediting", "Bring the writer's voice through while keeping readability and structure intact."],
      ["Proofreading", "A keen eye for detail — error-free, correct punctuation, ready for publication."],
      ["Indexing", "Clear, intuitive indexes that make it easy for readers to navigate scenes and characters."],
    ],
  },
  {
    id: "production", n: "03", icon: "layout-template", tone: "coral",
    name: "Production & Typesetting",
    lead: "One of the most sought-after services in publishing. We deliver high-quality design optimised for print, online media, or both — from plain text to complex STM and illustrated journals.",
    subs: [
      ["Typesetting & design", "From simple text to intricate, multi-column STM and illustrated journals."],
      ["Print & digital output", "Optimised for print, dynamic online media, or both."],
    ],
    tools: ["InDesign", "3B2", "QuarkXPress", "TeX / LaTeX", "FrameMaker"],
    note: "We work in all roman languages.",
  },
  {
    id: "transformation", n: "04", icon: "repeat", tone: "blue",
    name: "Content Transformation",
    lead: "Converting between formats can be tiresome and time-consuming. We preserve the formatting, structure, and integrity of every document — standard or specialized.",
    subs: [
      ["Word, PDF, XML, HTML conversion", "Word → PDF, PDF → HTML, and everything in between, integrity preserved."],
      ["eBook conversion", "Manuscripts to EPUB and MOBI, compatible with popular eReaders and platforms."],
    ],
  },
  {
    id: "creative", n: "05", icon: "palette", tone: "coral",
    name: "Creative Services",
    lead: "An engaging cover can take your story from sitting on a shelf right to a reader. Our creative team transforms design ideas into captivating, print-ready visuals.",
    subs: [
      ["Artwork creation", "Covers, jacket art, vector images, medical illustrations, and raster-to-vector."],
      ["Graphics processing", "Enhance existing graphics to exceptional quality, or create new ones to brief."],
      ["Image editing & restoration", "Restoration, scratch removal, colour correction, masking, clipping, resizing."],
    ],
  },
  {
    id: "bpm", n: "06", icon: "database", tone: "green",
    name: "Business Process Management",
    lead: "Beyond content, we handle the data-heavy work that keeps operations moving — accurately and at scale.",
    subs: [
      ["Web research & data collection", "Targeted research and structured data gathering."],
      ["Data cleansing & enrichment", "Clean, complete, and reliable datasets."],
      ["Data entry, validation & forms", "Accurate entry, validation, and forms processing."],
    ],
  },
];

function ServicesPage() {
  return (
    <main className="page-enter">
      <PageHero
        slug="VIBRANT · PUBLISHING"
        eyebrow="Publishing services"
        title={<>Everything a book needs, <span style={{ color: "var(--vibrant-green)" }}>under one roof.</span></>}
        sub="A wide variety of content services across every range of complexity — at prices that suit your budget. Pick one, or hand us the whole pipeline."
      >
        <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
          {FAMILIES.map(f => (
            <a key={f.id} href={`#${f.id}`} className="chip chip--ghost" style={{ textDecoration: "none", padding: "8px 14px" }}>{f.name}</a>
          ))}
        </div>
      </PageHero>

      {FAMILIES.map((f, i) => (
        <section key={f.id} id={f.id} style={{ background: i % 2 === 0 ? "#fff" : "var(--bg-muted)", scrollMarginTop: 80 }}>
          <div className="container">
            <div className="spread" style={{ alignItems: "start" }}>
              <div style={{ paddingTop: 6 }}>
                <span className={`icon-badge icon-badge--${f.tone}`} style={{ marginBottom: 16 }}><Icon name={f.icon} size={26} /></span>
                <div className="slug">№ {f.n}</div>
              </div>
              <div>
                <h2 className="display-lg" style={{ marginBottom: 16 }}>{f.name}</h2>
                <p className="lead" style={{ maxWidth: 640, marginBottom: 36 }}>{f.lead}</p>
                <div className="grid-3" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(f.subs.length, 3)}, 1fr)`, gap: 16 }}>
                  {f.subs.map(([t, d]) => (
                    <div key={t} style={{ background: i % 2 === 0 ? "var(--bg-muted)" : "#fff", border: "1px solid var(--border-hairline)", borderRadius: 12, padding: 24 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "var(--fg-strong)", marginBottom: 8 }}>{t}</div>
                      <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0 }}>{d}</p>
                    </div>
                  ))}
                </div>
                {f.tools && (
                  <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                    <span className="slug">Tools we use</span>
                    {f.tools.map(t => (
                      <span key={t} style={{ padding: "7px 14px", border: "1px solid var(--border-default)", borderRadius: 999, fontSize: 13, fontWeight: 600, color: "var(--fg-default)", background: "#fff", fontFamily: "var(--font-mono)" }}>{t}</span>
                    ))}
                    {f.note && <span style={{ fontSize: 13, color: "var(--fg-subtle)", fontStyle: "italic" }}>— {f.note}</span>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Manga Studio callout */}
      <section style={{ background: "var(--canvas-deep-teal)", color: "#fff" }}>
        <div className="container">
          <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }}>
            <div>
              <div className="eyebrow eyebrow--orange" style={{ marginBottom: 14 }}>★ Flagship</div>
              <h2 className="display-lg" style={{ color: "#fff" }}>Looking for the Manga Studio?</h2>
              <p className="lead" style={{ color: "rgba(255,255,255,0.75)", marginTop: 18, maxWidth: 520 }}>
                Retouching, lettering, and scanning have a home of their own. Our specialist studio turns raw pages into reader-ready Manga.
              </p>
              <a href="manga-studio.html" className="btn btn--primary btn--lg" style={{ marginTop: 30 }}>Visit the Manga Studio <span aria-hidden>→</span></a>
            </div>
            <Placeholder label="Manga panel sample (Magnific)" ratio="4 / 3" tone="dark" icon="book-image" />
          </div>
        </div>
      </section>

      <ClosingCTA
        slug="№ 07 / GET STARTED"
        title={<>Not sure which services you <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-orange)" }}>need?</em></>}
        sub="Tell us what you're publishing and we'll map the right mix to your deadline and budget — no project too big or too small."
        primary={["Get a quote", "contact.html"]}
      />
    </main>
  );
}
window.ServicesPage = ServicesPage;
