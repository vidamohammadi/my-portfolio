<script setup>
import { useDisplay } from 'vuetify';

const { lgAndUp, mdAndUp } = useDisplay();
const isDesktop = computed(() => lgAndUp.value);
const isMd = computed(() => mdAndUp.value);

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/my-portfolio/documents/vida-mohammadi-resume.pdf';
  link.download = 'vida-mohammadi-resume.pdf';
  link.click();
};

const skills = [
  { title: 'JavaScript', path: 'js' },
  { title: 'TypeScript', path: 'typescript' },
  { title: 'Vue.js', path: 'vue' },
  { title: 'Nuxt.js', path: 'nuxt' },
  { title: 'Tailwind CSS', path: 'tailwind' },
  { title: 'Pinia', path: 'pinia' },
  { title: 'Vuetify', path: 'vuetify' },
  { title: 'Git', path: 'git' },
];

const experiences = [
  {
    company: 'The Block',
    role: 'Front-End Developer',
    period: 'Sep 2025 – Present',
    location: 'Remote · International',
    bullets: [
      'Built Indexpo, an institutional data terminal for Real World Assets (RWA).',
      'Developed complex data tables with real-time filtering and sorting using Vue 3 & TypeScript.',
      'Collaborated asynchronously with an international remote team.',
    ],
  },
  {
    company: 'Lipak Company',
    role: 'Front-End Developer',
    period: 'Feb 2024 – Sep 2025',
    location: 'Tehran, Iran',
    bullets: [
      'Led migration of a production project from Vue 2 to Nuxt 3 with TypeScript.',
      'Upgraded state management from Vuex to Pinia, improving API performance.',
      'Developed responsive web applications using Vue.js and Nuxt 3.',
    ],
  },
  {
    company: 'Tehran Raymand',
    role: 'Front-End Developer',
    period: 'Feb 2022 – Feb 2024',
    location: 'Tehran, Iran',
    bullets: [
      'Built complex forms with advanced validation using Vue Hook Form.',
      'Integrated RESTful APIs and managed state with Vuex and Pinia.',
      'Participated in code reviews and improved development workflows.',
    ],
  },
];

const projects = [
  {
    title: 'Indexpo',
    tech: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'REST API'],
    description: 'Institutional data terminal for Real World Asset (RWA) tokens — live market data, categories, platforms, and companies.',
    link: 'https://www.indexpo.com/',
    github: null,
  },
  {
    title: 'Vue 2 → Nuxt 3 Migration',
    tech: ['Nuxt 3', 'Pinia', 'TypeScript', 'REST API'],
    description: 'Migrated a large-scale production website from Vue 2 to Nuxt 3, improving performance, SEO, and maintainability.',
    link: 'https://lipak.com',
    github: null,
  },
  {
    title: 'Upra Company Website',
    tech: ['Vue 2', 'Vuetify 2', 'Responsive Design'],
    description: 'Responsive company website with modern UI components, ensuring seamless performance across devices.',
    link: null,
    github: null,
  },
  {
    title: 'Personal Portfolio',
    tech: ['Nuxt 3', 'Vuetify', 'TypeScript'],
    description: 'This portfolio — designed and built from scratch using Nuxt 3 Composition API and Vuetify.',
    link: 'https://vidamohammadi.github.io/my-portfolio/',
    github: 'https://github.com/vidamohammadi/my-portfolio',
  },
];

const activeExp = ref(0);
</script>

