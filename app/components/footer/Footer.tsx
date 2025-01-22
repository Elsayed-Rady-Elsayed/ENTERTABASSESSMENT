import Image from "next/image";
import { FaGoogle, FaWhatsapp,FaFacebookF,FaTwitter, FaPinterestP, FaLinkedinIn, FaInstagram } from "react-icons/fa";


function Footer(){
    return (
        <div className="text-center">
            <div className="bg-[#3fe3b9] text-white font-bold flex justify-center items-center gap-2 p-3 group hover:bg-[#2bd99f]">
                <FaWhatsapp size={30} />
                <a href="https://wa.me/12028608888" className="text-lg group-hover:text-white">+1 (202) 860-8888</a>
            </div>
            <div className="bg-[#232530] flex flex-col items-center gap-4 p-[5rem]">
                <Image src={"https://www.entertab.net/img/logo-light.png"} alt="company logo" width={250} height={250}/>
                <ul className="text-gray-400 flex gap-5">
                    <li><a href="https://about.meta.com/" className="hover:text-white"><FaFacebookF /></a></li>
                    <li><a href="https://x.com/EntertabNet" className="hover:text-white"><FaTwitter  /></a></li>
                    <li><a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html" className="hover:text-white"><FaGoogle  /></a></li>
                    <li><a href="https://www.pinterest.com/entertab/" className="hover:text-white"><FaPinterestP  /></a></li>
                    <li><a href="https://www.linkedin.com/company-beta/6391966/?pathWildcard=6391966" className="hover:text-white"><FaLinkedinIn  /></a></li>
                    <li><a href="https://www.instagram.com/entertab/" className="hover:text-white"><FaInstagram   /></a></li>
                </ul>
                <small className="text-xs text-gray-400">copyright © 2025 Entertab, LLC</small>
            </div>
        </div>
    )
}

export default Footer;