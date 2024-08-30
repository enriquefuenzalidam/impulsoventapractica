'use client'

import React from 'react';
import impulsoVentasLogo from 'public/images/logo-dba.ico';
import hamburgerMenu from 'public/images/bars.svg';
import { useState, useEffect } from 'react';

const navItems = [
    { linkText: 'Inicio', href: './#inicio', elementId: 'inicio' },
    { linkText: 'Quiénes Somos', href: './#quienessomos', elementId: 'quienessomos' },
    { linkText: 'Productos', href: './#productos', elementId: 'productos' },
    { linkText: 'Contáctanos', href: './#contactanos', elementId: 'contactanos' }
];



const smoothScrollTo = (element, duration) => {
    const startPosition = window.scrollY;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = linearEase(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const linearEase = (t, b, c, d) => {
        return c * t / d + b;
    };

    requestAnimationFrame(animation);
};

const handleScroll = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) smoothScrollTo(targetElement, 618); 
};



export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const navShowOnScroll = () => {
          const navbar = document.getElementById('navbar');
          navbar.classList.remove('hidden');
          const theHeight = window.innerHeight * 0.618;
          if (window.scrollY >= theHeight) {
            navbar.classList.remove('-translate-y-full','opacity-0');
            navbar.classList.add('translate-y-0','opacity-100');
          } else {
            navbar.classList.remove('translate-y-0', 'opacity-100');
            navbar.classList.add('-translate-y-full', 'opacity-0');
          }
        };
    
        window.addEventListener('scroll', navShowOnScroll);
        return () => window.removeEventListener('scroll', navShowOnScroll);
      }, []);
    
    return (
        <nav id="navbar" className=" hidden opacity-0 bg-[#0B0B5C] fixed top-0 left-0 w-full z-50 bg-opacity-90 transition-all -translate-y-full ease-in-out duration-[618ms]">
            <section className="max-w-screen-lg mx-auto py-3 px-6 text-white flex items-center">
                <div className="w-full sm:w-full md:w-4/12 lg:w-4/12 flex flex-row items-center">
                    <p className="inline-block w-2/12 sm:w-2/12 md:w-auto lg:w-auto "><img className=" inline-block h-8 w-auto" src={impulsoVentasLogo.src} alt="Impulso Ventas Logo" /></p>
                    <p className="inline-block w-8/12 sm:w-8/12 md:w-auto lg:w-auto text-center sm:text-center md:text-left lg:text-left ml-2"><span className="inline-block sm:inline-block md:inline-block lg:inline-block font-light tracking-wide no-underline ml-1 text-2xl text-white text-opacity-80 capitalize cursor-pointer font-Roboto" onClick={() => handleScroll('inicio')}>I<em>mpulso</em> V<em>entas</em></span></p>
                    <div className="w-2/12 sm:w-2/12 md:w-auto lg:w-auto inline-block sm:inline-block md:hidden lg:hidden text-right">
                        <p className="inline-block cursor-pointer" onClick={() => setIsOpen(!isOpen)}><img className=" inline-block h-8 w-auto" src={hamburgerMenu.src} alt="Menu" /></p>
                    </div>
                </div>

                {!!navItems?.length && (
                <ul className="hidden sm:hidden md:flex lg:flex justify-end w-8/12 text-right text-xl ">
                    {navItems.map((item, index) => (
                        <li key={index} className=" inline-block text-right pl-6">
                            <span onClick={() => handleScroll(item.elementId)} className="cursor-pointer inline-block no-underline text-nowrap text-white text-opacity-70 hover:text-opacity-100 font-condensed" > {item.linkText} </span>
                        </li>
                    ))}
                </ul>
                )}

            </section>

            {!!navItems?.length && (
            <ul className={` lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-screen opacity-100 py-5 px-6' : 'max-h-0 opacity-0'
            }`}>
                {navItems.map((item, index) => (
                    <li key={index} className="py-2">
                        <span onClick={() => { setIsOpen(!isOpen); handleScroll(item.elementId); }} className="cursor-pointer block no-underline text-white text-opacity-70 hover:text-opacity-100  font-condensed text-xl">
                            {item.linkText}
                        </span>
                    </li>
                ))}
            </ul>
            )}

        </nav>
    );
}
