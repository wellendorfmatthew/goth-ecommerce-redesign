'use client'

import { Carousel, createTheme, ThemeProvider, } from "flowbite-react";
import { mainHero } from "../../../../config/main-hero";
import Image from "next/image";

export default function HeroCarousel() {
    const carouselTheme = createTheme({
        carousel: {
            root: {
                base: "relative h-full w-full",
                leftControl: "hidden",
                rightControl: "hidden"
            },
            indicators: {
                active: {
                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-white dark:bg-gray-800"
                },
                base: "h-3 w-3 rounded-full",
                wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
            },
            item: {
                base: "relative w-full h-full",
                wrapper: {
                off: "w-full shrink-0 transform cursor-default snap-center",
                on: "w-full shrink-0 transform cursor-grab snap-center"
                }
            },
            control: {
                base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70",
                icon: "h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800"
            },
            scrollContainer: {
                base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-none",
                snap: "snap-x"
            }
        }
    })

    return (
        <ThemeProvider theme={carouselTheme}>
            <div className="w-full h-full relative">
                <Carousel>
                    {
                        mainHero.heros.map((hero, index) => (
                            <div className="relative w-full aspect-[1.51/1]" key={index}>
                                <Image src={hero.src} alt={hero.alt} fill className="object-cover" priority />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </ThemeProvider>
    )
}