// Contact.jsx — qualified "get a quote" page with a working form
function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", company: "", email: "", service: "", message: "" });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const valid = form.name && form.email && form.service;

  const SERVICES = ["Publishing — editorial / production", "Manga Studio", "Creative / design", "Content transformation / eBook", "Extended IT Team", "Microsoft 365", "Business Process Management", "Not sure yet"];

  return (
    <main className="page-enter">
      <PageHero
        slug="VIBRANT · CONTACT"
        eyebrow="Get a quote"
        title={<>Tell us what you're building or <span style={{ color: "var(--vibrant-orange)" }}>publishing.</span></>}
        sub="Send us your brief and we'll come back with the right mix of people and services, a timeline, and a quote that fits your budget."
      />

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 72, alignItems: "start" }}>
            {/* Form */}
            <div>
              {sent ? (
                <div style={{ background: "var(--green-50)", border: "1px solid var(--green-200)", borderRadius: 16, padding: 48, textAlign: "center" }}>
                  <span className="icon-badge icon-badge--green" style={{ width: 64, height: 64, margin: "0 auto 20px" }}><Icon name="check" size={32} /></span>
                  <h2 className="display-md" style={{ fontSize: 28, marginBottom: 10 }}>Thank you — we're on it.</h2>
                  <p className="lead" style={{ maxWidth: 440, margin: "0 auto" }}>We've received your brief and a member of the Vibrant team will be in touch shortly. Talk soon.</p>
                  <button className="btn btn--ghost" style={{ marginTop: 28 }} onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", service: "", message: "" }); }}>Send another</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (valid) setSent(true); }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28 }}>
                    <div>
                      <label className="field-label">Your name *</label>
                      <input className="field" value={form.name} onChange={set("name")} placeholder="Jane Doe" required />
                    </div>
                    <div>
                      <label className="field-label">Company</label>
                      <input className="field" value={form.company} onChange={set("company")} placeholder="Publisher / studio / startup" />
                    </div>
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label className="field-label">Email *</label>
                    <input className="field" type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" required />
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <label className="field-label">What do you need? *</label>
                    <select className="field" value={form.service} onChange={set("service")} required style={{ appearance: "auto" }}>
                      <option value="" disabled>Select a service…</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ marginBottom: 32 }}>
                    <label className="field-label">Tell us about your project</label>
                    <textarea className="field" value={form.message} onChange={set("message")} placeholder="Scope, format, page count or roles, deadline, budget range…" rows={4} />
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg" disabled={!valid} style={{ opacity: valid ? 1 : 0.45, cursor: valid ? "pointer" : "not-allowed" }}>
                    Send brief <span aria-hidden>→</span>
                  </button>
                  <p style={{ fontSize: 12.5, color: "var(--fg-subtle)", marginTop: 16 }}>We typically reply within one business day. Your details stay confidential.</p>
                </form>
              )}
            </div>

            {/* Side info */}
            <div>
              <div style={{ background: "var(--bg-muted)", border: "1px solid var(--border-hairline)", borderRadius: 16, padding: 32, marginBottom: 24 }}>
                <h3 className="display-md" style={{ fontSize: 20, marginBottom: 20 }}>What happens next</h3>
                {[["Brief", "We read your brief and ask the right questions."], ["Proposal", "We map the right services or team, with a timeline & quote."], ["Kick-off", "We integrate into your workflow and get to work."]].map(([t, d], i) => (
                  <div key={t} style={{ display: "flex", gap: 16, marginBottom: i < 2 ? 18 : 0 }}>
                    <div className="numeral" style={{ fontSize: 26, lineHeight: 1 }}>0{i + 1}</div>
                    <div><div style={{ fontWeight: 600, fontSize: 15, color: "var(--fg-strong)" }}>{t}</div><div style={{ fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.5 }}>{d}</div></div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[["mail", "Email us", "hello@vibrant.studio"], ["map-pin", "Delivery hub", "Coimbatore, India · serving globally"], ["clock", "Response time", "Within one business day"]].map(([icon, t, v]) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span className="icon-badge icon-badge--blue" style={{ width: 44, height: 44 }}><Icon name={icon} size={20} /></span>
                    <div><div className="slug">{t}</div><div style={{ fontSize: 15.5, fontWeight: 500, color: "var(--fg-strong)" }}>{v}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-muted)", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="serif" style={{ fontStyle: "italic", fontSize: 22, color: "var(--vibrant-blue)", marginBottom: 12 }}>nulli secundus</div>
          <h2 className="display-md" style={{ fontSize: 30, maxWidth: 760, margin: "0 auto" }}>We ask the right questions, we listen, and we deliver brilliance.</h2>
        </div>
      </section>
    </main>
  );
}
window.ContactPage = ContactPage;
