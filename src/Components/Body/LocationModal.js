import React from "react";
import StdInput from "./Reuse/Input";

export default function LocationModal() {
  return (
    <div className="md:w-[40rem] lg:w-[40rem] md:h-[7.5rem] lg:h-[7.5rem] w-[20rem] h-[18rem] bg-slate-300 rounded-lg mb-3 p-2 Outline flex flex-col">
      <div className="w-full h-[2rem] p-1"></div>
      <div className="md:h-[4.3rem] lg:h-[4.3rem] w-full h-full p-1 flex lg:flex-row md:flex-row flex-col Outline">
        <div className="lg:h-full lg:w-1/3 md:h-full md:w-1/3 h-1/3 w-full flex lg:flex-row md:flex-row flex-col p-2 items-center justify-center">
          <StdInput />
          <StdInput />
        </div>
        <div className="lg:h-full lg:w-1/3 md:h-full md:w-1/3 h-1/3 w-full flex lg:flex-row md:flex-row flex-col p-2 items-center justify-center">
          <StdInput />
          <StdInput />
        </div>
        <div className="lg:h-full lg:w-1/3 md:h-full md:w-1/3 h-1/3 w-full flex lg:flex-row md:flex-row flex-col p-2 items-center justify-center">
          <StdInput />
          <StdInput />
        </div>
      </div>
    </div>
  );
}
