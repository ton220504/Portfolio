import './CareerTimeline.css';

const timeline = [
  {
    company: 'Công ty Cổ phần TitKul',
    role: 'Zalo Mini App Development',
    period: 'Zalo Mini App',
    image: '/images/titkul.png',
    imageAlt: 'Logo Công ty Cổ phần TitKul',
    description:
      'Tham gia lập trình Zalo Mini App, xây dựng giao diện và các chức năng tương tác bằng ReactJS và JavaScript.',
    technologies: ['Zalo Mini App', 'ReactJS', 'JavaScript'],
    featured: true,
  },
  {
    company: 'Sai Gon Precision Company',
    role: 'Software Developer Intern',
    period: 'Jun 2025 — Dec 2025',
    image: '/images/misumi1.webp',
    imageAlt: 'Sai Gon Precision Company',
    description:
      'Maintained and developed internal management software using ReactJS, NodeJS, ASP.NET and MySQL.',
    technologies: ['ReactJS', 'NodeJS', 'ASP.NET', 'MySQL'],
  },
  {
    company: 'Ho Chi Minh Industry and Trade College',
    role: 'Information Technology',
    period: 'Sep 2022 — Dec 2025',
    image: '/images/logoHitu.png',
    imageAlt: 'Ho Chi Minh Industry and Trade College logo',
    description: 'Studied Information Technology and built a foundation in software development.',
    technologies: ['Education', 'Software Development'],
  },
];

export default function CareerTimeline() {
  return (
    <section className="career-section" id="experience" aria-labelledby="career-title">
      <div className="career-glow" aria-hidden="true" />
      <div className="career-container">
        <div className="career-heading">
          <div>
            <p className="section-eyebrow"><span /> 01 / EXPERIENCE</p>
            <h2 id="career-title">The journey <span>so far.</span></h2>
          </div>
          <p className="career-intro">
            A look at the places, projects and technologies shaping the way I build software.
          </p>
        </div>

        <ol className="career-list">
          {timeline.map((item, index) => (
            <li className="career-item" key={`${item.company}-${item.period}`}>
              <div className="career-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <article className={`career-card${item.featured ? ' career-card-featured' : ''}`}>
                <div className="career-card-top">
                  <span className="career-period">{item.period}</span>
                  {item.featured && <span className="career-featured-label">Featured experience</span>}
                </div>
                <div className="career-card-main">
                  <div className="career-card-copy">
                    <p className="career-role">{item.role}</p>
                    <h3>{item.company}</h3>
                    <p className="career-description">{item.description}</p>
                  </div>
                  <div className="career-logo">
                    <img src={item.image} alt={item.imageAlt} loading="lazy" />
                  </div>
                </div>
                <ul className="career-tags" aria-label="Technologies and focus">
                  {item.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
