import React from 'react'
import TextType from '../hook/TextType/TextType'
import GradientText from '../hook/GradientText/GradientText'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white px-4">
      {/* CONTENT */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl justify-items-center items-center">
          {/* LEFT */}
          <div className="w-full max-w-xl min-h-[120px] flex items-center">
            <TextType
              text={[
                "Thanks you! for watching my Portfolio.",
                "I'm looking forward to connecting with you.",
                "Happy coding!"
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              className="text-4xl md:text-5xl font-mono"
            />
          </div>

          {/* RIGHT */}
          <div className="w-full max-w-xl min-h-[120px] flex flex-col items-center">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-4xl md:text-5xl font-serif"
            >
              Contact Me!!!
            </GradientText>


            <div className="rounded-full border-4 border-sky-500 p-3 my-2 flex items-center gap-2">
              <img src="/images/linkedin.png" className="w-6 h-6  rounded-full" />
              <a href="https://www.linkedin.com/in/vantoan220504/" target="_blank">
                linkedin.com/in/vantoan220504
              </a>
            </div>
            <div className="rounded-full border-4 border-sky-500 p-3 my-2 flex items-center gap-2">
              <img src="/images/facebook.png" className="w-6 h-6  rounded-full" />
              <a href="https://www.facebook.com/toan.130256" target="_blank">
                facebook.com/toan.130256
              </a>
            </div>
            <div className="rounded-full border-4 border-sky-500 p-3 my-2 flex items-center gap-2">
              <img src="/images/github.png" className="w-6 h-6 bg-white rounded-full" />
              <a href="https://github.com/ton220504" target="_blank">
                github.com/ton220504
              </a>
            </div>
            <div className="rounded-full border-4 border-sky-500 p-3 my-2 flex items-center gap-2">
              <img src="/images/pdf.png" className="w-6 h-6 bg-white rounded-full" />
              <a href="/TRAN_VAN_TOAN.pdf" target="_blank">
                View my Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center text-sm opacity-70 pb-4">
        © 2025 TranVanToan
      </div>
    </div>

  );
};

export default Contact;
