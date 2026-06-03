// Manga.jsx — the Manga Studio flagship page
function MangaPage() {
  const services = [
    { icon: "wand-2", tone: "coral", name: "Retouching", lead: "From basic retouching to full document enhancement, ready for publication.",
      items: ["Saturation, contrast & density correction", "Colour correction & gap-filling", "Sharpen lines & enhance textures", "Remove imperfections & blemishes"] },
    { icon: "type", tone: "blue", name: "Lettering", lead: "Hand-tuned lettering that gives every panel its voice — no template fonts.",
      items: ["Dialogue & narration lettering", "Sound effects (SFX) & sound labeling", "Quirky, characterful styling", "Sign & background text"] },
    { icon: "scan-line", tone: "green", name: "Scanning", lead: "High-resolution scanning that captures every line and tone of your originals.",
      items: ["Archival-quality capture", "Tone & gradient preservation", "Clean, print-ready files", "Batch volume scanning"] },
  ];
  return (
    <main className="page-enter">
      <PageHero
        slug="VIBRANT · FLAGSHIP STUDIO"
        eyebrow="★ The Manga Studio"
        title={<>Raw pages in. <span style={{ color: "var(--vibrant-orange)" }}>Reader-ready</span> Manga out.</>}
        sub="Our specialist studio breathes new life into your work — enhancing textures, sharpening lines, filling colour gaps, removing imperfections, and lettering every panel by hand."
      >
        <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
          <a href="contact.html" className="btn btn--primary btn--lg">Start a Manga project <span aria-hidden>→</span></a>
        </div>
      </PageHero>

      {/* Before / after spotlight */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <SectionHead slug="№ 01 / PROOF" eyebrow="See the difference" title="When your favourite Manga fades, we bring it back." kicker="Whether it's a collector's item that's scratched and faded, or a fresh draft that needs polish — we hand it back with new life." />
          <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={{ position: "relative" }}>
              <Placeholder label="BEFORE — raw / faded page (Magnific)" ratio="3 / 4" tone="gray" icon="image-off" />
              <div style={{ position: "absolute", top: 14, left: 14, padding: "5px 10px", background: "rgba(13,24,32,0.78)", color: "#fff", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", borderRadius: 4 }}>BEFORE</div>
            </div>
            <div style={{ position: "relative" }}>
              <Placeholder label="AFTER — retouched & lettered (Magnific)" ratio="3 / 4" tone="coral" icon="book-image" />
              <div style={{ position: "absolute", top: 14, left: 14, padding: "5px 10px", background: "var(--vibrant-blue)", color: "#fff", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", borderRadius: 4 }}>AFTER</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three services */}
      <section style={{ background: "var(--bg-muted)" }}>
        <div className="container">
          <SectionHead slug="№ 02 / WHAT WE DO" eyebrow="Three crafts, one studio" title="Retouching, lettering, scanning." />
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {services.map(s => (
              <div key={s.name} style={{ background: "#fff", border: "1px solid var(--border-hairline)", borderRadius: 16, padding: 32, display: "flex", flexDirection: "column" }}>
                <span className={`icon-badge icon-badge--${s.tone}`} style={{ marginBottom: 18 }}><Icon name={s.icon} size={26} /></span>
                <h3 className="display-md" style={{ fontSize: 25, marginBottom: 10 }}>{s.name}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-muted)", marginBottom: 20 }}>{s.lead}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "auto 0 0", display: "flex", flexDirection: "column", gap: 11 }}>
                  {s.items.map(it => (
                    <li key={it} className="check-row"><span className="ck"><Icon name="check" size={16} /></span><span style={{ fontSize: 14, color: "var(--fg-default)" }}>{it}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ background: "var(--canvas-deep-teal)", color: "#fff" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 880, marginLeft: "auto", marginRight: "auto" }}>
          <span style={{ color: "var(--vibrant-orange)", display: "inline-flex", marginBottom: 18 }}><Icon name="quote" size={40} /></span>
          <blockquote className="serif" style={{ margin: 0, fontStyle: "italic", fontSize: 28, lineHeight: 1.45, color: "#fff" }}>
            "Vibrant's editing transformed my illustrations into a professional Manga and I couldn't be happier. From the basic sound labeling to the quirky lettering, the editing and proofreading would have been extremely difficult without them."
          </blockquote>
          <div className="slug" style={{ color: "rgba(255,255,255,0.6)", marginTop: 28 }}>MANGA CREATOR · LETTERING & EDITORIAL</div>
        </div>
      </section>

      <ClosingCTA
        slug="№ 03 / GET STARTED"
        title={<>Give us your pages. We'll give them <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-orange)" }}>new life.</em></>}
        sub="Tell us about your Manga project and we'll come back with a plan, a timeline, and a quote that suits your budget."
        primary={["Start a Manga project", "contact.html"]}
      />
    </main>
  );
}
window.MangaPage = MangaPage;
