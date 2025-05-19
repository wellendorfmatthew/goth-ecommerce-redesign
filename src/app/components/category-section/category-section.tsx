"use client"

import Products from "../product/product";
import { products } from "../../../../config/product";
import DressHero from "../../../../public/images/heros/categories/dresses-hero.jpg";
import Image from "next/image";

export default function CategorySection() {
    return (
        <div className="flex flex-col w-full">
            <div className="grid grid-cols-4 w-full gap-2">
                {
                    products.products.map((product, index) => (
                        <Products product={product} key={index} />
                    ))
                }
            </div>
            <div className="w-full">
                <Image src={DressHero} alt="DressHero" />
                <p className="absolute bottom-0 right-0">Shop Dresses</p>
            </div>
        </div>
    )
}