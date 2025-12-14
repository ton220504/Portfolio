import ScrollFloat from "../hook/ScrollFloat/ScrollFloat";
import ScrollReveal from "../hook/ScrollReveal/ScrollReveal";
import SplitText from "../hook/SplitText/SplitText";

const About = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className="h-screen flex flex-col justify-center gap-3 text-center bg-gray-600 text-white ">
      <div className="text-7xl font-bold">
        <SplitText
          text="Hello, I am a Software Developer passionate about technology,
        interested in new technologies, and want to apply technology to daily life."
          className="text-4xl font-semibold text-center"
          delay={30}
          duration={0.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <div>
        <SplitText
          text="Xin chào, tôi là một lập trình viên đam mê công nghệ,
        hứng thú với các công nghệ mới, mong muốn đem công nghệ vận dụng vào đời sống hàng ngày."
          className="text-4xl font-semibold text-center"
          delay={30}
          duration={0.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}

        />
      </div>
    </div>


  )
}

export default About;
