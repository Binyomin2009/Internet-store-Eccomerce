import React from 'react'
import ser1 from "../../../src/images/Services (4).png"
import ser2 from "../../../src/images/Services (5).png"
import ser3 from "../../../src/images/Services (4).png"
import Image from 'next/image'


const Varanty = () => {
    return (
        <div>
            <div className="flex justify-around p-[40px]">
                <div className="text-center">
                    <Image src={ser1} alt="" className='m-auto' />
                    <h1> <b className='text-[25px]'>FREE AND FAST DELIVERY</b><br />
                        Free delivery for all orders over $140</h1>
                </div>
                <div className="text-center">
                    <Image src={ser2} alt="" className='m-auto' />
                    <h1> <b className='text-[25px]'>FREE AND FAST DELIVERY</b><br />
                        Free delivery for all orders over $140</h1>
                </div>
                <div className="text-center">
                    <Image src={ser3} alt="" className='m-auto' />
                    <h1> <b className='text-[25px]'>FREE AND FAST DELIVERY</b><br />
                        Free delivery for all orders over $140</h1>
                </div>
            </div>
        </div>
    )
}

export default Varanty
