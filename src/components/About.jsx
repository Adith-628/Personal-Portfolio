import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      // id="about"
      className="flex relative justify-center bg-[#060708] bg-gradient-to-b  from-black/80 to-[#060708] py-8 mb-5 md:py-20"
    >
      <div className="flex w-full justify-center max-w-4xl">
        <div className="flex w-fit z-10 flex-col gap-2 px-10 justify-center  font-extrabold text-3xl sm:text-3xl md:text-7xl md:px-4">
          <div className="text-sm md:text-md text-white/50 font-normal font-fira mt-2 tracking-tighter md:tracking-normal">
            {" "}
            I&apos;m currently looking for Jobs.
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-slate-200">Jobs : &#123;</h2>
            <h2 className="leading-[.9] my-1 ml-8">
              <span className="highlight whitespace-nowrap">
                Full Stack Developer
              </span>
              ,
            </h2>
            <h2 className="leading-[.9] my-1 ml-8">
              <span className="highlight2">Software Engineer</span>
            </h2>
            <h2 className="text-slate-200">&#125;</h2>
          </div>
          <div className="text-sm  md:text-md font-normal text-white/50 font-fira mt-2 md:mt-5 tracking-tighter md:tracking-normal">
            I am particularly interested in product based positions where I can
            help make an organization wide impact.
          </div>
        </div>
      </div>
      <div className="absolute -top-52  opacity-50 -right-20 ">
        <Image
          src="/images/globe.svg"
          className="z-0"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
};

export default About;
