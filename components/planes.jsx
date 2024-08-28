
'use client';

import { useRef, useEffect, useState } from 'react';
import { useCartContext } from '../app/context/CartContext';

import Link from 'next/link';
import Image from 'next/image';
import fondoVentas from 'public/images/fondo-ventas1.png';
import fondoVentas2 from 'public/images/fondo-ventas2.png';
import planesJson from 'data/planes.json';

const Planes = () => {
    const { items, addItem, removeItem, clearCart, isEmpty, cartTotal, hydrated } = useCartContext();
    const [formData, setFormData] = useState({ name: '', email: '', confirmEmail: '' });
    const [errors, setErrors] = useState({});

    const compraBlock = useRef(null);
    const [compraBlockHeight, setCompraBlockHeight] = useState(0);

    const updateBlockHeight = () => {
        if (compraBlock.current) setCompraBlockHeight(compraBlock.current.scrollHeight);
    };

    useEffect(() => {
        updateBlockHeight();
        const handleResize = () => updateBlockHeight();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isEmpty]);

    if (!hydrated) { return null; }

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Debe ingresar su nombre';
        if (!formData.email) newErrors.email = 'Debe ingresar su correo';
        if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = 'Los correos electrónicos no coinciden';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async () => {
        if (!validateForm()) return;
    };

    return (
        <>
            {!!planesJson?.length && (
                <div className=" max-w-screen-lg mx-auto py-6 px-4 grid grid-cols-1 grid-rows-3 sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-5">
                    {planesJson.map((item, index) => (
                        <div key={index} data-aos-once="true" data-aos="fade-down" className=" flex flex-col h-full">
                            <div className=" flex-grow bg-white border-solid border-t-2 border-l-2 border-r-2 rounded-t-xl border-black border-opacity-10 p-6 text-center">
                                <h4 className=" text-2xl text-black font-semibold mb-4">{item.planNombr}</h4>
                                <p><Image className=" m-auto" src={fondoVentas} alt="ventas" /></p>
                                <p className=" text-lg text-black font-normal ">{item.planDescr}</p>
                            </div>
                            <div className="bg-[#F7F7F7] border-solid border-2 border-black border-opacity-10 rounded-b-xl p-6 text-center">
                                <p className=" text-3xl text-black font-medium ">CLP $ {new Intl.NumberFormat('es-CL').format(item.planPrec)}</p>
                                <p className=" mt-6">
                                    <Link
                                        href="./#compra"
                                        onClick={() => addItem(item)}
                                        className=" inline-block text-lg text-white font-medium py-2 px-4 rounded-md bg-[#0d6efd] hover:bg-[#0a58ca] no-underline transition-all duration-300 ease-out cursor-pointer" >
                                        Comprar plan {index + 1}</Link></p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div id="compra" className={` block ${ !isEmpty && `h-24` } `}></div>

            <div className={` max-w-screen-lg mx-auto px-4 transition-all ease-in-out duration-700 overflow-hidden block `} style={{ height: !isEmpty ? `${compraBlockHeight}px` : `0` }} >
                <div ref={compraBlock} >
                    <div className={`relative bg-[#F7F7F7]  border-solid border-black border-opacity-20 rounded-xl transition-all ease-in-out duration-700 ${ !isEmpty ? 'grid grid-cols-1 md:grid-cols-2 opacity-100' : 'block opacity-0'} border-4 `}>

                        <div className={` relative mx-auto m-6 text-center flex items-center justify-center `}>
                            <div className={` align-middle overflow-hidden relative block px-8  font-medium text-black text-lg lg:text-xl `} >
                                <p className={` block ${!isEmpty ? `mb-5`:`py-24` } `}><img className={`object-center object-contain w-auto h-56 inline opacity-100 `} src={fondoVentas2.src} width="28" height="auto" alt="" /></p>
                                {!isEmpty && (<>
                                    <p className={` block text-lg opacity-55 uppercase mb-2`}>Usted está comprando el plan</p>
                                    <p className={` block text-3xl font-bold mb-2 `}>{items[0]?.planNombr}</p>
                                    <p className={` block italic font-light text-3xl mb-6 `}>CLP $ {new Intl.NumberFormat('es-CL').format(cartTotal)}</p>
                                    <p className={` block mb-4 `}><Link href='./#productos' className={`inline-block w-auto text-sm text-white font-medium py-2 px-4 rounded-md bg-[#0d6efd] hover:bg-[#0a58ca] no-underline transition-all duration-300 ease-out cursor-pointer `} onClick={clearCart}>Anular compra</Link></p>
                                </>)}
                            </div>
                        </div>
                        {!isEmpty && (
                            <form className={`  mb-3 sm:mb-4 md:mb-5 lg:mb-6 mr-3 sm:mr-4 md:mr-5 lg:mr-6 ml-3 sm:ml-4 md:ml-0 lg:ml-0 flex flex-col items-center justify-center `} >
                                <p className={` block w-full mt-3 sm:mt-4 md:mt-5 lg:mt-6 overflow-hidden align-middle relative font-normal font-condensed bg-white border-solid border-2 border-black border-opacity-10 rounded-xl `}>
                                    <input className={` block w-full p-2 bg-transparent text-xl lg:text-2xl text-left `} type='text' name='name' value={formData.name} onChange={handleInputChange} placeholder='Nombre' /></p>
                                {errors.name && (<p data-aos-once="true" data-aos="fade" className={` block w-full px-2 mt-1 ml-0 md:ml-6 text-red-500 text-md lg:text-lg text-left `}>{errors.name}</p>)}
                                <p className={` block w-full mt-3 sm:mt-4 md:mt-5 lg:mt-6 overflow-hidden align-middle relative font-normal font-condensed bg-white border-solid border-2 border-black border-opacity-10 rounded-xl `}>
                                    <input className={` block w-full p-2 bg-transparent text-xl lg:text-2xl text-left `} type='email' name='email' value={formData.email} onChange={handleInputChange} placeholder='Correo electrónico' /></p>
                                {errors.email && (<p data-aos-once="true" data-aos="fade" className={` block w-full px-2 mt-1 ml-0 md:ml-6 text-red-500 text-md lg:text-lg text-left `}>{errors.email}</p>)}
                                <p className={` block w-full mt-3 sm:mt-4 md:mt-5 lg:mt-6 overflow-hidden align-middle relative font-normal font-condensed bg-white border-solid border-2 border-black border-opacity-10 rounded-xl  `}>
                                    <input className={` block w-full p-2 bg-transparent text-xl lg:text-2xl text-left `} type='email' name='confirmEmail' value={formData.confirmEmail} onChange={handleInputChange} placeholder='Confirme correo electrónico' /></p>
                                {errors.confirmEmail && (<p data-aos-once="true" data-aos="fade" className={` block w-full px-2 mt-1 ml-0 md:ml-6 text-red-500 text-md lg:text-lg text-left `}>{errors.confirmEmail}</p>)}
                                <p className={` block mt-3 sm:mt-4 md:mt-5 lg:mt-6 `} >
                                    <input className={`block w-full text-xl text-white font-bold py-4 px-6 rounded-md bg-[#0d6efd] hover:bg-[#0a58ca] no-underline transition-all duration-300 ease-out cursor-pointer `} type='button' Value='Pagar aquí' onClick={handlePayment} />
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>



        </>
    );
}
export default Planes;