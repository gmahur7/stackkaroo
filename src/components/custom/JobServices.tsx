import React from 'react'
import JobSeviceCard from '../ui/JobSeviceCard'
import Badge2 from '../../asssets/images/badge2.png'
import Commitment from '../../asssets/images/commitment.png'
import Locations from '../../asssets/images/locations.png'
import Performance from '../../asssets/images/performance.png'
import Promotion from '../../asssets/images/promotion.png'
import Pin from '../../asssets/images/pin.png'

const cardImages = [
    { heading: "Unleashing Top Talent Globally", text: "We offer 5% top talents and supports companies hiring from various time zones.", src: Locations },
    { heading: "Securing Success", text: "The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.", src: Promotion },
    { heading: "Beyond Borders", text: "We provide both, flexible full-time and part-time jobs", src: Pin },
    { heading: "End-to-End Excellence", text: "In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.", src: Badge2 },
    { heading: "Efficiency Redefined", text: "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provide quality talent.", src: Performance },
    { heading: "Simplified Contracts Satisfied Partnerships", text: "The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.", src: Commitment }
]

const JobServices = () => {
    return (
        <div className='mt-12 sm:mt-24 md:mt-32 mb-12 sm:mb-16 md:mb-24 px-4'>
            <h2 className='text-4xl text-[#e68f51] text-center font-bold mb-8'>Stackkaroo’s Talent Hiring & Job Placement Services</h2>
            <p className='mb-16 text-center text-xl font-semibold'>
                We are a talent searching platform that redesigns how companies hire talents. It is a <br />
                cost-effective solution for industries. We also provide global job opportunities with good <br />
                salaries, support, and professional development.
            </p>
            <div id="cards" className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
                {
                    cardImages.map((image, index) =>
                        <JobSeviceCard text={image.text} key={index} image={image.src.src} heading={image.heading} />
                    )
                }
            </div>
        </div>
    )
}

export default JobServices
