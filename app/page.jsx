import Link from 'next/link';
import Image from 'next/image';
import envelope from 'public/images/envelope.svg';
import locationDot from 'public/images/location-dot.svg';
import phone from 'public/images/phone.svg';


export default function Page() {
    return (
        <main className="pt-12">
            <section className="bg-[url('/images/img-principal2.jpg')] bg-cover bg-center bg-no-repeat">
                <div className=" bg-black bg-opacity-40">
                    <div className=" max-w-screen-lg mx-auto py-40">
                        <h3 className=" mx-6 mb-8 p-3 rounded-lg bg-[#b02a37] text-white inline-block uppercase font-medium text-xl">Bases de datos</h3>
                        <h2 className=" mx-6 mb-8 uppercase text-white text-opacity-80 text-3xl font-medium leading-relaxed ">La empresa que impulsa tus ventas</h2>
                        <p className=" mx-6 mb-12 text-white text-opacity-80 text-xl font-medium leading-relaxed ">Potencia tu negocio con bases de datos precisas y actualizadas de Impulso de Ventas. Accede a información confiable y relevante para alcanzar tus objetivos comerciales. Amplía tu red de clientes y segmenta tus campañas de marketing con precisión y eficacia.</p>
                        <p className=" mx-6 ">
                            <Link href="" className="py-2 px-4 mr-4 rounded-lg bg-[#0d6efd] hover:bg-[#0a58ca] text-md text-white inline-block no-underline transition-all duration-300 ease-in-out">Conoce nuestros planes</Link>
                            <Link href="" className="py-2 px-4 rounded-lg bg-[#198754] hover:bg-[#157347] text-md text-white inline-block no-underline transition-all duration-300 ease-in-out">Contáctanos</Link>
                        </p>
                    </div>
                </div>
            </section>
            <section className="my-10 mx-8">
                <div className=" max-w-screen-lg mx-auto pt-6 pr-4 pb-4 pl-4 border-solid border-2 rounded-lg ">
                    <div className="grid grid-raws-1 sm:grid-raws-1 md:grid-cols-3 lg:grid-cols-3 items-start justify-center text-left sm:text-left md:text-center font-medium text-black text-lg">
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
