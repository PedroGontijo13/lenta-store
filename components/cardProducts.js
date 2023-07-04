"use client";
import useCart from "@/app/(store)/store";
import { useRouter } from "next/navigation";

export default function CardProducts(props) {
  const setProducts = useCart(state => state.setProduct)
  const { product } = props;
  const { id: price_id, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;
  const router = useRouter()


  const ProductClick = () => {
    const newProduct = {
      name,
      description,
      price_id,
      cost,
      productInfo
    }
    setProducts({ newProduct })
    router.push('/product?price_id=' + price_id)
  };

  return (
    <div className="max-w-xs bg-white shadow-md w-full rounded-lg overflow-hidden m-5">
      <img src={productInfo.images[0]} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-lg">{name}</h3>
        <p className="mt-2 text-gray-600">${cost / 100}</p>
        <button
          onClick={ProductClick} // Call handleAddToCart when the button is clicked
          className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
