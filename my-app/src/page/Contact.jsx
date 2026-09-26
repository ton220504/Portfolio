const socialLinks = [
  { label: 'LinkedIn', detail: 'Connect professionally', image: '/images/linkedin.png', url: 'https://www.linkedin.com/in/vantoan220504/' },
  { label: 'Facebook', detail: 'Say hello', image: '/images/facebook.png', url: 'https://www.facebook.com/toan.130256' },
  { label: 'GitHub', detail: 'Explore my code', image: '/images/github.png', url: 'https://github.com/ton220504' },
  { label: 'Résumé', detail: 'View my experience', image: '/images/pdf.png', url: '/SOFTWARE_DEVELOPER_TRAN_VAN_TOAN.pdf' },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-shell">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="section-eyebrow"><span /> 04 / CONTACT</p>
            <h2 id="contact-title">Have something in mind?<br /><span>Let's build it.</span></h2>
            <p>Thanks for exploring my portfolio. I'd love to hear about your ideas, opportunities or just connect with another builder.</p>
          </div>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                <span className="contact-icon"><img src={link.image} alt="" loading="lazy" /></span>
                <span><strong>{link.label}</strong><small>{link.detail}</small></span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <footer className="site-footer"><span>© {new Date().getFullYear()} Tran Van Toan</span><a href="#home">Back to top ↑</a></footer>
      </div>
    </section>
  );
}
