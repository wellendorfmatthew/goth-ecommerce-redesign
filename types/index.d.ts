import { StaticImageData } from "next/image";

export type NavConfig = {
    logo?: string,
    links: HeaderLinks[],
    copyright?: string,
}

export type NavLinks = {
    name: string,
    href: string,
    icon?: StaticImageData
}