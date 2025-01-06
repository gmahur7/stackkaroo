import Image from 'next/image'
import React from 'react'
import HireTalentImage from '../../asssets/images/1673600177315 1.png'
import { Button } from '@/components/ui/button'
import AssessmentTimeline from '@/components/custom/AssessmentTimeline'
import Hiring from '../../asssets/images/hiring_12983756 1.png'
import SearchIcon from '../../asssets/images/search_3645343 1.png'
import handIcon from '../../asssets/images/hand_7074888 1.png'
import handShakeIcon from '../../asssets/images/handshake_1006657 1.png'
import BestBecauseCard from '@/components/ui/BestBecauseCard'
import HireSteps from '@/components/custom/HireSteps'
import HiringTalentsButtons from '@/components/custom/HiringTalentsButtons'
import PricingSection from '@/components/custom/PricingSection'
import BenchMarkSection from '@/components/custom/BenchMarkSection'

const BestBecauseData = [
  {
    heading: "Talent Matchmaker",
    text: "STACKKAROO is a platform for identifying Indian talent for global companies seeking remote workers. It considers skills, experience, preferences, availability to find the best match.",
    image: Hiring,
  },
  {
    heading: "Easy Hiring",
    text: "We help with hiring, including interviews, negotiations, contracts, and onboarding. Indian talent and the company receive support during recruitment.",
    image: SearchIcon,
  },
  {
    heading: "Affordability",
    text: "STACKKAROO is a platform for identifying Indian talent for global companies seeking remote workers. It considers skills, experience, preferences, availability to find the best match.",
    image: handIcon,
  },
  {
    heading: "Long-Term Relationship",
    text: "STACKKAROO maintains good talent-org relationships by providing feedback, performance appraisal, career development, and settling disputes.",
    image: handShakeIcon,
  },
]

const Page = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-20'>
      <div className='text-center'>
        <Image
          src={HireTalentImage.src}
          alt="hiretalent"
          // layout="responsive"
          width={500}
          height={500}
          className='mx-auto w-[70%] h-[70%]'
        />
        <h3 className='text-[#0e56f0] text-3xl sm:text-4xl lg:text-5xl font-bold mt-8'>Experience Seamless Hiring</h3>
        <h5 className='text-black text-lg sm:text-xl lg:text-2xl font-semibold mt-6'>“Connecting Global Companies with the Best Indian Talent”</h5>
        <p className='mt-6 text-base sm:text-lg lg:text-xl'>
          STACKKAROO is a hiring platform that picks the best of IT & Non-IT fields as well as web development, digital
          marketing, data science, business development, human resource, content writing, advertising, and much more in India.
          <br />
          Their communication skills, fit for culture, and ability to be ethical for global work will be assessed.
        </p>
        <Button className='bg-[#e68f51] rounded-full px-6 py-3 sm:px-8 sm:py-4 mt-6 text-sm sm:text-base lg:text-lg font-bold'>Hire Talent Now</Button>
      </div>

      <div className='text-center mt-16'>
        <h4 className='text-2xl sm:text-3xl lg:text-4xl text-[#e68f51] font-bold'>We are Best Because</h4>
        <p className='mt-6 text-lg sm:text-xl lg:text-2xl font-bold'>Affordable Web Development Company in India</p>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
          {BestBecauseData.map((item, index) => (
            <BestBecauseCard
              image={item.image.src}
              heading={item.heading}
              text={item.text}
              alt={index.toString() + " image"}
              key={index}
              imageW={80}
            />
          ))}
        </div>
        <p className='mt-16 text-sm sm:text-base lg:text-xl font-medium'>
          STACKKAROO aims to simplify the remote hiring process and allows global companies to tap into top tech talent from India.
          Also, it assists Indian talent to find dream jobs on the global level.
        </p>
      </div>

      <div className='mt-16'>
        <h4 className='text-2xl sm:text-3xl lg:text-4xl text-[#e68f51] font-bold text-center'>Our Rigorous Hiring Process</h4>
        <h5 className='text-black text-lg sm:text-xl lg:text-2xl font-semibold mt-6 text-center'>To make sure, our Talent get the Best Opportunities</h5>
        <div className='mt-8'>
          <AssessmentTimeline />
        </div>
      </div>

      <HireSteps />

      <HiringTalentsButtons/>

      <BenchMarkSection/>

      <PricingSection/>
    </div>
  )
}

export default Page
