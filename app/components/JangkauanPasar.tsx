import React from "react";
import Image from 'next/image'
import PinImage from '../../public/pin.png'
import ShoppingImage from '../../public/shopping.png'
import SocialMedia from '../../public/social-media.png';
import People from '../../public/people.png';
export default function JangkauanPasar() {
    return (
        <div className="">
            <div className="mb-10" id="jangkauan">
                <h1 className="text-2xl text-center font-semibold mb-4 pt-20 lg:text-3xl">Jangkauan Pemasaran</h1>
                <div
                    className="mx-auto max-w-screen-xl px-4 flex justify-center items-center flex-col  md:mt-10 md:px-10 md:flex-row-reverse md:gap-8 lg:items-stretch md:justify-around lg:px-56">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center flex-col mt-8 bg-blue-200 p-10 rounded-xl w-10/12 shadow-xl">
                                <div className="flex justify-center items-center">
                                    <Image src={PinImage} alt="pin image" className="w-1/4"/>
                                    
                                </div>
                                <div className="w-full mt-5">
                                    <p className="text-sm text-center">Produk kami sudah ada di 20 pusat oleh -oleh dibanyuwangi,
                                        probolinggo, situbondo, surabaya dan sekitar nya</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center flex-col mt-8 bg-blue-200 p-10 rounded-xl w-10/12 shadow-xl">
                                <div className="flex justify-center items-center">
                                <Image src={ShoppingImage} alt="" className="w-1/4"/>
                                    
                                </div>
                                <div className="w-full mt-5">
                                    <p className="text-sm text-center">Kami juga melayani pembelian melalui sosial media, seperti
                                        instagram, facebook dan tiktok.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center flex-col mt-8 bg-blue-200 p-10 rounded-xl w-10/12 shadow-xl ">
                                <div className="flex justify-center items-center">
                                <Image src={SocialMedia} alt="" className="w-1/4"/>
                                    
                                </div>
                                <div className="w-full mt-5">
                                    <p className="text-sm text-center">Kami juga berperan aktif dalam acara pameran dari beberapa dinas
                                        yang menaungi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex justify-center items-center flex-col mt-8 bg-blue-200 p-10 rounded-xl w-10/12 shadow-xl">
                                <div className="flex justify-center items-center">
                                <Image src={People} alt="" className="w-1/4"/>
                                    
                                </div>
                                <div className="w-full mt-5">
                                    <p className="text-sm text-center">Produk kami sudah ada di 20 pusat oleh -oleh dibanyuwangi,
                                        probolinggo, situbondo, surabaya dan sekitar nya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}