import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
         <div className="w-full h-16 bg-white shadow justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch  py-4 justify-center items-center inline-flex px-[15%]">
          <div className="grow shrink basis-0 self-stretch justify-between items-center  inline-flex">
            <div className="w-40 self-stretch pb-0.5 justify-center items-center inline-flex">
              <div className="w-40 text-gray-800 text-3xl font-bold font-['Roboto'] leading-9">Fashionista</div>
            </div>
            <div className="w-80 h-7 py-0.5 justify-center items-start gap-7 inline-flex">
              <div className="w-12 self-stretch justify-center items-center inline-flex">
                <div className="w-12 text-gray-800 text-lg font-normal font-['Roboto'] leading-7"> <Link className="hover:text-pink-500 transition-all" href={"/"}>Home</Link></div>
              </div>
              <div className="w-14 self-stretch justify-center items-center inline-flex">
                <div className="w-14 text-gray-800 text-lg font-normal font-['Roboto'] leading-7"> <Link className="hover:text-pink-500 transition-all" href={"/"}>Trends</Link></div>
              </div>
              <div className="w-14 self-stretch justify-center items-center inline-flex">
                <div className="w-14 text-gray-800 text-lg font-normal font-['Roboto'] leading-7"> <Link className="hover:text-pink-500 transition-all" href={"/"}>Outfits</Link></div>
              </div>
              <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
                <div className="w-16 text-gray-800 text-lg font-normal font-['Roboto'] leading-7"> <Link className="hover:text-pink-500 transition-all" href={"/"}>Contact</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Navbar