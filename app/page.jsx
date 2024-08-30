
import Link from 'next/link';
import Image from 'next/image';
import envelope from 'public/images/envelope.svg';
import locationDot from 'public/images/location-dot.svg';
import phone from 'public/images/phone.svg';
import quienesSomos from 'public/images/quienessomos.jpg';
import Planes from 'components/planes';

export default function Page() {
    return (
        <main className={`  font-condensed `}>
            
            <section id="inicio" data-aos-once="true"  data-aos="fade" className="relative pt-12 h-[calc(100vh)] ">
                <div className="absolute top-[3rem] lef-0 bg-black bg-opacity-40 h-[calc(100%-3rem)] w-full bg-[url('/images/img-principal2.jpg')] bg-cover bg-center bg-no-repeat" />
                <div className="absolute top-[3rem] lef-0 bg-black bg-opacity-40 h-[calc(100%-3rem)] w-full" />
                <div className=" relative max-w-screen-lg mx-auto h-[calc(100%-3rem)] flex flex-col justify-center items-left ">
                        <div>
                            <h3 className=" inline-block mx-8 mb-8 py-3 px-5 rounded-lg border-4 border-solid border-[#c92859] bg-transparent text-[#d02550] uppercase font-extrabold text-xl">Bases de datos</h3>
                        </div>
                        <h2 className=" mx-8 mb-6 uppercase text-white text-opacity-80 text-3xl font-bold leading-relaxed font-condensed ">La empresa que impulsa tus ventas</h2>
                        <p className=" mx-8 mb-8 text-white text-opacity-80 text-xl font-medium leading-relaxed font-condensed ">Potencia tu negocio con bases de datos precisas y actualizadas de Impulso de Ventas. Accede a información confiable y relevante para alcanzar tus objetivos comerciales. Amplía tu red de clientes y segmenta tus campañas de marketing con precisión y eficacia.</p>
                        <p className=" mx-8 ">
                            <Link href="./#productos" className="py-2 mt-8 px-4 mr-4 rounded-lg bg-[#0d6efd] hover:bg-[#0a58ca] text-md text-white inline-block no-underline transition-all duration-300 ease-in-out">Conoce nuestros planes</Link>
                            <Link href="./#contactanos" className="py-2 px-4 mt-8 rounded-lg bg-[#198754] hover:bg-[#157347] text-md text-white inline-block no-underline transition-all duration-300 ease-in-out">Contáctanos</Link>
                        </p>
                    </div>
            </section>

            <section className=" w-full">

                <div className=" max-w-screen-lg m-auto flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row ">
                    <div data-aos-once="true"  data-aos="zoom-in" className=" w-full sm:w-full md:w-5/12 lg:w-5/12 my-0 sm:my-0 md:my-4 lg:my-4">
                        <p className=" mx-0 sm:mx-0 md:mx-4 lg:mx-4 h-full ">
                            <Image className=" w-full h-full object-cover rounded-none sm:rounded-none md:rounded-xl lg:rounded-xl " src={quienesSomos} alt="quiénes somos" />
                        </p>
                    </div>
                    <div data-aos-once="true"  data-aos="fade-left" id="quienessomos" className=" w-full sm:w-full md:w-7/12 lg:w-7/12 my-0 sm:my-0 md:my-4 lg:my-4">
                        <div className=" mx-8 ">
                            <h3 className=" text-4xl font-bold text-center pt-20 pb-3">Quiénes Somos</h3>
                            <p className=" text-lg font-medium pb-20 text-left indent-5 hyphens-auto ">En Impulso Ventas nos dedicamos a proporcionar soluciones de datos precisas y actualizadas para potenciar el crecimiento de tu negocio. Con un enfoque en la calidad y la fiabilidad, ofrecemos bases de datos de personas y empresas que impulsan tus estrategias de marketing y ventas. Nuestro compromiso es brindarte información confiable y relevante para que puedas alcanzar tus objetivos comerciales con éxito.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section id="productos" className=" bg-[#449DF7] bg-opacity-20 pt-20 ">
                <h3 className=" max-w-screen-lg m-auto text-4xl font-bold text-center pb-3">Productos</h3>
                <p className=" max-w-screen-lg m-auto text-lg font-medium text-center pb-8">Conoce nuestros productos.</p>
                <Planes/>
            </section>

            <section id="contactanos" className=" pt-20 pb-10 ">
                <h3 className=" max-w-screen-lg m-auto text-4xl font-bold text-center px-4 pb-3">Contáctanos</h3>
                <p className=" max-w-screen-lg m-auto text-lg font-medium text-center px-4 pb-8">Comunicate con nosotros a través de alguno de nuestros canales. Estaremos para responder todas tus dudas.</p>
                <div data-aos-once="true"  data-aos="fade-down" className=" max-w-screen-lg pt-6 px-4 mx-auto ">
                    <div className=" mx-auto px-4 pb-4 pt-6 border-solid border-2 rounded-xl border-black border-opacity-10">
                        <div className="grid grid-raws-3 grid-cols-1 sm:grid-raws-3 sm:grid-cols-1 md:grid-raws-3 md:grid-cols-3 lg:grid-raws-1 lg:grid-cols-3 items-start justify-center text-left sm:text-left md:text-center font-medium text-black text-lg">
                            <p className="inline-block pb-6"><Image src={envelope} className=" inline-block h-4 w-auto mr-2" alt="envelope"/> invchincol@gmail.com</p>
                            <p className="inline-block pb-6"><Image src={locationDot} className=" inline-block h-4 w-auto mr-2" alt="locationDot"/> Los Jesuitas 881, Providencia</p>
                            <p className="inline-block pb-6"><Image src={phone} className=" inline-block h-4 w-auto mr-2" alt="phone"/> +56 9 5080 3505</p>
                        </div>
                        <div>
                            <iframe className=" w-full h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1981205231386!2d-70.62504321737647!3d-33.44414450478514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf80f32bae2d%3A0xa9d1ed0b6e1b4437!2sLos%20Jesuitas%20881%2C%207500000%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1713548615604!5m2!1ses!2scl"></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
