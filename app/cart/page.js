"use client"
import useCart from "../(store)/store";

export default function CartPage() {
    const cart = useCart((state) => state.cart);

    return (
        <div>
            <h2>Cart</h2>
            {cart.length <= 0 ? (
                <p>Empty cart</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <p>Name: {item.name || "N/A"}</p>
                            <p>Description: {item.description || "N/A"}</p>
                            <p>Price: ${item.cost / 100}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
