import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { UserRound } from "lucide-react";
import { navConfig } from "../../../../config/nav";
import { NavConfig } from "../../../../types";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
            <div className="flex items-center justify-between w-full px-12 py-4 gap-16 outline-separator outline-1">
                <h1 className="text-large font-(family-name:--font-risque) ">{navConfig.logo}</h1>
                <div className="flex items-center justify-center gap-8 max-tablet:hidden">
                    {
                        navConfig.links.map((link, index) => (
                            <Link key={index} href={link.href} className="font-medium">{link.name}</Link>
                        ))
                    }
                </div>
                <form className="tablet:w-1/5 max-mobile:hidden">   
                    <div className="relative pl-2 px-4 bg-gray-100">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <Search />
                        </div>
                        <input type="text" id="default-search" className="block w-full p-4 py-2 ps-10 text-small border border-none outline-none" placeholder="Search"/>
                    </div>
                </form>
                <div className="flex items-center justify-center gap-8">
                    <div className="mobile:hidden">
                        <Search />
                    </div>
                    <div className="">
                        <ShoppingCart />
                    </div>
                    <div className="rounded-full flex items-center justify-center p-2 bg-gray-100 max-tablet:hidden">
                        <UserRound />
                    </div>
                    <div className="tablet:hidden">
                        <Menu />
                    </div>
                </div>
            </div>
    )
}