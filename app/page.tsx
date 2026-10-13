import { about, projects, projectsIntro, site, socials, stack } from "@/lib/data";
import NowPlaying from "@/components/NowPlaying";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  jobTitle: site.role,
  description: site.headline,
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  const roles = site.role.split(" · ");

  return (
    <>
      <NowPlaying />

      <div className="site">
        <header>
          <div className="name-row">
            <h1>{site.name}</h1>
          </div>

          <div className="tagline">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span aria-hidden="true">|</span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>

          <div className="about-role" aria-label="Roles">
            <span className="sep">[</span>
            {roles.map((role, index) => (
              <span key={role}>
                <span>{role.toLowerCase()}</span>
                {index < roles.length - 1 && (
                  <span className="sep"> · </span>
                )}
              </span>
            ))}
            <span className="sep">]</span>
          </div>
        </header>

        <div className="quote">
          <blockquote>
            &quot;The best way to predict the future is to invent it.&quot;
          </blockquote>
          <cite>- Alan Kay</cite>
        </div>

        <main>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <section id="introduction">
            <h2>
              <span>Introduction</span>
            </h2>
            <div className="section-content">
              <p>
                Hey, I&apos;m Rangan. I&apos;m 13 years old, I enjoy AI Development
                and tinkering with ML, and outside of that I play cricket and
                play guitar.
              </p>
              <p>{about[1]}</p>
              <div className="badges" aria-label="Technology stack">
                {stack.map((technology) => (
                  <span className="badge" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="work">
            <h2>
              <span>Projects</span>
            </h2>
            <div className="section-content">
              <p className="projects-intro">{projectsIntro}</p>
              <div className="projects">
                {projects.map((project) => (
                  <a
                    className="project-card"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={project.slug}
                  >
                      <span className="project-title">
                        {project.name}
                        <span aria-hidden="true">↗</span>
                      </span>
                    <p>{project.short}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section id="links">
            <h2>
              <span>Links</span>
            </h2>
            <div className="section-content">
              <div className="links">
                {socials.map((social) => (
                  <a
                    href={social.href}
                    key={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer>
          <span>
            {site.name} · {site.role.toLowerCase()}
          </span>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            source ↗
          </a>
        </footer>
      </div>
    </>
  );
}
