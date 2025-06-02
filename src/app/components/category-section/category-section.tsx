import { Products } from "../../../../types";
import ProductRow from "../product-row/product-row";
import Image from "next/image";

type ProductsProp = {
    products: Products;
}

export default function CategorySection({ products }: ProductsProp) {
    return (
        <div className="flex flex-col w-full">
            <ProductRow products={products} />
            <div className="w-full relative">
                <Image src={products.hero?.image || ""} alt={products.hero?.altText || ""} className="w-full aspect-[1.51/1]"></Image>
                <p className="absolute bottom-8 right-12 font-(family-name:--font-risque) text-large underline underline-offset-8">{products.hero?.altText || ""}</p>
            </div>
        </div>
    )
}