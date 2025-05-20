import { StaticImageData } from "next/image";

export type NavConfig = {
    logo?: string,
    links: NavLinks[],
}

export type FooterConfig = {
    links: NavLinks[],
    icons: NavLinks[],
    copyright: string,
}

export type NavLinks = {
    name: string,
    href: string,
    icon?: StaticImageData,
}

export type Hero = {
    image: StaticImageData,
    altText: string,
    category?: Category,
}

export type MainHero = {
    heros: Hero[],
}

export type Product = {
    name: string,
    category: Category,
    price: string,
    image: StaticImageData,
}

export type Products = {
    products: Product[],
    category?: Category,
    hero?: Hero
}

export type ProductSection = {
    products: Product[],
    hero: Hero[],
}

export type Category = "Dresses" | "Shoes";