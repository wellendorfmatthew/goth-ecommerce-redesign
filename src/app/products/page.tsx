import ProductRow from "../components/product-row/product-row";
import { dressProducts, shoeProducts } from "../../../config/product";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ProductsHeader from "../components/products-header/products-header";

export default function ProductPage() {
    return (
        <div className="flex flex-col justify-between items-center h-screen overflow-x-hidden w-full">
            <Header />
            <ProductsHeader />
            <ProductRow products={dressProducts} />
            <ProductRow products={shoeProducts}  />
            <Footer />
        </div>
    )
}