"use client"

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Camera, Monitor, Smartphone, Headphones, Gamepad } from "lucide-react";

const categories = [
    { id: 1, name: "Phones", icon: <Smartphone size={28} /> },
    { id: 2, name: "Computers", icon: <Monitor size={28} /> },
    { id: 4, name: "Camera", icon: <Camera size={28} /> },
    { id: 5, name: "Headphones", icon: <Headphones size={28} /> },
    { id: 6, name: "Gaming", icon: <Gamepad size={28} /> },
    { id: 7, name: "Drones", icon: <Camera size={28} /> },
    { id: 8, name: "TVs", icon: <Monitor size={28} /> },
];

export default function Section3() {
    const [startIndex, setStartIndex] = useState(0);
    const [active, setActive] = useState("Camera");
    const itemsPerSlide = 6;

    useEffect(() => {
        const autoScroll = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(autoScroll);
    }, [startIndex]);

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % categories.length);
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + categories.length) % categories.length);
    };

    const visibleCategories = [];
    for (let i = 0; i < itemsPerSlide; i++) {
        visibleCategories.push(categories[(startIndex + i) % categories.length]);
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6 flex-wrap">
                <div>
                    <p className="text-[#DB4444] font-medium">Categories</p>
                    <h1 className="text-2xl font-bold">Browse By Category</h1>
                </div>

                <div className="flex gap-2 mt-4 sm:mt-0">
                    <button onClick={handlePrev} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                        <ArrowLeft />
                    </button>
                    <button onClick={handleNext} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                        <ArrowRight />
                    </button>
                </div>
            </div>

            <div className="flex gap-4 transition-all duration-700 ease-in-out justify-center sm:justify-around flex-wrap">
                {visibleCategories.map((cat) => (
                    <div
                        key={cat.id}
                        onClick={() => setActive(cat.name)}
                        className={`cursor-pointer border rounded-md p-6 flex flex-col items-center justify-center w-[140px] h-[130px] transition-all
                            ${active === cat.name
                                ? "bg-[#DB4444] text-white"
                                : "bg-white hover:shadow-md hover:scale-105 text-black"
                            }`}
                    >
                        <div className="mb-2">{cat.icon}</div>
                        <span className="font-medium text-sm">{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
    