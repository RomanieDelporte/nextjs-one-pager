"use client";
import Image from "next/image";
import { NavItem } from "@/app/types/types";
import { usePathname } from 'next/navigation'


export default function Header() {
    const pathname = usePathname()


    const navItems: NavItem[] = [
        {label: 'Aanbod', href: '/'},
        {label: 'Regio\'s', href: '/regions'},
        {label: 'Over ons', href: '/about'},
        {label: 'Tarieven', href: '/prices'},
        {label: 'Downloads', href: '/downloads'},
        {label: 'Contact', href: '/contact'},
    ];

    return (
        <header className="header flex items-center w-full justify-center">
            <div>
                <Image
                    className="mr-48"
                    src="/headerLogo.svg"
                    alt="headerlogo"
                    width={100}
                    height={100}
                />
            </div>
            <nav className="justify-end">
                <ul className="flex">
                    {navItems.map((item: NavItem, index) => (
                        <li
                            key={index}
                            className={` font-leagueSpartan ${pathname === item.href ? 'text-accent-100 font-medium' : 'text-base-100 font-medium'} mr-16 hover:text-accent-100 cursor-pointer text-2xl`}
                            onClick={() => console.log(item.href)}
                        >
                            <a>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}