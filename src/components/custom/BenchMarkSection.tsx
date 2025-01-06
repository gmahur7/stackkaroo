import React from 'react';
import BenchMarkCard from '../ui/BenchMarkCard';

const cardsData = [
  {
    heading: 'Comprehensive Talent Evaluation',
    text: 'STACKKAROO evaluates talents. Covers communication skills, technical know-how & cultural fit.',
  },
  {
    heading: 'Ensure Smooth Talent and Client Transition',
    text: 'We know talented workers and client needs smooth transitions. So, the platform provides thorough trainings to all talents for day one readiness.',
  },
  {
    heading: 'Rigorous Evaluation Process',
    text: 'STACKKAROO reviews key areas, tough eval, clients get skilled specialists.',
  },
  {
    heading: 'Unlocking Top-Rate Talents',
    text: 'With STACKKAROO, clients get top-rate talents ready to hit the ground running.',
  },
  {
    heading: 'Competent Education System',
    text: 'India has a good education system producing many highly qualified workers. Emphasis is placed on STEM education.',
  },
  {
    heading: 'A Vast Talent Base',
    text: 'Moreover, India\'s populous nation fosters talent, fuels innovation. Thanks to diversity, Indians offer different viewpoints, solutions to problems.',
  },
  {
    heading: 'Strong Work Mentality',
    text: 'Secondly, Indians are hardworking, resilient, and quick learners when it comes to new technologies.',
  },
  {
    heading: 'Affordability',
    text: 'The low cost of Indian labor is attractive to corporate entities. Technology giants cannot compromise on service quality even at competitive rates.',
  },
];

const BenchMarkSection = () => {
  return (
    <div className="mt-12 sm:mt-20 md:mt-32 container">
      <h1 className="text-center text-4xl font-bold text-[#e68f51]">Talents from Stackkaroo sets the Benchmark</h1>
      <p className='text-center text-2xl font-bold text-slate-700 mt-6'>We choose the Best for your Company</p>
      <div
        id="cards"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 sm:mt-12 md:mt-16 bg-gradient-to-b from-white to-[#dbe1f7] py-12 rounded-xl"
      >
        {cardsData.map((service, index) => (
          <BenchMarkCard key={index} text={service.text} heading={service.heading} />
        ))}
      </div>
    </div>
  );
};

export default BenchMarkSection;
