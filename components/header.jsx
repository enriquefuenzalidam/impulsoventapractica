import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/images/logo-dba.ico';
import githubLogo from 'public/images/github-mark-white.svg';

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
            <p className="inline-block w-4/12 "><Image className=" inline-block h-12 w-auto" src={netlifyLogo} alt="Netlify logo" /><Link className="inline-block  font-semibold no-underline ml-1 text-xl uppercase" href="/">Impulso Ventas</Link></p>

            {!!navItems?.length && (
                <ul className="w-8/12 inline-block text-right text-lg">
                    {navItems.map((item, index) => (
                        <li key={index} className=" inline-block  text-center">
                            <Link href={item.href} className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:py-2 no-underline" > {item.linkText} </Link>
                        </li>
                    ))}
                </ul>
            )}
            </section>
        </nav>
    );
}
