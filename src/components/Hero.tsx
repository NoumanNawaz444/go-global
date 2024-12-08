"use client";
import logo from "@/images/global png.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import heroImg from "@/images/hero-img.png"

// Navbar Component
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-[#FCF8F1] bg-opacity-30">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" title="Home" className="flex">
                            <img className="w-auto h-8" src={logo.src} alt="Global Logo" />
                        </Link>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        type="button"
                        className="inline-flex p-2 text-white transition-all duration-200 rounded-full lg:hidden bg-blue-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                       
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 8h16M4 16h16"
                                />
                            </svg>
                        
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <Link href="#services" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                            Services
                        </Link>
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="text-base text-black transition-all duration-200 hover:text-opacity-80 focus:outline-none flex justify-center items-center"
                            >
                                <span>Destinations</span>
                                <svg
                                    className="inline w-4 h-4 ml-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 z-10 mt-2 bg-white border rounded-lg shadow-lg w-48">
                                    <Link href="/destinations/usa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        USA
                                    </Link>
                                    <Link href="/destinations/canada" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Canada
                                    </Link>
                                    <Link href="/destinations/uk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        UK
                                    </Link>
                                    <Link href="/destinations/australia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Australia
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href="#about" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                            About Us
                        </Link>
                        <Link href="#contact" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                            Contact
                        </Link>
                    </div>
                    <Link
                        href="#get-started"
                        className="hidden lg:inline-flex items-center justify-center px-7 py-2.5 text-base font-semibold text-white bg-blue-500 rounded-full hover:scale-95 duration-200 "
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 z-50 h-full w-screen bg-white shadow-lg transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <div className="p-4">
                    <div className="flex justify-between items-center mb-5">
                        <Image src={logo.src} alt="Go Global" width={120} height={30} />
                        <button
                            className="inline-flex p-2 mb-4 text-white transition-all duration-200 rounded-full bg-blue-800"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <Link href="#services" className="block text-base text-black hover:text-opacity-80">
                        Services
                    </Link>
                    <div className="mt-2">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="block text-base text-black transition-all duration-200 hover:text-opacity-80 focus:outline-none"
                        >
                            Destinations
                            <svg
                                className="inline w-4 h-4 ml-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="mt-2 bg-white border rounded-lg shadow-lg">
                                <Link href="/destinations/usa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    USA
                                </Link>
                                <Link href="/destinations/canada" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Canada
                                </Link>
                                <Link href="/destinations/uk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    UK
                                </Link>
                                <Link href="/destinations/australia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Australia
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="#about" className="block pt-2 text-base text-black hover:text-opacity-80">
                        About Us
                    </Link>
                    <Link href="#contact" className="block py-2 text-base text-black hover:text-opacity-80">
                        Contact
                    </Link>
                    <Link
                        href="#get-started"
                        className="inline-block px-5 py-2 mt-4 text-base font-semibold text-center text-white bg-blue-500 rounded-full w-auto hover:scale-95"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
};

// Hero Component
const Hero = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <section className="bg-blue-500 rounded-lg sm:rounded-br-[250px] rounded-br-[150px] m-3 bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Study Abroad Made Easy</p>
                            <h1 className="mt-4 text-3xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                                Discover Your Dream Destination
                            </h1>
                            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                                Empowering students to achieve their global education goals.
                            </p>
                            <a
                                href="#services" 
                                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-800 rounded-full lg:mt-16 hover:scale-95"
                            >
                                View Our Services
                                <svg
                                    className="w-6 h-6 ml-8 -mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src={heroImg.src}
                                alt="Study Abroad"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
