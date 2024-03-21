import Navbar from "@/app/components/Navbar"

export default function DetailProduct({ params }: { params: { slug: string } }) {
    return (
        <div className="">
            <Navbar isLandingPage={false}/>
            <div>Product {params.slug}</div>
        </div>
    )
}
// {
//     params: {
//         params : {
//             slug : String
//         }
//     }
// }