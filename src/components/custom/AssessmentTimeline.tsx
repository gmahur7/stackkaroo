import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Languages, Brain, Monitor } from "lucide-react";
import Image from 'next/image';
import Computer from '../../asssets/images/computer_9330495 1.png'
import List from '../../asssets/images/list_8532959 1.png'
import Language from '../../asssets/images/language_484582 1.png'
import Mindset from '../../asssets/images/mindset_10645906 1.png'
import JobInterview from '../../asssets/images/job-interview_1436764 1.png'


const AssessmentTimeline = () => {
    const steps = [
        {
            icon: List,
            title: "Profile Screening and Shortlisting",
            description: "We evaluate applications based on minimum criteria, professional experience, and background checks of candidates."
        },
        {
            icon: Language,
            title: "Language Proficiency",
            description: "We use communication assessment test to assess candidates' reading, writing pronunciation, clarity, fluency, and speech speed."
        },
        {
            icon: Mindset,
            title: "Aptitude Evaluation",
            description: "We administer scientifically designed aptitude test to assess candidates' reasoning & problem-solving abilities"
        },
        {
            icon: Computer,
            title: "Technical Assessment",
            description: "We have developed challenging and advanced technical assessments tailored to specific roles, ensuring that only the most skilled candidates make it."
        },
        {
            icon: JobInterview,
            title: "Panel Interview",
            description: "Our talent acquisition experts conduct a final video interview in the presence of a representative from the hiring company."
        }
    ];

    return (
        <Card className="w-full max-w-4xl mx-auto p-6">
            <CardContent>
                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-8">

                            <div className="relative">
                                <div className="w-25 h-25 rounded-full border-2 border-black flex items-center justify-center bg-white p-2">
                                    <svg className="hiringProcess_inner_ellipse__Yusuj" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48.75" fill="white" stroke="#36454F" strokeWidth="2.5"></circle></svg>
                                    <Image className='absolute' src={step.icon.src} alt={index.toString()} width={50} height={50} />
                                </div>

                                {index !== steps.length - 1 && (
                                    <div className="absolute left-[3.5rem] top-[7.5rem] w-1 h-8 bg-black hidden md:block" />
                                )}
                            </div>

                            <div className="flex-1 flex flex-col md:flex-row gap-4 sm:gap-8 text-left">
                                <h3 className="w-50 text-xl font-semibold text-blue-600 mb-2 px-4">
                                    {step.title}
                                </h3>
                                <p className="w-50 text-gray-600 px-4">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default AssessmentTimeline;