import React, { useEffect, useRef } from 'react';

// ========================
// TYPES
// ========================
interface Skill {
  name: string;
  cat: string;
  pct: number;
}

interface Project {
  num: string;
  period: string;
  title: string;
  description: string;
  tags: string[];
}

interface Certification {
  icon: string;
  title: string;
  issuer: string;
}

interface Language {
  name: string;
  level: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Education {
  year: string;
  degree: string;
  school: string;
}

// ========================
// DATA
// ========================
const skillsData: Skill[] = [
  { name: 'TypeScript', cat: 'Language', pct: 88 },
  { name: 'React', cat: 'Frontend', pct: 85 },
  { name: 'Django', cat: 'Backend', pct: 82 },
  { name: 'Python', cat: 'Language', pct: 90 },
  { name: 'PostgreSQL', cat: 'Database', pct: 78 },
  { name: 'SQL', cat: 'Database', pct: 80 },
  { name: 'Tailwind CSS', cat: 'Frontend', pct: 88 },
  { name: 'JavaScript', cat: 'Language', pct: 85 },
  { name: 'YOLO / ML', cat: 'AI & ML', pct: 70 },
  { name: 'Data Visualization', cat: 'Data Science', pct: 75 },
  { name: 'REST APIs', cat: 'Backend', pct: 82 },
  { name: 'CyberSecurity', cat: 'Security', pct: 65 },
  { name: 'GIS', cat: 'Geospatial', pct: 60 },
  { name: 'SPSS', cat: 'Data Science', pct: 65 },
  { name: 'HTML / CSS', cat: 'Frontend', pct: 92 },
  { name: 'Flask', cat: 'Backend', pct: 74 },
];

const projectsData: Project[] = [
  {
    num: '01',
    period: 'Mar 2026 – Apr 2026',
    title: 'Bus Lane Detection System',
    description: 'Developed a computer vision system for real-time Bus Lane Detection using the YOLO machine learning model. Engineered a complete data pipeline in Python for model training, prediction, and data visualization. Generated critical accuracy insights to validate real-time detection performance.',
    tags: ['Python', 'YOLO', 'Computer Vision', 'ML', 'Data Visualization'],
  },
  {
    num: '02',
    period: 'Jan 2026 – Mar 2026',
    title: 'Cooperative Management System',
    description: 'Designed and implemented a full-stack Cooperative Management System prototype focused on digitalizing operations for a community-based organization. Integrated robust REST APIs and streamlined data operations using scalable architecture.',
    tags: ['TypeScript', 'React', 'Django', 'PostgreSQL', 'REST API'],
  },
  {
    num: '03',
    period: 'Sep 2025 – Dec 2025',
    title: 'Umuganda Community Platform',
    description: 'Developed a data-driven, user-centric interface for community service activities. Improved activity management efficiency by 20% through centralized volunteer tracking and reporting. Demonstrated a focus on high-impact, sustainable solutions.',
    tags: ['TypeScript', 'Tailwind CSS', 'Data-Driven UI'],
  },
  {
    num: '04',
    period: 'Mar 2024 – Jun 2024',
    title: 'Events Management System',
    description: 'Authored a full-stack Events Management System emphasizing administrative efficiency. Architected data management workflows that improved administrative efficiency by 30% through centralized registration and tracking.',
    tags: ['HTML', 'Tailwind CSS', 'Flask', 'Python'],
  },
];

const certificationsData: Certification[] = [
  { icon: 'WD', title: 'Web Development', issuer: 'AfriTech' },
  { icon: 'DS', title: 'Data Science & Blockchain Technology', issuer: 'Professional Training' },
  { icon: 'CS', title: 'Introduction to CyberSecurity Essentials', issuer: 'Cisco' },
];

const languagesData: Language[] = [
  { name: 'English', level: 'Excellent written & oral' },
  { name: 'Kinyarwanda', level: 'Native language' },
  { name: 'French', level: 'Basic  valuable asset' },
];

const statsData: Stat[] = [
  { value: '14+', label: 'Projects Built' },
  { value: '9+', label: 'Core Technologies' },
  { value: '2027', label: 'Expected Graduation' },
];

const educationData: Education[] = [
  { year: '2023 – Present', degree: 'B.Sc. Information Systems', school: 'University of Rwanda' },
  { year: '2016 – 2022', degree: 'High School Diploma', school: 'College Adventiste de Rwankeri' },
  { year: '2009 – 2015', degree: 'Primary Education', school: 'Rwankeri Primary School' },
];

// ========================
// COMPONENTS
// ========================

const Navbar: React.FC = () => (
  <nav>
    <a href="#home" className="nav-logo">Isaac Mugiraneza</a>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

const Hero: React.FC = () => (
  <section className="hero" id="home">
    <div className="hero-inner">
      <div>
        <div className="hero-tag">Available for opportunities</div>
        <h1 className="hero-name">Isaac<br /><span>Mugiraneza</span></h1>
        <p className="hero-role">
          Full Stack Developer &amp; Data Science Enthusiast<br />
        </p>
        <p className="hero-desc">
          My expertise lies in designing and implementing robust, scalable digital systems. I am a dedicated and well-organized IT professional focused on 
          leveraging technical innovation to solve practical problems and deliver significant organizational and community benefits.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-dark">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="hero-stats">
        {statsData.map((stat, idx) => (
          <div className="stat-block" key={idx}>
            <div className="stat-num">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About: React.FC = () => (
  <section id="about" className="about-section">
    <div className="inner">
      <div className="about-grid">
        <div className="about-left">
          <p className="label">About</p>
          <h2>Who I Am</h2>
          {/* <div className="edu-list">
            {educationData.map((edu, idx) => (
              <div className="edu-item" key={idx}>
                <div className="edu-year">{edu.year}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
              </div>
            ))}
          </div> */}
        </div>
        <div className="about-text">
          <p>
          
          I am a highly motivated IT professional possessing robust full-stack development skills across TypeScript, React, and Django. 
          My expertise is focused on scalable digital solutions and Data Science, allowing me to build efficient, production-quality software.
          </p>
          <p>

            I thrive at the intersection of engineering and real-world impact, 
            with proven experience in diverse projects, including digitizing cooperative operations and developing advanced AI-powered computer vision systems.
          </p>
          <p>
            I am a continuous learner, currently exploring Blockchain Technology, Optimization, and
            Cybersecurity, with a strong commitment to leveraging digital innovation for community benefit.
          </p>
          <p>
            I offer excellent communication skills in English, native fluency in{' '}
            Kinyarwanda, and a working knowledge of French well-suited for
            international, multi-stakeholder environments.
          </p>
          <a href="mailto:isaacmugiraneza41@gmail.com" className="btn btn-outline" style={{ marginTop: '1.25rem', display: 'inline-flex' }}>
            Download CV
          </a>
        </div>
      </div>
      <div className="langs-row">
        {languagesData.map((lang, idx) => (
          <div className="lang-card" key={idx}>
            <div className="lang-name">{lang.name}</div>
            <div className="lang-level">{lang.level}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll<HTMLElement>('.skill-fill');
            bars.forEach((bar) => {
              const width = bar.dataset.w;
              if (width) bar.style.width = `${width}%`;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="inner">
        <p className="label">Expertise</p>
        <h2>Skills &amp; Tools</h2>
        <div className="skills-grid" id="skills-grid" ref={gridRef}>
          {skillsData.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-meta">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-pct">{skill.pct}%</div>
              </div>
              <div className="skill-cat">{skill.cat}</div>
              <div className="skill-bar">
                <div className="skill-fill" data-w={skill.pct}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="projects-section">
    <div className="inner">
      <p className="label">Work</p>
      <h2>Featured Projects</h2>
      <div className="projects-list">
        {projectsData.map((project) => (
          <div className="project-item" key={project.num}>
            <div className="project-num">{project.num}</div>
            <div className="project-body">
              <div className="project-period">{project.period}</div>
              <div className="project-title">{project.title}</div>
              <p className="project-desc">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span className="tag" key={idx}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Certifications: React.FC = () => (
  <section id="certifications">
    <div className="inner">
      <p className="label">Credentials</p>
      <h2>Certifications</h2>
      <div className="certs-grid">
        {certificationsData.map((cert, idx) => (
          <div className="cert-card" key={idx}>
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-issuer">{cert.issuer}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
    <div className="inner">
      <p className="label">Contact</p>
      <h2>Let's Work Together</h2>
      <div className="contact-grid" style={{ marginTop: '2.5rem' }}>
        <div className="contact-info">
          <p>
            I am currently open to internship opportunities, collaborations, and project work. Whether you have an idea
            to build or a problem to solve, I would love to hear from you.
          </p>
          <div className="contact-details">
            <div className="contact-row">
              <span className="contact-row-label">Email</span>
              <a href="mailto:isaacmugiraneza41@gmail.com">isaacmugiraneza41@gmail.com</a>
            </div>
            <div className="contact-row">
              <span className="contact-row-label">Phone</span>
              <a href="tel:+250790291916">+250 790 291 916</a>
            </div>
            <div className="contact-row">
              <span className="contact-row-label">Location</span>
              <span>Kigali, Rwanda</span>
            </div>
            <div className="contact-row">
              <span className="contact-row-label">Status</span>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
        <div>
          <div className="contact-form">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input className="form-input" type="text" placeholder="Full name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" placeholder="Tell me about your project or opportunity..."></textarea>
            </div>
            <button className="btn btn-dark" style={{ alignSelf: 'flex-start' }}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer>
    <span>All rights reserved — 2026</span>
    {/* <span>
      B.Sc. Information Systems — <strong>University of Rwanda</strong>
    </span> */}
  </footer>
);

// ========================
// MAIN COMPONENT
// ========================
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
};

// ========================
// GLOBAL STYLES (injected via style tag)
// ========================
const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black: #0a0a0a;
      --dark: #1a1a1a;
      --mid: #444;
      --muted: #888;
      --light: #ccc;
      --border: #e5e5e5;
      --bg: #ffffff;
      --bg2: #f9f9f7;
      --font-display: 'Playfair Display', serif;
      --font-body: 'DM Sans', sans-serif;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--dark);
      font-family: var(--font-body);
      font-size: 16px;
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* NAV */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; justify-content: space-between; align-items: center;
      padding: 1.25rem 4rem;
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--border);
    }
    .nav-logo {
      font-family: var(--font-display);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--black);
      letter-spacing: -0.01em;
      text-decoration: none;
    }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; }
    .nav-links a {
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--muted);
      text-decoration: none;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--black); }

    /* SECTIONS */
    section { padding: 6rem 4rem; }
    .inner { max-width: 960px; margin: 0 auto; }

    .label {
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .label::before { content: ''; width: 24px; height: 1px; background: var(--light); }

    h2 {
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      color: var(--black);
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 1rem;
    }

    /* HERO */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 8rem 4rem 5rem;
      border-bottom: 1px solid var(--border);
      position: relative;
    }
    .hero-inner {
      max-width: 960px;
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }
    .hero-tag {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
      border: 1px solid var(--border);
      padding: 0.35rem 0.875rem;
      border-radius: 2px;
      margin-bottom: 1.5rem;
    }
    .hero-name {
      font-family: var(--font-display);
      font-size: clamp(3rem, 6vw, 5.5rem);
      font-weight: 900;
      color: var(--black);
      letter-spacing: -0.04em;
      line-height: 0.95;
      margin-bottom: 1rem;
    }
    .hero-name span { color: var(--muted); }
    .hero-role {
      font-size: 1rem;
      font-weight: 400;
      color: var(--mid);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .hero-desc {
      font-size: 0.9rem;
      color: var(--dark);
      line-height: 1.9;
      margin-bottom: 2.5rem;
      max-width: 420px;
    }
    .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

    .btn {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 0.75rem 1.75rem;
      font-family: var(--font-body);
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 2px;
      transition: all 0.2s;
      cursor: pointer;
      border: none;
    }
    .btn-dark {
      background: var(--black);
      color: #fff;
    }
    .btn-dark:hover { background: var(--dark); }
    .btn-outline {
      background: transparent;
      color: var(--dark);
      border: 1px solid var(--border);
    }
    .btn-outline:hover { border-color: var(--mid); }

    .hero-stats {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .stat-block {
      padding-left: 1.5rem;
      border-left: 2px solid var(--border);
    }
    .stat-num {
      font-family: var(--font-display);
      font-size: 3rem;
      font-weight: 900;
      color: var(--black);
      letter-spacing: -0.04em;
      line-height: 1;
    }
    .stat-label {
      font-size: 0.78rem;
      color: var(--muted);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-top: 0.25rem;
    }

    /* ABOUT */
    .about-section { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .about-grid {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 5rem;
      align-items: start;
    }
    .about-left h2 { margin-bottom: 0.5rem; }
    .about-text p {
      font-size: 1.0rem;
      color: var(--dark);
      line-height: 1.9;
      margin-bottom: 1rem;
    }
    .about-text p strong { color: var(--black); font-weight: 500; }
    .edu-list { margin-top: 2rem; display: flex; flex-direction: column; gap: 1.25rem; }
    .edu-item { border-left: 2px solid var(--border); padding-left: 1.25rem; }
    .edu-year { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.2rem; }
    .edu-degree { font-weight: 500; font-size: 0.9rem; color: var(--black); margin-bottom: 0.1rem; }
    .edu-school { font-size: 0.8rem; color: var(--muted); }

    /* SKILLS */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1px;
      border: 1px solid var(--border);
      margin-top: 3rem;
      background: var(--border);
    }
    .skill-card {
      background: var(--bg);
      padding: 1.5rem;
      transition: background 0.2s;
    }
    .skill-card:hover { background: var(--bg2); }
    .skill-name {
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--black);
      margin-bottom: 0.5rem;
    }
    .skill-bar { height: 1px; background: var(--border); margin-top: 0.75rem; }
    .skill-fill { height: 1px; background: var(--dark); transition: width 1s ease; width: 0; }
    .skill-meta { display: flex; justify-content: space-between; align-items: center; }
    .skill-cat { font-size: 0.7rem; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; }

    /* PROJECTS */
    .projects-section { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
    .projects-list { display: flex; flex-direction: column; gap: 0; margin-top: 3rem; border: 1px solid var(--border); }
    .project-item {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 2rem;
      align-items: start;
      padding: 2rem;
      border-bottom: 1px solid var(--border);
      background: var(--bg);
      transition: background 0.2s;
      cursor: default;
    }
    .project-item:last-child { border-bottom: none; }
    .project-item:hover { background: #fafaf8; }
    .project-num {
      font-family: var(--font-display);
      font-size: 2rem;
      font-weight: 900;
      color: var(--border);
      line-height: 1;
      min-width: 2.5rem;
    }
    .project-period { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.4rem; }
    .project-title {
      font-family: var(--font-display);
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--black);
      margin-bottom: 0.6rem;
      letter-spacing: -0.02em;
    }
    .project-desc { font-size: 0.85rem; color: var(--mid); line-height: 1.8; margin-bottom: 1rem; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .tag {
      font-size: 0.68rem;
      padding: 0.25rem 0.625rem;
      border: 1px solid var(--border);
      color: var(--muted);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border-radius: 1px;
    }
    .project-arrow {
      font-size: 1.25rem;
      color: var(--light);
      transition: color 0.2s, transform 0.2s;
      align-self: center;
    }
    .project-item:hover .project-arrow { color: var(--dark); transform: translateX(3px); }

    /* CERTIFICATIONS */
    .certs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }
    .cert-card {
      border: 1px solid var(--border);
      padding: 1.5rem;
      border-radius: 2px;
      background: var(--bg);
      transition: border-color 0.2s;
    }
    .cert-card:hover { border-color: var(--mid); }
    .cert-icon {
      width: 36px; height: 36px;
      border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--muted);
      margin-bottom: 1rem;
      border-radius: 2px;
      letter-spacing: 0.04em;
    }
    .cert-title { font-weight: 500; font-size: 0.9rem; color: var(--black); margin-bottom: 0.25rem; }
    .cert-issuer { font-size: 0.78rem; color: var(--muted); }

    /* CONTACT */
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: start;
    }
    .contact-info p { font-size: 0.9rem; color: var(--mid); line-height: 1.9; margin-bottom: 2rem; }
    .contact-details { display: flex; flex-direction: column; gap: 0; border: 1px solid var(--border); }
    .contact-row {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.25rem;
      border-bottom: 1px solid var(--border);
      font-size: 0.85rem;
    }
    .contact-row:last-child { border-bottom: none; }
    .contact-row-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); min-width: 60px; }
    .contact-row a { color: var(--dark); text-decoration: none; transition: color 0.2s; }
    .contact-row a:hover { color: var(--black); }

    .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
    .form-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); }
    .form-input {
      background: var(--bg2);
      border: 1px solid var(--border);
      padding: 0.75rem 1rem;
      font-family: var(--font-body);
      font-size: 0.88rem;
      color: var(--dark);
      border-radius: 1px;
      outline: none;
      transition: border-color 0.2s;
      width: 100%;
    }
    .form-input:focus { border-color: var(--mid); }
    .form-input::placeholder { color: var(--light); }
    textarea.form-input { resize: vertical; min-height: 110px; }

    /* FOOTER */
    footer {
      padding: 2rem 4rem;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.78rem;
      color: var(--muted);
    }
    footer strong { color: var(--dark); font-weight: 500; }

    /* LANGUAGES */
    .langs-row {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin-top: 3rem;
      border: 1px solid var(--border);
    }
    .lang-card {
      flex: 1;
      min-width: 140px;
      padding: 1.5rem;
      border-right: 1px solid var(--border);
    }
    .lang-card:last-child { border-right: none; }
    .lang-name { font-weight: 500; color: var(--black); font-size: 0.95rem; margin-bottom: 0.2rem; }
    .lang-level { font-size: 0.75rem; color: var(--muted); }

    /* RESPONSIVE */
    @media (max-width: 768px) {
      nav { padding: 1rem 1.5rem; }
      section { padding: 5rem 1.5rem; }
      .hero { padding: 7rem 1.5rem 4rem; }
      .hero-inner { grid-template-columns: 1fr; gap: 3rem; }
      .hero-stats { flex-direction: row; gap: 2rem; }
      .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
      .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
      footer { flex-direction: column; gap: 0.5rem; text-align: center; }
      .project-item { grid-template-columns: auto 1fr; }
      .project-arrow { display: none; }
      .nav-links { display: none; }
    }

    /* animations */
    @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    .hero-tag, .hero-name, .hero-role, .hero-desc, .hero-actions, .hero-stats {
      animation: fadeUp 0.6s ease both;
    }
    .hero-tag { animation-delay: 0.1s; }
    .hero-name { animation-delay: 0.2s; }
    .hero-role { animation-delay: 0.3s; }
    .hero-desc { animation-delay: 0.4s; }
    .hero-actions { animation-delay: 0.5s; }
    .hero-stats { animation-delay: 0.3s; }
  `}</style>
);

// ========================
// EXPORT
// ========================
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}