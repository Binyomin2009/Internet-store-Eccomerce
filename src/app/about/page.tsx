"use client"

import { useState } from "react"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MessageSquare } from "lucide-react"

// For this example, I'll use placeholders for the images
// In your actual code, replace these with your image imports
import service1 from "../../../src/images/Services (1).png"
import service2 from "../../../src/images/Services (2).png"
import service3 from "../../../src/images/Services (3).png"
import service4 from "../../../src/images/Services (4).png"
import user1 from "../../../src/images/Frame 874.png"
import user2 from "../../../src/images/Frame 875.png"
import user3 from "../../../src/images/Frame 876.png"
import african from "../../../src/images/Side Image.png"


const services = [service1, service2, service3, service4]

const teamMembers = [
    {
        image: user1,
        name: "Tom Cruise",
        position: "Founder & Chairman",
    },
    {
        image: user2,
        name: "Tom Cruise",
        position: "Founder & Chairman",
    },
    {
        image: user3,
        name: "Tom Cruise",
        position: "Founder & Chairman",
    },
]

export default function AboutSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <p className="text-lg sm:text-xl font-bold mb-8">Home / About</p>

            {/* Our Story Section */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">Our Story</h1>
                    <p className="text-gray-700 leading-relaxed">
                        Launched in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace with an active presence
                        in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has
                        10,500 sellers and 300 brands and serves 3 million customers across the region.
                        <br />
                        <br />
                        <br />
                        Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse
                        assortment in categories ranging from consumer electronics to household goods and fashion.
                    </p>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                    <Image
                        src={african || "/placeholder.svg"}
                        alt="2 african"
                        width={400}
                        height={500}
                        className="rounded-lg object-cover max-h-[500px] w-auto"
                    />
                </div>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {services.map((service, index) => {
                    const isActive = activeIndex === index

                    return (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`border rounded-lg p-6 text-center cursor-pointer transition-colors duration-300
                ${isActive ? "bg-[#DB4444] text-white" : "hover:bg-[#DB4444] hover:text-white"}`}
                        >
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={service || "/placeholder.svg"}
                                    alt={`Service ${index + 1}`}
                                    width={80}
                                    height={80}
                                    className={`${isActive ? "brightness-0 invert" : ""}`}
                                />
                            </div>
                            <h2 className="text-xl font-extrabold mb-2">10.5k</h2>
                            <p>Sellers active on our site</p>
                        </div>
                    )
                })}
            </div>

            {/* Team Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="w-full h-auto"
                        />
                        <div className="p-4">
                            <p className="mb-1">
                                <span className="font-bold">{member.name}</span>
                                <br />
                                {member.position}
                            </p>
                            <div className="flex gap-3 mt-2">
                                <button className="text-gray-700 hover:text-[#DB4444] transition-colors">
                                    <Facebook size={20} />
                                </button>
                                <button className="text-gray-700 hover:text-[#DB4444] transition-colors">
                                    <Instagram size={20} />
                                </button>
                                <button className="text-gray-700 hover:text-[#DB4444] transition-colors">
                                    <Twitter size={20} />
                                </button>
                                <button className="text-gray-700 hover:text-[#DB4444] transition-colors">
                                    <MessageSquare size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
