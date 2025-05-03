"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/public/RR_logo.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-transparent font-heebo text-light fixed w-full top-0 z-50 ">
      <div className="w-11/12 mx-auto px-0">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image className="w-16" src={logo} alt="Ripanul_Alam"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="border-b-2 border-transparent hover:border-amber-50 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="border-b-2 border-transparent hover:border-amber-50 transition-colors duration-200">
              About
            </Link>
            <Link href="/projects" className="border-b-2 border-transparent hover:border-amber-50 transition-colors duration-200">
              Projects
            </Link>
            <Link href="/contact" className="border-b-2 border-transparent hover:border-amber-50 transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-indigo-400 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-indigo-400 transition-colors duration-200"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-indigo-400 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-indigo-400 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
