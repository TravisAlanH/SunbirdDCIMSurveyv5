import React from "react";
import StdInput from "./Reuse/Input";
import { useSelector } from "react-redux";

export default function LocationModal() {
  const LOC_DATA = useSelector((state) => state.location.Location[0].LocationData);

  return (
    <div className="md:w-[40rem] lg:w-[40rem] md:h-[9rem] lg:h-[9rem] w-[20rem] h-[17rem] bg-[#64B6AC] rounded-lg mb-3 p-2  flex flex-col">
      <div className="w-full h-[2.5rem] p-1 flex flex-row items-center justify-center border-b-2">
        <h1 className="font-bold">Location </h1>
        <h1 className="font-black">: {LOC_DATA["dcTrack Location Name*"]}</h1>
      </div>
      <div className="md:h-[6rem] lg:h-[6rem] w-full h-[16rem] p-1 flex lg:flex-row md:flex-row flex-col ">
        <div className="lg:h-full lg:w-1/3 md:h-full md:w-1/3 h-1/3 w-full flex flex-col p-2 items-center justify-center">
          <StdInput ObjKey={"dcTrack Location Name*"} />
          <StdInput ObjKey={"dcTrack Location Code*"} />
        </div>
        <div className="lg:h-full lg:w-1/3 md:h-full md:w-1/3 h-1/3 w-full flex  flex-col p-2 items-center justify-center">
          <StdInput ObjKey={"Data Center Area*"} />
          <StdInput ObjKey={"Country*"} />
        </div>
        <div className="lg:h-full lg:w-1/3 md:h-full md:w-1/3 h-1/3 w-full flex  flex-col p-2 items-center justify-start">
          <StdInput ObjKey={"dcTrack Location Hierarchy*"} />
          {/* <StdInput ObjKey={"Can Contain Assets"} /> */}
        </div>
      </div>
    </div>
  );
}
