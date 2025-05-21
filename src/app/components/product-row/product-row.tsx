import { Products } from "../../../../types";
import ProductCard from "../product/product";

type ProductsProp = {
    products: Products;
}

export default function ProductRow({ products }: ProductsProp) {
    return (
        <div className="grid grid-cols-4 w-full gap-2 py-2 max-tablet:grid-cols-2">
            {
                products.products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))
            }
        </div>
    )
}