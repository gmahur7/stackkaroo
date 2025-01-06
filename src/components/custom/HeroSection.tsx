"use client";
import React from "react";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import HeroSectionImage from "../../asssets/images/hero-image.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center px-4 md:px-8 py-4 h-auto md:h-[700px] bg-gradient-to-b from-[#fff] to-[#ebe3e6] rounded-xl">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h4 className="text-[#0e56f0] text-xl sm:text-2xl md:text-3xl font-bold">
          Diversifying the Designs of Digital World
        </h4>
        <p className="text-xs sm:text-sm md:text-lg font-medium mt-2 sm:mt-4 md:mt-6">
          Explorogent International Services Private Limited (EISPL) is one of the most famous companies in the sector of Web and Mobile Development. In the market, EISPL has a strong presence in providing quality services to its clients.
        </p>
        <p className="text-xs sm:text-sm md:text-lg font-medium mt-2 sm:mt-4 md:mt-6">
          EISPL is convinced that one should diversify the offering, given the changing needs of the clients. That is why we engage in multiple projects and activities. We also possess knowledge in web development, app development, UI/UX design, as well as digital marketing.
        </p>
        <Button className="bg-[#f78218] rounded-full mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base font-bold px-3 py-3 sm:py-3 sm:px-5">
          <Avatar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">
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
          <span> Book a Call</span>
        </Button>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 h-[160px] sm:h-[200px] md:h-[400px] flex items-center justify-center">
        <Image
          src={HeroSectionImage.src}
          alt="hero-sec"
          className="object-cover px-2 sm:px-4"
          height={500}
          width={450}
        />
      </div>
    </div>
  );
};

export default HeroSection;
