"use client"
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ShopeeImage from '../../public/sopi1.png'
import IgIcon from '../../public/ig-icon.png'
import WaImage from '../../public/whatsapp.png'
import GmailImage from '../../public/gmail.png'
import FacebookImage from '../../public/facebook.png'
import Rambak1 from '@/public/rambak1.jpeg'
import Rambak2 from '@/public/rambak2.jpeg'
import Rambak3 from '@/public/rambak3.jpeg'
import Sambal1 from '@/public/sambal1.jpeg'
import Sambal2 from '@/public/sambal2.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const data = [
    {
        'image': Rambak1
    },
    {
        'image': Rambak2
    },
    {
        'image': Rambak3
    },
    {
        'image': Sambal1
    },
    {
        'image': Sambal2
    },
]
export default function KeunggulanProduct() {
    return (
        <div className="bg-blue-200 pb-10 md:mt-28 rounded-3xl shadow-xl">
            <h1 className="text-2xl text-center font-semibold mb-10 pt-10 lg:text-3xl">Keunggulan Produk Kami</h1>
            <div id="keungulan"
                className=" mx-auto max-w-screen-xl px-4 flex justify-center items-center flex-col   md:px-10 lg:flex-row md:gap-8 lg:mt-0 lg:items-stretch gap-8">
                <div className="ml-4 md:w-1/2">
                    <div className="lg:w-8/12">
                        <ul className="px-5 list-disc lg:text-lg whitespace-normal lg:whitespace-nowrap">
                            <li>Produk bersertifikat HALAL</li>
                            <li>Kemasan rapi dan tahan lama</li>
                            <li>Menggunakan bahan premium</li>
                            <li>Ukuran perporsi</li>
                            <li>Harga terjangkau</li>
                            <li>Siap saji cocok untuk traveler</li>
                            <li>Ada berbagai macam varian rasa</li>
                            <li>Pembayaran Secara Elektronik</li>
                            <li>Produk unik dan belum banyak pesaing</li>
                            <li>Produk mudah didapatkan di market place atau putsol</li>
                        </ul>
                    </div>
                    <div className="hidden md:flex justify-start items-start">
                        <a href="/katalog"
                            className="w-fit px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#276ED8] border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700">Lihat
                            Semua Product</a>
                    </div>
                </div>
                <div className="w-full flex justify-center  items-center">
                    <Carousel />
                </div>
            </div>
            <div className="md:hidden flex justify-center items-center px-8">
                <Link href="/katalog"
                    className="w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#276ED8] border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700">Lihat
                    Semua Product</Link>
            </div>

        </div>
    );
}
export function Carousel() { // Default width of 800px

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            spaceBetween={0} // Remove spacing between slides for full coverage
            className="w-[500px] h-[340px] md:w-[400px] md:h-[320px]  lg:w-[500px] lg:h-[340px] rounded-[20px]"
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image
                        className="object-cover"
                        src={item.image}
                        alt={`${item.image}`}
                        fill={true}
                        sizes="100vw"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
