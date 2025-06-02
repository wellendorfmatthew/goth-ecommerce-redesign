import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Image from "next/image";
import ABOUT from "../../../../public/images/heros/pages/aboutus.jpg";
import ContentStructure from "@/app/components/content/content";
import { aboutContent } from "../../../../config/content";

export default function AboutUs() {
    return (
        <div className="flex flex-col justify-between items-center h-screen overflow-x-hidden w-full">
            <Header />
            <ContentStructure content={aboutContent} />
            <Footer />
        </div>
    )
}