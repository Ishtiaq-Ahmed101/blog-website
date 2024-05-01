import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-center items-center  ">

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

        <div className="min-w-full flex flex-row justify-center mt-14">
        <div className="flex flex-row justify-between items-center px-[15%] w-full pt-4 gap-6">

          <div className="w-96 h-48 relative flex-col justify-center items-start flex gap-8">
            <div className="pr-24 pb-2 justify-start items-center inline-flex">

              <div className="w-96 text-gray-800 text-5xl font-bold font-['Roboto'] leading-10">Stay Stylish and Trendy</div>
            </div>
            <div className="pr-3.5 pt-0.5 justify-start items-center inline-flex">
              <div className="w-96 text-gray-600 text-base font-normal font-['Roboto'] leading-normal">Get the latest fashion tips and outfit ideas from your favorite celebrities and designers. Click through runway and front row photos from fashion week shows in New York, London, Paris, and Milan.</div>
            </div>
            <Link href={'/'} className="w-40 h-11 px-6 py-2 bg-pink-500 rounded-full justify-center items-center inline-flex hover:bg-white border border-pink-500 transition-all">
              <div className="w-28 text-white text-lg font-medium font-['Roboto'] leading-7 hover:text-pink-500 transition-all">Read Our Blog</div>
            </Link>
          </div>
          <div className="h-[405px] flex flex-col justify-center items-center">
            <div className="w-[601px] h-[401px] relative rounded-lg shadow flex-col justify-start items-start flex">
              <Image 
              src="/Images/hero/Hero.png"
              alt="Hero image"
              height={400}
              width={600}
              className=" slide-in-from-right-6 shadow-2xl hidden md:flex bg-cover"
              />
            </div>
          </div>
        </div>
        </div>



    </main>
  );
}
