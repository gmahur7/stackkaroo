"use client";
import React, { useState } from 'react'
import Header from './Header';
import { LuX } from 'react-icons/lu';
import { Button } from '../ui/button';

const ChildLayout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav className="container mx-auto px-12">
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </nav>
            <main className="container mx-auto px-4">
                {
                    isMenuOpen ? (
                        <div>
                            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
                            <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
                                <div className="flex justify-end p-4">
                                    <button onClick={() => setIsMenuOpen(false)}>
                                        <LuX size={25} />
                                    </button>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <button className="text-[15px] font-custom cursor-pointer px-2">Home</button>
                                    <button className="text-[15px] font-custom cursor-pointer px-2">Hire a Talent</button>
                                    <button className="text-[15px] font-custom cursor-pointer px-2">Apply as a Talent</button>
                                    <button className="text-[15px] font-custom cursor-pointer px-2">Web Services</button>
                                    <button className="text-[15px] font-custom cursor-pointer px-2">Service</button>
                                    <button className="text-[15px] font-custom cursor-pointer px-2">More About</button>
                                </div>
                                <div className="flex justify-center p-4">
                                    <Button>Contact</Button>
                                </div>
                            </div>
                        </div>
                    ) :
                        (<>
                            {children}
                        </>)
                }
            </main>
        </>
    )
}

export default ChildLayout;