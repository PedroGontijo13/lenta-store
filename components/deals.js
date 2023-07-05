import CardProducts from "./cardProducts";
import Stripe from "stripe";

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
    const products = await getStripeProducts()

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
