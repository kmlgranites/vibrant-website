// Work.jsx — selected work / portfolio with category filter
const PROJECTS = [
  { title: "Manga restoration & lettering", cat: "Manga", tone: "coral", icon: "book-image", blurb: "Faded volumes restored, retouched, and lettered for re-release." },
  { title: "Graphic novel jacket design", cat: "Creative", tone: "blue", icon: "palette", blurb: "Cover and jacket art that matched the author's vision." },
  { title: "STM journal typesetting", cat: "Production", tone: "green", icon: "layout-template", blurb: "Multi-column, illustrated journal, print + online ready." },
  { title: "Manuscript → eBook (EPUB/MOBI)", cat: "Transformation", tone: "blue", icon: "tablet-smartphone", blurb: "Reflowable eBooks compatible with major eReaders." },
  { title: "Cover artwork & vectorization", cat: "Creative", tone: "coral", icon: "pen-tool", blurb: "Raster-to-vector and original cover illustration." },
  { title: "Index & proofread, 240pp", cat: "Editorial", tone: "green", icon: "spell-check", blurb: "Clean, intuitive index plus a meticulous final proof." },
  { title: "M365 intranet & Power Apps", cat: "Technology", tone: "blue", icon: "grid-2x2", blurb: "SharePoint intranet with custom Power Apps & automated workflows." },
  { title: "Data analytics dashboard", cat: "Technology", tone: "green", icon: "bar-chart-3", blurb: "Data pipeline and BI dashboard for an enterprise client." },
  { title: "Cloud migration & DevOps", cat: "Technology", tone: "coral", icon: "cloud", blurb: "Lift-and-shift to cloud with CI/CD automation." },
];
const CATS = ["All", "Manga", "Creative", "Editorial", "Production", "Transformation", "Technology"];

function WorkPage() {
  const [cat, setCat] = React.useState("All");
  const shown = cat === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
  return (
    <main className="page-enter">
      <PageHero
        slug="VIBRANT · PORTFOLIO"
        eyebrow="Selected work"
        title={<>A look at what we <span style={{ color: "var(--vibrant-green)" }}>ship.</span></>}
        sub="A cross-section of publishing and technology projects. Placeholder visuals for now — real before/afters, covers, and product screens drop in here."
      />

      <section style={{ background: "#fff" }}>
        <div className="container">
          {/* Filter */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
            {CATS.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: "9px 18px", borderRadius: 999, cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
                border: "1.5px solid " + (cat === c ? "var(--vibrant-blue)" : "var(--border-default)"),
                background: cat === c ? "var(--vibrant-blue)" : "#fff",
                color: cat === c ? "#fff" : "var(--fg-default)",
                transition: "all 160ms var(--ease-out)",
              }}>{c}</button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {shown.map(p => (
              <div key={p.title} className="card-lift" style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--border-hairline)", background: "#fff" }}>
                <Placeholder label={p.title + " (Magnific)"} ratio="16 / 11" tone={p.tone} icon={p.icon} rounded={0} />
                <div style={{ padding: "20px 22px" }}>
                  <div className="slug" style={{ marginBottom: 8 }}>{p.cat}</div>
                  <div style={{ fontWeight: 600, fontSize: 16.5, color: "var(--fg-strong)", marginBottom: 8 }}>{p.title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--fg-muted)", margin: 0 }}>{p.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        slug="№ 01 / YOUR PROJECT"
        title={<>Want to see your project <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-orange)" }}>here?</em></>}
        sub="Tell us what you're working on. We'll bring the right team and add another result to this wall."
        primary={["Start a project", "contact.html"]}
      />
    </main>
  );
}
window.WorkPage = WorkPage;
