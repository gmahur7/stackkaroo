import React from 'react'
import SeoserviceCard from '../ui/SeoserviceCard'

const cardsData = [
    {
        heading: "Customized SEO Services",
        text: "We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business."
    },
    {
        heading: "Mobile SEO Services",
        text: "We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices."
    },
    {
        heading: "On-Page SEO Services",
        text: "We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes."
    },
    {
        heading: "Free Website Audit and Strategies",
        text: "We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services."
    },
    {
        heading: "Off-Page SEO Services",
        text: "We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel."
    },
]

const SeoServices = () => {
    return (
        <div className='mt-12 sm:mt-20 md:mt-32  container'>
            <h1 className='text-center text-4xl font-bold text-[#e68f51]'>Seo Services</h1>
            <div id="cards" className="flex flex-wrap  md:justify-between justify-center gap-8 mt-8 sm:mt-12 md:mt-16 bg-gradient-to-b from-white to-[#dbe1f7] py-12 px-2 md:px-24 rounded-xl">
                {
                    cardsData.map((service, index) =>
                        <SeoserviceCard key={index} text={service.text} heading={service.heading} />
                    )
                }
            </div>
        </div>
    )
}

export default SeoServices
