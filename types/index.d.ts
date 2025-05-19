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
    src: StaticImageData,
    alt: string,
    category?: string,
}

export type MainHero = {
    heros: Hero[],
}

export type Product = {
    name: string,
    category: string,
    price: string,
    src: StaticImageData,
}

export type Products = {
    products: Product[],
}

export type ProductSection = {
    products: Product[],
    hero: Hero[],
}