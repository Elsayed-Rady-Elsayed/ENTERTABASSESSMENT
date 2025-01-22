"use client"
import Image from "next/image";
import Nav from "../nav/Nav";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { useRef, useState } from "react";
import i18next from "i18next";

function Header(){    
    const [language, setLanguage] = useState(i18next.language);
    const smallHeaderRef = useRef<HTMLHeadingElement | null>(null);
    const toggleHeaderSmall = ()=>{
        smallHeaderRef.current?.classList.toggle("hidden");        
    }
  const changeLang = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    i18next.changeLanguage(newLang);
  };
    return (
        <div className="bg-gray-50 p-5 relative">
            <div className={`container m-auto flex justify-between md:${i18next.language=="en"?"flex-row":"flex-row-reverse"} items-center`}>
                <div className="hidden md:block md:w-2/4">
                    <Nav />
                </div>
                <Link href={"#"} className="md:w-1/4 w-full" >
                    <Image src={"https://www.entertab.net/img/logo-light.png"} alt="company logo" width={200} height={200}/>
                </Link>
                <div className={`hidden md:flex w-2/4 ${i18next.language=="en"?"justify-end":"justify-start"} items-center gap-5`}>
                    <Link href={""} className="text-black/80 text-xs font-semibold border p-2 rounded-lg hover:-translate-y-0.5 hover:border-black transition-transform">{i18next.t("buildWebsite")}</Link>
                    <button onClick={()=>changeLang()} className="py-1 px-2 bg-[#3fe3b9] rounded-lg hover:-translate-y-0.5 hover:border-black transition-transform">{i18next.language=="ar"?"EN":"ع"}</button>
                </div>
                <div ref={smallHeaderRef} className="hidden smallHeader absolute left-0 top-full w-full z-50 bg-white py-5 px-5 transition-all">
                    <Nav />
                <div className="w-full flex flex-col justify-end items-center gap-5 mt-2 text-center">
                    <Link href={""} className="w-full text-black/80 text-xs font-semibold border p-2 rounded-lg hover:-translate-y-0.5 hover:border-black transition-transform">{i18next.t("buildWebsite")}</Link>
                    <button onClick={()=>changeLang()} className="w-full py-1 px-2 bg-[#3fe3b9] rounded-lg hover:-translate-y-0.5 hover:border-black transition-transform">{i18next.language=="ar"?"EN":"ع"}</button>
                </div>
                </div>
                <button onClick={()=>{toggleHeaderSmall()}} className="block md:hidden text-black"><IoMdMenu size={20}/></button>
            </div>
        </div>
    )
}

export default Header;