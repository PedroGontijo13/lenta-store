'use client'
import useStore from "@/app/(store)/store";
import CardProducts from "./cardProducts";
import { useEffect } from 'react'
import Stripe from "stripe";
import { loadStripe } from '@stripe/stripe-js';

async function getStripeProducts() {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
        apiVersion: "2022-11-15",
    });
    const res = await stripe.prices.list({
        expand: ["data.product"],
    });
    const prices = res.data;
    return prices;
}

export default async function Deals() {
    const products = await getStripeProducts();
    console.log(products);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {products.map((product, index) => (
                <CardProducts
                    key={index}
                    product={product}
                />
            ))}
        </div>
    );
}
