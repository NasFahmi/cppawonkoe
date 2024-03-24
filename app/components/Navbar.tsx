"use client"
import React, { useState } from "react";
import Image from 'next/image';
import logo from '../../public/logo.png';
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface navColor {
    isLandingPage?: boolean; 
}
export default function Navbar({isLandingPage}: navColor) {
    const [openMenu, setopenMenu] = useState(false);
    const handleNavbar = () => {
        setopenMenu(!openMenu)
    }
    return (
        <div className="">
            <nav className="container mx-auto h-24 flex justify-between items-center ">
                <Link href='/' className="flex justify-center items-center gap-2">
                    <Image
                        src={logo}
                        alt="logo"
                        className="cursor-pointer"
                    />
                    <h1 className={`font-semibold text-lg ${isLandingPage?`text-white`:`text-black`} `}>PAWONKOE</h1>
                </Link>

                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href='/#tentangkami'>
                            <li className={`text-sm ${isLandingPage?`text-white`:`text-black`} font-medium ml-4 hover:border-b-2 border-b-2  border-transparent  hover:${isLandingPage?`border-white`:`border-black`} transition ease-in-out duration-300`}>Tentang Kami</li>
                        </Link>

                        <Link href='/#perjalanan'>
                            <li className={`text-sm ${isLandingPage?`text-white`:`text-black`} font-medium ml-4 hover:border-b-2 border-b-2  border-transparent hover:${isLandingPage?`border-white`:`border-black`} transition ease-in-out duration-300`}>Perjalanan</li>
                        </Link>

                        <Link href='/#visimisi'>
                            <li className={`text-sm ${isLandingPage?`text-white`:`text-black`} font-medium ml-4 hover:border-b-2 border-b-2  border-transparent hover:${isLandingPage?`border-white`:`border-black`} transition ease-in-out duration-300`}>Visi Misi</li>
                        </Link>

                        <Link href='/katalog'>
                            <li className={`text-sm ${isLandingPage?`text-white`:`text-black`} font-medium ml-4 hover:border-b-2 border-b-2  border-transparent hover:${isLandingPage?`border-white`:`border-black`} transition ease-in-out duration-300`}>Katalog</li>
                        </Link>

                        <Link href='/#kontak'>
                            <li className={`text-sm ${isLandingPage?`text-white`:`text-black`} font-medium ml-4 hover:border-b-2 border-b-2  border-transparent hover:${isLandingPage?`border-white`:`border-black`} transition ease-in-out duration-300`}>Kontak</li>
                        </Link>
                    </ul>
                </div>

                <div onClick={handleNavbar} className="md:hidden cursor-pointer mr-8">
                    <AiOutlineMenu size={32} color={isLandingPage ? 'white' : 'black'} />
                </div>
                <div className={openMenu
                    ? 'fixed top-0 left-0 w-[65%] h-[100vh] sm:hidden bg-gray-300 p-10 ease-in-out duration-300'
                    : 'fixed left-[-100%] w-[65%] h-[100vh] top-0 ease-in-out duration-300'
                }>
                    <div className="w-full flex justify-end items-center">
                        <div onClick={handleNavbar} className="md:hidden cursor-pointer mr-8">
                            <AiOutlineClose size={32} color="black" />
                        </div>
                    </div>

                    <ul className="mt-10">
                        <Link href='/#tentangkami'>
                            <li className="text-xl text-black font-medium mb-4 ">Tentang Kami</li>
                        </Link>

                        <Link href='/#perjalanan'>
                            <li className="text-xl text-black font-medium mb-4 ">Perjalanan</li>
                        </Link>

                        <Link href='/#visimisi'>
                            <li className="text-xl text-black font-medium mb-4 ">Visi Misi</li>
                        </Link>

                        <Link href='/katalog'>
                            <li className="text-xl text-black font-medium mb-4 ">Katalog</li>
                        </Link>

                        <Link href='/#kontak'>
                            <li className="text-xl text-black font-medium mb-4 ">Kontak</li>
                        </Link>
                    </ul>

                </div>
            </nav>
        </div>
    );
}
