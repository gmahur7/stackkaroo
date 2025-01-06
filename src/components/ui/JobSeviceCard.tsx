import Image from 'next/image'
import React from 'react'

const JobSeviceCard = ({ text, image, heading }: { text: string, image: string, heading: string }) => {
    return (
        <div className='p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border border-blue-700 rounded-2xl shadow-lg min-h-[250px] text-center'>
            <Image src={image} height={75} width={75} alt={heading} className='mx-auto' />
            <h4 className='text-[#0e56f0] font-semibold text-xl mt-4'>{heading}</h4>
            <p className='mt-4 text-lg h-3/5'>
                {text}
            </p>
        </div>
    )
}

export default JobSeviceCard
