"use client"
import Image from "next/image";
import Nav from "../nav/Nav";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { useRef } from "react";

function Header(){
    const smallHeaderRef = useRef<HTMLHeadingElement | null>(null);
    const toggleHeaderSmall = ()=>{
        smallHeaderRef.current?.classList.toggle("hidden");        
    }
    return (
        <div className="bg-gray-50 p-5 relative">
            <div className="container m-auto flex justify-between items-center">
                <div className="hidden md:block md:w-2/4">
                    <Nav />
                </div>
                <Link href={"#"} className="md:w-1/4 w-full" >
                    <Image src={"https://www.entertab.net/img/logo-light.png"} alt="company logo" width={200} height={200}/>
                </Link>
                <div className="hidden md:flex w-2/4 justify-end items-center gap-5">
                    <Link href={""} className="text-black/80 text-xs font-semibold border p-2 rounded-lg hover:-translate-y-0.5 hover:border-black transition-transform">Build A Website</Link>
                    <button className="py-1 px-2 bg-[#3fe3b9] rounded-lg hover:-translate-y-0.5 hover:border-black transition-transform">AR</button>
                </div>
                <div ref={smallHeaderRef} className="hidden smallHeader absolute left-0 top-full w-full z-50 bg-white py-5 px-5 transition-all">
                    <Nav />
                    <div className="w-full flex flex-col justify-end items-center gap-5 mt-2">
                    <Link href={""} className="w-full text-black/80 text-xs font-semibold border p-2 rounded-lg hover:-translate-y-0.5 hover:border-black transition-transform">Build A Website</Link>
                    <button className="w-full py-1 px-2 bg-[#3fe3b9] rounded-lg hover:-translate-y-0.5 hover:border-black transition-transform">AR</button>
                </div>
                </div>
                <button onClick={()=>{toggleHeaderSmall()}} className="block md:hidden text-black"><IoMdMenu size={20}/></button>
            </div>
        </div>
    )
}

export default Header;