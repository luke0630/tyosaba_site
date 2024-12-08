import { useState } from "react";
import './Navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import getImg from "../Components/GetImg";

import '../fonts.css'

export const NavbarLink = ({ url, content }: { url: string; content: string }) => {
    const currentPath: string = usePathname();
    return (
        <li className={currentPath === url ? "active" : ''}>
        <Link href={url} className="navbarcontent">
            <div className="content">
                <div className="pochi"></div>
                <h1>{content}</h1>
            </div>
        </Link>
    </li>
    )
}

const Navbar = () => {
    const [isActive, setIsHidden] = useState(true);

    const toggleClass = () => {
        setIsHidden(!isActive);
    };
    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li>{<img src={getImg('icon.webp')} className='App-logo' alt="logo" />}</li>
                    <NavbarLink url="/Page/Home" content="トップ" />
                    <NavbarLink url="https://page.ukunini.com/tyosaba/%e7%94%9f%e6%b4%bb%e9%af%96%e3%81%b8%e3%81%ae%e5%8f%82%e5%8a%a0%e6%96%b9%e6%b3%95/" content="参加する" />
                    <NavbarLink url="/Page/Manager" content="運営" />

                    <li className={isActive ? "menu" : "menu active"} onClick={toggleClass}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
            </nav>
            
            <div className={isActive ? "burger_menu hidden" : "burger_menu active"} onClick={toggleClass}>
                <div className="burgercontent">
                    <Link href="/Page/Home"><h1>トップ</h1></Link>
                    <Link href="https://page.ukunini.com/tyosaba/%e7%94%9f%e6%b4%bb%e9%af%96%e3%81%b8%e3%81%ae%e5%8f%82%e5%8a%a0%e6%96%b9%e6%b3%95/"><h1>参加する</h1></Link>
                    <Link href="/Page/Manager"><h1>運営</h1></Link>
                </div>
            </div>
        </header> 
    )
}
export default Navbar;
