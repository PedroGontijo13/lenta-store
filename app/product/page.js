"use client"
import { useRouter } from "next/navigation";
import useCart from "../(store)/store";

export default function ProductPage(props) {
    const { searchParams } = props;
    const { price_id } = searchParams;
    const product = useCart((state) => state.product);
    const addItemToCart = useCart((state) => state.addItemToCart);
    const cart = useCart((state) => state.cart);
    const { cost, productInfo, name, description } = product;
    const router = useRouter();

    if (!product?.name) {
        window.location.href = "/";
    }

    function handleAddToCart() {
        const newItem = {
            quantity: 1,
            price_id,
            name,
            cost,
        };
        addItemToCart({ newItem });
        router.push("/cart");
    }

    // Check if the product is already in the cart
    const isInCart = cart.some((item) => item.price_id === price_id);

    return (
        <div className="flex flex-col p-4">
            <div className="grid p-2 shadow-2xl grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
                <div className="">
                    <img src={productInfo.images[0]} alt={name} className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex md:flex-col md:items-start text-xl items-center justify-between gap-2">
                        <h3>{name}</h3>
                        <p className="md:text-base">${cost / 100}</p>
                    </div>
                    <p className="text-sm flex-1">{description}</p>
                    {!isInCart ? (
                        <button
                            onClick={handleAddToCart}
                            className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <button
                            className="mt-4 bg-gray-500 text-white font-bold py-2 px-4 rounded"
                            disabled
                        >
                            Added to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
