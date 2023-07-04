export default function CartProducts(props) {
    const { name, cost } = props;

    return (
        <div className="max-w-xs bg-white shadow-md w-full rounded-lg overflow-hidden my-5">
            <div className="p-4">
                <h3 className="text-gray-900 font-semibold text-lg">{name}</h3>
                <p className="mt-2 text-gray-600">${cost / 100}</p>
            </div>
        </div>
    );
}
