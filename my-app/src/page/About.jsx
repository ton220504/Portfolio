import ScrollFloat from "../hook/ScrollFloat/ScrollFloat";
import ScrollReveal from "../hook/ScrollReveal/ScrollReveal";

const About = () => {
  return (
    <div className="min-h-[130vh] flex flex-col justify-center gap-3 text-center bg-gray-500 text-white ">

      {/* <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        Hello, I am a Software Developer passionate about technology,
        interested in new technologies, and want to apply technology to daily life.
      </ScrollReveal>

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        Xin chào, tôi là một lập trình viên đam mê công nghệ,
        hứng thú với các công nghệ mới, mong muốn đem công nghệ vận dụng vào đời sống hàng ngày.
      </ScrollReveal> */}
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
        Hello, I am a Software Developer passionate about technology,
        interested in new technologies, and want to apply technology to daily life.
      </ScrollFloat>
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
        Xin chào, tôi là một lập trình viên đam mê công nghệ,
        hứng thú với các công nghệ mới, mong muốn đem công nghệ vận dụng vào đời sống hàng ngày.
      </ScrollFloat>
    </div>
  )
}

export default About;
