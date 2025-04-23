"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { GetSubCateg } from "@/api/subCategSlice";

export default function Section3() {
    const [startIndex, setStartIndex] = useState(0);
    const [active, setActive] = useState("Camera");
    const itemsPerSlide = 6;
    const data = useSelector((store: any) => store.subCateg.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetSubCateg());
    }, [dispatch]);

    useEffect(() => {
        if (!data || data.length === 0) return;

        const autoScroll = setInterval(() => {
            setStartIndex(prev => (prev + 1) % data.length);
        }, 4000);

        return () => clearInterval(autoScroll);
    }, [data?.length]);

    if (!data || data.length === 0) return null;

    const handleNext = () => {
        setStartIndex(prev => (prev + 1) % data.length);
    };

    const handlePrev = () => {
        setStartIndex(prev => (prev - 1 + data.length) % data.length);
    };

    const visibleCategories = [];
    for (let i = 0; i < itemsPerSlide; i++) {
        visibleCategories.push(data[(startIndex + i) % data.length]);
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6 flex-wrap">
                <div>
                    <p className="text-[#DB4444] font-medium">Categories</p>
                    <h1 className="text-2xl font-bold">Browse By Category</h1>
                </div>

                <div className="flex gap-2 mt-4 sm:mt-0">
                    <button
                        onClick={handlePrev}
                        className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                    >
                        <ArrowLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>

            <div className="flex gap-4 transition-all duration-700 ease-in-out justify-center sm:justify-around flex-wrap">
                {visibleCategories.map((cat: any, index: number) => (
                    <div
                        key={cat?.id || index}
                        onClick={() => setActive(cat?.categoryName)}
                        className={`cursor-pointer border rounded-md p-6 flex flex-col items-center justify-center w-[140px] h-[130px] transition-all
                        ${active === cat?.categoryName
                                ? "bg-[#DB4444] text-white"
                                : "bg-white hover:shadow-md hover:scale-105 text-black"
                            }`}
                    >
                        <Image
                            src={`https://store-api.softclub.tj/images/${cat?.categoryImage}`}
                            alt={"category"}
                            width={300}
                            height={300}
                        />
                        <span className="font-medium text-sm">{cat?.categoryName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
