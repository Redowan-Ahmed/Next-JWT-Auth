import Image from "next/image"

const Product = (props) => {
    return (
        <div>
            <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image src={props.product.image} alt={props.product.name} width={500} height={600} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-600 font-bold">
                            <a href="#">
                               {props.product.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{props.product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product
