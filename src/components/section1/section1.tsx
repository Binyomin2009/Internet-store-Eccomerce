"use client"

import Image from 'next/image'
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import frame560 from "../../../src/images/Frame 560.png"


const Section1 = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
                <div className="w-full sm:w-[250px] bg-white shadow-md p-4 rounded-lg mb-4 sm:mb-0">
                    {[
                        "Woman’s Fashion",
                        "Men’s Fashion",
                        "Electronics",
                        "Home & Lifestyle",
                        "Medicine",
                        "Sports & Outdoor",
                        "Baby’s & Toys",
                        "Groceries & Pets",
                        "Health & Beauty",
                    ].map((category) => (
                        <p key={category} className="text-gray-700 hover:text-black cursor-pointer py-1 text-sm sm:text-base">
                            {category}
                        </p>
                    ))}
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full sm:w-[65%]"
                >
                    <SwiperSlide><Image src={frame560} alt="Category image" className='m-auto' /></SwiperSlide>
                    <SwiperSlide><Image src={frame560} alt="Category image" className='m-auto' /></SwiperSlide>
                    <SwiperSlide><Image src={frame560} alt="Category image" className='m-auto' /></SwiperSlide>
                    <SwiperSlide><Image src={frame560} alt="Category image" className='m-auto' /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Section1
