import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../asssets/images/logo-dark.svg'
import Certificate from '../../asssets/images/certificate.png'


const Footer = () => {
  const industries = [
    { name: "Food Delivery", href: "/industries/food-delivery" },
    { name: "Pharmacy Delivery", href: "/industries/pharmacy-delivery" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "E-Learning", href: "/industries/e-learning" },
    { name: "Fitness", href: "/industries/fitness" },
    { name: "Home Services", href: "/industries/home-services" },
    { name: "Transportation", href: "/industries/transportation" },
    { name: "E-Commerce", href: "/industries/e-commerce" }
  ];

  const quickLinks = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "SEO", href: "/services/seo" }
  ];

  const info = [
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "How we work", href: "/how-we-work" }
  ];

  return (
    <footer className="bg-slate-700 text-white py-12">
      <div className="mx-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Link href="/" className="block">
              <div className="text-2xl font-bold text-blue-400">
                <Image src={Logo.src} alt="footer logo" height={100} width={100} />
              </div>
            </Link>
            <p className="text-sm text-gray-300">
              Stackkaroo framework is an ideal choice for an affordable web development company in India which effectively helps users showcase their apps with its beautiful design and rich core functionality.
            </p>
            <div className="space-y-2">
              <div className="text-sm">Follow us on</div>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-blue-400">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"></path></svg>
                  </div>
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path></svg>
                  </div>
                </Link>
                <Link href="#" className="hover:text-blue-400">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link href={industry.href} className="text-sm text-gray-300 hover:text-white">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              {info.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-[100vw] bg-gradient-to-tr from-white to-slate-600 mt-12 py-8 border-t border-gray-600">
          <div className="flex justify-center space-x-8">
            <Image src={Certificate.src} alt="certificate" height={70} width={350} />
          </div>
        </div>

        <div className="mt-8 text-center space-y-2 text-sm text-white">
          <p>Explorogent International Services PrivateLimited</p>
          <p>CIN No:- U79120TR2023PTC014296</p>
          <p>Udyam Registration Number:- UDYAM-TR-08-0013717</p>
          <p>Startup India:- DIPP150020</p>
          <p>GSTIN:- 16AAHCE8022G1ZS</p>
        </div>
        <p className='text-center mt-8 text-sm text-white'>Copyright 2024. Stackkaroo.com | Privacy Policy | Terms & Conditions | Terms of Use</p>
      </div>
    </footer>
  );
};

export default Footer;