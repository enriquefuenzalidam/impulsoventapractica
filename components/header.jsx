'use client'

import Image from 'next/image';
import Link from 'next/link';
import impulsoVentasLogo from 'public/images/logo-dba.ico';
import hamburgerMenu from 'public/images/bars.svg';
import { useState } from 'react';

const navItems = [
    { linkText: 'Inicio', href: '#' },
    { linkText: 'Quiénes Somos', href: '#quienessomos' },
    { linkText: 'Productos', href: '#productos' },
    { linkText: 'Contáctanos', href: '#contactanos'}
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#0B0B5C] fixed w-full">
            <section className="max-w-screen-lg mx-auto py-3 px-6 text-white flex items-center">
                <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 flex flex-row items-center">
                    <p className="inline-block w-2/12 sm:w-2/12 md:w-auto lg:w-auto "><Image className=" inline-block h-8 w-auto" src={impulsoVentasLogo} alt="Impulso Ventas Logo" /></p>
                    <p className="inline-block w-8/12 sm:w-8/12 md:w-auto lg:w-auto text-center sm:text-center md:text-left lg:text-left ml-2"><Link className="inline-block sm:inline-block md:inline-block lg:inline-block font-light tracking-widest no-underline ml-1 text-2xl text-white text-opacity-80 capitalize" href="/">I<em>mpulso</em> V<em>entas</em></Link></p>
                    <div className="w-2/12 sm:w-2/12 md:w-auto lg:w-auto inline-block sm:inline-block md:hidden lg:hidden text-right">
                    {/* This the hamburger menu button that appears as the window gets narrow. As it is clicked, it should display the UL that hiddes as the window gets narrow, as a dropdown menu */}
                        <p className="inline-block cursor-pointer" onClick={() => setIsOpen(!isOpen)}><Image className=" inline-block h-8 w-auto" src={hamburgerMenu} alt="Menu" /></p>
                    </div>
                </div>

                {!!navItems?.length && (
                <ul className="hidden sm:hidden md:flex lg:flex justify-end w-8/12 text-right text-lg ">
                    {navItems.map((item, index) => (
                        <li key={index} className=" inline-block text-right pl-6">
                            <Link href={item.href} className="inline-block no-underline text-nowrap text-white text-opacity-70 hover:text-opacity-100" > {item.linkText} </Link>
                        </li>
                    ))}
                </ul>
                )}

            </section>

            {!!navItems?.length && (
            <ul className={`md:hidden lg:hidden bg-[#0B0B5C] overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-screen opacity-100 py-5 px-6' : 'max-h-0 opacity-0'
            }`}>
                {navItems.map((item, index) => (
                    <li key={index} className="py-2">
                        <Link onClick={() => setIsOpen(!isOpen)} href={item.href} className="block no-underline text-white text-opacity-70 hover:text-opacity-100">
                            {item.linkText}
                        </Link>
                    </li>
                ))}
            </ul>
            )}

        </nav>
    );
}
