import React from 'react';
import frame594 from "../../../src/images/Frame 694.png";
import Image from 'next/image';

const Enhance = () => {
    return (
        <div className="bg-black text-white mt-[150px] mb-[140px] p-[20px_40px]">
            <div className="flex justify-between items-center">
                {/* Left section */}
                <div className="w-full sm:w-[300px]">
                    <p className="text-[#00FF66] mt-[40px]">Categories</p>
                    <h1 className="text-[35px] font-[700] mt-[20px] sm:w-[250px]">Enhance Your Music Experience</h1>

                    <div className="flex gap-[20px] mt-[30px] sm:flex-wrap sm:gap-[15px]">
                        {/* Time circles */}
                        <div className="w-[80px] h-[80px] rounded-full bg-white text-black text-center flex flex-col justify-center items-center">
                            <h3 className="font-[650]">23</h3>
                            <p className="font-[550]">Hours</p>
                        </div>

                        <div className="w-[80px] h-[80px] rounded-full bg-white text-black text-center flex flex-col justify-center items-center">
                            <h3 className="font-[650]">05</h3>
                            <p className="font-[550]">Days</p>
                        </div>

                        <div className="w-[80px] h-[80px] rounded-full bg-white text-black text-center flex flex-col justify-center items-center">
                            <h3 className="font-[650]">59</h3>
                            <p className="font-[550]">Minutes</p>
                        </div>

                        <div className="w-[80px] h-[80px] rounded-full bg-white text-black text-center flex flex-col justify-center items-center">
                            <h3 className="font-[650]">35</h3>
                            <p className="font-[550]">Seconds</p>
                        </div>
                    </div>

                    <div className="w-[120px] h-[40px] bg-[#00FF66] text-black rounded-[5px] text-center cursor-pointer mt-[30px] pt-[7px]">
                        Buy Now!
                    </div>
                </div>

                {/* Right section with image */}
                <div className="w-full sm:w-[450px] mt-[70px] sm:mt-0">
                    <Image className="w-full" src={frame594} alt="Music Experience Image" />
                </div>
            </div>
        </div>
    );
};

export default Enhance;
