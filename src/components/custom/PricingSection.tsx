import React from 'react'
import PricingImage from '../../asssets/images/pricing_1728450 1.png'
import JobInterview from '../../asssets/images/job-interview_1436764 1.png'
import CustomerService from '../../asssets/images/customer-service_3322984 1.png'
import Communicate from '../../asssets/images/communicate_2343694 1.png'
import PricingSectionCard from '../ui/PricingSectionCard'

const data = [
    {
        heading:"Simplifying Talent Hiring with Transparent Pricing",
        text:"We have a pricing system based on talent's skills, experience, role complexity, and duration. Companies are charged upon talent hiring, while talent is not charged. We offer discounts of 5% to 20% for prepaid amounts.",
        image:PricingImage
    },
    {
        heading:"Tailored Pricing and Expert Consultation",
        text:`To find out our prices, fill out a form. Get email with subject "Access your PRICE CARD." Request a meeting to learn more about our services. We try to simplify offshore recruitment for global organizations to hire Indian Talent.`,
        image:JobInterview
    },
    {
        heading:"Other Services",
        text:"Cost of hiring Indian workers from us is lower with more people employed. Pay in advance for a discount of 2.5% to 7%. Local time zone staff have additional charges. High demand may require non-traditional hours.",
        image:CustomerService
    },
    {
        heading:"Contact Us",
        text:`Get Pricing based on Job Description. Provide the description and other info. We'll review and give the right budget. Schedule a free insightful call with our Talent Specialist.`,
        image:Communicate
    },
]

const PricingSection = () => {
  return (
    <div className='text-center my-16'>
    <h4 className='text-2xl sm:text-3xl lg:text-4xl text-[#e68f51] font-bold'>We are Best Because</h4>
    <p className='mt-6 text-lg sm:text-xl lg:text-2xl font-bold'>Affordable Web Development Company in India</p>
    <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
      {data.map((item, index) => (
        <PricingSectionCard
          image={item.image.src}
          imageW={25}
          heading={item.heading}
          text={item.text}
          alt={index.toString() + " image"}
          key={index}
        />
      ))}
    </div>
  </div>
  )
}

export default PricingSection