import ProductCard from "../product/product";
import { Products } from "../../../../types";
import DressHero from "../../../../public/images/heros/categories/dresses-hero.png";
import Image from "next/image";

type ProductsProp = {
    products: Products;
}

export default function CategorySection({ products }: ProductsProp) {
    return (
        <div className="flex flex-col w-full">
            <div className="grid grid-cols-4 w-full gap-2 py-2">
                {
                    products.products.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))
                }
            </div>
            <div className="w-full relative">
                <Image src={products.hero?.image || ""} alt={products.hero?.altText || ""} className="w-full aspect-[1.51/1]"></Image>
                <p className="absolute bottom-8 right-12 font-(family-name:--font-risque) text-large underline underline-offset-8">{products.hero?.altText || ""}</p>
            </div>
        </div>
    )
}