import { useState } from 'react';

const projects = [
  {
    title: 'E-commerce',
    stack: 'Zalo Mini App · E-commerce',
    images: ['/images/npoil/img_npoil.png'],
    qr: '/images/npoil/npoil.jpg',
    qrLabel: 'NP OIL Zalo QR code',
  },
  {
    title: 'Business & Entrepreneurs',
    stack: 'Zalo Mini App · Community',
    images: [
      '/images/dht/img_dht.png'],
    qr: '/images/dht/dht.jpg',
    qrLabel: 'Business community Zalo QR code',
  },
  {
    title: 'Education',
    stack: 'Zalo Mini App · Education',
    images: [
      '/images/truong/img_truong.png'],
  },
  {
    title: 'E-commerce Platform',
    stack: 'ReactJS · Fastify',
    images: ['/images/Screenshot_2.png'],
    url: 'https://github.com/ton220504/Fastify-and-ReactJS',
  },
];

function ProjectVisual({ project, qrVisible, onToggleQr }) {
  const isQrProject = Boolean(project.qr);
  const handleKeyDown = (event) => {
    if (isQrProject && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onToggleQr();
    }
  };

  return (
    <div
      className={`project-image ${project.images.length > 1 ? 'project-collage' : 'project-single-image'}${isQrProject ? ' project-qr-trigger' : ''}`}
      style={project.images.length > 1 ? { '--image-count': project.images.length } : undefined}
      onClick={isQrProject ? onToggleQr : undefined}
      onKeyDown={handleKeyDown}
      role={isQrProject ? 'button' : undefined}
      tabIndex={isQrProject ? 0 : undefined}
      aria-label={isQrProject ? `${qrVisible ? 'Ẩn' : 'Hiện'} mã QR của ${project.title}` : undefined}
    >
      {project.images.map((image, index) => (
        <img key={image} src={image} alt={`${project.title} preview ${index + 1}`} loading="lazy" />
      ))}
      {isQrProject && (
        <div className={`project-qr-overlay${qrVisible ? ' is-visible' : ''}`} aria-hidden={!qrVisible}>
          <div className="project-qr-card">
            <span className="project-qr-crop">
              <img src={project.qr} alt={project.qrLabel} loading="lazy" />
            </span>
            <span>{qrVisible ? 'Mở Zalo → Quét QR' : 'Hover hoặc chạm để xem QR'}</span>
          </div>
        </div>
      )}
      {isQrProject && <span className="project-qr-badge">QR / ZALO</span>}
    </div>
  );
}

export default function Repository() {
  const [activeQr, setActiveQr] = useState(null);

  const toggleQr = (index) => {
    setActiveQr((current) => (current === index ? null : index));
  };

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="section-heading projects-heading">
          <div>
            <p className="section-eyebrow"><span /> 03 / SELECTED WORK</p>
            <h2 id="projects-title">Projects in <span>practice.</span></h2>
          </div>
          <a href="https://github.com/ton220504" target="_blank" rel="noopener noreferrer" className="text-link">
            More on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const card = (
              <article className={`project-card${project.qr ? ' project-card-qr' : ''}`}>
                <ProjectVisual
                  project={project}
                  qrVisible={activeQr === index}
                  onToggleQr={() => toggleQr(index)}
                />
                <div className="project-details">
                  <span className="project-index">{String(index + 1).padStart(2, '0')} / PROJECT</span>
                  {!project.qr && <span className="project-arrow" aria-hidden="true">↗</span>}
                  {project.qr && <span className="project-qr-hint">{activeQr === index ? 'Tap để đóng QR' : 'Hover / chạm để quét'}</span>}
                  <h3>{project.title}</h3>
                  <p>{project.stack}</p>
                </div>
              </article>
            );

            return project.url ? (
              <a
                className="project-card-link"
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Mở ${project.title} trên GitHub`}
              >
                {card}
              </a>
            ) : <div key={project.title}>{card}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
