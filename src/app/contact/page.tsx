"use client"

import { Button } from "@mui/material"
import { Phone, Mail } from "lucide-react"

export default function Contact() {
    return (
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Home / Contact</p>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Contact Info Card */}
                <div className="shadow-md rounded-lg w-full lg:w-1/3 flex flex-col">
                    <div className="flex flex-col gap-4 p-6 border-b">
                        <div className="flex gap-4 items-center">
                            <Phone className="text-gray-700" />
                            <h1 className="text-lg font-semibold">Call To Us</h1>
                        </div>
                        <p className="text-gray-600">
                            We are available 24/7, 7 days a week. <br />
                            Phone: +8801611112222
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 p-6">
                        <div className="flex gap-4 items-center">
                            <Mail className="text-gray-700" />
                            <h1 className="text-lg font-semibold">Write To Us</h1>
                        </div>
                        <p className="text-gray-600">Fill out our contact form, and we&apos;ll get back to you shortly.</p>
                    </div>
                </div>

                {/* Contact Form Card */}
                <div className="shadow-md rounded-lg w-full lg:w-2/3 p-6 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                        />
                    </div>

                    <textarea
                        placeholder="Your Message"
                        className="border border-gray-300 p-3 rounded w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#DB4444] focus:border-transparent"
                    ></textarea>

                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#DB4444" }}
                        className="w-full sm:w-auto sm:self-end px-6 py-3"
                    >
                        Send Message
                    </Button>
                </div>
            </div>
        </div>
    )
}
