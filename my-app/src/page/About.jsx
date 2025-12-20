import GradientText from "../hook/GradientText/GradientText";
import SplitText from "../hook/SplitText/SplitText";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiDocker, SiHtml5, SiCss3, SiJavascript, SiGit, SiGithub, SiMysql, SiNetapp, SiVercel } from 'react-icons/si';
import LogoLoop from "../hook/LogoLoop/LogoLoop";
import TiltedCard from "../hook/TiltedCard/TiltedCard";

const About = () => {

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

      <div className="grid grid-cols-6 gap-6 px-6 pt-16">

        <div className="col-span-full md:col-start-2 md:col-span-4 text-center">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-5xl md:text-6xl font-serif"
          >
            Software Developer
          </GradientText>
        </div>

        <div className="col-span-full md:col-span-3">
          <SplitText
            text="Hello, I am a Software Developer passionate about technology,
        interested in new technologies, and want to apply technology to daily life."
            className="text-lg md:text-2xl font-serif text-center md:text-left"
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
            className="text-base md:text-xl mt-4 font-serif text-center md:text-left"
            delay={30}
            duration={0.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>

        <div className="
          col-span-full md:col-span-3
          flex justify-center items-center
          scale-75 sm:scale-90 md:scale-100
          transition-transform
        ">
          <TiltedCard
            imageSrc="/images/download.png"
            altText="Trần Văn Toàn"
            captionText="Trần Văn Toàn"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="270px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>

      </div>

      <div className="flex-1" />

      <div className="w-full overflow-hidden bg-black pb-6">
        <LogoLoop
          logos={techLogos}
          speed={90}
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
