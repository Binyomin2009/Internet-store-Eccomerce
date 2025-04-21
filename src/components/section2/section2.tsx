"use client"

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getProd } from "@/api/productSlice";
import { IProducts } from "../../../interface";

export default function Section2() {
    const [timeLeft, setTimeLeft] = useState({});
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerSlide = 4;
    const data = useSelector((store: any) => store.product.data)
    console.log(data);

    const dispatch = useDispatch()

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

    useEffect(() => {
        const autoplay = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(autoplay);
    }, [startIndex]);

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % (data?.length || 1));
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - 1 + (data?.length || 1)) % (data?.length || 1));
    };

    const getVisibleProducts = () => {
        if (!data?.length) return [];
        const visible = [];
        for (let i = 0; i < itemsPerSlide; i++) {
            visible.push(data[(startIndex + i) % data.length]);
        }
        return visible;
    };

    const visibleProducts = getVisibleProducts();

    useEffect(() => {
        dispatch(getProd())
    }, [dispatch])

    return (
        <div className="p-6 overflow-hidden">
            <div className="flex justify-between items-center mb-6 flex-wrap">
                <div>
                    <p className="text-[#DB4444] font-medium">Today's</p>
                    <h1 className="text-2xl font-bold">Flash Sales</h1>
                </div>

                <div className="flex items-center gap-4 justify-center sm:justify-start mt-4 sm:mt-0">
                    {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
                        <div key={`timer-${label}`} className="text-center">
                            <p className="font-bold text-xl">
                                {timeLeft[label.toLowerCase()]}
                                {label !== "Seconds" && <span className="text-[#DB4444]"> : </span>}
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
                {data?.products?.map((prod: IProducts) => {
                    console.log(prod);

                    return <div
                        key={`${prod?.id}`}
                        className="bg-gray-100 p-5 w-full sm:w-[200px] md:w-[250px] rounded-lg relative group transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]"
                    >
                        <Image
                            src={`https://store-api.softclub.tj/images/${prod?.image}`}
                            alt={prod?.productName}
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

                        <p className="mt-2 font-medium">{prod?.productName}</p>
                        <p className="text-[red]">{prod?.price}$</p>
                    </div>
                }
                )}
            </div>

            <div className="mt-4 flex justify-center gap-2">
                {data?.length > 0 && Array.from({ length: Math.ceil(data.length / itemsPerSlide) }).map((_, index) => (
                    <div
                        key={`indicator-${index}`}
                        className={`w-2 h-2 rounded-full ${index === Math.floor(startIndex / itemsPerSlide) ? "bg-[#DB4444]" : "bg-gray-300"}`}
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