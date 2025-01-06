import React from 'react';
import { Button } from '../ui/button';

const data = [
  "Top 5% Specialized Talent Pool",
  "Availability in various Time Zones",
  "Fast and Seamless Hiring",
  "Low Cost Advantage",
  "Simple Contracts",
  "Remote Onboarding and IT Support",
  "Easy Replace or Cancel",
  "Double the Retention Rate",
];

const HiringTalentsButtons = () => {
  return (
    <div className="mt-12 px-4">
      <h3 className="text-center text-[#e68f51] text-2xl md:text-4xl font-bold">
        Benefits of Choosing Stackkaroo for Hiring Talents
      </h3>
      <p className="text-center text-slate-700 text-lg md:text-xl font-bold mt-4 md:mt-8">
        Range of Benefits for all firms, Financial and Non-Financial
      </p>
      <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
        {data.map((item) => (
          <Button
            className="bg-gradient-to-bl from-[#d2dcf7] to-[#f0eff6] text-slate-800 rounded-3xl text-sm md:text-lg px-6 md:px-9 py-6 md:py-9 border border-[#8ba5f4] w-full md:w-auto"
            key={item}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HiringTalentsButtons;
