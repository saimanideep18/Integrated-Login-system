"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-black"
            >
              MyApp
            </Link>
            <nav className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 ml-6">
              <Link href="/" className="text-gray-600 hover:text-black">
                Home
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-black">
                Login
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            {/* Placeholder for user/profile actions */}
            <Link href="/dashboard" className="text-gray-600 hover:text-black">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
