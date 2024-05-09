import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import LatestPosts from "@/components/shared/latestPosts";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div >
      <Hero />
      <div className="min-w-full flex flex-col px-[15%]  mt-[8%]">
      <LatestPosts/>
        </div>
    </div>
  );
}
