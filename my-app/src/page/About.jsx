import GradientText from "../hook/GradientText/GradientText";
import SplitText from "../hook/SplitText/SplitText";
import SnowFall from 'react-snowfall';
import MyImage from '../../public/images/download.png';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <SnowFall color="white" snowflakeCount={200}/>
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
            text="Hello!,I am Tran Van Toan, I graduated with a major in Information Technology from Ho Chi Minh Industry and Trade Collage, I am a technology enthusiast who loves sports,
                  interested in new technologies, and want to apply technology to daily life."
            className="text-lg md:text-2xl font-mono text-center md:text-left"
            delay={30}
            duration={0.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
          />

          <SplitText
            text="Xin chào!,tôi tên là Trần Văn Toàn, đã tốt nghiệp chuyên ngành CNTT tại trường Cao Đẳng Công Thương TP.HCM, tôi là một người đam mê công nghệ yêu thích thể thao,
            hứng thú với các công nghệ mới, mong muốn đem công nghệ vận dụng vào đời sống hàng ngày."
            className="text-base md:text-xl mt-4 font-mono text-center md:text-left"
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
          <img src={MyImage} alt="Trần Văn Toàn" className="w-62 h-96 object-cover" />
        </div>

      </div>


    </div>

  );
}

export default About;
