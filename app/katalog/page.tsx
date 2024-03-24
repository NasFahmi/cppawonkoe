"use client"
import background from '@/public/bg-katalog.jpg'
import Image from 'next/image';
import CardProduct from '../components/CardProduct';
export default function Katalog() {
    return (
        <div className="">
            <div className="relative w-full h-80">
                <div className="flex justify-center items-center z-[20]  absolute top-0 left-0 right-0 bottom-0">
                    <h1 className="text-3xl text-center md:text-3xl font-bold mb-2 text-gray-50">Selamat Datang di Katalog Produk</h1>
                </div>
                <Image src={background.src} width={1280} height={320} alt="Katalog background" className="w-full h-full object-cover absolute top-0left-0 z-0 brightness-75" />
            </div>
            <h1 className='mt-20 text-2xl font-semibold text-center mb-10'>Produk Kami</h1>
            <div className="">
                <form className="flex px-4 items-center md:max-w-screen-md mx-auto">
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5  " placeholder="Search Our Product" />
                    </div>
                    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span>Search</span>
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-1">
                <CardProduct />
            </div>
        </div>
    );
}
