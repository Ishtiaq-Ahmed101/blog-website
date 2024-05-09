'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react'
import Link from 'next/link'



interface postType{
  postId: number,
  imageSrc: string,
  heading: string,
  ShortDescription: string,
  href: string,

}
const LatestPosts = () => {

    const [posts, setPosts] = useState<postType[]>([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('/api/data'); 
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [1000]); // Empty dependency array means


    
    return (
      posts.length > 1 ? (
        <div id='latestposts' className='flex flex-col gap-20 mb-[10%]'>
            <div className="self-stretch h-10 pr-96 pb-1 justify-start items-center inline-flex">
                <h1 className="w-60 text-gray-800 text-4xl font-bold font-['Roboto'] leading-10">Latest Posts</h1>
            </div>
            <Carousel className="w-full h-fit">
                <CarouselContent className="-ml-1 gap-5 h-fit mb-[8%]">
                    {posts.map((post :postType, index) => (
                        <CarouselItem key={post.postId} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
                          
                                <div className='border border-gray-200 rounded-lg shadow-2xl h-fit mx-5'>
                                    <div className=" flex flex-col justify-start items-start  gap-6 h-fit pb-5">
                                        <Image
                                            src={post.imageSrc}
                                            alt={post.heading}
                                            height={200}
                                            width={350}
                                            className='rounded-t-lg'
                                        />

                                        <div className="h-8  justify-start items-center inline-flex mx-4">
                                            <div className="w-72 text-gray-800 text-2xl font-bold font-['Roboto'] leading-loose">The Perfect Summer Dress</div>
                                        </div>
                                        <div className=" pt-0.5 justify-start items-center inline-flex mx-4">
                                            <div className="w-72 text-gray-600 text-base font-normal font-['Roboto'] leading-normal flex-wrap">Discover the latest trends in summer dresses and find your perfect style for this season.</div>
                                        </div>
                                        <div className="w-20 h-5 justify-center items-center inline-flex mx-4">
                                            <Link href={`/article/${post.postId}`} className="w-20 text-pink-500 text-base font-normal font-['Roboto'] leading-normal">Read More</Link>
                                        </div>




                                    </div>
                                </div>
                           
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>



        </div>
      ):(
        <Loader />
      )
    )
}

export default LatestPosts


{/* <div className="self-stretch h-96 justify-center items-start gap-6 inline-flex">

          <div className="grow shrink basis-0 self-stretch bg-white rounded-lg shadow flex-col justify-center items-start inline-flex">
            <div className="w-96 h-64 relative flex-col justify-start items-start flex" />
            <div className="w-96 h-44 relative flex-col justify-start items-start flex">
              <div className="h-8 pr-12 justify-start items-center inline-flex">
                <div className="w-72 text-gray-800 text-2xl font-bold font-['Roboto'] leading-loose">The Perfect Summer Dress</div>
              </div>
              <div className="pr-2.5 pt-0.5 justify-start items-center inline-flex">
                <div className="w-80 text-gray-600 text-base font-normal font-['Roboto'] leading-normal">Discover the latest trends in summer dresses and find your perfect style for this season.</div>
              </div>
              <div className="w-20 h-5 justify-center items-center inline-flex">
                <div className="w-20 text-pink-500 text-base font-normal font-['Roboto'] leading-normal">Read More</div>
              </div>
            </div>
          </div>
          
          </div> */}