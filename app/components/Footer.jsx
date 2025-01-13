import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-28 cursor-pointer mx-auto mb-2 rounded-full' />

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-6' />
                wamwoka99@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>copyright @2025 Masika Joseph. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Massika-ke">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/joseph-masika-a43a1a241/">LinkedIn</a></li>
                <li><a target='_blank' href="https://x.com/massika_ke">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;