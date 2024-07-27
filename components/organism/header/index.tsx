import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Hi, Rifki. Welcome back to Dashboard Admin!</p>
      </div>
      <div className="relative flex items-center">
        <span className="text-gray-600 mr-4">Hello, <span className="font-bold">Rifki</span></span>
        <Image
          src="/assets/images/profile-user.png"
          width={40}
          height={40}
          alt="logo"
          className="cursor-pointer"
        />
      </div>
    </div>
  )
}
