import { Hero, MainHero } from "../types";
import HeroOne from "../public/images/heros/main/root-hero-1.jpg";
import HeroTwo from "../public/images/heros/main/root-hero-2.jpg";
import HeroThree from "../public/images/heros/main/root-hero-3.jpg";
import HeroFour from "../public/images/heros/main/root-hero-4.jpg";
import DressesHero from "../public/images/heros/categories/dresses-hero.png";
import ShoesHero from "../public/images/heros/categories/shoes-hero.png";

export const mainHero: MainHero = {
    heros: [
        {
            image: HeroOne,
            altText: "Woman with makeup looking straight at viewer"
        },
        {
            image: HeroTwo,
            altText: "Woman with witch hat walking"
        },
        {
            image: HeroThree,
            altText: "Woman with witch hat lying down on steps"
        },
        {
            image: HeroFour,
            altText: "Woman with hood looking straight at viewer"
        },
    ]
}

export const dressesHero: Hero = {
    image: DressesHero,
    altText: "Shop Dresses",
    category: "Dresses"
}

export const shoesHero: Hero = {
    image: ShoesHero,
    altText: "Shop Shoes",
    category: "Shoes"
}