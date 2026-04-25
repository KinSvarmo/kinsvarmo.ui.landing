import Link from "next/link";
import { seededAgents } from "@kingsvarmo/shared";

const styles = [
  { id: "neon-green", name: "Neon Green", tone: "black + green", accent: "#39ff88" },
  { id: "neon-blue", name: "Neon Blue", tone: "black + blue", accent: "#38bdf8" },
  { id: "classic", name: "Classic", tone: "bright + editorial", accent: "#1d4ed8" },
  { id: "clinical", name: "Clinical Glass", tone: "my suggestion", accent: "#14b8a6" },
] as const;

const sponsors = [
  { name: "0G", role: "Storage, compute and chain" },
  { name: "Gensyn AXL", role: "Agent communication" },
  { name: "KeeperHub", role: "Workflow orchestration" },
];

const workflow = [
  {
    title: "Private agent minted",
    copy: "Researchers publish encrypted analysis logic as an iNFT-style asset linked to 0G.",
  },
  {
    title: "Dataset submitted",
    copy: "Users choose an agent, upload a compatible file and authorize a paid run in OG token.",
  },
  {
    title: "Swarm executes",
    copy: "Planner, analyzer, critic and reporter modules coordinate over AXL with visible state.",
  },
  {
    title: "Auditable report",
    copy: "The user receives a structured scientific result with confidence and provenance references.",
  },
];

const metrics = [
  { label: "Demo path", value: "1 golden flow" },
  { label: "Runtime target", value: "90 sec" },
  { label: "Seed agent", value: "Phytochemistry" },
];

export default function HomePage() {
  const agent = seededAgents[0];
  if (!agent) return null;

  return (
    <div className="landing-shell">
      <section className="landing-hero">
        <div className="landing-grid" />

        <div className="container landing-hero-inner">
          <div className="landing-copy">
            <div className="landing-kicker">
              <span className="landing-live-dot" />
              0G scientific agent marketplace
            </div>

            <h1>KinSvarmo</h1>
            <p className="landing-lede">
              Publish private scientific analysis agents as iNFT-backed assets,
              then run auditable dataset workflows coordinated by specialized AI
              modules.
            </p>

            <div className="landing-actions">
              <Link href="/agents" className="btn btn-primary btn-lg">
                Browse agents
              </Link>
              <Link href="/creator" className="btn btn-secondary btn-lg">
                Mint an iNFT
              </Link>
            </div>

            <div className="style-switcher" aria-label="Landing visual style selector">
              {styles.map((item) => (
                <div className="style-option" key={item.id}>
                  <input
                    id={`style-${item.id}`}
                    type="radio"
                    name="landing-style"
                    defaultChecked={item.id === "neon-green"}
                  />
                  <label htmlFor={`style-${item.id}`} className="style-chip">
                    <span style={{ background: item.accent }} />
                    <strong>{item.name}</strong>
                    <small>{item.tone}</small>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-console" aria-label="Featured agent preview">
            <div className="console-topbar">
              <span />
              <span />
              <span />
              <strong>Style lab</strong>
            </div>

            <div className="agent-preview">
              <div className="agent-sigil">KS</div>
              <div>
                <p className="agent-status">Published agent</p>
                <h2>{agent.name}</h2>
                <p>{agent.description}</p>
              </div>
            </div>

            <div className="pipeline">
              {["Planner", "Analyzer", "Critic", "Reporter"].map((name, index) => (
                <div className="pipeline-row" key={name}>
                  <span>{name}</span>
                  <div>
                    <i style={{ width: `${52 + index * 14}%` }} />
                  </div>
                  <strong>{index === 3 ? "ready" : "sync"}</strong>
                </div>
              ))}
            </div>

            <div className="console-footer">
              <div>
                <span>Price</span>
                <strong>{agent.priceIn0G} OG</strong>
              </div>
              <div>
                <span>Formats</span>
                <strong>{agent.supportedFormats.join(", ")}</strong>
              </div>
              <div>
                <span>Provenance</span>
                <strong>0G linked</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="landing-band">
        <div className="container sponsor-strip">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name}>
              <strong>{sponsor.name}</strong>
              <span>{sponsor.role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section landing-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">What this repo is building</p>
            <h2>One reliable demo path for private scientific AI runs.</h2>
          </div>
          <p>
            The current codebase is a scaffold for a marketplace, API service,
            shared domain contracts, sponsor adapters and demo documentation. The
            MVP centers on one seeded agent, upload validation, visible AXL
            communication, KeeperHub execution state and 0G references.
          </p>
        </div>
      </section>

      <section className="section-sm landing-section">
        <div className="container metrics-row">
          {metrics.map((metric) => (
            <div className="metric-tile" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section landing-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Workflow</p>
            <h2>From encrypted intelligence to reportable results.</h2>
          </div>

          <div className="workflow-grid">
            {workflow.map((step, index) => (
              <article className="workflow-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm landing-section">
        <div className="container landing-cta">
          <div>
            <p className="eyebrow">Frontend direction</p>
            <h2>Style system ready for team review.</h2>
            <p>
              The switcher lets the team compare two neon directions, a classic
              version and a calmer scientific interface without changing routes.
            </p>
          </div>
          <Link href="/agents" className="btn btn-primary btn-lg">
            Open marketplace
          </Link>
        </div>
      </section>
    </div>
  );
}
