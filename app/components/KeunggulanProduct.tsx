import Link from "next/link";
import React from "react";
export default function KeunggulanProduct() {
    return (
        <div className="bg-blue-200 pb-10 md:mt-28 rounded-3xl shadow-xl">
            <h1 className="text-2xl text-center font-semibold mb-10 pt-10 lg:text-3xl">Keunggulan Produk Kami</h1>
            <div id="keungulan"
                className=" mx-auto max-w-screen-xl px-4 flex justify-center items-center flex-col   md:px-10 md:flex-row md:gap-8 lg:mt-0 lg:items-stretch gap-8">
                <div className="ml-4 md:w-1/2">
                    <div className="lg:w-8/12">
                        <ul className="px-5 list-disc lg:text-lg whitespace-nowrap">
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
                            className="w-1/2 px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#276ED8] border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700">Lihat
                            Semua Product</a>
                    </div>
                </div>
                <div className="w-10/12 md:w-1/2 flex justify-center items-center">
                    {/* Carousel */}
                    <h1>ini carousel</h1>
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