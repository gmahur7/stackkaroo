import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

const HeadingSection = () => {
  return (
    <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mt-8 sm:mt-16 md:mt-24">
        Whether you&apos;re seeking top talent, your dream job, or <br />exceptional web services, Stackkaroo has got you covered. <br />Explore our offerings and find what you need to achieve <br />your goals.
      </h1>
      <div className="flex justify-center items-center mt-12 z-0">
        <Avatar className="shadow-lg z-10">
          <AvatarImage src="https://www.stackkaroo.com/_next/image?url=%2Fassets%2Fportfolio%2Fidelogo.webp&w=256&q=75" />
        </Avatar>
        <Avatar className="shadow-lg">
          <AvatarImage src="https://www.stackkaroo.com/assets/portfolio/partner-1.svg" />
        </Avatar>
        <Avatar className="shadow-lg">
          <AvatarImage src="https://www.stackkaroo.com/assets/portfolio/partner-2.svg" />
        </Avatar>
        <Avatar className="shadow-lg">
          <AvatarImage src="https://www.stackkaroo.com/assets/portfolio/thinkinteraction.svg" />
        </Avatar>
        <Avatar className="shadow-lg">
          <AvatarImage src="https://www.stackkaroo.com/assets/portfolio/client-3.svg" />
        </Avatar>
      </div>
      <p className="text-center mt-2 font-bold text-sm">200+ Happy Clients</p>
      <div className="text-center mt-8">
        <Button className="text-center bg-[#0e56f0] font-bold rounded-3xl text-sm sm:text-lg md:text-xl p-6 md:px-8 p-6 md:py-8">Looking for Digital & Web Services</Button>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-5 gap-4">
        <Button className="text-center bg-[#0e56f0] font-bold rounded-3xl text-sm sm:text-lg md:text-xl p-6 md:px-8 md:py-8">Looking to Hire?</Button>
        <Button className="text-center bg-[#0e56f0] font-bold rounded-3xl text-sm sm:text-lg md:text-xl p-6 md:px-8 md:py-8">Looking for a Job?</Button>
      </div>
    </div>
  )
}

export default HeadingSection