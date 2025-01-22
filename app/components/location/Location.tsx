import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Location(){
    return (
        <div className="container m-auto text-center flex flex-col items-center p-10 mt-10 text-slate-700 text-lg font-semibold">
            <p>1775 Tysons Blvd. <br /> Tysons, VA 22102 <br /> United States</p>
            <ul className="flex flex-col justify-center w-full items-center mt-5 mb-5 font-normal *:flex *:items-center *:gap-1">
                <li ><FaWhatsapp size={25}/> +1 (202) 860-8888</li>
                <li ><BsFillTelephoneFill /> +1 (202) 770-0575</li>
                <li ><IoMdMail /><a className="text-[#3fe3b9] underline" href="mailto:info@entertab.net">info@entertab.net</a></li>
            </ul>
            <p className="text-sm text-gray-400 md:w-1/2">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
        </div>
    )
}

export default Location;