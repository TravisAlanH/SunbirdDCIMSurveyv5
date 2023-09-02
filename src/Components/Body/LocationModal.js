import React from "react";
import StdInput from "./Reuse/Input";
import { useSelector } from "react-redux";

export default function LocationModal() {
  const LOC_DATA = useSelector((state) => state.location.Location[0].LocationData);

  return (
    <div className="w-screen text-white mb-3 flex flex-col border-[#F3EEE7] border-2">
      <div className="w-full h-[2.5rem] bg-[#F3EEE7] flex flex-row items-center justify-center">
        <h1 className="font-bold">Location </h1>
        <h1 className="font-black">: {LOC_DATA["dcTrack Location Name*"]}</h1>
      </div>
      <div className=" w-full p-1 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
        <StdInput ObjKey={"dcTrack Location Name*"} />
        <StdInput ObjKey={"dcTrack Location Code*"} />
        <StdInput ObjKey={"Data Center Area*"} />
        <StdInput ObjKey={"Country*"} />
        <StdInput ObjKey={"dcTrack Location Hierarchy*"} />
        {/* <StdInput ObjKey={"Can Contain Assets"} /> */}
      </div>
    </div>
  );
}
