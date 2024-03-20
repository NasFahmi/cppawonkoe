export default function DetailProduct({ params }: { params: { slug: string } }) {
    return <div>Product {params.slug}</div>
}
// {
//     params: {
//         params : {
//             slug : String
//         }
//     }
// }