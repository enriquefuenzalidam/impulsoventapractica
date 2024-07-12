import Link from 'next/link';
import Image from 'next/image';
import envelope from 'public/images/envelope.svg';
import locationDot from 'public/images/location-dot.svg';
import phone from 'public/images/phone.svg';
import fondoVentas from 'public/images/fondo-ventas1.png';


export default function Page() {
    return (
        <main className="pt-12">
            <section className="bg-[url('/images/img-principal2.jpg')] bg-cover bg-center bg-no-repeat">
                <div className=" bg-black bg-opacity-40">
                    <div className=" max-w-screen-lg mx-auto lg:py-40 md:py-28 sm:py-16 py-16">
                        <h3 className=" mx-6 mb-8 p-3 rounded-lg bg-[#b02a37] text-white inline-block uppercase font-medium text-xl">Bases de datos</h3>
                        <h2 className=" mx-6 mb-6 uppercase text-white text-opacity-80 text-3xl font-medium leading-relaxed ">La empresa que impulsa tus ventas</h2>
                        <p className=" mx-6 mb-16 text-white text-opacity-80 text-xl font-medium leading-relaxed ">Potencia tu negocio con bases de datos precisas y actualizadas de Impulso de Ventas. Accede a información confiable y relevante para alcanzar tus objetivos comerciales. Amplía tu red de clientes y segmenta tus campañas de marketing con precisión y eficacia.</p>
                        <p className=" mx-6 ">
                            <Link href="" className="py-2 px-4 mr-4 rounded-lg bg-[#0d6efd] hover:bg-[#0a58ca] text-md text-white inline-block no-underline transition-all duration-300 ease-in-out">Conoce nuestros planes</Link>
                            <Link href="" className="py-2 px-4 rounded-lg bg-[#198754] hover:bg-[#157347] text-md text-white inline-block no-underline transition-all duration-300 ease-in-out">Contáctanos</Link>
                        </p>
                    </div>
                </div>
            </section>
            <section className=" bg-[#449DF7] bg-opacity-20 py-10">
                <h3 className=" max-w-screen-lg m-auto text-4xl font-medium text-center pb-3">Productos</h3>
                <p className=" max-w-screen-lg m-auto text-lg font-normal text-center pb-8">Conoce nuestros productos.</p>
                <div className=" max-w-screen-lg mx-auto pt-6 pr-4 pb-4 pl-4 grid grid-cols-1 grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-5">
                    <div className=" flex flex-col h-full">
                        <div className=" flex-grow bg-white border-solid border-t-2 border-l-2 border-r-2 rounded-t-xl border-black border-opacity-10 p-6 text-center">
                            <h4 className=" text-2xl text-black font-semibold mb-4">Base de datos 1.000 pymes/empresas</h4>
                            <p><Image className=" m-auto" src={fondoVentas}></Image></p>
                            <p className=" text-lg text-black font-normal ">Potencia tu estrategia de marketing con nuestra base de datos de 1.000 contactos de pymes y empresas. Accede a una amplia gama de prospectos para impulsar tus campañas promocionales y expandir tu red de clientes potenciales de manera efectiva.</p>
                        </div>
                        <div className="bg-[#F7F7F7] border-solid border-2 rounded-b-xl border-black border-opacity-10 p-6 text-center">
                            <p className=" text-3xl text-black font-medium ">$ 2.500 CLP</p>
                            <p className=" mt-6"><Link className=" inline-block text-lg text-white font-medium py-2 px-4 rounded-md bg-[#0d6efd] hover:bg-[#0a58ca] no-underline transition-all duration-300 ease-out" href="">Comprar plan 1</Link></p>
                        </div>
                    </div>
                    <div className=" flex flex-col h-full">
                        <div className=" flex-grow bg-white border-solid border-t-2 border-l-2 border-r-2 rounded-t-xl border-black border-opacity-10 p-6 text-center">
                            <h4 className=" text-2xl text-black font-semibold mb-4">Base de datos 2.000 pymes/empresas</h4>
                            <p><Image className=" m-auto" src={fondoVentas}></Image></p>
                            <p className=" text-lg text-black font-normal ">Maximiza el alcance de tu negocio con nuestra completa base de datos de 2.000 contactos de pymes y empresas. Con una amplia variedad de prospectos a tu disposición, podrás aumentar la efectividad de tus campañas de marketing y alcanzar nuevos clientes en diferentes sectores y regiones.</p>
                        </div>
                        <div className=" bg-[#F7F7F7] border-solid border-2 rounded-b-xl border-black border-opacity-10 p-6 text-center">
                            <p className=" text-3xl text-black font-medium ">$ 4.000 CLP</p>
                            <p className=" mt-6"><Link className=" inline-block text-lg text-white font-medium py-2 px-4 rounded-md bg-[#0d6efd] hover:bg-[#0a58ca] no-underline transition-all duration-300 ease-out" href="">Comprar plan 1</Link></p>
                        </div>
                    </div>
                    <div className=" flex flex-col h-full">
                        <div className=" flex-grow bg-white border-solid border-t-2 border-l-2 border-r-2 rounded-t-xl border-black border-opacity-10 p-6 text-center">
                            <h4 className=" text-2xl text-black font-semibold mb-4">Base de datos 5.000 pymes/empresas</h4>
                            <p><Image className=" m-auto" src={fondoVentas}></Image></p>
                            <p className=" text-lg text-black font-normal ">Obtén una ventaja competitiva con nuestra extensa base de datos de 5.000 contactos de pymes y empresas. Con una abundancia de prospectos a tu alcance, podrás desarrollar estrategias de marketing más sólidas y llegar a una audiencia más amplia, facilitando el crecimiento y la expansión de tu negocio de manera significativa.</p>
                        </div>
                        <div className="bg-[#F7F7F7] border-solid border-2 rounded-b-xl border-black border-opacity-10 p-6 text-center">
                            <p className=" text-3xl text-black font-medium ">$ 5.000 CLP</p>
                            <p className=" mt-6" ><Link className=" inline-block text-lg text-white font-medium py-2 px-4 rounded-md bg-[#0d6efd] hover:bg-[#0a58ca] no-underline transition-all duration-300 ease-out" href="">Comprar plan 1</Link></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-10 mx-8">
                <h3 className=" max-w-screen-lg m-auto text-4xl font-medium text-center pb-3">Contáctanos</h3>
                <p className=" max-w-screen-lg m-auto text-lg font-normal text-center pb-8">Comunicate con nosotros a través de alguno de nuestros canales. Estaremos para responder todas tus dudas.</p>
                <div className=" max-w-screen-lg mx-auto pt-6 pr-4 pb-4 pl-4 border-solid border-2 rounded-lg border-black border-opacity-20">
                    <div className="grid grid-raws-3 grid-cols-1 sm:grid-raws-3 sm:grid-cols-1 md:grid-raws-3 md:grid-cols-3 lg:grid-raws-1 lg:grid-cols-3 items-start justify-center text-left sm:text-left md:text-center font-medium text-black text-lg">
                        <p className="inline-block pb-6"><Image src={envelope} className=" inline-block h-4 w-auto mr-2" alt="envelope"/> invchincol@gmail.com</p>
                        <p className="inline-block pb-6"><Image src={locationDot} className=" inline-block h-4 w-auto mr-2" alt="envelope"/> Los Jesuitas 881, Providencia</p>
                        <p className="inline-block pb-6"><Image src={phone} className=" inline-block h-4 w-auto mr-2" alt="envelope"/> +56 9 5080 3505</p>
                    </div>
                    <div>
                        <iframe className=" w-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1981205231386!2d-70.62504321737647!3d-33.44414450478514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf80f32bae2d%3A0xa9d1ed0b6e1b4437!2sLos%20Jesuitas%20881%2C%207500000%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1713548615604!5m2!1ses!2scl"></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
