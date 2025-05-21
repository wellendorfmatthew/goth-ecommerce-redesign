import Link from "next/link";
import { Copyright } from "lucide-react";
import { footerConfig } from "../../../../config/footer";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center w-full outline-separator outline-1 gap-8 py-16">
            <div className="flex items-center justify-center gap-8">
                {
                    footerConfig.links.map((link, index) => (
                        <Link key={index} href={link.href} className="font-medium">{link.name}</Link>
                    ))
                }
            </div>
            <div className="flex items-center justify-center gap-4">
                {
                    footerConfig.icons.map((link, index) => (
                        <Link key={index} href={link.href} className="font-medium"><Image src={link.icon || ""} alt={link.name} /></Link>
                    ))
                }
            </div>
            <p className="mt-4">{footerConfig.copyright}</p>
        </div>
    )
}