"use client";
import React from "react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import StorySectionImage from "../../asssets/images/story.png";
import Image from "next/image";

const StorySection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center px-4 py-4 sm:px-8 lg:px-12 h-auto lg:h-[600px] bg-gradient-to-b from-[#fff] to-[#ebe3e6] rounded-xl mt-8 sm:mt-16 md:mt-20">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h4 className="text-[#0e56f0] text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 lg:mt-0">
          Our Story
        </h4>
        <p className="text-base sm:text-lg lg:text-xl font-semibold mt-8">
          Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra bring their extensive experience to the forefront as industry veterans. Our team is fueled by innovation, continually striving to exceed customer expectations.
        </p>
        <p className="text-base sm:text-lg lg:text-xl font-semibold mt-6">
          Operating from our registered office in Agartala Sadar, Tripura (W), our company is officially registered with the Corporate Identification Number (CIN). Our active status and an authorized share capital of Rs 10.00 lac are a source of pride.
        </p>
        <Button className="bg-[#f78218] rounded-full mt-8 lg:mt-12 text-sm sm:text-lg font-bold sm:px-2 py-2 md:px-6 inline-flex items-center">
          <Avatar className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8 mr-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
            </svg>
          </Avatar>
          <span>Get Estimated Project Cost</span>
        </Button>
      </div>
      
      <div className="relative w-full lg:w-1/2 h-64 lg:h-full mt-8 lg:mt-0 flex items-center justify-center">
        <Image
          src={StorySectionImage.src}
          alt="hero-sec"
          className="object-contain px-4"
          height={632}
          width={567}
        />
      </div>
    </div>
  );
};

export default StorySection;
