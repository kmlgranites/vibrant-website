// ITServices.jsx — Extended IT Team page (from client doc, competitor-informed)

const IT_WHY = [
  ["timer", "Onboard skilled talent in days", "Get pre-vetted engineers ready to work on your product, platform, cloud, or M365 initiatives immediately. No delays, no recruitment burden."],
  ["sliders-horizontal", "Cost-efficient & scalable", "Scale engineering capacity or specialized skills by roadmap, budget, or enterprise demand — pay only for what you use."],
  ["layers", "Full-stack capability", "End-to-end delivery: MVP, web & mobile, cloud, DevOps, M365, data, AI/ML, QA, UI/UX, and technical leadership."],
  ["git-merge", "Seamless integration", "Our engineers work in your tools, follow your sprint rhythms, and align with your channels — just like your internal team."],
];

const STACK = [
  ["MVP & product development", "rocket"],
  ["Web & mobile apps", "smartphone"],
  ["Cloud, DevOps & automation", "cloud"],
  ["Microsoft 365 & Power Platform", "grid-2x2"],
  ["Data engineering & analytics", "bar-chart-3"],
  ["AI / ML engineering", "brain-circuit"],
  ["QA & test automation", "bug"],
  ["UI / UX design", "pen-tool"],
  ["Architecture & tech leadership", "compass"],
];

const M365 = [
  { title: "Development & Customization", icon: "code-2", items: ["SharePoint Online development", "Custom Power Apps", "Power Automate workflows", "Teams app development", "Viva Connections customization"] },
  { title: "Deployment & Migration", icon: "move", items: ["Tenant setup & configuration", "Exchange Online migration", "SharePoint migration (On-prem → Online)", "Teams rollout & adoption"] },
  { title: "Security, Compliance & Governance", icon: "shield-check", items: ["Data loss prevention (DLP) policies", "Identity & access management", "Role-based access models", "Compliance, retention & audit config"] },
  { title: "Automation & Process Optimization", icon: "workflow", items: ["Automated approval workflows", "Document management & lifecycle", "Employee onboarding automation", "HR, IT & Ops workflows on Power Platform"] },
  { title: "Support & Administration", icon: "headset", items: ["Ongoing monitoring & support", "License optimization", "Governance checks", "Tenant health management"] },
];

const ROLES = ["Full-stack developers", "Cloud & DevOps engineers", "M365 developers, architects & admins", "Data engineers", "AI/ML specialists", "QA automation engineers", "UI/UX designers", "Technical leads & architects", "Scrum masters & product owners"];

const STEPS = [
  ["Requirement understanding", "Your product, tech stack, M365 needs, and roadmap."],
  ["Talent matching", "Best-fit engineers and specialists for the work."],
  ["Fast onboarding (15–30 days)", "Your team becomes our team — set up and aligned."],
  ["Delivery & collaboration", "Agile sprints, full transparency, your rhythm."],
  ["Scale as you grow", "Add or reduce roles anytime, as needs change."],
];

const TRUST = [
  ["shield", "Enterprise-grade discipline"],
  ["gauge", "Startup agility & speed"],
  ["tag", "Transparent pricing"],
  ["activity", "High availability & consistent delivery"],
  ["messages-square", "Strong, clear communication"],
  ["repeat", "Flexible models for any stage"],
];

