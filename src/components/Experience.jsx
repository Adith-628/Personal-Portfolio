import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";
// import { Timeline, ConfigProvider } from "antd";
import ExpCard from "./experience/ExpCard";
import { FloatingDockDemo } from "./Dock";

export const Experience = () => {
  return (
    <div className="w-full md:my-20 relative flex flex-col justify-center items-center">
      <div className="flex px-3 max-w-7xl items-center flex-col mb-8 gap-6 justify-center">
        <h3 className="text-xs text-white/40 font-semibold tracking-wider font-firaSans mb-2">
          CAREER
        </h3>
        <h1 className="font-semibold font-firaSans text-4xl md:text-6xl text-white/80">
          Experience
        </h1>
        <h2 className="text-md font-fira max-w-6xl px-5 text-center font-semibold tracking-wide text-white/40">
          I specialize in building scalable web applications and solving complex
          challenges across the development stack. Passionate about delivering
          impactful solutions and continuously enhancing my skills to stay at
          the forefront of technology.
        </h2>
      </div>

      <section className="flex w-full flex-col gap-4 p-8 justify-center items-center bg-background-dim2 rounded-xl">
        {/* Frinks AI Experience */}
        <div className="relative flex flex-col gap-4 max-w-5xl border border-primary-dark rounded-xl p-8 bg-background-dim2">
          <div className="flex flex-col gap-4 max-w-[calc(var(--grid-32)*20)]">
            <span className="flex flex-col">
              <h3 className="-mt-1 mb-1 text-xl font-firaSans font-bold">
                Full Stack Intern
              </h3>
              <h4 className="text-sm mb-1 font-fira font-semibold text-white/70">
                Frinks AI
              </h4>
              <h4 className="text-xs mb-1 text-white/40">
                Internship · Jan 2025 - March 2025
              </h4>
            </span>
            <p className="text-sm text-gray-200">
              As a Full Stack Intern at Frinks AI, I contributed to the
              development of an internal ERP software to streamline company
              operations. My responsibilities included designing and
              implementing frontend components for a seamless user experience
              and developing backend APIs for efficient data management. I
              optimized database queries, integrated authentication mechanisms,
              and ensured the system&apos;s scalability. Additionally, I
              collaborated with cross-functional teams to enhance system
              performance and deployment workflows using Git and other
              development tools.
            </p>
          </div>
        </div>

        {/* Oronium Experience */}
        <div className="relative flex flex-col gap-4 max-w-5xl border border-primary-dark rounded-xl p-8 bg-background-dim2">
          <div className="flex flex-col gap-4 max-w-[calc(var(--grid-32)*20)]">
            <span className="flex flex-col">
              <h3 className="-mt-1 mb-1 text-xl font-firaSans font-bold">
                Nextjs Developer Intern
              </h3>
              <h4 className="text-sm mb-1 font-fira font-semibold text-white/70">
                Oronium
              </h4>
              <h4 className="text-xs mb-1 text-white/40">
                Internship · Present
              </h4>
            </span>
            <p className="text-sm text-gray-200">
              As a NextJs Developer Intern at Oronium, I developed and optimized
              responsive web interfaces, collaborated with design and
              development teams, and focused on performance and accessibility
              improvements. My role involved translating design concepts into
              functional web components, enhancing user experience, and
              troubleshooting technical issues in a fast-paced startup
              environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
