"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import useCart from '@/app/(store)/store';
import Link from 'next/link';

export default function NavBar() {
    const [showNavLinks, setShowNavLinks] = useState(false);
    const cart = useCart((state) => state.cart);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };

    return (
        <div className="border">
            <div className="flex p-4 flex-row justify-between items-center">
                <p className="text-orange-400 text-2xl font-bold">LentaStore</p>
                <nav className="flex items-center space-x-5">
                    <ul className={`hidden sm:flex ${showNavLinks ? 'block' : 'hidden'}`}>
                        <li className='px-2'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='px-2'>Shop Online</li>
                        <li className='px-2'>What's New</li>
                        <li className='px-2'>Contact</li>
                        <li className='px-2'>
                            <Link href="/cart">
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className="h-6 w-6 text-orange-400"
                                />
                                {cart.length > 0 && <span className="text-orange-400">{cart.length}</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className="sm:hidden" onClick={toggleNavLinks}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="h-6 w-6 text-orange-400"
                    />
                </button>
            </div>
            {showNavLinks && (
                <div className="flex justify-center">
                    <ul className="sm:hidden flex flex-col items-center space-y-2">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>Shop Online</li>
                        <li>What's New</li>
                        <li>Contact</li>
                        <li>
                            <Link href="/cart">
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className="h-6 w-6 text-orange-400"
                                />
                                {cart.length > 0 && <span className="text-orange-400">{cart.length}</span>}
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
