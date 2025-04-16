"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Drawer } from "@mui/material"
import { Heart, ShoppingCart, User, Menu } from "lucide-react"
import logo from "../../../src/images/fastcart.png"


export default function Navigation() {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/signup", label: "Sign Up" },
    ]

    return (
        <nav>
            <header className="w-full bg-white shadow-md z-50 flex items-center justify-between py-4 px-4 md:px-[150px]">
                <Link href="/" className="flex-shrink-0">
                    <Image src={logo || "/placeholder.svg"} alt="logo" width={150} height={50} />
                </Link>

                <div className="hidden md:flex items-center pt-[10px]">
                    {navLinks.map((link, index) => (
                        <Link key={link.href} className={`${index === 0 ? "pl-[120px]" : "pl-[50px]"}`} href={link.href}>
                            {link.label}
                        </Link>
                    ))}

                    <input
                        className="bg-[#80808021] ml-[90px] rounded-[5px] w-[200px] h-[35px] pl-[10px] placeholder:text-[13px]"
                        placeholder="What are you looking for?"
                        type="text"
                    />

                    <Link href="/wishlist">
                        <button className="pl-[50px]">
                            <Heart className="size-6 mb-[-6px] cursor-pointer" />
                        </button>
                    </Link>

                    <Link href="/cart">
                        <button className="pl-[35px]">
                            <ShoppingCart className="size-6 mb-[-6px] cursor-pointer" />
                        </button>
                    </Link>

                    <button className="pl-[35px]">
                        <User className="size-6 mb-[-6px] cursor-pointer" />
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden block" onClick={toggleDrawer} aria-label="Toggle menu">
                    <Menu className="w-6 h-6" />
                </button>
            </header>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        width: "70%",
                        maxWidth: "300px",
                        boxSizing: "border-box",
                        padding: "1rem",
                    },
                }}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-6 pt-2">
                        <Image src={logo || "/placeholder.svg"} alt="logo" width={120} height={40} />
                        <button onClick={toggleDrawer} className="p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mb-6">
                        <input
                            className="bg-[#80808021] w-full rounded-[5px] h-[40px] pl-[10px] placeholder:text-[13px]"
                            placeholder="What are you looking for?"
                            type="text"
                        />
                    </div>

                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="py-2 border-b border-gray-100 text-lg"
                                onClick={toggleDrawer}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-around mt-8">
                        <Link href="/wishlist" onClick={toggleDrawer}>
                            <button className="flex flex-col items-center">
                                <Heart className="size-6 cursor-pointer" />
                                <span className="text-xs mt-1">Wishlist</span>
                            </button>
                        </Link>

                        <Link href="/cart" onClick={toggleDrawer}>
                            <button className="flex flex-col items-center">
                                <ShoppingCart className="size-6 cursor-pointer" />
                                <span className="text-xs mt-1">Cart</span>
                            </button>
                        </Link>

                        <button className="flex flex-col items-center">
                            <User className="size-6 cursor-pointer" />
                            <span className="text-xs mt-1">Profile</span>
                        </button>
                    </div>
                </div>
            </Drawer>
        </nav>
    )
}
