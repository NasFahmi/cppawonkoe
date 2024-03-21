
export default function DetailProduct({ params }: { params: { slug: string } }) {
    return (
        <div className="">
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