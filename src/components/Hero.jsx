"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import Spotlight from "@/components/ui/spotlight";
import BackgroundBeam from "@/components/ui/background-beam";
import Meteors from "@/components/ui/meteors";
import { Github, LinkedinIcon } from "lucide-react";
import { Linkedin } from "lucide";

export const Hero = () => {
  return (
    <div className="flex-1 relative min-h-screen flex justify-center items-center bg-[#060708] bg-gradient-to-b from-black via-zinc-600/20 to-black/80">
      {/* <BackgroundBeam /> */}
      <Meteors className="" number={20} />
      <div className="flex flex-wrap-reverse sm:flex-nowrap justify-center items-center gap-2 h-full m-1  md:m-4">
        <div className="left self-center flex-1 px-2 md:px-10 mb-4 lg:mb-0">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <h2 className="text-xl flex lg:text-2xl  justify-center">
                Hi, I&apos;m
              </h2>

              <div className="">
                <div className="hidden  w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

                <h1 className="flex justify-center font-extrabold items-center z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-4">
                  ADITHYAN T{/* <UserIcon promise={promise} /> */}
                </h1>
                <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
              </div>
              <h2 className="text-lg lg:text-2xl  text-center">
                Full Stack Developer
              </h2>
              <p className="text-sm md:text-lg text-center mt-2 text-gray-400 max-w-7xl self-center">
                Engineering student at the College of Engineering Trivandrum and
                a passionate front-end developer, consistently seeking
                opportunities to collaborate on innovative projects and
                contribute to impactful solutions.
              </p>
            </div>
          </div>
          <div className="flex my-4 gap-2 justify-center items-center text-lg">
            <button
              className="boton-elegante flex gap-2 px-4 py-2 bg-black font-fira text-sm md:text-base md:px-8 md:py-4"
              onClick={() =>
                window.open("https://github.com/Adith-628", "_blank")
              }
            >
              <Github size={22} />
              <div className="self-center">Github</div>
            </button>

            <button
              className="flex gap-2 justify-center items-center boton-elegante px-4 py-2 bg-black font-fira text-sm md:text-base md:px-8 md:py-4"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/adithyan-t-ba37b9220/",
                  "_blank"
                )
              }
            >
              <LinkedinIcon size={22} />
              <div className="self-center">LinkedIn</div>
            </button>
          </div>
        </div>

        <div className="">
          {/* <Image
            src="/images/pic.jpg"
            className="rounded-full aspect-square object-cover items-center"
            width={350}
            height={350}
            alt="Profile Picture"
          /> */}
        </div>
      </div>
    </div>
  );
};
