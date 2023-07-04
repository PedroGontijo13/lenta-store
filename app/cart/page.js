"use client"
import useCart from "../(store)/store";
import CartProducts from "@/components/cartProducts";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const cart = useCart((state) => state.cart);

    // Calculate the total cost
    const totalCost = cart.reduce((total, item) => total + item.cost, 0);

    const cartItems = useCart((state) => state.cart);
    const router = useRouter();

    async function checkout() {
        const lineItems = cartItems.map((cartItem) => ({
            price: cartItem.price_id,
            quantity: 1,
        }));

        const res = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ lineItems }),
        });

        const data = await res.json();
        router.push(data.session.url);
    }

    return (
        <div className="justify-center">
            <div className="flex justify-center flex-row">
                <h2 className="text-2xl font-bold mb-4">Cart</h2>
            </div>
            <div className="flex justify-center flex-row">
                {cart.length <= 0 ? (
                    <p className="text-gray-600">Empty cart</p>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <CartProducts
                                key={index}
                                name={item.name}
                                cost={item.cost}
                                price_id={item.price_id}
                                quantity={item.quantity}
                            />
                        ))}
                        <p className="text-xl font-bold mt-4">Total Cost: ${totalCost / 100}</p>
                    </div>
                )}
            </div>
            <div className="flex justify-center flex-row">
                {cart &&
                    <button
                        onClick={checkout}
                        className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Checkout
                    </button>
                }
            </div>
        </div>
    );
}
