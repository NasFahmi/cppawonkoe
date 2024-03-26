"use client"
import background from '@/public/bg-katalog.jpg'
import Image from 'next/image';
import CardProduct from '../components/CardProduct';
import Rambak1 from '@/public/rambak1.jpeg'
import Rambak2 from '@/public/rambak2.jpeg'
import Rambak3 from '@/public/rambak3.jpeg'
import Sambal1 from '@/public/sambal1.jpeg'
import Sambal2 from '@/public/sambal2.jpeg'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import Pagination from '../components/Pagination';
import { useEffect, useState } from 'react';

const data = [
    {
        'image': Rambak1,
        'title': 'Rambak Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '15000',
        'slug': 'rambak-cumi'

    },
    {
        'image': Rambak2,
        'title': 'Rambak Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '20000',
        'slug': 'rambak-cumi'
    },
    {
        'image': Rambak3,
        'title': 'Rambak Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '25000',
        'slug': 'rambak-cumi'
    },
    {
        'image': Sambal1,
        'title': 'Sambal Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '5000',
        'slug': 'sambal-cumi'
    },
    {
        'image': Sambal2,
        'title': 'Sambal Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '20000',
        'slug': 'sambal-cumi'
    },
    {
        'image': Rambak1,
        'title': 'Rambak Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '15000',
        'slug': 'rambak-cumi'

    },
    {
        'image': Rambak2,
        'title': 'Rambak Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '20000',
        'slug': 'rambak-cumi'
    },
    {
        'image': Rambak3,
        'title': 'Rambak Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '25000',
        'slug': 'rambak-cumi'
    },
    {
        'image': Sambal1,
        'title': 'Sambal Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '5000',
        'slug': 'sambal-cumi'
    },
    {
        'image': Sambal2,
        'title': 'Sambal Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '20000',
        'slug': 'sambal-cumi'
    },
    {
        'image': Rambak1,
        'title': 'Rambak Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '15000',
        'slug': 'rambak-cumi'

    },
    {
        'image': Rambak2,
        'title': 'Rambak Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '20000',
        'slug': 'rambak-cumi'
    },
    {
        'image': Rambak3,
        'title': 'Rambak Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '25000',
        'slug': 'rambak-cumi'
    },
    {
        'image': Sambal1,
        'title': 'Sambal Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '5000',
        'slug': 'sambal-cumi'
    },
    {
        'image': Sambal2,
        'title': 'Sambal Cumi',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt totam distinctio explicabo praesentium consequatur sapiente fuga laudantium quas dolorem',
        'price': '20000',
        'slug': 'sambal-cumi'
    },
]
export default function Katalog() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini
    const itemsPerPage = 12; // Jumlah item yang ingin ditampilkan per halaman
    const handlePageChange = (pageNumber:any) => {
        setCurrentPage(pageNumber);

        // Perbarui URL dengan menambahkan parameter halaman
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber);
        replace(`${pathname}?${params.toString()}`);
    };
    useEffect(() => {
        // Mengatur currentPage dari parameter URL saat komponen dimuat
        const pageParam = searchParams.get('page');
        setCurrentPage(pageParam ? parseInt(pageParam) : 1);
    }, [searchParams]);
    const handleSearch = useDebouncedCallback((e: string) => {
        console.log(pathname)
        console.log(e)
        const params = new URLSearchParams(searchParams)
        if (e) {
            params.set('query', e)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)

    }, 300)
    const filteredData = searchParams.get('query')
        ? data.filter((item) =>
            item.title.toLowerCase().includes(searchParams.get('query')!.toLowerCase())
        )
        : data; // Display all data if no search term

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem); // Menyaring item untuk halaman saat ini

    return (
        <div className="">
            <div className="relative w-full h-80">
                <div className="flex justify-center items-center z-[20]  absolute top-0 left-0 right-0 bottom-0">
                    <h1 className="text-xl text-center md:text-3xl font-bold mb-2 text-gray-50">Selamat Datang di Katalog Produk</h1>
                </div>
                <Image src={background.src} width={1280} height={320} alt="Katalog background" className="w-full h-full object-cover absolute top-0left-0 z-0 brightness-75" />
            </div>
            <h1 className='mt-20 text-2xl font-semibold text-center mb-10'>Produk Kami</h1>
            <div className="">
                <div className="flex px-4 items-center md:max-w-screen-md mx-auto">
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5  " placeholder="Search Our Product" onChange={(e) => handleSearch(e.target.value)} defaultValue={searchParams.get('query')?.toString()} />
                    </div>
                    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span>Search</span>
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center">

                <div className="grid max-w-screen-lg grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 py-10">
                    {currentItems.map((item, index) => (
                        <CardProduct key={index} image={item.image.src} description={item.description} price={item.price} title={item.title} slug={item.slug} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredData.length / itemsPerPage)} onPageChange={handlePageChange} />
            </div>
        </div>
    );
}
