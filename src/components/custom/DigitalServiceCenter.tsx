import React from 'react'
import CloudComputeImage from '../../asssets/images/cloud-computing.png'
import SeoImage from '../../asssets/images/seo.png'
import SoftwareImage from '../../asssets/images/software.png'
import PhoneImage from '../../asssets/images/phone.png'
import MarketImage from '../../asssets/images/marketing.png'
import DigitalSectionCard from '../ui/DigitalSectionCard'

const cardImages = [
    { heading: "Website Development", text: "We specialize in responsive website development, ensuring optimal performance across various devices.", src: SoftwareImage },
    { heading: "App Development", text: "We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.", src: PhoneImage },
    { heading: "Software Development", text: "We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.", src: CloudComputeImage },
    { heading: "UI/UX Design", text: "We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.", src: MarketImage },
    { heading: "Digital Marketing", text: "We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.", src: MarketImage },
    { heading: "SEO Optimization", text: "We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience.", src: SeoImage }
]

const DigitalServiceSection = () => {
    return (
        <div className='mt-8 sm:mt-16 md:mt-20'>
            <h2 className='text-4xl font-bold text-[#f78218] text-center mb-8'>Stackkaroo&apos;s Digital Services</h2>
            <p className='text-xl font-bold text-center mb-12'>
                We excel with reliability, innovation, and a customer-centric approach for our quality <br />
                products. Our dedicated team ensures that the solutions provided are dependable and <br />
                long-term
            </p>
            <div className="flex flex-wrap justify-center gap-8">
                {cardImages.map((image, index) => (
                    <DigitalSectionCard 
                        key={index} 
                        text={image.text} 
                        image={image.src.src} 
                        heading={image.heading} 
                    />
                ))}
            </div>
        </div>
    )
}

export default DigitalServiceSection;
