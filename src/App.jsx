import './App.css'

const LINKEDIN =
  'https://www.linkedin.com/in/pranita-sable-9593a479/'
const GITHUB = 'https://github.com/pranigit13'

const experience = [
  {
    company: 'UST',
    title: 'Associate Lead UI',
    period: 'Sep 2022 – Present',
    location: 'Pune, India',
    detail:
      'Design org, senior IC + lead responsibilities on UI for large-scale client delivery.',
  },
  {
    company: 'Infosys',
    title: 'Consultant',
    period: 'May 2021 – Sep 2022',
    location: 'India',
    detail: 'Consulting delivery for enterprise programs.',
  },
  {
    company: 'Capgemini',
    title: 'Consultant',
    period: 'Nov 2020 – May 2021',
    location: 'Mumbai, India',
    detail: 'Consulting and engineering within IT services engagements.',
  },
  {
    company: 'RazrCorp',
    title: 'React.js Developer',
    period: 'Nov 2019 – Nov 2020',
    location: 'Mumbai, India',
    detail: 'Product UI with React for client-facing web experiences.',
  },
  {
    company: 'RazrCorp',
    title: 'Chatbot & full-stack roles',
    period: 'Nov 2017 – Nov 2020',
    location: 'Mumbai, India',
    detail:
      'Node.js chatbots, PHP backends, and progressive ownership across the stack.',
  },
  {
    company: 'Last Local App Solutions',
    title: 'Full-stack & backend developer',
    period: 'Sep 2015 – Oct 2017',
    location: 'Mumbai, India',
    detail:
      'Database design, PHP/MySQL web services for mobile apps, and server management.',
  },
]

const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'HTML & CSS',
  'MySQL',
  'MongoDB',
  'PHP',
  'Web services',
  'UI engineering',
  'Scrum / CSM®',
]

const education = [
  {
    school: 'NMiTD',
    credential: 'Master of Computer Applications (MCA)',
    focus: 'Computer programming & applications',
    years: '2012 – 2015',
  },
  {
    school: 'V.G. Vaze Kelkar College',
    credential: 'BSc IT (First Class)',
    years: '2009 – 2012',
  },
]

const projects = [
  {
    name: 'Project 1 — Full-stack app',
    blurb: 'React + Python API, Postgres, CI/CD. Coming next on this domain.',
    href: '#',
  },
  {
    name: 'Project 2 — Auth & production polish',
    blurb: 'Managed auth, hardening, monitoring. Planned milestone after P1.',
    href: '#',
  },
  {
    name: 'Project 3 — Standalone Python',
    blurb: 'Django or Streamlit showcase. Final capstone in the roadmap.',
    href: '#',
  },
]

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="/">
          pranitasable<span className="dot">.dev</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-avatar" aria-hidden="true">
            PS
          </div>
          <p className="eyebrow">Portfolio · Mumbai, India</p>
          <h1 id="hero-title">Pranita Sable</h1>
          <p className="lede">
            Associate Lead UI at UST. React developer, full-stack background, and
            Certified ScrumMaster<sup>®</sup> — shipping web products with
            ~10+ years across product teams and consulting.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={LINKEDIN}>
              LinkedIn
            </a>
            <a className="button button-secondary" href={GITHUB}>
              GitHub
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <div className="prose">
            <p>
              Experienced full-stack developer with a long track record across
              UI-focused delivery, backend services, and data layers. Comfortable
              from React SPAs to Node.js chatbots, with strong hands-on work in
              MySQL, MongoDB, PHP, and web services — plus the operational side
              (server management, schema design, release discipline).
            </p>
            <p>
              Holds an MCA from NMiTD. This site is my living lab: each project
              deepens Python + React with real CI/CD and interview-ready
              stories.
            </p>
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <ul className="timeline">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="timeline-item">
                <div className="timeline-meta">
                  <span className="timeline-period">{job.period}</span>
                  <span className="timeline-location">{job.location}</span>
                </div>
                <h3 className="timeline-title">
                  {job.title}{' '}
                  <span className="at">@</span> {job.company}
                </h3>
                <p className="timeline-detail">{job.detail}</p>
              </li>
            ))}
          </ul>
          <p className="section-footnote">
            Full chronology and recommendations on{' '}
            <a href={LINKEDIN}>LinkedIn →</a>
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <ul className="tags">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <ul className="edu-list">
            {education.map((e) => (
              <li key={e.credential}>
                <strong>{e.credential}</strong>
                {e.focus ? ` · ${e.focus}` : ''}
                <br />
                <span className="muted">
                  {e.school} · {e.years}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section">
          <h2>Projects on this domain</h2>
          <p className="section-intro">
            Subdomains will host each build as the roadmap unfolds — APIs,
            auth, databases, and CI/CD included.
          </p>
          <ul className="cards">
            {projects.map((p) => (
              <li key={p.name}>
                <article className="card">
                  <h3>{p.name}</h3>
                  <p>{p.blurb}</p>
                  <span className="card-link">Coming soon</span>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section section-contact">
          <h2>Contact</h2>
          <p>
            Let’s connect on{' '}
            <a href={LINKEDIN}>LinkedIn</a> or browse code on{' '}
            <a href={GITHUB}>GitHub</a>.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Pranita Sable</span>
        <span className="footer-sep">·</span>
        <a href={LINKEDIN}>LinkedIn</a>
        <span className="footer-sep">·</span>
        <a href={GITHUB}>GitHub</a>
      </footer>
    </div>
  )
}

export default App
