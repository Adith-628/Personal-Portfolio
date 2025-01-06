import BackgroundBeam from "@/components/ui/background-beam";
import { TracingBeam } from "@/components/ui/tracking-beam";
import Image from "next/image";
import React from "react";
import Skills from "./Skills";
import Particles from "@/components/ui/particles";
import { Card } from "./NewCard";
import { Article } from "./Article";
import { getPinnedRepos, getRepos } from "../Data/data";
import { IconLink } from "@tabler/icons-react";

export const Projects = async () => {
  const username = "Adith-628";

  const [repositories, pinnedNames] = await Promise.all([
    getRepos(username),
    getPinnedRepos(username),
  ]);

  console.log(pinnedNames);

  const trimmedPinnedNames = pinnedNames.map((name) =>
    name.trim().toLowerCase()
  );
  console.log("Trimmed Pinned Names:", trimmedPinnedNames);

  repositories.forEach((project) => {
    if (project.name == "Streamlit_ChatBot") {
      console.log(project);
    }
  });

  const heroes = repositories
    .filter((project) =>
      trimmedPinnedNames.includes(project.name.trim().toLowerCase())
    )
    .sort((a, b) => b.stargazers_count - a.stargazers_count);

  const sorted = repositories
    .filter((p) => !p.private)
    .filter((p) => !p.fork)
    .filter((p) => !p.archived)
    // .filter((p) => p.name !== username)
    .filter((p) => !pinnedNames.includes(p.name))
    // .filter((p) => !data.projects.blacklist.includes(p.name))
    .sort(
      (a, b) =>
        new Date(b.updated_at ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.updated_at ?? Number.POSITIVE_INFINITY).getTime()
    );

  console.log(heroes.length, "heroes");

  return (
    <div id="projects" className="my-20  relative">
      <div className=" flex   items-center flex-col px-1  mb-8 gap-6 justify-center my-3">
        <h1 className="font-semibold tracking-tight  text-4xl md:text-6xl text-white/80">
          Featured Projects
        </h1>
        <h2 className="md:text-md text-sm font-fira font-semibold text-center  text-white/40">
          Focused on the experience and learning, driven by the engineering.
        </h2>
      </div>
      <div className="flex flex-col px-2  md:px-6  ">
        {/* <div className="h-fit flex flex-wrap p-10 justify-center items-center gap-7 relative z-10  bg-gradient-to-tl from-b via-zinc-400/10 to-zinc-900">
          <div className="h-fit">
            <Card>
              <Article project={dummyProject} />
            </Card>
          </div>
          <div className="h-fit">
            <Card>
              <Article project={dummyProject} />
            </Card>
          </div>
          <div className="h-fit">
            <Card>
              <Article project={dummyProject} />
            </Card>
          </div>
          <div className="h-fit">
            <Card>
              <Article project={dummyProject} />
            </Card>
          </div>
        </div> */}
        <div className=" flex  w-full p-10 justify-center items-center gap-7 relative z-10  bg-gradient-to-tl from-b via-zinc-400/10 to-zinc-900">
          {heroes.length ? (
            <div className="flex w-full  flex-wrap md:flex-nowrap justify-center gap-4">
              {heroes[0] || heroes[2] ? (
                <div className="grid grid-cols-1 gap-4">
                  {[heroes[0], heroes[2]].map((project) =>
                    !project ? null : (
                      <Card key={project.name}>
                        <Article project={project} />
                      </Card>
                    )
                  )}
                </div>
              ) : null}
              {heroes[1] || heroes[3] ? (
                <div className="grid grid-cols-1 gap-4">
                  {[heroes[1], heroes[3]].map((project) =>
                    !project ? null : (
                      <Card key={project.name}>
                        <Article project={project} />
                      </Card>
                    )
                  )}
                </div>
              ) : null}
              {heroes[4] || heroes[5] ? (
                <div className="grid grid-cols-1 gap-4">
                  {[heroes[4], heroes[5]].map((project) =>
                    !project ? null : (
                      <Card key={project.name}>
                        <Article project={project} />
                      </Card>
                    )
                  )}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <a
          href="https://github.com/Adith-628"
          className="text-center flex justify-center items-center gap-2 z-20 transition-all duration-100 text-sm underline text-white/50 hover:text-violet-400 "
        >
          <span>More projects</span>
          <IconLink size={14} />
        </a>
      </div>
      <Particles
        className="absolute z-0 overflow-hidden inset-0"
        quantity={50}
        ease={80}
        refresh
      />
    </div>
  );
};
