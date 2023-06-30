'use client'
import useStore from "@/app/(store)/store";
import CardProducts from "./cardProducts";
import { useEffect } from 'react'

export default function Deals() {
    const items = useStore((state) => state.items)
    const addItem = useStore((state) => state.addItems)

    useEffect(() => {
        const fetchDataAndSave = async () => {
            const response = await fetch('https://api.stripe.com/sk_test_51NFnLOIrs3QRYXjf3wHraqWYWfg7QZCOJJeaubivqf7k4BXJ85lbWnK4JtwWEEtZjfgYbGPdcqqBGhw6GOo0dHjh00ZAjR6NnK/v1/products/')
            const item = await response.json()
            addItem(item)
            console.log(item)
            console.log(items.length)
        }
        fetchDataAndSave()
    }, [addItem])
    const products = [
        {
            image: "path/to/product-image-1.jpg",
            name: "Product 1",
            price: "19.99",
        },
        {
            image: "path/to/product-image-2.jpg",
            name: "Product 2",
            price: "29.99",
        },
        {
            image: "path/to/product-image-3.jpg",
            name: "Product 3",
            price: "39.99",
        }
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {products.map((product, index) => (
                <CardProducts
                    key={index}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </div>
    );
}
