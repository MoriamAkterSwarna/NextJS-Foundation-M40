// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//     return (
//         <nav className='flex gap-5'>
//       <Link href="/">Home</Link>
//       <Link href="/about">About</Link>
//       <Link href="/foods">Foods</Link>
//       <Link href="/contact">Contact</Link>
//     </nav>
//     );
// };

// export default Navbar;


"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar(){

  const pathname = usePathname()

  return (
    <nav className="flex gap-6">

      <Link
        href="/"
        className={pathname === "/" 
        ? "text-blue-600 font-bold" 
        : "text-gray-500"}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={pathname === "/about" 
        ? "text-blue-600 font-bold" 
        : "text-gray-500"}
      >
        About
      </Link>

      <Link
        href="/blog"
        className={pathname === "/blog" 
        ? "text-blue-600 font-bold" 
        : "text-gray-500"}
      >
        Blog
      </Link>

    </nav>
  )
}