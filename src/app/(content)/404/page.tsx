import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Image from "next/image";
import ABOUT from "../../../../public/images/heros/pages/aboutus.jpg";
import ContentStructure from "@/app/components/content/content";
import { errorContent } from "../../../../config/content";
import { Button, ThemeProvider } from "flowbite-react";
import { buttonTheme } from "@/app/components/themes/themes";

export default function Error() {
    return (
        <div className="flex flex-col justify-between items-center h-screen overflow-x-hidden w-full">
            <Header />
            <ContentStructure content={errorContent} />
            <ThemeProvider theme={buttonTheme}>
                <Button color={"black"} className="bg-black text-small text-white mb-8 flex items-center justify-center w-[200px] py-5" >Back to Home</Button>
            </ThemeProvider>
            <Footer />
        </div>
    )
}