function ITServicesPage() {
  return (
    <main className="page-enter">
      <PageHero
        slug="VIBRANT · TECHNOLOGY"
        eyebrow="Extended IT Team for startups & enterprises"
        title={<>Build faster with India's <span style={{ color: "var(--vibrant-blue)" }}>top engineering talent.</span></>}
        sub="Accelerate delivery. Strengthen productivity. Scale with confidence — with a partner who integrates seamlessly into your organization."
      >
        <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
          <a href="contact.html" className="btn btn--primary btn--lg">Get a free consultation <span aria-hidden>→</span></a>
          <a href="contact.html" className="btn btn--ghost-light btn--lg">Build your team in 7 days</a>
        </div>
      </PageHero>

      {/* Intro */}
      <section style={{ background: "#fff", paddingTop: 72, paddingBottom: 24 }}>
        <div className="container">
          <p className="lead" style={{ fontSize: 24, lineHeight: 1.5, maxWidth: 920, color: "var(--fg-strong)" }}>
            Whether you're an agile startup or a large enterprise, our Extended IT Team model gives you instant access to expert developers, cloud engineers, M365 specialists, DevOps talent, AI/ML engineers, designers, and product leaders. <span style={{ color: "var(--fg-muted)" }}>Build smarter, reduce costs, and deliver products faster.</span>
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <SectionHead slug="№ 01 / WHY US" eyebrow="Why choose our Extended IT Team" title="A team that feels like your own." />
          <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {IT_WHY.map(([icon, t, d]) => (
              <div key={t} style={{ display: "flex", gap: 20, padding: 28, border: "1px solid var(--border-hairline)", borderRadius: 14, background: "var(--bg-muted)" }}>
                <span className="icon-badge icon-badge--blue"><Icon name={icon} size={26} /></span>
                <div>
                  <h3 className="display-md" style={{ fontSize: 21, marginBottom: 8 }}>{t}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full stack capability */}
      <section style={{ background: "var(--bg-muted)" }}>
        <div className="container">
          <SectionHead slug="№ 02 / CAPABILITY" eyebrow="Full-stack product & platform" title="End-to-end delivery across the modern stack." kicker="One team, the whole lifecycle — from a first MVP to enterprise-scale platforms." />
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {STACK.map(([t, icon]) => (
              <div key={t} className="card-lift" style={{ display: "flex", alignItems: "center", gap: 16, padding: "22px 24px", background: "#fff", border: "1px solid var(--border-hairline)", borderRadius: 12 }}>
                <span className="icon-badge icon-badge--green" style={{ width: 44, height: 44 }}><Icon name={icon} size={22} /></span>
                <span style={{ fontWeight: 600, fontSize: 16, color: "var(--fg-strong)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M365 deep dive */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <SectionHead slug="№ 03 / MICROSOFT 365" eyebrow="What we offer for M365" title={<>Modernize collaboration, automate work, <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-blue)" }}>optimize productivity.</em></>} kicker="Our M365 specialists help startups build modern intranets and internal workflows — and help enterprises standardize collaboration and compliance at scale." />
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border-hairline)", border: "1px solid var(--border-hairline)", borderRadius: 14, overflow: "hidden" }}>
            {M365.map(g => (
              <div key={g.title} style={{ background: "#fff", padding: 30 }}>
                <span className="icon-badge icon-badge--blue" style={{ marginBottom: 18 }}><Icon name={g.icon} size={24} /></span>
                <h3 className="display-md" style={{ fontSize: 19, marginBottom: 16 }}>{g.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {g.items.map(it => (
                    <li key={it} className="check-row"><span className="ck"><Icon name="check" size={16} /></span><span style={{ fontSize: 14, color: "var(--fg-default)", lineHeight: 1.45 }}>{it}</span></li>
                  ))}
                </ul>
              </div>
            ))}
            <div style={{ background: "var(--canvas-deep-teal)", padding: 30, display: "flex", flexDirection: "column", justifyContent: "center", gridColumn: "span 1" }}>
              <span className="chip chip--green" style={{ alignSelf: "flex-start", marginBottom: 14 }}>Microsoft Power Platform</span>
              <div className="display-md" style={{ color: "#fff", fontSize: 22, marginBottom: 10 }}>Need an M365 partner?</div>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 14.5, lineHeight: 1.55, margin: 0 }}>From tenant setup to governance — we cover the full M365 lifecycle.</p>
              <a href="contact.html" className="btn btn--primary" style={{ marginTop: 18, alignSelf: "flex-start" }}>Talk to an M365 expert <span aria-hidden>→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Who we support */}
      <section style={{ background: "var(--bg-muted)" }}>
        <div className="container">
          <SectionHead slug="№ 04 / FIT" eyebrow="Who we support" title="Built for startups and enterprises alike." />
          <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { tag: "For startups", icon: "rocket", tone: "coral", items: ["Build MVPs faster", "Flexible, low-cost scaling", "Rapid feature development", "Cloud, DevOps & M365 setup", "Lean engineering at high quality"] },
              { tag: "For enterprises", icon: "building-2", tone: "blue", items: ["Add specialized skills quickly", "Modernize legacy systems", "M365 rollout, automation & governance", "Cloud migration & AI integration", "Large-scale application development"] },
            ].map(c => {
              const accent = c.tone === "coral" ? "var(--vibrant-orange)" : "var(--vibrant-blue)";
              return (
                <div key={c.tag} style={{ background: "#fff", border: "1px solid var(--border-hairline)", borderRadius: 16, padding: 36, borderTop: `4px solid ${accent}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                    <span className={`icon-badge icon-badge--${c.tone}`}><Icon name={c.icon} size={26} /></span>
                    <h3 className="display-md" style={{ fontSize: 26 }}>{c.tag}</h3>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                    {c.items.map(it => (
                      <li key={it} className="check-row"><span className="ck"><Icon name="check-circle" size={20} /></span><span style={{ fontSize: 15.5, color: "var(--fg-default)" }}>{it}</span></li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why India / Coimbatore */}
      <section style={{ background: "var(--canvas-deep-teal)", color: "#fff" }}>
        <div className="container">
          <SectionHead slug="№ 05 / DELIVERY" eyebrow="Why India — and why Coimbatore" title={<span style={{ color: "#fff" }}>A global engineering powerhouse, focused.</span>} dark />
          <div className="grid-2-md" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { flag: "India — a global engineering powerhouse", items: ["Deep expertise across modern tech, cloud, M365 & enterprise platforms", "Strong English communication & global agile culture", "Startup-friendly and enterprise-scalable cost structure", "Proven capability in distributed global delivery"] },
              { flag: "Coimbatore — a high-quality engineering hub", items: ["Stable, low-attrition engineering workforce", "Excellent talent from top technical institutions", "Lower operating costs than major metros", "Productive culture and a strong IT ecosystem"] },
            ].map(c => (
              <div key={c.flag} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: 32 }}>
                <h3 className="display-md" style={{ color: "#fff", fontSize: 21, marginBottom: 20 }}>{c.flag}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {c.items.map(it => (
                    <li key={it} className="check-row"><span style={{ color: "var(--vibrant-green)", flexShrink: 0, marginTop: 1 }}><Icon name="check" size={18} /></span><span style={{ fontSize: 15, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>{it}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <SectionHead slug="№ 06 / ROLES" eyebrow="Roles we can tap immediately" title="The specialists you need, ready now." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {ROLES.map(r => (
              <span key={r} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 18px", border: "1px solid var(--border-default)", borderRadius: 999, fontSize: 15, fontWeight: 500, color: "var(--fg-strong)", background: "var(--bg-muted)" }}>
                <span style={{ color: "var(--vibrant-blue)" }}><Icon name="user-round" size={16} /></span>{r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "var(--bg-muted)" }}>
        <div className="container">
          <SectionHead slug="№ 07 / PROCESS" eyebrow="How it works" title="From requirement to running team, fast." />
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {STEPS.map(([t, d], i) => (
              <div key={t} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 28, alignItems: "start", padding: "26px 0", borderTop: "1px solid var(--border-default)" }}>
                <div className="numeral" style={{ fontSize: 52 }}>0{i + 1}</div>
                <div style={{ paddingTop: 8 }}>
                  <h3 className="display-md" style={{ fontSize: 24, marginBottom: 6 }}>{t}</h3>
                  <p style={{ fontSize: 16, color: "var(--fg-muted)", margin: 0, maxWidth: 620 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <SectionHead slug="№ 08 / TRUST" eyebrow="Why businesses trust us" title="Enterprise discipline, startup speed." center />
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {TRUST.map(([icon, t]) => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 16, padding: "24px 26px", border: "1px solid var(--border-hairline)", borderRadius: 12, background: "var(--bg-muted)" }}>
                <span className="icon-badge icon-badge--coral" style={{ width: 46, height: 46 }}><Icon name={icon} size={22} /></span>
                <span style={{ fontWeight: 600, fontSize: 16.5, color: "var(--fg-strong)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        slug="№ 09 / GET STARTED"
        title={<>Build, scale & modernize with your <em className="serif" style={{ fontStyle: "italic", color: "var(--vibrant-orange)" }}>Extended IT Team.</em></>}
        sub="From high-growth startups to global enterprises, we strengthen your engineering, cloud, and M365 capabilities — helping you go to market faster and operate smarter."
        primary={["Get a free consultation", "contact.html"]}
        note="Build your team in 7 days"
      />
    </main>
  );
}

window.ITServicesPage = ITServicesPage;
