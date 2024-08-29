
import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import AOSInitializer from '../components/AOSInitializer';
import { CartProvider } from './context/CartContext';



export default function RootLayout({ children }) {

    return (
        <html lang="en" data-theme="lofi" >
            <head>
                <link rel="icon" href="/images/logo-dba.ico" sizes="any" />
            </head>
            <body className="antialiased bg-white">
                <AOSInitializer />
                <Header />
                <CartProvider>
                {children}
                </CartProvider>
                <Footer />
            </body>
        </html>
    );
}
