import React from 'react';

const BenchMarkCard = ({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) => {
  return (
    <div className="relative px-6 py-8">
      <div className="flex items-start gap-4">
        <div className="hidden md:block flex-shrink-0 w-8 h-8 mt-[0.4rem]">
          <svg
            stroke="#0e56f0"
            fill="#0e56f0"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1rem"
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
          </svg>
        </div>
        <div className='text-center md:text-left'>
          <h5 className="text-[#0e56f0] text-xl font-bold">{heading}</h5>
          <p className="text-slate-800 text-base mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default BenchMarkCard;
