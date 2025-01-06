import Image from 'next/image'
import React from 'react'

const PricingSectionCard = ({ image, alt, heading, text,imageW }: { image: string, alt: string, heading: string, text: string,imageW:number }) => {
  return (
    <div className='bg-white text-center p-4 sm:p-6 lg:p-8 border shadow-md border-slate-500 rounded-2xl flex flex-col items-center'>
      <Image 
        src={image} 
        height={imageW} 
        width={imageW} 
        alt={alt} 
        className='h-16 w-16 lg:h-12 lg:w-12'
      />
      <h4 className='text-[#0e56f0] sm:text-xl lg:text-lg font-bold mt-2'>
        {heading}
      </h4>
      <p className='text-sm lg:text-sm text-slate-600 mt-2'>
        {text}
      </p>
    </div>
  )
}

export default PricingSectionCard
