export default function About() {
  return (
    <section className="about-section section-shell" id="about" aria-labelledby="about-title">
      <div className="about-portrait">
        <div className="portrait-glow" aria-hidden="true" />
        <img src="/images/avatar.jpg" alt="Portrait of Tran Van Toan" loading="lazy" />
        <div className="portrait-caption"><span>01 / 02</span><span>MEET THE DEVELOPER</span></div>
      </div>
      <div className="about-copy">
        <p className="section-eyebrow"><span /> ABOUT ME</p>
        <h2 id="about-title">Curiosity in every line of code<span>.</span></h2>
        <p className="about-lead">
          I'm Tran Van Toan, a software developer and Information Technology graduate from Ho Chi Minh Industry and Trade College.
        </p>
        <p>
          I enjoy exploring new technologies and creating practical digital experiences for everyday life. From responsive websites to Zalo Mini Apps, I care about how a product feels as much as how it works.
        </p>
        <p lang="vi">
          Xin chào! Mình là Trần Văn Toàn, yêu thích khám phá công nghệ mới và tạo ra những sản phẩm số hữu ích trong cuộc sống hằng ngày.
        </p>
        <div className="about-highlights">
          <div><strong>Frontend</strong><span>Interfaces that feel intuitive</span></div>
          <div><strong>Fullstack</strong><span>Ideas built end to end</span></div>
        </div>
        <a href="/TRAN_VAN_TOAN.pdf" target="_blank" rel="noopener noreferrer" className="about-resume">View my résumé <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
