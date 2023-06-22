'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    const [showNavLinks, setShowNavLinks] = useState(false);

    const toggleNavLinks = () => {
        setShowNavLinks(!showNavLinks);
    };

    return (
        <div className='border boder-black'>
            <div className="flex p-4 flex-row justify-between border-solid border-black">
                <p className="text-orange-400 h-[1em] w-[1em]">LentaStore</p>
                <nav className="flex items-center space-x-5 justify-between">
                    <ul className={`hidden sm:flex ${showNavLinks ? 'block' : 'hidden'}`}>
                        <li className="ml-4">Home</li>
                        <li className="ml-4">Shop Online</li>
                        <li className="ml-4">What's News</li>
                        <li className="ml-4">Contact</li>
                        <li>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="h-[1em] w-[1em] ml-4"
                                style={{ color: "#fb923c" }}
                            />
                        </li>
                    </ul>
                </nav>
                <button className="sm:hidden" onClick={() => toggleNavLinks()}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="h-[1em] w-[1em]"
                        style={{ color: "#fb923c" }}
                    />
                </button>
            </div>
            <div className='flex flex-row justify-center'>
                {showNavLinks && (
                    <ul className="sm:hidden items-center text-center">
                        <li>Home</li>
                        <li>Shop Online</li>
                        <li>What's News</li>
                        <li>Contact</li>
                        <li>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="h-[1em] w-[1em] "
                                style={{ color: "#fb923c" }}
                            />
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}
