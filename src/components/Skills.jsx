import IconCloud from "@/components/ui/cloud";
import React from "react";
const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Django",
  "Git",
  "Firebase",
  "Machine Learning",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "Firebase",
  "MongoDB",
  "PostgreSQL",
  "Firestore",
  "REST APIs",
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-20 md:my-20">
      <div className="flex flex-col items-center px-1 mb-8 gap-6 justify-center my-3">
        <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-white/80">
          Skills
        </h1>
        <h2 className="text-sm sm:text-md font-fira font-semibold text-center text-white/40">
          Focused on the experience and learning, driven by the engineering.
        </h2>
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center max-w-5xl">
        <div className="flex flex-wrap gap-2 max-w-2xl self-start md:mt-20 px-3 h-fit justify-center md:justify-start space-y-0 mb-4 md:mb-0 md:mr-6">
          {skills.map((slug) => (
            <div
              key={slug}
              className="text-white/50 border p-2 px-4 rounded-full hover:scale-105 transition-all duration-150 text-sm h-fit font-fira font-semibold"
            >
              {slug}
            </div>
          ))}
        </div>

        <div className="relative flex h-full px-5 sm:px-0 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[32rem] items-center justify-center overflow-hidden rounded-lg pb-20 pt-2">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
