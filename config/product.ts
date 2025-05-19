import { Products } from "../types";
import ProductOne from "../public/images/products/product1.jpg";
import ProductTwo from "../public/images/products/product2.jpg";
import ProductThree from "../public/images/products/product3.jpg";
import ProductFour from "../public/images/products/product4.jpg";
import ProductFive from "../public/images/products/product5.jpg";
import ProductSix from "../public/images/products/product6.jpg";
import ProductSeven from "../public/images/products/product7.jpg";
import ProductEight from "../public/images/products/product8.jpg";

export const products: Products = {
    products: [
        {
        name: "Darknova Dress",
        category: "Dresses",
        price: "$79.99",
        src: ProductOne
        },
        {
        name: "Netheria Dress",
        category: "Dresses",
        price: "$79.99",
        src: ProductTwo
        },
        {
        name: "Morningstar Dress",
        category: "Dresses",
        price: "$79.99",
        src: ProductThree
        },
        {
        name: "Nightwane Dress",
        category: "Dresses",
        price: "$79.99",
        src: ProductFour
        },
        // {
        // name: "Midnight Shoes",
        // category: "Shoes",
        // price: "$99.99",
        // src: ProductFive
        // },
        // {
        // name: "Mournful Boots",
        // category: "Shoes",
        // price: "$99.99",
        // src: ProductSix
        // },
        // {
        // name: "Bewitching Heels",
        // category: "Shoes",
        // price: "$99.99",
        // src: ProductSeven
        // },
        // {
        // name: "Ruptura Boots",
        // category: "Shoes",
        // price: "$99.99",
        // src: ProductEight
        // },
    ]
}