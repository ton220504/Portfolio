import './App.css'
import Information from './page/Information'
import About from './page/About'
import Dock from './hook/Dock/Dock';
import {
  VscHome,
  VscTasklist,
  VscWorkspaceTrusted,
  VscDeviceMobile
} from 'react-icons/vsc';
import Skill from './page/Skill';



export default function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const items = [
    {
      icon: <VscHome size={18} />,
      label: 'About',
      onClick: () => scrollToSection('about')
    },
    {
      icon: <VscTasklist size={18} />,
      label: 'Skill',
      onClick: () => scrollToSection('skill')
    },
    {
      icon: <VscWorkspaceTrusted size={18} />,
      label: 'Repository',
      onClick: () => scrollToSection('repo')
    },
    {
      icon: <VscDeviceMobile size={18} />,
      label: 'Contact',
      onClick: () => scrollToSection('contact')
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <section id="home">
        <Information />
      </section>

      <section id="about">
        <About />
      </section>

      <section id='skill'>
        <Skill/>
      </section>

      {/* <Dock
        items={items}
        //panelHeight={68}
        // baseItemSize={50}
        // magnification={70}
      /> */}
    </div>
  );
}

