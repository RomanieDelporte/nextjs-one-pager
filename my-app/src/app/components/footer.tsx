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
        <footer className="flex flex-wrap p-8 lg:p-16 justify-around">
            <div className="flex flex-col ml-28">
                <h2 className="text-neutral-500 font-bold text-lg lg:text-2xl mb-4">It-Hulp aan huis</h2>
                <p>
                    <p>Knokstraat 36</p>
                    <p>9630 Zwalm</p>
                    <p>BE 0788.869.029</p>
                </p>
                <div className="flex flex-col">
                    <a
                        href="mailto:tom@it-hulpaanhuis.be"
                        className="underline text-accent-100"
                    >tom@it-hulpaanhuis.be
                    </a>
                    <a
                        href="tel:+320474040680"
                        className="underline text-accent-100"
                    >+32 (0) 474 04 06 80
                    </a>
                </div>
                <div className="flex mt-4">
                    <div className="rounded-full flex justify-center items-center bg-neutral-500 w-10 h-10 mr-4">
                        <Facebook
                            color="white"
                            size={20}
                        />
                    </div>
                    <div className="rounded-full flex justify-center items-center bg-neutral-500 w-10 h-10">
                        <Linkedin
                            color="white"
                            size={20}
                        />
                    </div>
                </div>
            </div>
            <nav className="ml-28">
                <h2 className="text-neutral-500 font-bold text-lg lg:text-2xl mb-4">Sitemap</h2>
                <ul className="flex flex-col">
                    {navItems.map((item: NavItem, index) => (
                        <li
                            key={index}
                            className="underline text-neutral-500 mb-2"
                        >
                            <a>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-12 pr-16">
                <p className="text-neutral-500 underline mb-2">Algemene voorwaarden</p>
                <p className="text-neutral-500 underline mb-2">Privacybeleid</p>
                <p className="text-neutral-500 underline mb-2">Cookiebeleid</p>
                <div>
                    <p className="text-neutral-200 whitespace-normal">© 2022 IT-Hulp aan huis</p>
                    <p className="text-neutral-200 whitespace-normal">gebouwd door digitalastronaut.be</p>
                </div>
            </div>
        </footer>
    );
}