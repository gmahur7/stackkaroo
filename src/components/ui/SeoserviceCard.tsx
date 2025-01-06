import React from 'react'

const SeoserviceCard = ({ heading, text }: { heading: string, text: string }) => {
    return (
        <div className='flex items-start sm:w-2/5 w-full gap-6 sm:gap-8 p-6'>
            <div className='w-1/6 sm:w-1/8 flex justify-center mt-5'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
            </div>
            <div className='w-5/6'>
                <h5 className='text-[#0e56f0] text-xl font-bold'>{heading}</h5>
                <p className='text-lg font-semibold mt-2'>{text}</p>
            </div>
        </div>
    )
}

export default SeoserviceCard
