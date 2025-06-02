import { createTheme } from "flowbite-react"

export const cardTheme = createTheme({
    card: {
        root: {
            base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
            children: "flex h-full flex-col justify-center gap-2 p-6 bg-white",
            horizontal: {
            off: "flex-col",
            on: "flex-col md:max-w-xl md:flex-row"
            },
            href: "hover:bg-gray-100 dark:hover:bg-gray-700"
        },
        img: {
            base: "",
            horizontal: {
            off: "rounded-t-lg",
            on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }
        }
    }
})

    export const carouselTheme = createTheme({
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

    export const buttonTheme = createTheme({
        button: {
            base: "relative flex items-center justify-center text-center focus:outline-none active:outline-none",
            disabled: "pointer-events-none opacity-50",
            fullSized: "w-full",
            grouped: "rounded-none border-l-0 first:rounded-s-lg first:border-l last:rounded-e-lg focus:ring-2",
            pill: "rounded-full",
            size: {
                xs: "h-8 px-3 text-xs",
                sm: "h-9 px-3 text-sm",
                md: "h-12 px-5 w-[125px] text-base",
                lg: "h-12 px-5 text-base",
                xl: "h-[52px] px-6 text-base"
            },
            color: {
                default: "bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                alternative: "border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
                blue: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                cyan: "bg-cyan-700 text-white hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800",
                dark: "bg-gray-950 text-white hover:brightness-100",
                black: "bg-black text-white hover:bg-zinc-800",
                gray: "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
                green: "bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
                indigo: "bg-indigo-700 text-white hover:bg-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800",
                light: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
                lime: "bg-lime-700 text-white hover:bg-lime-800 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800",
                pink: "bg-pink-700 text-white hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800",
                purple: "bg-purple-700 text-white hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800",
                red: "bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
                teal: "bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800",
                yellow: "bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-400 dark:focus:ring-yellow-900",
                transparent: "bg-white text-black active:ring-0 active:outline-none",
                dropdown: "bg-white text-black active:ring-0 active:outline-none",
                dropdownItem: "bg-white text-black active:ring-0 active:outline-none",
            },
            outlineColor: {
                default: "border border-primary-700 text-primary-700 hover:border-primary-800 hover:bg-primary-800 hover:text-white focus:ring-primary-300 dark:border-primary-600 dark:text-primary-500 dark:hover:border-primary-700 dark:hover:bg-primary-700 dark:hover:text-white dark:focus:ring-primary-800",
                blue: "border border-blue-700 text-blue-700 hover:border-blue-800 hover:bg-blue-800 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:hover:text-white dark:focus:ring-blue-800",
                cyan: "border border-cyan-700 text-cyan-700 hover:border-cyan-800 hover:bg-cyan-800 hover:text-white focus:ring-cyan-300 dark:border-cyan-500 dark:text-cyan-500 dark:hover:border-cyan-700 dark:hover:bg-cyan-700 dark:hover:text-white dark:focus:ring-cyan-800",
                dark: "",
                gray: "border border-gray-700 text-gray-700 hover:border-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-800",
                green: "border border-green-700 text-green-700 hover:border-green-800 hover:bg-green-800 hover:text-white focus:ring-green-300 dark:border-green-600 dark:text-green-500 dark:hover:border-green-700 dark:hover:bg-green-700 dark:hover:text-white dark:focus:ring-green-800",
                indigo: "border border-indigo-700 text-indigo-700 hover:border-indigo-800 hover:bg-indigo-800 hover:text-white focus:ring-indigo-300 dark:border-indigo-600 dark:text-indigo-400 dark:hover:border-indigo-700 dark:hover:bg-indigo-700 dark:hover:text-white dark:focus:ring-indigo-800",
                lime: "border border-lime-700 text-lime-700 hover:border-lime-800 hover:bg-lime-800 hover:text-white focus:ring-lime-300 dark:border-lime-600 dark:text-lime-500 dark:hover:border-lime-700 dark:hover:bg-lime-700 dark:hover:text-white dark:focus:ring-lime-800",
                pink: "border border-pink-700 text-pink-700 hover:border-pink-800 hover:bg-pink-800 hover:text-white focus:ring-pink-300 dark:border-pink-600 dark:text-pink-500 dark:hover:border-pink-700 dark:hover:bg-pink-700 dark:hover:text-white dark:focus:ring-pink-800",
                purple: "border border-purple-700 text-purple-700 hover:border-purple-800 hover:bg-purple-800 hover:text-white focus:ring-purple-300 dark:border-purple-600 dark:text-purple-400 dark:hover:border-purple-700 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-800",
                red: "border border-red-700 text-red-700 hover:border-red-800 hover:bg-red-800 hover:text-white focus:ring-red-300 dark:border-red-600 dark:text-red-500 dark:hover:border-red-700 dark:hover:bg-red-700 dark:hover:text-white dark:focus:ring-red-800",
                teal: "border border-teal-700 text-teal-700 hover:border-teal-800 hover:bg-teal-800 hover:text-white focus:ring-teal-300 dark:border-teal-600 dark:text-teal-400 dark:hover:border-teal-700 dark:hover:bg-teal-700 dark:hover:text-white dark:focus:ring-teal-800",
                yellow: "border border-yellow-400 text-yellow-400 hover:border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900",
                transparent: "",
                dropdown: "",
                dropdownItem: ""
            }
        }
    })

    export const drawerTheme = createTheme({
        drawer: {
            root: {
                base: "fixed z-40 overflow-y-auto bg-white p-4 transition-transform dark:bg-white",
                backdrop: "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
                edge: "bottom-16",
                position: {
                top: {
                    on: "left-0 right-0 top-0 w-full transform-none",
                    off: "left-0 right-0 top-0 w-full -translate-y-full"
                },
                right: {
                    on: "right-0 top-0 h-screen w-80 transform-none",
                    off: "right-0 top-0 h-screen w-80 translate-x-full"
                },
                bottom: {
                    on: "bottom-0 left-0 right-0 w-full transform-none",
                    off: "bottom-0 left-0 right-0 w-full translate-y-full"
                },
                left: {
                    on: "left-0 top-0 h-screen w-80 transform-none",
                    off: "left-0 top-0 h-screen w-80 -translate-x-full"
                }
                }
            },
            header: {
                inner: {
                closeButton: "absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                closeIcon: "h-4 w-4",
                titleCloseIcon: "sr-only",
                titleIcon: "me-2.5 h-0 w-0",
                titleText: "mb-0 inline-flex items-center font-semibold dark:text-black dark:text-[24px]"
                },
                collapsed: {
                on: "hidden",
                off: "block"
                }
            },
            items: {
                base: ""
            }
        }
    })

    export const accordionTheme = createTheme({
        accordion: {
            root: {
                base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
                flush: {
                off: "rounded-lg border",
                on: "border-b"
                }
            },
            content: {
                base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"
            },
            title: {
                arrow: {
                base: "h-6 w-6 shrink-0",
                open: {
                    off: "",
                    on: "rotate-180"
                }
                },
                base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
                flush: {
                off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
                on: "bg-transparent dark:bg-transparent"
                },
                heading: "",
                open: {
                off: "",
                on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                }
            }
        }
    })

    export const dropdownTheme = createTheme({
        dropdown: {
            arrowIcon: "ml-2 h-4 w-4",
            content: "py-1 focus:outline-none bg-white text-black",
            floating: {
                animation: "transition-opacity",
                arrow: {
                base: "absolute z-10 h-2 w-2 rotate-45",
                style: {
                    dark: "bg-gray-900 dark:bg-gray-700",
                    light: "bg-white",
                    auto: "bg-white dark:bg-gray-700"
                },
                placement: "-4px"
                },
                base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
                content: "py-1 text-sm text-gray-700 dark:text-gray-200",
                divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
                header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
                hidden: "invisible opacity-0",
                item: {
                container: "",
                base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
                icon: "mr-2 h-4 w-4"
                },
                style: {
                dark: "bg-white text-black dark:bg-white",
                light: "border border-gray-200 bg-white text-gray-900",
                auto: "border bg-white text-gray-900 dark:border-none dark:bg-white dark:text-black"
                },
                target: "w-fit"
            },
            inlineWrapper: "flex items-center"
        }
    })

    export const textInputTheme = createTheme({
        textInput: {
            "base": "flex",
            "addon": "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
            "field": {
                "base": "relative w-full",
                "icon": {
                "base": "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
                },
                "rightIcon": {
                "base": "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
                },
                "input": {
                "base": "block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
                "sizes": {
                    "sm": "p-2 sm:text-xs",
                    "md": "p-2.5 text-sm",
                    "lg": "p-4 sm:text-base"
                },
                "colors": {
                    "gray": "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
                    "info": "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                    "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                    "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
                },
                "withRightIcon": {
                    "on": "pr-10",
                    "off": ""
                },
                "withIcon": {
                    "on": "pl-10",
                    "off": ""
                },
                "withAddon": {
                    "on": "rounded-r-lg",
                    "off": "rounded-lg"
                },
                "withShadow": {
                    "on": "shadow-sm dark:shadow-sm-light",
                    "off": ""
                }
                }
            }
        }
    })

    export const textAreaTheme = createTheme({
        textarea: {
            "base": "block w-full rounded-lg border p-2.5 text-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
            "colors": {
                "gray": "border-gray-300 bg-gray-50 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
                "info": "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
            },
            "withShadow": {
                "on": "shadow-sm dark:shadow-sm-light",
                "off": ""
            }
        }
    })