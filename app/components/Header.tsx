import React from "react";
import Navbar from "./Navbar";
import background from '../../public/bg3.jpg';

export default function Header() {
    return (
        <div className="bg-cover w-full h-full" style={{ backgroundImage: `url(${background.src})` }}>
            <Navbar isLandingPage={true} />
            <div className="mx-auto container h-80 px-10 md:px-20 mt-20  ">
                <h1 className="text-lg md:text-2xl font-semibold mb-2 text-gray-50">Rasa Yang Menyatukan Kita</h1>
                <div className="w-full md:w-3/4 lg:w-1/2">
                    <p className="text-sm md:text-base text-white font-light tracking-wide leading-relaxed">
                        Selamat datang di PawonKoe, tempat dimana kelezatan laut menciptakan pengalaman unik yang
                        menyatukan semua orang. Kami bangga mempersembahkan berbagai snack segar, 100% berasal dari
                        lautan yang luas.
                    </p>
                </div>
            </div>
        </div>
    );
}
