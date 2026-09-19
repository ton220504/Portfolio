import './App.css'
import Information from './page/Information'
import About from './page/About'
import Skill from './page/Skill';
import Contact from './page/Contact';
import Repository from './page/Repository';
import CareerTimeline from './page/CareerTimeline';



export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="site-brand" href="#home" aria-label="Tran Van Toan, back to top">TVT<span>.</span></a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
        <a className="header-contact" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
      </header>
      <main>
        <Information />
        <About />
        <CareerTimeline />
        <Skill />
        <Repository />
        <Contact />
      </main>
    </>
  );
}
