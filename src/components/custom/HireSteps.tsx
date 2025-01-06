import React from 'react';
import HireStepsCard from '../ui/HireStepsCard';

const data = [
  {
    id: 1,
    heading: "Share the Job Description with us",
    text: "Talent Specialists will contact you within 2 working hours after you share the job description with us including roles, responsibilities, skills, experience, and budget.",
  },
  {
    id: 2,
    heading: "Review and Shortlist the Matches",
    text: "From there, review and shortlist the best fit profiles shared by STACKKAROO. Company will search if suitable people are not found.",
  },
  {
    id: 3,
    heading: "Interview and Hire the Best",
    text: "You can interview and hire in 48 hours. Additionally, you can hire top talent from India with 40% cost saving.",
  },
  {
    id: 4,
    heading: "Post Hiring Support",
    text: "We'll also ensure smooth onboarding and support, such as contracts, replacement, retention, cancellation and work in your time zone.",
  },
];

const HireSteps = () => {
  return (
    <div className="container px-4 mx-auto">
      <h4 className="text-[#e68f51] text-2xl md:text-4xl font-bold text-center">
        Hire Best Talents from Stackkaroo
      </h4>
      <p className="text-center text-lg md:text-2xl font-bold text-slate-800 mt-4 md:mt-6">
        4 Easy Steps for Simple and Fast Hiring
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-12 lg:gap-8 mt-12 md:mt-32">
        {data.map((item, index) => (
          <HireStepsCard
            id={item.id}
            key={index}
            heading={item.heading}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default HireSteps;
