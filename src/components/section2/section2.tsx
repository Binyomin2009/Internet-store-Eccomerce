"use client"

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import img1 from "../../../src/images/Services.png";
import img2 from "../../../src/images/Services (2).png";
import img3 from "../../../src/images/Services (3).png";
import img4 from "../../../src/images/Services (3).png";
import img5 from "../../../src/images/Services.png";
import img6 from "../../../src/images/Services (2).png";
import { IProducts } from "../../../interface";
import Link from "next/link";

const products: IProducts = [
    { id: 1, name: "Computer", price: 313, image: img1 },
    { id: 2, name: "Keyboard", price: 99, image: img2 },
    { id: 3, name: "Monitor", price: 225, image: img3 },
    { id: 4, name: "Mouse", price: 49, image: img4 },
    { id: 5, name: "Headphones", price: 129, image: img5 },
    { id: 6, name: "Webcam", price: 89, image: img6 },
];

export default function Section2() {
    const [timeLeft, setTimeLeft] = useState({});
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerSlide = 4;

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = endDate.getTime() - now.getTime();

            const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
            const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
            const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0");
            const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Автопрокрутка по одному
    useEffect(() => {
        const autoplay = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(autoplay);
    }, [startIndex]);

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % products.length);
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const getVisibleProducts = () => {
        const visible = [];
        for (let i = 0; i < itemsPerSlide; i++) {
            visible.push(products[(startIndex + i) % products.length]);
        }
        return visible;
    };

    const visibleProducts = getVisibleProducts();

    return (
        <div className="p-6 overflow-hidden">
            <div className="flex justify-between items-center mb-6 flex-wrap">
                <div>
                    <p className="text-[#DB4444] font-medium">Today’s</p>
                    <h1 className="text-2xl font-bold">Flash Sales</h1>
                </div>

                <div className="flex items-center gap-4 justify-center sm:justify-start mt-4 sm:mt-0">
                    {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
                        <div key={label} className="text-center">
                            <p className="font-bold text-xl">
                                {Object.values(timeLeft)[i]}
                                {i < 3 && <span className="text-[#DB4444]"> : </span>}
                            </p>
                            <span className="text-[10px] text-gray-500">{label}</span>
                        </div>
                    ))}
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
                {visibleProducts.map((prod) => (
                    <div
                        key={prod.id}
                        className="bg-gray-100 p-5 w-full sm:w-[200px] md:w-[250px] rounded-lg relative group transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
                    >
                        <Image
                            src={prod.image}
                            alt={prod.name}
                            width={300}
                            height={300}
                            className="w-full h-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <FavoriteBorderIcon className="text-gray-600 hover:text-red-500 cursor-pointer transition duration-300" />
                            <VisibilityIcon className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300" />
                        </div>

                        <button className="bg-black text-white w-full p-2 mt-3 opacity-0 group-hover:opacity-100 transition duration-300">
                            Add To Cart
                        </button>

                        <p className="mt-2 font-medium">{prod.name}</p>
                        <p className="text-[red]">{prod.price}$</p>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
                {products.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === startIndex ? "bg-[#DB4444]" : "bg-gray-300"
                            } transition-all duration-300`}
                    />
                ))}
            </div>
            <Link href="/products">
                <button className="bg-[#DB4444] p-[10px_15px] text-[white] font-[600] mx-auto mt-[20px] block cursor-pointer">
                    View all Products
                </button>
            </Link>
        </div>
    );
}