<template>
  <div class="portfolio-root">

    <!-- ══════════════════════════════ HERO ══════════════════════════════ -->
    <section class="hero-section">
      <div class="hero-grid">
        <div class="hero-content">
          <p class="hero-eyebrow">Hi there!</p>
          <h1 class="hero-title">
            I'm <span class="accent">Vida</span><br />
            Front-End<br />Developer
          </h1>
          <p class="hero-sub">
            Vue.js &amp; Nuxt specialist · 4+ years experience<br />
            Available for remote &amp; freelance work
          </p>
          <div class="hero-actions">
            <v-btn class="btn-primary" @click="downloadCV">Download CV</v-btn>
            <a href="#contact" class="btn-outline">Contact Me</a>
          </div>
          <div class="hero-contact-strip">
            <span>m.vidamohammadi@gmail.com</span>
            <span class="divider">·</span>
            <span>Tehran, Iran</span>
          </div>
        </div>
        <div class="hero-image-wrap">
          <div class="hero-image-frame">
            <v-img src="/images/IMG_4250.jpeg" alt="Vida Mohammadi" class="hero-img" cover />
          </div>
          <div class="hero-badge">
            <span class="badge-num">4+</span>
            <span class="badge-label">Years<br/>Experience</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ ABOUT ══════════════════════════════ -->
    <section class="section" id="about">
      <div class="section-inner">
        <div class="section-label">About Me</div>
        <div class="about-grid">
          <div class="about-text">
            <h2 class="section-title">Building interfaces<br /><span class="accent">people love to use.</span></h2>
            <p class="about-body">
              I'm a front-end developer specializing in Vue.js and Nuxt — turning complex data and ideas into clean, fast, accessible web experiences. I've worked across startups and established companies, both on-site in Tehran and remotely with international teams in the Web3 and fintech space.
            </p>
            <p class="about-body mt-4">
              I care about code quality, performance, and the small details that make a big difference.
            </p>
            <div class="about-links">
              <a href="https://github.com/vidamohammadi" target="_blank" class="about-link">GitHub ↗</a>
              <a href="https://linkedin.com/in/vida-mohammadi-14567428a" target="_blank" class="about-link">LinkedIn ↗</a>
            </div>
          </div>
          <div class="about-facts">
            <div class="fact-card">
              <span class="fact-num">4+</span>
              <span class="fact-label">Years Experience</span>
            </div>
            <div class="fact-card">
              <span class="fact-num">3</span>
              <span class="fact-label">Companies</span>
            </div>
            <div class="fact-card">
              <span class="fact-num">∞</span>
              <span class="fact-label">Remote Ready</span>
            </div>
            <div class="fact-card">
              <span class="fact-num">BSc</span>
              <span class="fact-label">Computer Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ SKILLS ══════════════════════════════ -->
    <section class="section section-dark" id="skills">
      <div class="section-inner">
        <div class="section-label">Skills</div>
        <h2 class="section-title">My Tech Stack</h2>
        <div class="skills-grid">
          <div v-for="skill in skills" :key="skill.title" class="skill-chip">
            <v-img :src="`/my-portfolio/images/skills/${skill.path}.png`" :alt="skill.title" class="skill-icon" />
            <span class="skill-name">{{ skill.title }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ EXPERIENCE ══════════════════════════════ -->
    <section class="section" id="experience">
      <div class="section-inner">
        <div class="section-label">Experience</div>
        <h2 class="section-title">Where I've Worked</h2>
        <div class="exp-layout">
          <div class="exp-tabs">
            <button
                v-for="(exp, i) in experiences"
                :key="i"
                class="exp-tab"
                :class="{ active: activeExp === i }"
                @click="activeExp = i"
            >
              <span class="exp-tab-company">{{ exp.company }}</span>
              <span class="exp-tab-period">{{ exp.period }}</span>
            </button>
          </div>
          <div class="exp-panel">
            <div class="exp-header">
              <h3 class="exp-role">{{ experiences[activeExp].role }}</h3>
              <span class="exp-meta">{{ experiences[activeExp].company }} · {{ experiences[activeExp].location }}</span>
              <span class="exp-period-badge">{{ experiences[activeExp].period }}</span>
            </div>
            <ul class="exp-bullets">
              <li v-for="(b, i) in experiences[activeExp].bullets" :key="i">{{ b }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ PROJECTS ══════════════════════════════ -->
    <section class="section section-dark" id="projects">
      <div class="section-inner">
        <div class="section-label">Projects</div>
        <h2 class="section-title">Selected Work</h2>
        <div class="projects-grid">
          <div v-for="project in projects" :key="project.title" class="project-card">
            <div class="project-top">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-links">
                <a v-if="project.link" :href="project.link" target="_blank" class="proj-link">Live ↗</a>
                <a v-if="project.github" :href="project.github" target="_blank" class="proj-link">GitHub ↗</a>
              </div>
            </div>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ CONTACT ══════════════════════════════ -->
    <section class="section" id="contact">
      <div class="section-inner">
        <div class="section-label">Contact</div>
        <h2 class="section-title">Let's Work Together</h2>
        <p class="contact-sub">Open to freelance projects and remote full-time opportunities.</p>
        <div class="contact-grid">
          <div class="contact-info">
            <a href="mailto:m.vidamohammadi@gmail.com" class="contact-item">
              <span class="contact-icon">✉</span>
              <span>m.vidamohammadi@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/vida-mohammadi-14567428a" target="_blank" class="contact-item">
              <span class="contact-icon">in</span>
              <span>LinkedIn Profile</span>
            </a>
            <a href="https://github.com/vidamohammadi" target="_blank" class="contact-item">
              <span class="contact-icon">gh</span>
              <span>GitHub Profile</span>
            </a>
          </div>
          <form class="contact-form" @submit.prevent>
            <input type="text" placeholder="Your Name" class="form-input" />
            <input type="email" placeholder="Your Email" class="form-input" />
            <textarea placeholder="Your Message" rows="4" class="form-input form-textarea"></textarea>
            <button type="submit" class="btn-primary w-full
">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ FOOTER ══════════════════════════════ -->
    <footer class="footer">
      <span>© 2025 Vida Mohammadi · Front-End Developer</span>
      <div class="footer-links">
        <a href="https://github.com/vidamohammadi" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/vida-mohammadi-14567428a" target="_blank">LinkedIn</a>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* ── Root & tokens ── */
.portfolio-root {
  --c-bg: #0a0a0a;
  --c-bg-dark: #111111;
  --c-bg-card: #161616;
  --c-border: #2a2a2a;
  --c-accent: #00e5a0;
  --c-accent2: #00b37a;
  --c-text: #f0f0f0;
  --c-muted: #888;
  --c-white: #ffffff;
  --font-display: 'Syne', 'Segoe UI', sans-serif;
  --font-body: 'DM Sans', 'Segoe UI', sans-serif;
  background: var(--c-bg);
  color: var(--c-text);
  font-family: var(--font-body);
  overflow-x: hidden;
}

/* ── Shared section layout ── */
.section { padding: 100px 0; }
.section-dark { background: var(--c-bg-dark); }
.section-inner { max-width: 1100px; margin: 0 auto; padding: 0 32px; }
.section-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-accent);
  margin-bottom: 12px;
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--c-white);
  margin-bottom: 48px;
}
.accent { color: var(--c-accent); }

