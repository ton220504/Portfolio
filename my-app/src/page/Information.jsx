import React from 'react'
import { motion } from 'framer-motion'
import { FloatingLogos } from '../component/FloatingLogos'
import TypingLoop from '../hook/TypingLoop';

const Information = () => {
  return (
    <>
      <FloatingLogos />
      <div className='flex flex-col justify-center h-screen items-center'>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-5xl font-bold text-gray-600 text-center ">Hi! My name is <TypingLoop text='Trần Văn Toàn' /></p>
        </motion.h1>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='font-bold text-gray-500 text-xl font-serif'
        >
          I'm a SoftWare Developer
        </motion.p>

      </div>

    </>

  )
}

export default Information