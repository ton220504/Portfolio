import GradientText from "../hook/GradientText/GradientText";
import SplitText from "../hook/SplitText/SplitText";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker, SiHtml5, SiCss3, SiJavascript, SiGit, SiGithub, SiMysql, SiNetapp, SiVercel } from 'react-icons/si';
import LogoLoop from "../hook/LogoLoop/LogoLoop";

const About = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiDocker />, title: "Docker", href: "https://tailwindcss.com" },
    { node: <SiHtml5 />, title: "HTML", href: "https://tailwindcss.com" },
    { node: <SiCss3 />, title: "CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://tailwindcss.com" },
    { node: <SiGit />, title: "Git", href: "https://tailwindcss.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://tailwindcss.com" },
    { node: <SiMysql />, title: "MySQL", href: "https://tailwindcss.com" },
    { node: <SiNetapp />, title: "Netapp", href: "https://tailwindcss.com" },
    { node: <SiVercel />, title: "Vercel", href: "https://tailwindcss.com" },
  ];


  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* ===== CONTENT TRÊN ===== */}
      <div className="grid grid-cols-6 gap-4 px-6 pt-16">
        {/* Title */}
        <div className="col-start-2 col-span-4 text-center">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-5xl md:text-6xl font-serif"
          >
            Software Developer
          </GradientText>
        </div>

        {/* Left text */}
        <div className="col-span-6 md:col-start-1 md:col-end-4">
          <SplitText
            text="Hello, I am a Software Developer passionate about technology,
          interested in new technologies, and want to apply technology to daily life."
            className="text-lg md:text-2xl font-serif text-center"
            delay={30}
            duration={0.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />

          <SplitText
            text="Xin chào, tôi là một lập trình viên đam mê công nghệ,
          hứng thú với các công nghệ mới, mong muốn đem công nghệ vận dụng vào đời sống hàng ngày."
            className="text-base md:text-xl text-center mt-4 font-serif"
            delay={30}
            duration={0.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        {/* Right placeholder */}
        <div className=" md:flex col-span-2 items-center justify-center">
          right
        </div>
      </div>

      {/* ===== ĐẨY LOGO XUỐNG ĐÁY ===== */}
      <div className="flex-1" />

      {/* ===== LOGO LOOP ===== */}
      <div className="w-full overflow-hidden bg-black pb-6">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}

export default About;
