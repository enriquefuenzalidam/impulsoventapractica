


import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import AOSInitializer from '../components/AOSInitializer';



export const metadata = {
    title: {
      default: 'Impulso Ventas',
    },
  };
  
export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi"  className="scroll-smooth">
            <head>
                <link rel="icon" href="/images/logo-dba.ico" sizes="any" />
            </head>
            <body className="antialiased bg-white">
                <AOSInitializer />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
