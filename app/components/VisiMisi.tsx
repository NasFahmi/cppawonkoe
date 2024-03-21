import React from 'react';
import Image from 'next/image'
import VisionImage from '../../public/vision.png'
import MissionImage from '../../public/mission.png'
import GoalImage from '../../public/goal.png'
export default function VisiMisi() {
    return (
        <div className="">
            <div id="visimisi"
                className="mx-auto max-w-screen-xl px-4 flex justify-center items-center flex-col md:px-10  md:gap-8 lg:items-stretch md:justify-around bg-blue-200 pb-10 rounded-bl-[100px] shadow-xl">
                <h1 className="text-2xl text-center font-semibold mb-4 pt-20 lg:text-3xl whitespace-nowrap">Visi, Misi, dan Tujuan</h1>
                <div
                    className="mx-auto max-w-screen-xl px-4 flex justify-center items-center flex-col  md:mt-16 md:px-10 md:flex-row-reverse md:gap-8 lg:items-stretch md:justify-around">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex justify-center items-center flex-col mt-8">
                            <div className="flex justify-center items-center">
                                <Image src={VisionImage} alt='vision' className='w-1/4' />
                            </div>
                            <div className="w-3/4 mt-5">
                                <h1 className="text-xl text-center font-semibold mb-3">Visi</h1>
                                <p className="text-sm text-center">Menjadi unit pengolah ikan yang inovatif dan menjaminkeamanan mutu
                                    produk dan akan selalu bisa di andalkan</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-col mt-8">
                            <div className="flex justify-center items-center">
                                <Image src={MissionImage} alt='mission'  className='w-1/4' />

                            </div>
                            <div className="w-3/4 mt-5">
                                <h1 className="text-xl text-center font-semibold mb-3">Misi</h1>
                                <p className="text-sm text-center mb-20">Meningkatkan perekonomian dan pemberdayaan warga sekitar mengenalkan
                                    cita rasa nusantara ke dunia.Menguasai pasar baik lokal maupun lintas provisi, Cegah stunting.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-col mt-8 md:col-span-2 lg:col-auto ">
                            <div className="flex justify-center items-center">
                                <Image src={GoalImage} alt='Goal'  className='w-1/4' />

                            </div>
                            <div className="lg:w-3/4 md:w-5/12 w-3/4 mt-5">
                                <h1 className="text-xl text-center font-semibold mb-3">Tujuan</h1>
                                <p className="text-sm text-center">Produk kami di kenal dunia
                                    Memperkerjakan lebih banyak karyawan. Produk hasil perikanan yang ber SNI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}