import i18next from "i18next";
import Link from "next/link";

function Nav(){
    const hoverEffect = "hover:text-slate-900 transition-all";
    return (
        <nav className="text-slate-400 text-xs">
            <ul className={`flex flex-col gap-2 ${i18next.language=="ar"?"md:flex-row-reverse":"md:flex-row"}   md:gap-8 font-semibold`}>
                <li><Link href={"/Home"} className={`${hoverEffect}`}>{i18next.t("home")}</Link></li>
                <li><Link href={"/works"} className={`${hoverEffect}`}>{i18next.t("works")}</Link></li>
                <li><Link href={"/contact"} className={`text-slate-900`}>{i18next.t("contactus")}</Link></li>
                <li><Link href={"/Home"} className={`${hoverEffect}`}>{i18next.t("payment")}</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;