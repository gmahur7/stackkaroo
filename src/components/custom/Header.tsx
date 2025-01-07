"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { LuMenu, LuX } from "react-icons/lu";
import gsap from 'gsap';
import { removeAuthToken } from '@/utils/auth';
import Cookies from 'js-cookie';
import axios from 'axios';

const routes = {
    home: '/',
    hire: '/looking-to-hire',
    apply: '/job',
    web_services: '/digital-and-web-services',
    service: '/digital-and-web-services#',
    more: '/job#'
}

const Header = () => {
    const token = Cookies.get('authToken');
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const navigate = (path: string) => {
        setIsMenuOpen(false);
        router.push(path);
    }

    useEffect(() => {
        const headerElement = document.querySelector(".header-container");
    
        const handleScroll = () => {
          const scrollTop = window.scrollY;
    
          if (scrollTop > 50) {
            setIsFixed(true);
            gsap.to(headerElement, { y: 0, duration: 0.9, ease: "power1.out" });
          } else {
            setIsFixed(false);
            gsap.to(headerElement, { y: -20, duration: 0.9, ease: "power1.out" });
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    const resetLimit = async () => {
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/reset/login`,{});

            if (!response.data.success) {
                throw new Error('Failed to reset limit');
            }
            alert('Limit reset successfully');
        } catch (error) {
            console.error('Error resetting limit:', error);
        }
    };

    return (
        <>
            <div className={`.header-container flex justify-between items-center  transition-transform duration-1000 ease-in-out ${isFixed ? "fixed top-0 left-0 w-full bg-white px-24 shadow-lg py-2 z-50" : "py-4"}`}>
                <div onClick={resetLimit} className='cursor-pointer'>
                    <Image src="https://www.stackkaroo.com/img/general/logo-dark.svg" height={50} width={101} alt="logo" />
                </div>
                <div className='hidden lg:flex gap-4 mx-4'>
                    <button className={`${pathname === routes.home && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/')}>Home</button>
                    <button className={`${pathname === routes.hire && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/looking-to-hire')}>Hire a Talent</button>
                    <button className={`${pathname === routes.apply && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/job')}>Apply as a Talent</button>
                    <button className={`${pathname === routes.web_services && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/digital-and-web-services')}>Web Services</button>
                    <button className={`${pathname === routes.service && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/digital-and-web-services#')}>Service</button>
                    <button className={`${pathname === routes.more && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/job#')}>More About</button>
                </div>
                <div className='hidden lg:block'>
                    <Button onClick={()=>removeAuthToken()} className='rounded-full text-md bg-[#f78218] px-7 py-4 border-2 border-white'>{token?'Logout':'Login'}</Button>
                </div>
                <div className='block lg:hidden'>
                    <LuMenu size={25} onClick={() => setIsMenuOpen(true)} className="cursor-pointer" />
                </div>
            </div>
            <div className='z-50'>
                {
                    isMenuOpen ? (
                        <div className='z-50'>
                            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
                            <div className="fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50">
                                <div className="flex justify-between py-4 px-2 md:px-[6.9rem]">
                                <Image src="https://www.stackkaroo.com/img/general/logo-dark.svg" height={50} width={101} alt="logo" />
                                    <button onClick={() => setIsMenuOpen(false)}>
                                        <LuX size={25} />
                                    </button>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <button className={`${pathname === routes.home && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/')}>Home</button>
                                    <button className={`${pathname === routes.hire && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/looking-to-hire')}>Hire a Talent</button>
                                    <button className={`${pathname === routes.apply && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/job')}>Apply as a Talent</button>
                                    <button className={`${pathname === routes.web_services && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/digital-and-web-services')}>Web Services</button>
                                    <button className={`${pathname === routes.service && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/digital-and-web-services#')}>Service</button>
                                    <button className={`${pathname === routes.more && "border-b-2 border-[#f78218]"} text-[15px] font-custom cursor-pointer px-2`} onClick={() => navigate('/job#')}>More About</button>
                                </div>
                                <div className="flex justify-center p-4">
                                <Button onClick={()=>removeAuthToken()} className='rounded-full text-md bg-[#f78218] px-7 py-4 border-2 border-white'>{token?'Logout':'Login'}</Button>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </>
    )
}

export default Header