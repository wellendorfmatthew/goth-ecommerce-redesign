"use client"

import { Card } from "flowbite-react";
import { Product } from "../../../../types";
import Image from "next/image";

type ProductProp = {
    product: Product;
}

export default function Products({ product }: ProductProp) {
    return (
        <Card className="flex flex-col gap-4 items-center justify-center" renderImage={() => <Image src={product.src} alt={product.name} />}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </Card>
    )
}