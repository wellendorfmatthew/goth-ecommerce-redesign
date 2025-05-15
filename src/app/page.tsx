import Image from "next/image";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <Header />
      <Footer />
    </div>
  );
}
