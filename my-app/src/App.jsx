import './App.css'
import Information from './page/Information'
import About from './page/About'
import Skill from './page/Skill';
import Contact from './page/Contact';
import Repository from './page/Repository';
import CareerTimeline from './page/CareerTimeline';



export default function App() {

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight + window.pageYOffset,
      behavior: 'smooth'
    });
  }
  return (
    <>
      {/* CONTENT */}
      <div className="relative">
        <Information />
        <About />
        <CareerTimeline/>
        <Skill />
        <Repository />
        <Contact />
      </div>

      {/* FIXED BUTTON */}
      {/* <button
        onClick={scrollToNext}
        className="fixed bottom-8 left-1/2 -translate-x-1/2
                   z-50 animate-bounce text-white"
      >
        click!
      </button> */}
    </>
  );
}

