"use client"

import { Drawer, DrawerHeader, DrawerItems, Button, ThemeProvider, Dropdown, Accordion, DropdownItem } from "flowbite-react";
import { useState } from "react";
import { buttonTheme, drawerTheme } from "../themes/themes";
import Filter from "../../../../public/icons/filter.png";
import Image from "next/image";
import { X } from "lucide-react";
import { featuredFilters } from "../../../../config/filters";


export default function FilterDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
        <div>
            <ThemeProvider theme={buttonTheme}>
                <Button color={"transparent"} size="lg" className="flex justify-center items-center gap-4 hover:underline" onClick={() => setIsOpen(true)}><Image src={Filter} alt="Filter" />Filters & Sort</Button>
            </ThemeProvider>
            <ThemeProvider theme={drawerTheme}>
                <Drawer open={isOpen} onClose={handleClose} position="right" className="flex flex-col items-center gap-3">
                    <div className="flex items-center justify-between w-98/100">
                        <p className="text-medium font-semibold">Filters & Sort</p>
                        <X onClick={handleClose} className="cursor-pointer" />
                    </div>
                    <DrawerItems className="flex items-center justify-center w-98/100">
                        <Dropdown label="Featured" className="w-full flex items-center justify-between">
                            {
                                featuredFilters.options.map((filter, index) => (
                                    <DropdownItem key={index} className="">{filter.filter}</DropdownItem>
                                ))
                            }
                        </Dropdown>
                    </DrawerItems>
                </Drawer>
            </ThemeProvider>
        </div>
    )
}