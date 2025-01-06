"use client";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
    const router=useRouter();
  return (
    <div className='flex flex-col items-center container mx-auto py-24'>
        <h3 className='font-bold text-white text-4xl'>Page Not Found</h3>
        <Button onClick={()=>router.push('/')} className='mt-8 bg-[#e68f51] text-xl hover:bg-[#da8242]'> Back to Home</Button>
    </div>
  )
}

export default Page