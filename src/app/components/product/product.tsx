"use client"

import { Card, Button } from "flowbite-react";
import { Product } from "../../../../types";
import Image from "next/image";
import { ThemeProvider, } from "flowbite-react";
import { cardTheme } from "../themes/themes";
import { buttonTheme } from "../themes/themes";

type ProductProp = {
    product: Product;
}

export default function ProductCard({ product }: ProductProp) {
    return (
        <ThemeProvider theme={cardTheme}>
            <Card className="text-center rounded-none border-none shadow-none" renderImage={() => <Image src={product.image} alt={product.name} />}>
                <p className="font-(family-name:--font-gothic-a1) font-bold">{product.name}</p>
                <p className="font-(family-name:--font-gothic-a1) font-semibold">{product.price}</p>
                <ThemeProvider theme={buttonTheme}>
                    <Button color={"dark"} className="bg-black outline-none text-small text-white" size="lg">Add to Cart</Button>
                </ThemeProvider>
            </Card>
        </ThemeProvider>
    )
}