// This is a placeholder for your Varanty component
// Replace this with your actual Varanty component implementation

export default function Varanty() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-gray-200">
            <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#DB4444] rounded-full flex items-center justify-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">WARRANTY PROTECTION</h3>
                <p className="text-gray-600">Over 2 years</p>
            </div>

            <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#DB4444] rounded-full flex items-center justify-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">FREE SHIPPING</h3>
                <p className="text-gray-600">Order over $150</p>
            </div>

            <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#DB4444] rounded-full flex items-center justify-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 SUPPORT</h3>
                <p className="text-gray-600">Dedicated support</p>
            </div>
        </div>
    )
}
