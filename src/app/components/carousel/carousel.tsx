import { Carousel, createTheme, ThemeProvider, } from "flowbite-react";
import { mainHero } from "../../../../config/heros";
import Image from "next/image";
import { carouselTheme } from "../themes/themes";

export default function HeroCarousel() {

    return (
        <ThemeProvider theme={carouselTheme}>
            <div className="w-full h-full relative">
                <Carousel>
                    {
                        mainHero.heros.map((hero, index) => (
                            <div className="relative w-full aspect-[1.51/1]" key={index}>
                                <Image src={hero.image} alt={hero.altText} fill className="object-cover" priority />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </ThemeProvider>
    )
}