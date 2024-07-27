'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function SideBar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <div className="h-min-screen w-64 bg-primary shadow-md flex flex-col justify-between">
            <div>
                <div className="flex flex-col items-center py-8">
                    <nav className="mt-4 w-full font-semibold">
                        <ul>
                            <li className="w-full">
                                <Link href="/dashboard">
                                    <div className={`flex items-center p-4 rounded-lg ${isActive('/dashboard') ? 'text-white bg-secondary font-bold' : 'text-white hover:bg-secondary'}`}>
                                        Dashboard
                                    </div>
                                </Link>
                            </li>
                            <li className="w-full mt-2">
                                <Link href="/project">
                                    <div className={`flex items-center p-4 rounded-lg ${isActive('/project') ? 'text-white bg-secondary font-bold' : 'text-white hover:bg-secondary'}`}>
                                        Project
                                    </div>
                                </Link>
                            </li>
                            <li className="w-full mt-2">
                                <Link href="/task">
                                    <div className={`flex items-center p-4 rounded-lg ${isActive('/task') ? 'text-white bg-secondary' : 'text-white hover:bg-secondary'}`}>
                                        Task
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="w-full p-4">
                <Link href="/">
                    <div className="w-full flex items-center p-4 rounded-lg text-white hover:bg-secondary">
                        Logout
                    </div>
                </Link>
            </div>
        </div>
    )
}
