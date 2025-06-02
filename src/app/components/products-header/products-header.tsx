import Filter from "../../../../public/icons/filter.png";
import Image from "next/image";
import FilterDrawer from "../drawer/drawer";

export default function ProductsHeader() {
    return (
        <div className="w-full items-center flex justify-between px-8 py-4">
            <p className="font-semibold text-medium">Products</p>
            <FilterDrawer />
        </div>
    )
}