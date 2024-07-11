import Image from 'next/image';
import Link from 'next/link';
import impulsoVentasLogo from 'public/images/logo-dba.ico';

const navItems = [
    { linkText: 'Inicio', href: '#' },
    { linkText: 'Quiénes Somos', href: '#' },
    { linkText: 'Productos', href: '#' },
    { linkText: 'Contáctanos', href: '#'}
];

export function Header() {
    return (
        <nav className="bg-[#0B0B5C]">
            <section className="max-w-screen-lg mx-auto p-10 text-white">
                <p className="inline-block w-4/12 "><Image className=" inline-block h-12 w-auto" src={impulsoVentasLogo} alt="Netlify logo" /><Link className="inline-block  font-semibold no-underline ml-1 text-xl uppercase" href="/">Impulso Ventas</Link></p>
                {!!navItems?.length && (
                <ul className="w-8/12 inline-block text-right text-lg">
                    {navItems.map((item, index) => (
                        <li key={index} className=" inline-block text-right px-3">
                            <Link href={item.href} className="inline-block py-1 sm:py-2 transition hover:opacity-80 no-underline text-nowrap" > {item.linkText} </Link>
                        </li>
                    ))}
                </ul>
                )}
            </section>
        </nav>
    );
}
