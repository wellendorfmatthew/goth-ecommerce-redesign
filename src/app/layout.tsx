import type { Metadata } from "next";
import { Risque, Gothic_A1 } from "next/font/google";
import "./globals.css";

const risque = Risque({
  variable: "--font-risque",
  subsets: ["latin"],
  weight: "400"
})

const gothicA1 = Gothic_A1({
  variable: "--font-gothic-a1",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Ethereal",
  description: "Shop for aesthetic goth clothes",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${risque.variable} ${gothicA1.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
