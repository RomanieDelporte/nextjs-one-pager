"use client";
import Image from "next/image";
import { NavItem } from "@/app/types/types";
import { usePathname, useSearchParams } from 'next/navigation'


export default function Header() {
    const pathname = usePathname()


    const navItems: NavItem[] = [
        {label: 'Aanbod', href: '/'},
        {label: 'Regio"s', href: '/regions'},
        {label: 'Over ons', href: '/about'},
        {label: 'Tarieven', href: '/prices'},
        {label: 'Downloads', href: '/downloads'},
        {label: 'Contact', href: '/contact'},
    ];

    return (
        <header className="header flex items-center">
            <div>
                <Image src="/headerLogo.svg"
                       alt="headerlogo"
                       width={100}
                       height={100}/>
            </div>
            <nav className="ml-48 xl:ml-52">
                <ul className="flex">
                    {navItems.map((item: NavItem, index) => (
                        <li key={index}
                            className={` font-leagueSpartan ${pathname === item.href ? 'text-accent-100 font-medium' : 'text-base-100 font-medium'} mr-16 hover:text-accent-100 cursor-pointer text-2xl`}
                        >
                            <a>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}