import React from "react";
import { cn } from "@/lib/utils";

const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Spotlight;

<svg
  width="236"
  height="68"
  viewBox="0 0 236 68"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="hidden md:block"
>
  <path
    d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
    stroke="url(#paint0_linear)"
  ></path>
  <defs>
    <linearGradient
      id="paint0_linear"
      gradientUnits="userSpaceOnUse"
      x1="-100"
      y1="0"
      x2="-100"
      y2="0"
    >
      <stop stop-color="#2EB9DF" stop-opacity="0"></stop>
      <stop stop-color="#2EB9DF"></stop>
      <stop offset="1" stop-color="#9E00FF" stop-opacity="0"></stop>
    </linearGradient>
  </defs>
</svg>;
