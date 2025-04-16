import React from 'react'
import frame594 from "../../../src/images/Frame 694.png"
import Image from 'next/image'

const Enhance = () => {
    return (
        <div>
            <div className='w-[100%] h-[450px] bg-[black] text-[white] flex justify-between p-[20px_40px] mt-[150px] mb-[140]'  >

                <div >
                    <p className='text-[#00FF66] mt-[40px] '>Categories</p>

                    <h1 className='text-[35px] font-[700] w-[300px] mt-[20px]  sm:w-[250px]  '>Enhance Your Music Experience</h1>

                    <div className='flex gap-[20px] mt-[30px]  sm:flex-wrap '>

                        <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
                            <h3 className='font-[650] '>23</h3>
                            <p className='font-[550] '>Hours</p>
                        </div>

                        <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
                            <h3 className='font-[650] '>05</h3>
                            <p className='font-[550] '>Days</p>
                        </div>

                        <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
                            <h3 className='font-[650] '>59</h3>
                            <p className='font-[550] '>Minutes</p>
                        </div>

                        <div className='w-[80px] h-[80px] rounded-[50%] bg-[white] text-[black] text-center pt-[10px] '>
                            <h3 className='font-[650] '>35</h3>
                            <p className='font-[550] '>Seconds</p>
                        </div>

                    </div>

                    <div className='w-[120px] h-[40px] pt-[7px] rounded-[5px] text-center bg-[#00FF66] cursor-pointer text-[black] mt-[30px] ' >Buy Now!</div>
                </div>

                <div className="seven_right">
                    <Image className='w-[450px] mt-[70px] ' src={frame594} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Enhance
