
'use client';
import impulsoVentasLogo from 'public/images/logo-dba.ico';

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



const Cover = () => {

    return (
        <section id="inicio" data-aos-once="true" data-aos="fade" className="relative min-h-[calc(100vh)] bg-[#0B0B5C] ">
            <div className="absolute top-0 lef-0 bg-black bg-opacity-40 h-full w-full bg-[url('/images/img-principal2.jpg')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute top-0 lef-0 bg-black bg-opacity-40 h-full w-full" />
            <div className=" relative max-w-screen-lg mx-auto min-h-[calc(100vh)] h-full w-full flex flex-col justify-center items-left ">
                <div>
                    <h3 className=" inline-block m-8 py-2 px-4 rounded-lg border-4 border-solid border-[#c92859] bg-transparent text-[#d02550] uppercase font-extrabold text-lg">Bases de datos</h3>
                </div>
                <div className={` mx-8 mb-8 `}>
                    <img className=" inline-block w-10 sm:w-12 md:w-16 h-auto align-bottom" src={impulsoVentasLogo.src} alt="Impulso Ventas Logo" />
                    <span className="inline-block text-3xl sm:text-4xl md:text-6xl font-normal md:font-extralight tracking-tight no-underline ml-2 text-white text-opacity-60 md:text-opacity-100 capitalize font-Roboto">I<em>mpulso</em> V<em>entas</em></span>
                </div>
                <h2 className=" mx-8 mb-6 uppercase text-white text-opacity-80 text-3xl font-bold leading-relaxed font-condensed ">La empresa que <span className={` whitespace-nowrap `}>impulsa tus ventas</span></h2>
                <p className=" mx-8 text-white text-opacity-80 text-xl font-medium leading-relaxed font-condensed ">Potencia tu negocio con bases de datos precisas y actualizadas de Impulso de Ventas. Accede a información confiable y relevante para alcanzar tus objetivos comerciales. Amplía tu red de clientes y segmenta tus campañas de marketing con precisión y eficacia.</p>
                <p className=" m-8 mb-8 ">
                    <span onClick={() => { handleScroll('productos'); }} className=" cursor-pointer py-2 mt-8 px-4 mr-4 rounded-lg bg-[#0d6efd] hover:bg-[#0a58ca] text-md text-white inline-block no-underline transition-all duration-300 ease-in-out">Conoce nuestros planes</span>
                    <span onClick={() => { handleScroll('contactanos'); }} className=" cursor-pointer py-2 px-4 mt-8 rounded-lg bg-[#198754] hover:bg-[#157347] text-md text-white inline-block no-underline transition-all duration-300 ease-in-out">Contáctanos</span>
                </p>
            </div>
        </section>
    );
}
export default Cover;
