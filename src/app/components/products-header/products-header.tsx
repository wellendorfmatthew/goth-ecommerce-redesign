import Filter from "../../../../public/icons/filter.png";
import Image from "next/image";

export default function ProductsHeader() {
    return (
        <div className="w-full items-center flex justify-between px-8 py-4">
            <p className="font-semibold text-medium">Products</p>
            <div className="flex gap-4 items-center justify-center">
                <Image src={Filter} alt="Filter" />
                <p className="text-small font-medium">Filters & Sort</p>
            </div>
        </div>
    )
}