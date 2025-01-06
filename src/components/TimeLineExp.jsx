"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "2021-Present",
      content: (
        <div className="p-4 flex gap-2 flex-col">
          <h1 className="text-xl font-firaSans md:text-3xl font-semibold">
            College of Engineering Trivandrum
          </h1>
          <h2 className="text-sm text-gray-400">
            Bachelor of Technology - BTech, Computer Science and Engineering
          </h2>
          <h3 className="text-xs text-gray-400">CGPA : 7.9</h3>
        </div>
      ),
    },
    {
      title: "2018-2020",
      content: (
        <div className="p-4 flex gap-2 flex-col">
          <h1 className="text-xl font-firaSans md:text-3xl font-semibold">
            Govt Higher Secondary School Chayoth
          </h1>
          <h2 className="text-sm text-gray-400">
            Class 12th - CBSE Computer Science with Physics,Biology,Chemistry
            and Mathematics
          </h2>
          <h3 className="text-xs text-gray-400">Percentage: 97.83%</h3>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div className="p-4 flex gap-2 flex-col">
          <h1 className="text-xl font-firaSans md:text-3xl font-semibold">
            Govt Higher Secondary School Chayoth
          </h1>
          <h2 className="text-sm text-gray-400">
            Class 10th - Kerala State Board
          </h2>
          <h3 className="text-xs text-gray-400">Full A+</h3>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
