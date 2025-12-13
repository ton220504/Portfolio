import React from 'react'
import { motion } from 'framer-motion'
import { FloatingLogos } from '../component/FloatingLogos'
import TypingLoop from '../hook/TypingLoop';

const Information = () => {

  const text = "Xin chào React!";
  const letters = text.split("");
  return (
    <>
      <FloatingLogos />
      <div className='flex flex-col justify-center h-screen items-center'>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className='text-5xl font-bold'>Hi! My name is Trần Văn Toàn</p>

        </motion.h1>
        <TypingLoop text="Frontend Developer" />

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

    </>

  )
}

export default Information