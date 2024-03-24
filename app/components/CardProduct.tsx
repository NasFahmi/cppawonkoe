import Image from "next/image"
import Link from "next/link"
import Rambak1 from '@/public/rambak1.jpeg'
import Rambak2 from '@/public/rambak2.jpeg'
import Rambak3 from '@/public/rambak3.jpeg'
import Sambal1 from '@/public/sambal1.jpeg'
import Sambal2 from '@/public/sambal2.jpeg'
const data = [
    {
        'image': Rambak1
    },
    {
        'image': Rambak2
    },
    {
        'image': Rambak3
    },
    {
        'image': Sambal1
    },
    {
        'image': Sambal2
    },
]
export default function CardProduct() {
    return (
        <div className="flex justify-center items-center">
            <div className="block rounded-lg bg-slate-100 shadow-md w-44 md:w-52 ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                    <Image className="rounded-lg  sm:m-h-64  w-full" src={Rambak1}
                        alt="" width={1280} height={800} />
                    <Link href="#!">
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                    </Link>
                </div>

                <div className="p-2">
                    <div className="flex justify-between">
                        <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 line-clamp-1">
                            Rambak Cumi
                        </h5>
                    </div>
                    <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-200 text-ellipsis line-clamp-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita veritatis corrupti quia eaque quae esse dolorum, voluptas architecto reiciendis ex!
                    </p>
                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                        Rp. 15.000
                    </h5>
                </div>
            </div>
        </div>
    )
}