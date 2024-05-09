import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="min-w-full flex flex-row justify-center mt-14 ">
    <div className="flex flex-row justify-between items-center px-[15%] w-full pt-4 gap-6">

      <div className="w-96 h-48 relative flex-col justify-center items-start flex gap-8">
        <div className="pr-24 pb-2 justify-start items-center inline-flex">

          <h1  className="w-96 text-gray-800 text-5xl font-bold font-['Roboto'] leading-10">Stay Stylish and Trendy</h1>
        </div>
        <div className="pr-3.5 pt-0.5 justify-start items-center inline-flex">
          <p className="w-96 text-gray-600 text-base font-normal font-['Roboto'] leading-normal">Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in New York, London, Paris, and Milan.</p>
        </div>
        <Link href={'#latestposts'} className="w-fit h-11 px-6 py-2 bg-pink-500 rounded-full justify-center items-center inline-flex hover:bg-white border border-pink-500 transition-all scroll-smooth">
          <h1 className="w-fit text-white text-lg font-medium font-['Roboto'] leading-7 hover:text-pink-500 transition-all">Read Our Articles</h1>
        </Link>
      </div>
      <div className="h-fit flex flex-col justify-center items-center ">
        <div className="w-[801px] h-[601px]   flex flex-col justify-center ">
          <div>
          <Image
            src="/Images/hero/Hero.png"
            alt="Hero image"
            height={200}
            width={300}
            className=" relative top-[15%] left-[14%]  shadow-2xl hidden md:flex bg-cover hover:z-50 hover:transition-all hover:transform hover:scale-125 rounded-2xl "
          />
            <Image
            src="/Images/hero/hero2.jpg"
            alt="Hero image"
            height={200}
            width={300}
            className="relative top-[-5.3%] left-[32%]  shadow-2xl hidden md:flex bg-cover hover:z-50 hover:transition-all rounded-2xl hover:transform hover:scale-125 "
          />
            <Image
            src="/Images/hero/Hero3.jpg"
            alt="Hero image"
            height={200}
            width={300}
            className="relative top-[-25%] left-[50%]  shadow-2xl hidden md:flex bg-cover hover:z-50 hover:transition-all rounded-2xl hover:transform hover:scale-125"
          />

          </div>
        
        </div>
      </div>
    </div>
  </div>

    
  )
}

export default Hero