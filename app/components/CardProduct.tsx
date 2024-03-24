import Image from "next/image"
import Link from "next/link"

interface product {
    image?: string;
    title?:string;
    description?:string;
    price?:string; 
    slug?:string
}
export default function CardProduct({image,title,description,price,slug}:product) {
    return (
        <div className="flex justify-center items-center">
            <div className="block rounded-lg bg-slate-100 shadow-md w-44 md:w-52 ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                    <Image className="rounded-lg object-cover h-40  w-full" src={image!}
                        alt="" width={1000} height={1000} />
                    <Link href={'/katalog/' + slug!}>
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                    </Link>
                </div>

                <div className="p-2">
                    <div className="flex justify-between">
                        <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-ellipsis line-clamp-1">
                            {title}
                        </h5>
                    </div>
                    <p className="mb-1 text-sm text-neutral-600 dark:text-neutral-200 text-ellipsis line-clamp-2">
                        {description}
                    </p>
                    <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                        Rp. {price}
                    </h5>
                </div>
            </div>
        </div>
    )
}