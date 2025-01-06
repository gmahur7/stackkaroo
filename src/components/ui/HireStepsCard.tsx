import React from 'react';

const HireStepsCard = ({
  id,
  heading,
  text,
}: {
  id: number;
  heading: string;
  text: string;
}) => {
  return (
    <div className="relative bg-white px-6 py-16 pt-20 border border-slate-200 rounded-xl w-full shadow-xl">
      <div>
        <h4 className="text-base md:text-lg text-[#0e56f0] text-center font-bold">
          {heading}
        </h4>
        <p className="text-sm md:text-base text-center mt-4 text-slate-700">
          {text}
        </p>
      </div>
      <div className="bg-white absolute -top-12 w-20 h-20 md:w-24 md:h-24 left-1/2 transform -translate-x-1/2 rounded-full border border-slate-200 shadow-xl flex items-center justify-center">
        <p className="text-3xl md:text-4xl text-slate-700 font-bold">{id}</p>
      </div>
    </div>
  );
};

export default HireStepsCard;
