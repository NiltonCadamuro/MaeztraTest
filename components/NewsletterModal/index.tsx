"use client";

import { use, useEffect, useState } from "react";

const NewsletterModal = () => {
    const [open, setOpen] = useState<boolean>(true);
    
    return (
        <div className={`${open ? 'block animate-fadeIn' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 z-50`}>
            <div className="bg-white p-4 w-96 mx-auto mt-20 rounded-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
                    <button onClick={() => setOpen(false)} className="text-red-500">Close</button>
                </div>
                <form className="mt-4">
                    <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-lg" />
                    <button type="submit" className="bg-red-500 text-white w-full p-2 mt-2 rounded-lg">Subscribe</button>
                </form>
            </div>
            
        
        </div>
    );
}

export default NewsletterModal;