import { StaticImageData } from "next/image";

export type NavConfig = {
    logo?: string,
    links: NavLinks[],
}

export type FooterConfig = {
    links: NavLinks[],
    icons: NavLinks[],
    copyright: string
}

export type NavLinks = {
    name: string,
    href: string,
    icon?: StaticImageData
}