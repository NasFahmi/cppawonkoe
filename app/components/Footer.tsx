import React from 'react'
import Image from 'next/image'
import ShopeeImage from '../../public/sopi1.png'
import IgIcon from '../../public/ig-icon.png'
import WaImage from '../../public/whatsapp.png'
import GmailImage from '../../public/gmail.png'
import FacebookImage from '../../public/facebook.png'
import Link from 'next/link'
export default function Footer() {
    return (
        <div className="bg-gray-800 mt-20">
            <h1 className="text-2xl text-center font-semibold text-white mb-10 pt-10 lg:text-3xl">Temukan Kami</h1>
            <div className="mx-auto max-w-screen-lg flex justify-center items-start">
                <div
                    className=" mx-auto max-w-screen-xl px-4 flex justify-center items-center flex-col   md:px-10 md:flex-row md:gap-8  lg:mt-0 lg:items-stretch gap-8">
                    <div className="ml-4 lg:ml-0 md:w-full">
                        <div className=" md:w-full">
                            <h1 className="text-white text-xl md:text-lg mb-2">PAWONKOE</h1>
                            <h1 className="text-white text-base md:text-sm mb-4">PAWONKOE.BWI</h1>
                            <p className="text-white md:text-sm">Kami juga terus mengupdate informasi mengenai perusahaan melalui
                                media sosial, untuk informasi terkini anda dapat mengikuti media sosial kami.</p>
                        </div>
                        <div className="flex justify-start items-center mt-8 gap-2">
                            <div className="text-white w-6 h-6">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z"
                                            stroke="#ffffff"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <Link href='https://maps.app.goo.gl/LRtRixYMKA1tiok46'>
                                <p className="text-white">Banyuwangi, Jawa Timur</p>
                            </Link>
                        </div>
                        <div className="flex justify-start items-center mt-4 gap-2">
                            <div className="shopee w-12 h-12">
                                <Link href="https://shopee.co.id/pawonkoe_bwi">
                                    <Image src={ShopeeImage} alt='Pawonkoe Bwi' />

                                </Link>
                            </div>
                            <div className="instagram w-10 h-10">
                                <Link href="https://www.instagram.com/pawonkoe.bwi_rambakcumi/">
                                    <Image src={IgIcon} alt='Instagram Pawonkoe Bwi' />

                                </Link>
                            </div>
                            <div className="wa w-10 h-10">
                                <Link href="https://wa.me/+6281316869287" target='_blank'>
                                    <Image src={WaImage} alt='Whatsapp Pawonkoe Bwi' />

                                </Link>
                            </div>
                            <div className="email w-12 h-12">
                                <Link href="">
                                    <Image src={GmailImage} alt='Gmail Pawonkoe Bwi' />

                                </Link>
                            </div>
                            <div className="fb w-10 h-10">
                                <Link href="https://www.facebook.com/pawonkoebanyuwangi">
                                    <Image src={FacebookImage} alt='Gmail Pawonkoe Bwi' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/2 pr-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.0453252011717!2d114.14695737041085!3d-8.32120198595234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15550498a1e55%3A0x616bafa860db82bb!2sProdusen%20Rambak%20Cumi%20dan%20aneka%20samval%20Pawon%20koe%20Banyuwangi!5e0!3m2!1sid!2sid!4v1700216465014!5m2!1sid!2sid"
                        style={{ border: '0', borderRadius: '10px', width: '300px', height: '200px', maxWidth: '380px', maxHeight: '280px' }}
                        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="bg-gray-900 flex justify-center items-center py-2 mt-20">
                <h1 className="text-white">@2023 PawonKoe. All right reserved</h1>
            </div>
        </div>


    );
}
{/* <div className="hidden md:block md:w-1/2 pr-10">
<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.0453252011717!2d114.14695737041085!3d-8.32120198595234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15550498a1e55%3A0x616bafa860db82bb!2sProdusen%20Rambak%20Cumi%20dan%20aneka%20samval%20Pawon%20koe%20Banyuwangi!5e0!3m2!1sid!2sid!4v1700216465014!5m2!1sid!2sid"
    style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    className="rounded-2xl w-[300px] h-[200px] lg:w-[380px] lg:h-[280px] ">
</div>
</iframe>
</div>
</div >
 */}