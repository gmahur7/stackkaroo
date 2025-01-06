import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { Button } from './button';

const DigitalSectionCard = ({ image, heading, text }: { image: string, heading: string, text: string }) => {
  return (
    <div className='p-6 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 border border-blue-700 rounded-2xl shadow-lg min-h-[300px]'>
        <div className='flex gap-4 items-center'>
            <Image src={image} height={75} width={75} alt={heading} />
            <h4 className='text-[#0e56f0] font-semibold text-xl'>{heading}</h4>
        </div>
        <p className='mt-4 text-lg'>
            {text}
        </p>
        <Button className='mt-4 py-2 px-6 rounded-full bg-[#f78218] text-xl'>
            <FaChevronRight />
        </Button>
    </div>
  )
}

export default DigitalSectionCard;
