import { Filter } from "../types";

export const featuredFilters: Filter = {
    name: "Featured",
    options: [
        {
            filter: "Best Selling"
        },
        {
            filter: "Alphabetically, A-Z"
        },
        {
            filter: "Alphabetically, Z-A"
        },
        {
            filter: "Price, Low to High"
        },
        {
            filter: "Price, High to Low"
        },
        {
            filter: "Date, Old to New"
        },
        {
            filter: "Date, New to Old"
        },
    ]
}

export const availabilityFilters: Filter = {
    name: "Availability",
    options: [
        {
            filter: "In Stock",
            stock: 20
        },
        {
            filter: "Out of Stock",
            stock: 20
        },
    ]
}

export const sizeFilters: Filter = {
    name: "Availability",
    options: [
        {
            filter: "XS",
            stock: 20
        },
        {
            filter: "S",
            stock: 20
        },
        {
            filter: "M",
            stock: 20
        },
        {
            filter: "L",
            stock: 20
        },
        {
            filter: "XL",
            stock: 20
        },
        {
            filter: "XXL",
            stock: 20
        },
        {
            filter: "3XL",
            stock: 20
        },
        {
            filter: "4XL",
            stock: 20
        },
    ]
}

export const priceFilters: Filter = {
    name: "Availability",
    options: [
        {
            filter: "From",
        },
        {
            filter: "To",
        },
    ]
}

export const categoryFilters: Filter = {
    name: "Availability",
    options: [
        {
            filter: "Dresses",
            stock: 20
        },
        {
            filter: "Shoes",
            stock: 20
        },
    ]
}

export const typeFilters: Filter = {
    name: "Availability",
    options: [
        {
            filter: "Long Sleeve",
            stock: 20
        },
        {
            filter: "See Through Sleeve",
            stock: 20
        },
        {
            filter: "Short Sleeve",
            stock: 20
        },
        {
            filter: "Boots",
            stock: 20
        },
        {
            filter: "Heels",
            stock: 20
        },
        {
            filter: "High Tops",
            stock: 20
        },
    ]
}