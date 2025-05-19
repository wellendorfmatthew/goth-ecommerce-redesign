import { MainHero } from "../types";
import HeroOne from "../public/images/heros/main/root-hero-1.jpg";
import HeroTwo from "../public/images/heros/main/root-hero-2.jpg";
import HeroThree from "../public/images/heros/main/root-hero-3.jpg";
import HeroFour from "../public/images/heros/main/root-hero-4.jpg";


export const mainHero: MainHero = {
    heros: [
        {
            src: HeroOne,
            alt: "Woman with makeup looking straight at viewer"
        },
        {
            src: HeroTwo,
            alt: "Woman with witch hat walking"
        },
        {
            src: HeroThree,
            alt: "Woman with witch hat lying down on steps"
        },
        {
            src: HeroFour,
            alt: "Woman with hood looking straight at viewer"
        },
    ]
}