export default function Information() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-availability"><span /> Software developer portfolio</p>
          <h1 id="hero-title">Hi, I'm <span>Tran Van Toan.</span><br />I build for the web.</h1>
          <p className="hero-description">
            Turning ideas into thoughtful digital experiences with ReactJS, JavaScript and a love for clean interfaces.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#experience">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="button-secondary" href="#contact">Get in touch <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-meta"><span>Based in Vietnam</span><span>ReactJS · JavaScript · Zalo Mini App</span></div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-code-window">
            <div className="hero-window-bar"><i /><i /><i /><span>portfolio.jsx</span></div>
            <div className="hero-code">
              <p><span>const</span> developer = {'{'}</p>
              <p className="indent">name: <strong>'Tran Van Toan'</strong>,</p>
              <p className="indent">focus: <strong>'Web experiences'</strong>,</p>
              <p className="indent">stack: [<strong>'ReactJS'</strong>, <strong>'JavaScript'</strong>],</p>
              <p className="indent">passion: <strong>'Build what matters'</strong></p>
              <p>{'}'}</p>
            </div>
            <div className="hero-window-footer"><span className="hero-pulse" /> Available to collaborate <span>↗</span></div>
          </div>
          <div className="hero-float hero-float-top">✦ Creative mind</div>
          <div className="hero-float hero-float-bottom">&lt;/&gt; Problem solver</div>
        </div>
      </div>
      <a href="#about" className="hero-scroll">Scroll to explore <span aria-hidden="true">↓</span></a>
    </section>
  );
}
