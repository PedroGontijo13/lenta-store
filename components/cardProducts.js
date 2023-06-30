export default function CardProducts(props) {

    const { product } = props;
    const { id: price_id, unit_amount: cost, product: productInfo } = product;
    const { name, description } = productInfo;

    return (
        <div className="max-w-xs bg-white shadow-md w-full rounded-lg overflow-hidden m-5">
            <img src={productInfo.images[0]} alt={name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-gray-900 font-semibold text-lg">{name}</h3>
                <p className="mt-2 text-gray-600">${cost / 100}</p>
                <button
                    // onClick={handleAddToCart}
                    className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}