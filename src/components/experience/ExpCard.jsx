import React from "react";

const ExpCard = ({ title, description, start, end }) => {
  return (
    <div className="flex w-[20em] md:w-[50rem] mx-3 ">
      <div class=" w-full bg-gray-800 rounded-lg shadow-md p-6">
        <h1 class="text-2xl font-semibold mb-4">{title}</h1>
        <p class="text-gray-400 mb-2">{description}</p>
        <p class="text-gray-500 mb-1">{start}</p>
        <p class="text-gray-500">{end}</p>
      </div>
    </div>
  );
};

export default ExpCard;
