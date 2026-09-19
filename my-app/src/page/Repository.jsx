const projects = [
  { image: '/images/Screenshot_2.png', title: 'Fastify-and-ReactJS', stack: 'ReactJS · Fastify', url: 'https://github.com/ton220504/Fastify-and-ReactJS' },
  { image: '/images/Screenshot_4.png', title: 'BaoCaoLTWe2', stack: 'ReactJS · Java', url: 'https://github.com/ton220504/BaoCaoLTWe2' },
  { image: '/images/Screenshot_3.png', title: 'DoAn_Web', stack: 'ReactJS · NodeJS', url: 'https://github.com/ton220504/DoAn_Web' },
  { image: '/images/Screenshot_1.png', title: 'ASP.NET', stack: 'ASP.NET Core · C#', url: 'https://github.com/ton220504/ASP.NET' },
];

export default function Repository() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="section-heading projects-heading">
          <div>
            <p className="section-eyebrow"><span /> 03 / SELECTED WORK</p>
            <h2 id="projects-title">Projects in <span>practice.</span></h2>
          </div>
          <a href="https://github.com/ton220504" target="_blank" rel="noopener noreferrer" className="text-link">More on GitHub <span aria-hidden="true">↗</span></a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a className="project-card" key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
              <div className="project-image"><img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" /></div>
              <div className="project-details">
                <span className="project-index">{String(index + 1).padStart(2, '0')} / PROJECT</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
                <h3>{project.title}</h3>
                <p>{project.stack}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
