


import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        default: 'Impulso Ventas'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/images/logo-dba.ico" sizes="any" />
            </head>
            <body className="antialiased  bg-white">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
