import Link from 'next/link';

const linksCols = [
    {
      colTitle: 'A propos',
      linksList: [
        { linkTitle: 'About Us', linkHref: '#' },
        { linkTitle: 'Blog', linkHref: '#' },
        { linkTitle: 'Our ingredients', linkHref: '#' },
        { linkTitle: 'Our resellers', linkHref: '#' }
      ]
    },
    {
      colTitle: 'About',
      linksList: [
        { linkTitle: 'Customer Service', linkHref: '#' },
        { linkTitle: 'Privacy Policy', linkHref: '#' },
        { linkTitle: 'Cookie Policy', linkHref: '#' },
        { linkTitle: 'Terms & Conditions', linkHref: '#' },
        { linkTitle: 'Terms of Use', linkHref: '#' }
      ]
    },
    {
      colTitle: 'Need Help?',
      linksList: [
        { linkTitle: 'Contact Us', linkHref: '#' },
        { linkTitle: 'FAQs', linkHref: '#' },
        { linkTitle: 'Offers & Kits', linkHref: '#' },
        { linkTitle: 'Get the app', linkHref: '#' },
        { linkTitle: 'Store locator', linkHref: '#' }
      ]
    },
    {
      colTitle: 'Need Help?',
      linksList: [
        { linkTitle: 'Contact Us', linkHref: '#' },
        { linkTitle: 'FAQs', linkHref: '#' },
        { linkTitle: 'Offers & Kits', linkHref: '#' },
        { linkTitle: 'Get the app', linkHref: '#' },
        { linkTitle: 'Store locator', linkHref: '#' }
      ]
    }
  ];

export function Footer() {
    return (
        <footer className=" bg-[#0B0B5C]">
            <section className=" max-w-screen-lg mx-auto p-10 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 sm:gap-y-8 md:gap-y-8 lg:gap-y-0">
                {linksCols.map((linkCol, index) => (
                <div key={index} >
                    <h5 className="font-bold text-xl text-white pb-2 ">{linkCol.colTitle}</h5>
                    <ul>
                        {linkCol.linksList.map((link, linkIndex) => (
                        <li key={linkIndex}><Link className=" font-md text-white text-opacity-70 hover:text-opacity-100 no-underline hover:underline text-md" href={link.linkHref}>{link.linkTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                ))}
            </section>
            <section className="bg-[#989898] p-3">
            <p className=" mx-auto text-center font-normal text-black text-md">© Impulsa Ventas</p>
            </section>
        </footer>
    );
};
