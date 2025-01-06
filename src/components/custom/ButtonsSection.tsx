import React from 'react';
import { Button } from '../ui/button';

const ButtonsSection = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-32 mt-8 sm:mt-16 lg:mt-20 container">
      <p className="text-center mb-4 sm:mb-6 font-semibold text-sm sm:text-md lg:text-lg">
        In the realm of digital solutions, we offer expertise in
      </p>
      <div className="flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-6 mb-6">
        <Button className="rounded-full border-2 border-blue-700 text-blue-700 bg-white px-4 py-2 font-bold text-xs sm:text-sm lg:text-md">
          Website Development
        </Button>
        <Button className="rounded-full border-2 border-blue-700 text-blue-700 bg-white px-4 py-2 font-bold text-xs sm:text-sm lg:text-md">
          App Development
        </Button>
        <Button className="rounded-full border-2 border-blue-700 text-blue-700 bg-white px-4 py-2 font-bold text-xs sm:text-sm lg:text-md">
          UI/UX Design
        </Button>
        <Button className="rounded-full border-2 border-blue-700 text-blue-700 bg-white px-4 py-2 font-bold text-xs sm:text-sm lg:text-md">
          Digital Marketing
        </Button>
        <Button className="rounded-full border-2 border-blue-700 text-blue-700 bg-white px-4 py-2 font-bold text-xs sm:text-sm lg:text-md">
          SEO Optimization
        </Button>
      </div>
      <p className="text-center mb-4 sm:mb-6 font-semibold text-sm sm:text-md lg:text-lg">
        Showcasing our proficiency across various facets of the digital platform
      </p>
      <h5 className="text-center mt-8 sm:mt-12 lg:my-16 font-bold text-2xl sm:text-3xl lg:text-4xl text-[#f78218]">
        Stay Ahead!<br />
        Launch Your Next Project with Stackkaroo
      </h5>
    </div>
  );
};

export default ButtonsSection;
