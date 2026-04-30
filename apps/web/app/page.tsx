import Link from "next/link";

const reportItems = ["job ID", "execution trace", "module messages", "compute proof", "provenance"];

const useCases = [
  "scientific dataset review",
  "classroom lab submissions",
  "legal document review",
  "grant proposal screening",
  "compliance checklist review",
  "financial report QA",
  "research reproducibility checks",
  "clinical trial metadata review",
  "manufacturing experiment audits",
];

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.5v-1.77c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.06c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.7c0 .28.18.6.69.5A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="landing-shell">
      <section className="landing-hero">
        <div className="container landing-hero-inner">
          <p className="landing-kicker">Owned, paid, auditable agents</p>
          <h1>KinSvarmo is a marketplace for traceable agent runs.</h1>
          <p className="landing-lede">
            Creators publish agents as iNFTs on 0G. Users run those agents on
            private data. AXL coordinates the workflow, KeeperHub tracks execution,
            and 0G Compute produces analysis with proof.
          </p>

          <div className="landing-actions" aria-label="KinSvarmo links">
            <Link className="landing-button landing-button-primary" href="https://github.com/KinSvarmo" target="_blank">
              <GitHubIcon />
              GitHub
            </Link>
            <Link className="landing-button" href="https://kinsvarmo-docs.vercel.app/" target="_blank">
              Docs
            </Link>
            <Link className="landing-button" href="https://kinsvarmo.vercel.app/" target="_blank">
              App
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-section">
        <div className="container landing-two-column">
          <div>
            <p className="eyebrow">Core idea</p>
            <h2>Useful agents with ownership, price, storage, and execution identity.</h2>
          </div>
          <div className="landing-copy-block">
            <p>
              A creator uploads an agent configuration, prompt, metadata, and
              private knowledge package. That agent becomes an iNFT on 0G with an
              owner, a price, a storage reference, and an execution identity.
            </p>
            <p>
              A user chooses an agent, uploads data, pays for one run, and receives
              a report. The output is more than a chatbot answer: it is connected
              to the agent, payment, workflow, and compute execution.
            </p>
          </div>
        </div>
      </section>

      <section className="landing-section landing-section-tight">
        <div className="container landing-report">
          <p className="eyebrow">The report includes</p>
          <div className="landing-report-grid">
            {reportItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-section">
        <div className="container landing-two-column">
          <div>
            <p className="eyebrow">General use cases</p>
            <h2>Trusted agent workflows for private input and traceable results.</h2>
          </div>
          <ul className="landing-use-cases">
            {useCases.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
