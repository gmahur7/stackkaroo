import React from 'react';
import ChooseSectionCard from '../ui/ChooseSectionCard';

const cardImages = [
    { text: "User-Centric Approch", src: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M19 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4l3 3 3-3h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 3c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zM7.177 16c.558-1.723 2.496-3 4.823-3s4.266 1.277 4.823 3H7.177z"></path></svg> },
    { text: "Customer satisfaction", src: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><circle cx="152" cy="184" r="72"></circle><path d="M234 296c-28.16-14.3-59.24-20-82-20-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93 11.17-12.68 26.81-24.45 46-34z"></path><path d="M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96z"></path><circle cx="340" cy="168" r="88"></circle></svg> },
    { text: "Integrating Feedback", src: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"></path></svg> },
    { text: "High Quality Product", src: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM8.59114 13.8089L7.59998 14.3812L8.59954 16.1124L9.59141 15.5397C9.98434 15.9114 10.4634 16.1929 10.9955 16.3513V17.4956H12.9945V16.3512C13.5266 16.1928 14.0057 15.9113 14.3986 15.5396L15.3905 16.1123L16.39 14.3811L15.3987 13.8088C15.4605 13.5485 15.4932 13.277 15.4932 12.9978C15.4932 12.7186 15.4605 12.447 15.3987 12.1867L16.39 11.6145L15.3904 9.88325L14.3985 10.4559C14.0056 10.0843 13.5265 9.80274 12.9944 9.64438V8.5H10.9954V9.64438C10.4633 9.80275 9.98424 10.0843 9.59133 10.456L8.59949 9.88335L7.59998 11.6146L8.59112 12.1868C8.52933 12.4471 8.49663 12.7186 8.49663 12.9978C8.49663 13.277 8.52934 13.5486 8.59114 13.8089ZM11.9949 14.4971C11.1669 14.4971 10.4957 13.8258 10.4957 12.9978C10.4957 12.1698 11.1669 11.4985 11.9949 11.4985C12.8229 11.4985 13.4942 12.1698 13.4942 12.9978C13.4942 13.8258 12.8229 14.4971 11.9949 14.4971Z"></path></svg> },
    { text: "On-Time Delivery", src: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M10.4142 3L12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142ZM13 9H11V15H16V13H13V9Z"></path></svg> }
]

const WhyChooseUsSection = () => {
    return (
        <div className='mt-8 sm:mt-16 md:mt-20 px-4'>
            <h2 className='text-4xl font-bold text-[#f78218] text-center mb-8'>Why Choose Us</h2>
            <p className='text-xl font-bold text-center'>
                We excel with reliability, innovation and customer-centric approach for our quality<br />
                products. Our dedicated team ensures that the solutions provided are dependable and<br />
                long-term.
            </p>
            <div id="cards" className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-0 sm:px-6 lg:px-40">
                {
                    cardImages.map((image, index) => 
                        <ChooseSectionCard text={image.text} key={index} imageUrl={image.src} />
                    )
                }
            </div>
        </div>
    );
}

export default WhyChooseUsSection;
