// About.jsx
const ABOUT_VALUES = [
  ["People", "users", "We believe people are the backbone of any organization. We treat all stakeholders with compassion and professionalism, uphold mutual respect and trust, recognise one another's work, and provide avenues for personal and professional development."],
  ["Agility", "zap", "Good business means responding to changing circumstances while adapting innovatively. We encourage continuous learning and research to recognise, understand, and tackle challenges before they derail a project."],
  ["Teamwork", "handshake", "Our flat hierarchy encourages collaboration, acceptance, and appreciation. We respond rather than react, resolve conflicts through healthy dialogue, and extend that collaboration to how we work with clients."],
  ["Integrity", "shield-check", "Working with content demands a high standard of quality, IP, and confidentiality. We uphold these through contracts and on the ground — each person takes ownership to deliver efficiently and ethically."],
  ["Excellence", "award", "We strive for excellence in everything. Through continuous internal skill development, we focus on quality control and hold ourselves to the highest industry standards while keeping up with the latest trends."],
];

function AboutPage() {
  return (
    <main className="page-enter">
      <PageHero
        slug="VIBRANT · SINCE 2014"
        eyebrow="About us"
        title={<>A decade of turning content into <span style={{ color: "var(--vibrant-green)" }}>finished work.</span></>}
        sub="Vibrant Future Tech Services seeks to build long-term relationships with clients on the grounds of reliability, trust, and high-quality service delivery."
      />

      {/* Story */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <Placeholder label="Team / studio photo (Magnific)" ratio="4 / 3" tone="gray" icon="users" />
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Our story</div>
              <h2 className="display-lg">From a small team to a strategic partner.</h2>
              <p className="lead" style={{ marginTop: 20 }}>
                In 2014, a small team came together to offer a comprehensive suite of services to publishing houses. From a simple beginning a decade ago, Vibrant has expanded — in scope and complexity — into a wide portfolio of services.
              </p>
              <p className="lead" style={{ marginTop: 16 }}>
                Today, with our expert team, we are strategic partners to a host of global publishers and businesses, offering services to suit every budget — and a growing technology practice that extends engineering teams worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ background: "var(--canvas-deep-teal)", color: "#fff" }}>
        <div className="container">
          <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div style={{ borderLeft: "3px solid var(--vibrant-green)", paddingLeft: 28 }}>
              <div className="eyebrow eyebrow--white" style={{ marginBottom: 14 }}>Our vision</div>
              <div className="serif" style={{ fontStyle: "italic", fontSize: 24, color: "var(--vibrant-green)", marginBottom: 14 }}>nulli secundus</div>
              <h2 className="display-md" style={{ color: "#fff", fontSize: 30, lineHeight: 1.25 }}>To elevate Vibrant into an unparalleled global platform for delivering exemplary value to its clients — second to none.</h2>
            </div>
            <div style={{ borderLeft: "3px solid var(--vibrant-orange)", paddingLeft: 28 }}>
              <div className="eyebrow eyebrow--orange" style={{ marginBottom: 14 }}>Our mission</div>
              <h2 className="display-md" style={{ color: "#fff", fontSize: 30, lineHeight: 1.25, marginTop: 38 }}>To ensure happy customers and satisfied employees by leveraging innovation and creativity, advanced technology, and continuous learning and improvement.</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <SectionHead slug="№ 01 / VALUES" eyebrow="Our values" title="The principles that define how we work." kicker="Our values serve as guiding principles for providing top-quality services. It matters to us that our people align with them — individually and as teams." />
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {ABOUT_VALUES.map(([t, icon, d], i) => (
              <div key={t} style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 40, padding: "32px 0", borderTop: "1px solid var(--border-default)", alignItems: "start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span className="icon-badge icon-badge--blue"><Icon name={icon} size={24} /></span>
                  <h3 className="display-md" style={{ fontSize: 26 }}>{t}</h3>
                </div>
                <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--fg-muted)", margin: 0, paddingTop: 6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vibrant */}
      <section style={{ background: "var(--bg-muted)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Why Vibrant?</div>
          <h2 className="display-lg" style={{ maxWidth: 880, margin: "0 auto" }}>
            The answer is simple. We ask the right questions, we listen when you tell us what you want, and we use our experience to deliver <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-blue)" }}>brilliance.</em>
          </h2>
        </div>
      </section>

      <ClosingCTA
        slug="№ 02 / WORK WITH US"
        title={<>Let's build something <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-orange)" }}>brilliant.</em></>}
        sub="Whether it's a book, a backlog, or a Microsoft 365 rollout — tell us what you need and we'll bring the right team."
        primary={["Get in touch", "contact.html"]}
      />
    </main>
  );
}
window.AboutPage = AboutPage;
