'use client'
import React, { useState } from 'react'

export default function ProjectSearch() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <input type="text" className='p-2 w-44 border-2 border-primary rounded-md' placeholder='Project Search' />
            <div className="ml-2 relative inline-block text-left">
                <button
                    type="button"
                    className="p-2 w-44 border-2 border-primary rounded-md bg-white flex justify-between items-center"
                    onClick={toggleDropdown}
                >
                    Filter
                    <svg
                        className="ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-44 bg-white border border-primary rounded-md shadow-lg z-10">
                        <ul className="py-1">
                            <li>
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() => {
                                        // Handle filter option click
                                        setIsOpen(false);
                                    }}
                                >
                                    Option 1
                                </button>
                            </li>
                            <li>
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() => {
                                        // Handle filter option click
                                        setIsOpen(false);
                                    }}
                                >
                                    Option 2
                                </button>
                            </li>
                            <li>
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    onClick={() => {
                                        // Handle filter option click
                                        setIsOpen(false);
                                    }}
                                >
                                    Option 3
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}
