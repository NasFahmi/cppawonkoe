"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Rambak1 from '@/public/rambak1.jpeg'
import Rambak2 from '@/public/rambak2.jpeg'
import Rambak3 from '@/public/rambak3.jpeg'
import Sambal1 from '@/public/sambal1.jpeg'
import Sambal2 from '@/public/sambal2.jpeg'
import ShopeImage from '@/public/shopee.png'
import 'swiper/css';
import 'swiper/css/navigation';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
interface ProductData {
    image: StaticImageData[];
    title: string;
    description: string;
    price: string;
    spesification: string;
    link: string;
    varians?: string[]; // Make varians optional
  }
const data : ProductData = {
    'image': [
        Rambak1,
        Rambak2,
        Rambak3,
        Sambal1,
        Sambal2,
    ],
    'title': 'RamBak Cumi',
    'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus vitae quaerat quidem illum at sit odit assumenda aut error corporis?',
    'price': '15000',
    'spesification': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus vitae quaerat quidem illum at sit odit assumenda aut error corporis?',
    'link': 'https://shopee.co.id/produk-pawonkoe-Rambak-cumi-original-45-gram-oleh-oleh-khas-Banyuwangi-i.478354204.22420031948?sp_atk=b43adc0a-7d2e-4420-a6a4-8ff332f985de&xptdk=b43adc0a-7d2e-4420-a6a4-8ff332f985de'
}
export default function DetailProduct({ params }: { params: { slug: string } }) {
    return (
        <div className="">
            <p>{params.slug}</p>
            <div className=" px-4 md:px-20 w-full  justify-center items-center flex-col bg-white py-10">
                <div className="flex justify-center items-start gap-10 flex-col md:flex-row mb-10">
                    <Carousel />
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl font-semibold mb-2">Nama {data.title}</h1>
                        <h1 className="text-2xl font-semibold mb-1">Rp. {data.price}</h1>
                        <br />
                        <h1 className="font-semibold">Varian : </h1>
                        <ol>
                            {data?.varians?.map((items, index) => (
                                <li className="text-lg" key={index}>{items}</li>
                            ))}
                        </ol>
                        <br />
                        <Link href={data.link}
                            className="block w-full md:w-fit px-8 py-2 mt-4 text-sm font-medium text-center text-white transition-colors duration-150 bg-orange-500 border border-transparent rounded-lg active:bg-orange-600 hover:bg-orange-700 shadow-xl">
                            <div className="flex justify-center items-center ">
                                <Image src={ShopeImage} alt="Shopee Logo" className="w-8 h-8 mr-2" />
                                <span>Shopee</span>
                            </div>
                        </Link>
                    </div>

                </div>
                <h1 className="text-2xl font-semibold mb-1">Deskripsi</h1>
                <p className="text-base">{data.description}</p>
                <div className="mt-2">
                    <h1 className="text-2xl font-semibold">Product Spesifikasi</h1>
                    <p className="text-base">{data.spesification}</p>
                </div>
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
            {data.image.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image
                        className="object-cover"
                        src={item}
                        alt={`${item}`}
                        fill={true}
                        sizes="100vw"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

// {
//     params: {
//         params : {
//             slug : String
//         }
//     }
// }