/* ── Hero ── */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 32px;
  max-width: 1100px;
  margin: 0 auto;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  width: 100%;
}
.hero-eyebrow {
  font-size: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-accent);
  font-weight: 600;
  margin-bottom: 16px;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--c-white);
  margin-bottom: 24px;
}
.hero-sub {
  font-size: 16px;
  color: var(--c-muted);
  line-height: 1.7;
  margin-bottom: 40px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.btn-primary {
  background: var(--c-accent) !important;
  color: #000 !important;
  font-weight: 700 !important;
  font-size: 14px !important;
  border-radius: 6px !important;
  letter-spacing: 0.03em;
  text-decoration: none;
  height: 43px;
  transition: opacity 0.2s;
}
.btn-primary:hover { opacity: 0.85; }
.btn-outline {
  border: 1.5px solid var(--c-border);
  color: var(--c-text);
  font-weight: 600;
  font-size: 14px;
  padding: 11px 24px;
  border-radius: 6px;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}
.btn-outline:hover { border-color: var(--c-accent); color: var(--c-accent); }
.w-full { width: 100%; }
.hero-contact-strip {
  font-size: 13px;
  color: var(--c-muted);
  display: flex;
  gap: 12px;
  align-items: center;
}
.divider { opacity: 0.4; }

.hero-image-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}
.hero-image-frame {
  width: 420px;
  height: 520px;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--c-border);
  position: relative;
}
.hero-image-frame::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
  z-index: 1;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}
.hero-badge {
  position: absolute;
  bottom: 24px;
  right: -16px;
  background: var(--c-accent);
  color: #000;
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 800;
}
.badge-num { font-size: 28px; line-height: 1; }
.badge-label { font-size: 11px; font-weight: 700; text-transform: uppercase; line-height: 1.3; }

/* ── About ── */
.about-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 80px;
  align-items: start;
}
.about-body { font-size: 16px; color: var(--c-muted); line-height: 1.8; }
.mt-4 { margin-top: 16px; }
.about-links { display: flex; gap: 24px; margin-top: 32px; }
.about-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--c-accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.about-link:hover { border-color: var(--c-accent); }
.about-facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.fact-card {
  background: var(--c-bg-card);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.fact-num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: var(--c-accent);
}
.fact-label { font-size: 12px; color: var(--c-muted); text-transform: uppercase; letter-spacing: 0.1em; }

