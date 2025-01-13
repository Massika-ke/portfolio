import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-28 cursor-pointer mx-auto mb-2 rounded-full' />
        </div>
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6' />
            wamwoka99@gmail.com
        </div>
    </div>
  )
}

export default Footer