"use client";
import sourceMetadata from "@/util/SourceMetaData";
import Image from "next/image";
import SlideLeftToRightComponent from "./SlideLeftToRightComponent";

const AboutSection = () => {
  return (
      <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
    <SlideLeftToRightComponent x={-100}>
        <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
          <Image
            src={"/coworking-male-programmer-writing-program-code.gif"}
            width={500}
            height={500}
            alt={sourceMetadata.title}
            className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          />
        </div>
        </SlideLeftToRightComponent>

    <SlideLeftToRightComponent x={1000}>
        <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
          <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
            Innovate, Code, Transform!
          </h2>
          <p className="font-medium capitalize mt-4 text-base">
            As A Versatile Software Engineer, I Excel In Both Corporate And
            Freelance Environments. My Expertise In JavaScript Enables Me To
            Develop Cutting-Edge Solutions That Drive Success. Passionate About
            Continuous Learning, I Embrace New Challenges To Deliver Outstanding
            Digital Experiences. Each Line Of Code Is Crafted With Precision And
            Purpose, Making A Tangible Difference In The Tech World.
          </p>
        </div>
    </SlideLeftToRightComponent>
      </section>
  );
};

export default AboutSection;
