import CardProducts from "./cardProducts";

export default function Deals() {
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
