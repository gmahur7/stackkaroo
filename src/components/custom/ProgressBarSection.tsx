"use client";
import React, { useState, useEffect } from 'react';
import { Progress } from '../ui/progress';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import Bag from '../../asssets/images/bag.svg'
import Cancel from '../../asssets/images/cancel.svg'
import CustomerSupport from '../../asssets/images/customer_support.svg'
import DoubleRetention from '../../asssets/images/double_retention.svg'
import LowCost from '../../asssets/images/low_cost.svg'
import Medal from '../../asssets/images/medal.svg'
import RemoteControl from '../../asssets/images/remote_control.svg'
import World from '../../asssets/images/world.svg'
import CustomerSupport2 from '../../asssets/images/customer_support (1).svg'
import Money from '../../asssets/images/money.svg'
import Connect from '../../asssets/images/connect.svg'
import Team from '../../asssets/images/team.svg'
import Medal2 from '../../asssets/images/medal (1).svg'
import CustomerSupport3 from '../../asssets/images/customer_support (2).svg'
import Trusted from '../../asssets/images/trusted.svg'
import Clock from '../../asssets/images/clock.svg'

const ProgressBarSection = () => {
    const [progress, setProgress] = useState(0);
    const [section, setSection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    setSection((prevSection) => (prevSection % 3) + 1);
                    return 0;
                }
                return prevProgress + 1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex justify-center items-center mt-12 sm:mt-16 md:mt-24  gap-4">
                <Progress value={section === 1 ? progress : 0} />
                <Progress value={section === 2 ? progress : 0} />
                <Progress value={section === 3 ? progress : 0} />
            </div>
            <div className='mb-16 sm:mb-24 md:mb-32'>
                {section === 2 && (
                    <div className='mt-4 md:mt-8'>
                        <h2 className='text-[#f78218] text-lg sm:text-xl md:text-3xl font-bold'>Bringing together the world&apos;s Leading Companies and India&apos;s Finest Talent</h2>
                        <p className='mt-6 text-sm sm:text-lg md:text-xl font-semibold'>At Stackkaroo, we revolutionize the Hiring Process, making it Reliable, Effortless, and Fast. Discover India&apos;s top Tech and Digital Talent at Stackkaroo.</p>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mt-8 sm:mt-12 md:mt-20 px-4">
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={Medal.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">Top 5% Specialized Talent<br />Pool</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={World.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">Availability in various Time<br />Zones</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={Bag.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">Fast and Seamless Hiring</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={CustomerSupport.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">Remote Contracts</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mt-8 px-4">
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={LowCost.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">Low Cost Advantage</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={RemoteControl.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">Remote Onboarding and IT<br />Support</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={Cancel.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">Easily Replace or Cancel</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={DoubleRetention.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">Double the Retention Rate</p>
                            </div>
                        </div>

                        <div className='text-center mt-8 md:mt-16'>
                            <Button className='bg-[#f78218] rounded-full text-md sm:text-lg md:text-xl font-bold px-8 py-3 md:px-12 md:py-7'>Explore more</Button>
                        </div>
                    </div>
                )}
                {section === 1 && (
                   <div className='mt-4 md:mt-8'>
                        <h2 className='text-[#f78218] text-lg sm:text-xl md:text-3xl font-bold'>Web Development | Software Development | App Development | Digital Marketing UI/UX Design | SEO Optimization | Front-End | Back-End | E-commerce | Mobile Responsive</h2>
                        <p className='mt-6 text-sm sm:text-lg md:text-xl font-semibold'>Stackkaroo Guarantees Best Affordable Digital Solutions for your Unique Business. We are a Leading App/website Development company, Catering to over 2K Online Businesses.</p>
                        <p className='mt-6 text-sm sm:text-lg md:text-xl font-semibold'> Take Your Business to New Heights with Stackkaroo&apos;s Affordable Quality App or Website! We use latest technologies to provide the best software engineering solutions that can respond well to the modern market and this is what sets us apart!</p>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-8 sm:mt-12 md:mt-20 px-8">
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={Clock.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">
                                    Affordable and Timely App Development & UI UX Design Solutions
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={Medal2.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">
                                    Top-Notch Web Development Services
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={CustomerSupport3.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">
                                    Excellent Customer Support
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={Trusted.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">
                                    Trusted Web & App Development & Digital Marketing Partner across India
                                </p>
                            </div>
                        </div>

                        <div className='text-center mt-8 md:mt-16'>
                            <Button className='bg-[#f78218] rounded-full text-md sm:text-lg md:text-xl font-bold px-8 py-3 md:px-12 md:py-7'>Explore more</Button>
                        </div>
                    </div>
                )}
                {section === 3 && (
                   <div className='mt-4 md:mt-8'>
                        <h2 className='text-[#f78218] text-lg sm:text-xl md:text-3xl font-bold'>Embrace Global Opportunities and Start your International Career with STACKKAROO</h2>
                        <p className='mt-6 text-sm sm:text-lg md:text-xl font-semibold'>Discover a world of endless possibilities and kickstart your international journey with Stackkaroo. By signing up now, you can create a captivating profile that will showcase your exceptional skills and remarkable achievements.</p>
                        <p className='mt-6 text-sm sm:text-lg md:text-xl font-semibold'>With Stackkaroo, you&apos;ll gain access to a global network of professionals, opening up a world of opportunities for career growth and personal development. Join us today and unleash your true potential. Sign up with Stackkaroo and take the first step towards a bright and prosperous future.</p>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8 sm:mt-12 md:mt-20 px-4">
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={Connect.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">
                                    Connect with a vast Network of Clients and Collaborators from around the Globe
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={Money.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">
                                    Enjoy Competitive Compensation and a range of Amazing Benefits
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={CustomerSupport2.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">
                                    Experience Ongoing Support and seize Professional Development Opportunities
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 p-5 shadow-xl">
                                    <AvatarImage src={Team.src} />
                                </Avatar>
                                <p className="text-sm sm:text-md font-bold mt-4 text-[#5080f5]">
                                    Join Stackkaroo Today and unleash your True Potential
                                </p>
                            </div>
                        </div>

                        <div className='text-center mt-8 md:mt-16'>
                            <Button className='bg-[#f78218] rounded-full text-md sm:text-lg md:text-xl font-bold px-8 py-3 md:px-12 md:py-7'>Explore more</Button>
                        </div>
                    </div>
                )}
            </div >
        </>
    );
};

export default ProgressBarSection;