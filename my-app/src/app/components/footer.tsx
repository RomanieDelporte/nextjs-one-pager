import { NavItem } from "@/app/types/types";
import { Facebook, Linkedin } from 'lucide-react';

export default function Footer() {

    const navItems: NavItem[] = [
        {label: 'Aanbod', href: '/'},
        {label: 'Regio"s', href: '/regions'},
        {label: 'Over ons', href: '/about'},
        {label: 'Tarieven', href: '/prices'},
        {label: 'Downloads', href: '/downloads'},
        {label: 'Contact', href: '/contact'},
    ];

    return (
        <header className="flex p-40 pb-20">
            <div className="flex flex-col grow">
                <h2 className="text-neutral-500 font-bold text-[22px]">It-Hulp aan huis</h2>
                <div className="flex flex-col">
                    <p>Knokstraat 36</p>
                    <p>9630 Zwalm</p>
                    <p>BE 0788.869.029</p>
                    <div>
                        <p className="underline text-accent-100">tom@it-hulpaanhuis.be</p>
                        <p className="underline text-accent-100">+32 (0) 474 04 06 80</p>
                    </div>
                    <div className="flex mt-[10px]">
                        <div className="rounded-full flex justify-center items-center bg-neutral-500 w-[50px] h-[50px] mr-4">
                            <Facebook
                                color="white"
                                size={20}
                            />
                        </div>
                        <div className="rounded-full flex justify-center items-center bg-neutral-500 w-[50px] h-[50px] mr-4">
                            <Linkedin
                                color="white"
                                size={20}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="w-56">
                <h2 className="text-neutral-500 font-bold text-[22px]">Sitemap</h2>
                <ul className="flex mr-2 flex-col">
                    {navItems.map((item: NavItem, index) => (
                        <li
                            key={index}
                            className="underline text-neutral-500"
                        >
                            <a>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="ml-20 mt-8">
                <p className="text-neutral-500 underline">Algemene voorwaarden</p>
                <p className="text-neutral-500 underline">Privacybeleid</p>
                <p className="text-neutral-500 underline">Cookiebeleid</p>

                <div className="mt-8">
                    <p className="text-neutral-200 whitespace-normal w-[220px]">
                        © 2022 IT-Hulp aan huis
                        gebouwd door digitalastronaut.be
                    </p>
                </div>
            </div>
        </header>
    );
}