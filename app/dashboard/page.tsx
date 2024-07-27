import Header from '@/components/organism/header'
import SideBar from '@/components/organism/sidebar'
import React from 'react'

export default function Dashboard() {
    return (
        <>
            <div className="flex h-screen">
                <SideBar />
                <div className="flex flex-grow flex-col">
                    <Header />
                </div>
            </div>
        </>
    )
}
