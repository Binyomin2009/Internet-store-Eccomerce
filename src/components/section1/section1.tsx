"use client"

import Image from 'next/image'
import { Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import frame560 from "../../../src/images/Frame 560.png"


const Section1 = () => {
    return (
        <div>
            <div className="flex items-center gap-4 p-4">
                <div className="w-[250px] bg-white shadow-md p-4 rounded-lg">
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
                        <p key={"."} className="text-gray-700 hover:text-black cursor-pointer py-1">
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
                    className='w-[65%] sm:w-[100%]'
                >
                    <SwiperSlide><Image src={frame560} alt="" className='m-auto' /></SwiperSlide>
                    <SwiperSlide><Image src={frame560} alt="" className='m-auto' /></SwiperSlide>
                    <SwiperSlide><Image src={frame560} alt="" className='m-auto' /></SwiperSlide>
                    <SwiperSlide><Image src={frame560} alt="" className='m-auto' /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Section1
