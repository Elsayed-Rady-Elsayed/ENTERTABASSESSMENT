import Link from "next/link";

function Nav(){
    const hoverEffect = "hover:text-slate-900 transition-all";
    return (
        <nav className="text-slate-400 text-xs">
            <ul className="flex flex-col gap-2 md:flex-row md:gap-8 font-semibold">
                <li><Link href={"/Home"} className={`${hoverEffect}`}>Home</Link></li>
                <li><Link href={"/works"} className={`${hoverEffect}`}>Works</Link></li>
                <li><Link href={"/contact"} className={`text-slate-900`}>Contact Us</Link></li>
                <li><Link href={"/Home"} className={`${hoverEffect}`}>Payment</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;