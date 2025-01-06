import ButtonsSection from "@/components/custom/ButtonsSection";
import DigitalServiceSection from "@/components/custom/DigitalServiceCenter";
import HeadingSection from "@/components/custom/HeadingSection";
import HeroSection from "@/components/custom/HeroSection";
import JobServices from "@/components/custom/JobServices";
import ProgressBarSection from "@/components/custom/ProgressBarSection";
import SeoServices from "@/components/custom/SeoServices";
import StorySection from "@/components/custom/StorySection";
import WhyChooseUsSection from "@/components/custom/WhyChooseUsSection";
export default function Home() {


  return (
    <div className="container mx-auto px-4">
      
      <HeadingSection/>

      <ProgressBarSection />

      <HeroSection />

      <ButtonsSection/>

      <StorySection />

      <WhyChooseUsSection />

      <DigitalServiceSection/>

      <SeoServices/>

      <JobServices/>

    </div>
  );
}
