import React from 'react';
import Image from 'next/image'
import JPImage from '../../public/jp.png'
import DiahImage from '../../public/diah.png'
export default function Contact() {
    return (
        <div className="">
            <div className="" id="kontak">
                <h1 className="text-2xl text-center font-semibold mb-4 mt-20 lg:text-3xl">Tim Kami</h1>
                <div id="visi-misi"
                    className="mx-auto max-w-screen-xl px-4 flex justify-center items-center flex-col md:mt-16 md:px-10 md:flex-row-reverse md:gap-8 lg:items-stretch md:justify-around">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-8 md:gap-0">
                        <div className="flex justify-start items-center flex-col">
                            <div className="flex justify-center items-center ">
                                <Image src={JPImage} alt='JP' className='w-1/4 drop-shadow-xl'/>
                                
                            </div>
                            <div className="w-3/4 lg:w-5/12 mt-5 flex justify-center items-center flex-col">
                            
                                <div className="w-52">
                                    <h1 className="text-xl text-center font-semibold mb-3 text-green-500">JP</h1>
                                    <h1 className="text-xl text-center font-semibold mb-1">Business Analyst</h1>
                                    <p className="text-sm text-center">Iman kita adalah inti masa depan kita. Tidak ada kesuksesan
                                        besar tanpa pengorbanan besar.</p>
                                </div>
                            </div>
                        </div> 
                        <div className="flex justify-start items-center flex-col">
                            <div className="flex justify-center items-center">
                            <Image src={DiahImage} alt='Diah Lestari' className='w-1/4 drop-shadow-xl'/>
                            </div>
                            <div className="w-3/4 lg:w-5/12 mt-5">
                                <h1 className="text-xl text-center font-semibold mb-3 text-green-500">Diah Lestari</h1>
                                <h1 className="text-xl text-center font-semibold mb-1">Owner</h1>
                                <p className="text-sm text-center">Banyak dari kegagalan hidup adalah orang-orang yang tidak menyadari
                                    betapa dekatnya mereka dengan kesuksesan ketika mereka menyerah.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}