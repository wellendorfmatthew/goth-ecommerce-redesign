import Image from "next/image";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import HeroCarousel from "./components/carousel/carousel";
import CategorySection from "./components/category-section/category-section";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen overflow-x-hidden">
      <Header />
      <HeroCarousel />
      <CategorySection />
      <Footer />
    </div>
  );
}