/* ── Skills ── */
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.skill-chip {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--c-bg-card);
  border: 1px solid var(--c-border);
  border-radius: 50px;
  padding: 10px 20px;
  transition: border-color 0.2s, transform 0.2s;
}
.skill-chip:hover { border-color: var(--c-accent); transform: translateY(-2px); }
.skill-icon { width: 28px; height: 28px; object-fit: contain; }
.skill-name { font-size: 14px; font-weight: 600; color: var(--c-text); }

/* ── Experience ── */
.exp-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 40px;
  align-items: start;
}
.exp-tabs { display: flex; flex-direction: column; gap: 4px; }
.exp-tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 16px 20px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-left: 2px solid transparent;
  transition: all 0.2s;
  text-align: left;
}
.exp-tab:hover { background: var(--c-bg-card); }
.exp-tab.active { background: var(--c-bg-card); border-left-color: var(--c-accent); }
.exp-tab-company { font-size: 14px; font-weight: 700; color: var(--c-text); }
.exp-tab-period { font-size: 11px; color: var(--c-muted); }
.exp-panel {
  background: var(--c-bg-card);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 32px;
}
.exp-header { margin-bottom: 24px; }
.exp-role { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: var(--c-white); margin-bottom: 8px; }
.exp-meta { font-size: 14px; color: var(--c-muted); display: block; margin-bottom: 8px; }
.exp-period-badge {
  display: inline-block;
  background: rgba(0, 229, 160, 0.12);
  color: var(--c-accent);
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
}
.exp-bullets { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; }
.exp-bullets li {
  font-size: 15px;
  color: var(--c-muted);
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
}
.exp-bullets li::before { content: '→'; position: absolute; left: 0; color: var(--c-accent); font-size: 13px; }

/* ── Projects ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.project-card {
  background: var(--c-bg-card);
  border: 1px solid var(--c-border);
  border-radius: 14px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.2s, transform 0.2s;
}
.project-card:hover { border-color: var(--c-accent); transform: translateY(-3px); }
.project-top { display: flex; justify-content: space-between; align-items: flex-start; }
.project-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--c-white); }
.project-links { display: flex; gap: 12px; }
.proj-link { font-size: 13px; color: var(--c-accent); text-decoration: none; font-weight: 600; }
.proj-link:hover { text-decoration: underline; }
.project-desc { font-size: 14px; color: var(--c-muted); line-height: 1.7; flex: 1; }
.project-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--c-accent);
  background: rgba(0, 229, 160, 0.08);
  border: 1px solid rgba(0, 229, 160, 0.2);
  padding: 3px 10px;
  border-radius: 20px;
}

/* ── Contact ── */
.contact-sub { font-size: 16px; color: var(--c-muted); margin-top: -32px; margin-bottom: 48px; }
.contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 64px; align-items: start; }
.contact-info { display: flex; flex-direction: column; gap: 20px; }
.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--c-text);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.2s;
}
.contact-item:hover { color: var(--c-accent); }
.contact-icon {
  width: 40px;
  height: 40px;
  background: var(--c-bg-card);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
}
.contact-form { display: flex; flex-direction: column; gap: 16px; }
.form-input {
  background: var(--c-bg-card);
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 14px 18px;
  color: var(--c-text);
  font-size: 15px;
  font-family: var(--font-body);
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;
}
.form-input::placeholder { color: var(--c-muted); }
.form-input:focus { border-color: var(--c-accent); }
.form-textarea { resize: vertical; }

/* ── Footer ── */
.footer {
  border-top: 1px solid var(--c-border);
  padding: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--c-muted);
  max-width: 1100px;
  margin: 0 auto;
}
.footer-links { display: flex; gap: 24px; }
.footer-links a { color: var(--c-muted); text-decoration: none; transition: color 0.2s; }
.footer-links a:hover { color: var(--c-accent); }

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; gap: 48px; }
  .hero-image-wrap { display: none; }
  .about-grid { grid-template-columns: 1fr; gap: 40px; }
  .exp-layout { grid-template-columns: 1fr; }
  .exp-tabs { flex-direction: row; flex-wrap: wrap; }
  .projects-grid { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
  .footer { flex-direction: column; gap: 16px; text-align: center; }
}
</style>
