import { Content } from "../types";
import ABOUT from "../public/images/heros/pages/aboutus.jpg";
import ERROR from "../public/images/heros/pages/error.jpg";

export const aboutContent: Content = {
    title: "About Us",
    image: ABOUT,
    text: [
        `Created in 2017 by former red carpet stylist and stage wear designer Lindsay Hearts, Ethereal is a full-scale modern noir online boutique run from the heart of downtown Los Angeles. Featuring a mostly minimalist, ready to wear line of high-quality, inclusively-sized, vegan and cruelty-free pieces, as well as earth-friendly offerings for the body and home, Ethereal is the one stop shop for the dark mind and kind heart.`,
        `Our storefront is located on Melrose in Los Angeles. You can visit us at:\n6666 Grim Reaper Ave. Los Angeles, CA 96666.\nSun-Sat: 12pm-6pm`,
    ],
}

export const contactContent: Content = {
    title: "Contact Us",
    text: [
        `If you have any questions, please fill out the form below and\n we will get back to you as soon as we can! Our customer\n service hours are Mon-Friday 10am-5pm, excluding holidays.`,
    ],
}

export const errorContent: Content = {
    title: "404",
    subtitle: "Page Not Found",
    image: ERROR,
    text: [
        `The page you’re looking for does not exist. Try entering
        a new search address or go back to the home page.`,
    ],
}