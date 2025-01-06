import Image from 'next/image'
import React from 'react'

const BestBecauseCard = ({ image, alt, heading, text,imageW=80 }: { image: string, alt: string, heading: string, text: string,imageW:number }) => {
  return (
    <div className='bg-white text-center p-4 sm:p-6 lg:p-8 border shadow-md border-slate-500 rounded-2xl flex flex-col items-center'>
      <Image 
        src={image} 
        height={imageW} 
        width={imageW} 
        alt={alt} 
        className='sm:h-20 sm:w-20 lg:h-24 lg:w-24'
      />
      <h4 className='text-[#0e56f0] text-lg sm:text-xl lg:text-2xl font-bold mt-4'>
        {heading}
      </h4>
      <p className='text-sm sm:text-base lg:text-lg text-slate-600 mt-4'>
        {text}
      </p>
    </div>
  )
}

export default BestBecauseCard
