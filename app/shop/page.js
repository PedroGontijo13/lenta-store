"use client"
import SearchDeals from '@/components/searchDeals';

export default function ShopPage() {
    return (
        <div>
            <div className="flex justify-center flex-row">
                <h2 className="text-2xl text-orange-400 font-bold mb-4 my-2">Shop</h2>
            </div>
            <div className="flex flex-row justify-center my-2">
                <p>Products:</p>
            </div>
            <div className="flex flex-row justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search products"
                    // value={searchTerm}
                    // onChange={handleSearchChange}
                    className="px-4 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-row justify-center">
                <SearchDeals />
            </div>
        </div>
    );
}
