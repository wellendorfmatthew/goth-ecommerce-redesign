import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Image from "next/image";
import ABOUT from "../../../../public/images/heros/pages/aboutus.jpg";
import ContentStructure from "@/app/components/content/content";
import { contactContent } from "../../../../config/content";
import ContactForm from "@/app/components/contact-form/contact-form";

export default function Contact() {
    return (
        <div className="flex flex-col justify-between items-center h-screen overflow-x-hidden w-full">
            <Header />
            <ContentStructure content={contactContent} />
            <ContactForm />
            <Footer />
        </div>
    )
}