// Shell.jsx — shared header, footer, icons, and UI primitives for the multi-page site

const NAV = [
  { label: "About",        href: "about.html" },
  { label: "Services",     href: "services.html" },
  { label: "IT Services",  href: "it-services.html" },
  { label: "Manga Studio", href: "manga-studio.html" },
  { label: "Work",         href: "work.html" },
  { label: "Contact",      href: "contact.html" },
];

function currentPage() {
  const p = window.location.pathname.split("/").pop() || "index.html";
  return p === "" ? "index.html" : p;
}

/* ---------- Lucide icon ---------- */
function Icon({ name, size = 22, color, strokeWidth = 2, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node || !window.lucide) return;
    node.innerHTML = `<i data-lucide="${name}"></i>`;
    try { window.lucide.createIcons({ attrs: { "stroke-width": strokeWidth } }); } catch (e) {}
    const svg = node.querySelector("svg");
    if (svg) { svg.setAttribute("width", size); svg.setAttribute("height", size); }
  });
  return <span ref={ref} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", color: color || "currentColor", width: size, height: size, ...style }} />;
}

/* ---------- Header ---------- */
function Header({ tone = "light" }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const here = currentPage();
  const dark = tone === "dark" && !scrolled;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fg = dark ? "#fff" : "var(--fg-strong)";

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 60,
      background: dark ? "rgba(6,49,59,0)" : (scrolled ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0.75)"),
      backdropFilter: dark ? "none" : "saturate(150%) blur(16px)",
      WebkitBackdropFilter: dark ? "none" : "saturate(150%) blur(16px)",
      borderBottom: scrolled ? "1px solid var(--border-hairline)" : "1px solid transparent",
      transition: "all 220ms var(--ease-out)",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 78 }}>
        <a href="index.html" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src={dark ? window.__resources.logoWhite : window.__resources.logoColor} alt="Vibrant" style={{ height: 34, display: "block" }} />
        </a>

        <nav className="primary-nav" style={{ display: "flex", gap: 30, alignItems: "center" }}>
          {NAV.map(n => (
            <a key={n.href} href={n.href}
               className={"nav-link" + (here === n.href ? " is-active" : "")}
               style={{ color: fg }}>
              {n.label}
            </a>
          ))}
          <a href="contact.html" className="btn btn--primary" style={{ padding: "11px 20px", fontSize: 14 }}>Get a quote</a>
        </nav>

        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(o => !o)}
          style={{ display: "none", background: "none", border: "none", color: fg, cursor: "pointer" }}>
          <Icon name={open ? "x" : "menu"} size={26} />
        </button>
      </div>

      {open && (
        <div className="mobile-nav" style={{ background: "#fff", borderTop: "1px solid var(--border-hairline)", padding: "12px 0" }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map(n => (
              <a key={n.href} href={n.href} style={{ padding: "12px 0", textDecoration: "none", color: "var(--fg-strong)", fontWeight: 500, borderBottom: "1px solid var(--border-hairline)" }}>{n.label}</a>
            ))}
            <a href="contact.html" className="btn btn--primary" style={{ marginTop: 12 }}>Get a quote</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const col = (title, items) => (
    <div>
      <div className="slug" style={{ color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map(([label, href]) => (
          <li key={label}><a href={href || "#"} style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none", fontSize: 15 }}>{label}</a></li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer style={{ background: "#06151b", color: "rgba(255,255,255,0.85)", paddingTop: 88, paddingBottom: 32 }}>
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48, paddingBottom: 56, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <img src={window.__resources.logoWhite} alt="Vibrant" style={{ height: 36, display: "block" }} />
            <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.62)", maxWidth: 360 }}>
              One partner for publishing and technology — editorial, production, creative, a dedicated Manga Studio, and an Extended IT Team. Since 2014.
            </p>
            <div style={{ marginTop: 26, display: "flex", gap: 10 }}>
              {["linkedin", "instagram", "twitter"].map(s => (
                <a key={s} href="#" aria-label={s} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", width: 40, height: 40, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={s} size={17} />
                </a>
              ))}
            </div>
          </div>
          {col("Company", [["About", "about.html"], ["Why Vibrant", "about.html"], ["Work", "work.html"], ["Contact", "contact.html"]])}
          {col("Publishing", [["Services overview", "services.html"], ["Manga Studio", "manga-studio.html"], ["Editorial", "services.html"], ["Production & typesetting", "services.html"]])}
          {col("Technology", [["Extended IT Team", "it-services.html"], ["Microsoft 365", "it-services.html"], ["Cloud & DevOps", "it-services.html"], ["Get a quote", "contact.html"]])}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 26, fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em", flexWrap: "wrap", gap: 12 }}>
          <div className="slug" style={{ color: "rgba(255,255,255,0.45)" }}>№ EST 2014 — VIBRANT FUTURE TECH SERVICES · NULLI SECUNDUS</div>
          <div>© 2026 Vibrant. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Placeholder image (label notes the Magnific source) ---------- */
function Placeholder({ label, ratio = "16 / 9", tone = "blue", rounded = 12, icon = "image", style }) {
  const tones = {
    blue:  ["#E5F7FA", "#0099B2", "var(--vibrant-blue)"],
    green: ["#EBFAF0", "#1F8547", "var(--vibrant-green)"],
    coral: ["#FCF0F0", "#9E4236", "var(--vibrant-orange)"],
    teal:  ["#06313B", "rgba(255,255,255,0.78)", "rgba(255,255,255,0.4)"],
    dark:  ["#16232b", "rgba(255,255,255,0.78)", "rgba(255,255,255,0.35)"],
    gray:  ["#F1F3F5", "#6C757D", "#ADB5BD"],
  };
  const [bg, fg, accent] = tones[tone] || tones.gray;
  return (
    <div style={{
      position: "relative", width: "100%", aspectRatio: ratio,
      background: bg, borderRadius: rounded, overflow: "hidden",
      border: (tone === "teal" || tone === "dark") ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.05)",
      display: "flex", alignItems: "center", justifyContent: "center", ...style,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 100 56" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
        <line x1="0" y1="0" x2="100" y2="56" stroke={accent} strokeWidth="0.35" />
        <line x1="100" y1="0" x2="0" y2="56" stroke={accent} strokeWidth="0.35" />
      </svg>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center", padding: 18 }}>
        <span style={{ color: accent }}><Icon name={icon} size={30} strokeWidth={1.6} /></span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: fg, fontWeight: 600, maxWidth: 280, lineHeight: 1.4 }}>{label}</span>
      </div>
    </div>
  );
}

/* ---------- Section header ---------- */
function SectionHead({ slug, eyebrow, title, kicker, dark = false, maxKicker = 660, center = false }) {
  const fg = dark ? "#fff" : "var(--fg-strong)";
  const muted = dark ? "rgba(255,255,255,0.68)" : "var(--fg-muted)";
  if (center) {
    return (
      <div style={{ textAlign: "center", marginBottom: 56, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        {eyebrow && <div className="eyebrow" style={{ color: dark ? "rgba(255,255,255,0.7)" : "var(--vibrant-blue)", marginBottom: 14 }}>{eyebrow}</div>}
        <h2 className="display-lg" style={{ color: fg }}>{title}</h2>
        {kicker && <p className="lead" style={{ marginTop: 18, color: muted }}>{kicker}</p>}
      </div>
    );
  }
  return (
    <div className="spread" style={{ marginBottom: 56, alignItems: "start" }}>
      <div style={{ paddingTop: 8 }}>
        <div className="slug" style={{ color: dark ? "rgba(255,255,255,0.5)" : "var(--fg-subtle)" }}>{slug}</div>
      </div>
      <div>
        {eyebrow && <div className="eyebrow" style={{ color: dark ? "rgba(255,255,255,0.7)" : "var(--vibrant-blue)", marginBottom: 14 }}>{eyebrow}</div>}
        <h2 className="display-lg" style={{ color: fg }}>{title}</h2>
        {kicker && <p className="lead" style={{ marginTop: 18, maxWidth: maxKicker, color: muted }}>{kicker}</p>}
      </div>
    </div>
  );
}

/* ---------- Page intro hero (inner pages) ---------- */
function PageHero({ slug, eyebrow, title, sub, children }) {
  return (
    <section style={{ background: "var(--canvas-deep-teal)", color: "#fff", marginTop: -78, paddingTop: 150, paddingBottom: 88, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", right: -100, top: 40, width: 300, height: 300, background: "var(--vibrant-orange)", clipPath: "polygon(0 0,100% 0,0 100%)", opacity: 0.08 }} />
      <div aria-hidden style={{ position: "absolute", left: -80, bottom: -160, width: 360, height: 360, background: "var(--vibrant-blue)", clipPath: "polygon(100% 0,100% 100%,0 100%)", opacity: 0.07 }} />
      <div className="container" style={{ position: "relative" }}>
        {slug && <div className="slug" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 24 }}>{slug}</div>}
        {eyebrow && <div className="eyebrow" style={{ color: "rgba(255,255,255,0.7)", marginBottom: 14 }}>{eyebrow}</div>}
        <h1 className="display-xl" style={{ color: "#fff", maxWidth: 900 }}>{title}</h1>
        {sub && <p className="lead" style={{ color: "rgba(255,255,255,0.78)", maxWidth: 640, marginTop: 24, fontSize: 20 }}>{sub}</p>}
        {children}
      </div>
    </section>
  );
}

/* ---------- Closing CTA (reused) ---------- */
function ClosingCTA({ slug = "№ — / GET STARTED", title, sub, primary = ["Get a quote", "contact.html"], note }) {
  return (
    <section style={{ background: "#0d1820", color: "#fff", padding: "108px 0" }}>
      <div className="container">
        <div className="spread">
          <div><div className="slug" style={{ color: "rgba(255,255,255,0.5)" }}>{slug}</div></div>
          <div>
            <h2 className="display-xl" style={{ color: "#fff", marginBottom: 24 }}>{title}</h2>
            <p className="lead" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, marginBottom: 40 }}>{sub}</p>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <a href={primary[1]} className="btn btn--primary btn--lg">{primary[0]} <span aria-hidden>→</span></a>
              {note && <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-mono)", fontSize: 13 }}>{note}</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Footer, Placeholder, SectionHead, PageHero, ClosingCTA, Icon, currentPage });
