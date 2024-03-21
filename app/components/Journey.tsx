import React from 'react';
import Image from 'next/image'
import JurneyImage from '../../public/journey.png'
export default function Journey() {
    return (
        <div className="">
            <div id="perjalanan"
                className="mx-auto max-w-screen-xl px-4 flex justify-center items-center flex-col  md:mt-20 md:px-10 md:flex-row-reverse md:gap-8 lg:items-stretch md:justify-around bg-blue-200 pb-10 rounded-tr-[100px]">
                <div className="mb-10 md:w-1/3">
                    <div className="lg:w-11/12">
                        <h1 className="text-2xl font-semibold mb-4 pt-20 lg:text-3xl">Perjalanan</h1>
                        <p className="text-sm lg:text-base">Berawal dari pandemi Yang semua orang kehilangan
                            pekerjaan dan usahanya tidak jalan lagi, Kami berinisiatif memulai usaha rumahan dengan memberdayakan
                            para ibu-ibu rumah tangga di sekeliling kami. Alhamdulillah Pawonkoe masih bertahan dan bahkan
                            berkembang hingga saat ini.</p>
                    </div>
                </div>
                <div className="w-8/12 md:w-1/3 pt-16">
                    <Image src={JurneyImage} alt='Perjalanan' className='w-full lg:w-3/4'/>
                </div>
            </div>
        </div>
    );
}