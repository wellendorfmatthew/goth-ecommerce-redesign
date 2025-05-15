import { FooterConfig } from "../types";
import Facebook from "./../public/icons/facebook.png";
import YouTube from "./../public/icons/youtube.png";
import Twitter from "./../public/icons/twitter.png";
import Instagram from "./../public/icons/instagram.png";
import Linkedin from "./../public/icons/linkedin.png";
    
export const footerConfig: FooterConfig = {
    links: [
        {
            name: "Home",
            href: "/"
        },
                {
            name: "Products",
            href: "/products"
        },
                {
            name: "About Us",
            href: "/about"
        },
                {
            name: "Contact",
            href: "/contact"
        },
    ],
    icons: [
        {
            name: "YouTube",
            href: "https://www.youtube.com",
            icon: YouTube
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com",
            icon: Facebook
        },
        {
            name: "Twitter",
            href: "https://www.x.com",
            icon: Twitter
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com",
            icon: Instagram
        },
        {
            name: "Linkedin",
            href: "https://www.linkedin.com",
            icon: Linkedin
        },
    ],
    copyright: "Ethereal @ 2025. All rights reserved."
}