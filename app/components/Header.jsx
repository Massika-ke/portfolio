import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        
        <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
        >
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </motion.div>
        <h3 className='flex items-end gap-2 text-xl  md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Joseph Masika <Image src={assets.hand_icon} alt='' className='w-6'/>
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Software and Network Developer.
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I am a Full Stack Web Developer and Network Engineer from Nairobi, Kenya with 3 years of experience in multiple companies like Konnect and Fidelity International Hospital.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 
            dark:bg-transparent'>
                contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </a>
            <a href='/joseph-resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2
             bg-white dark:text-black'>
                my resume <Image src={assets.download_icon} alt='' className='w-4'/>
            </a>
        </div>
    </div>
  )
}

export default Header;