import React from 'react';
import Image from 'next/image';
import TentangKami from '../../public/tentang-kami.png';
export default function About() {
    return (
        <div id="tentangkami"
            className=" mx-auto max-w-screen-xl px-4 flex justify-center items-center flex-col mt-10 md:mt-20  md:px-10 md:flex-row md:gap-8 lg:items-stretch ">
            <div className="mb-10 md:w-1/2">
                <div className="lg:w-8/12">
                    <h1 className="text-2xl font-semibold mb-4 pt-10 lg:text-3xl">Tentang Kami</h1>
                    <p className="text-sm lg:text-base">PAWONKOE Memulai usaha sejak maret 2021 Lokasi usaha
                        kami ada di desa sempu kabupaten Banyuwangi.
                        Berawal dari memproduksi aneka Sambal dan kini usaha kami
                        sudah berkembang dengan memproduksi aneka olahan dari
                        cumi seperti : Rambak baby cumi , rambak kulit cumi dan
                        sambal cumi kemangi. Produk kami bisa di dapat di market place atau
                        beberapa pusat oleh-oleh di banyuwangi.</p>
                </div>
            </div>
            <div className="w-10/12 md:w-1/2">
                <Image src={TentangKami} alt='Tentang Kami'/>
                {/* <img src="{{ asset('assets/images/tentang-kami.png') }}" alt="" > */}
            </div>
        </div>
    );
}