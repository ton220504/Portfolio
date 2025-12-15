import React from 'react'
import { motion } from 'framer-motion'
import { FloatingLogos } from '../component/FloatingLogos'
import TypingLoop from '../hook/TypingLoop';
import Aurora from '../hook/BackgroundAurora/Aurora';

const Information = () => {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <Aurora />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        {/* <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-5xl font-bold text-white">
            Hi! My name is <TypingLoop text="Trần Văn Toàn" />
          </p>
        </motion.h1> */}
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:text-6xl text-4xl font-bold font-serif text-white"
        >
          Welcome to my Portfolio
        </motion.p>
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl font-bold font-serif text-white"
        >
          I'm a Software Developer
        </motion.p>
      </div>

    </section>
  );
};
export default Information;