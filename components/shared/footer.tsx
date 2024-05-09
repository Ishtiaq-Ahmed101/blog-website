import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex flex-row justify-between px-[15%] py-7  border-gray-200 border-2 shadow-sm'>
        <h1 className='text-sm font-normal text-gray-600'>
        © 2023 Fashionista Blog. All rights reserved.
        </h1>
        <div className='flex flex-row gap-4'>
            <Link href={'/'} className='hover:text-pink-500 transition-all'> <FaPinterest/> </Link>
            <Link href={'/'} className='hover:text-pink-500 transition-all'> <FaFacebook/> </Link>
            <Link href={'/'} className='hover:text-pink-500 transition-all'> <FaInstagram/> </Link>
            <Link href={'/'} className='hover:text-pink-500 transition-all'> <FaTwitter/> </Link>

        </div>
    
    </div>
  )
}

export default Footer