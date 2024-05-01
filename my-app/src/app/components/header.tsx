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
                <Image src="/headerLogo.svg" alt="headerlogo" width={100} height={100}/>
            </div>
            <nav className="ml-28">
                <ul className="flex mr-2">
                    {navItems.map((item: NavItem, index) => (
                        <li key={index} className={`text-base ${pathname === item.href ? 'text-accent-100 font-medium' : 'text-base-100 font-medium'} mr-4 hover:text-accent-100 cursor-pointer`}
                        >
                            <a>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}