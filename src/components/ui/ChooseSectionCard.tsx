import React, { ReactElement } from 'react'

interface ChooseSectionCardProps {
    text: string;
    imageUrl: ReactElement;
  }

const ChooseSectionCard: React.FC<ChooseSectionCardProps> = ({ imageUrl, text }) => {
    return (
        <div className='flex gap-2 items-center border-2 border-white px-4 py-4 rounded-3xl shadow-lg shadow-[#0e55f060] w-full sm:max-w-xs md:max-w-md lg:max-w-[220px]'>
            <div className='bg-white p-2 rounded-md'>
                {imageUrl}
            </div>
            <p className='text-[#0e56f0] font-semibold text-center'>{text}</p>
        </div>
    )
}

export default ChooseSectionCard
