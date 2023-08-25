import React from "react";
import { useSelector } from "react-redux";

export default function Current() {
  const CURRENT_DATA = useSelector((state) => state.location.Current);
  // const ROOMS = useSelector((state) => state.location.Location[0]["RoomDataArray"]);

  return (
    <div className="grid grid-cols-2 lg:flex lg:flex-row md:flex md:flex-row justify-center items-center gap-4 p-4">
      {Object.keys(CURRENT_DATA).map((key, index) => (
        <div className="flex flex-col" key={index}>
          <div className="flex flex-row justify-start">
            <label className="text-xs">{key}</label>
          </div>
          <select className="border-2 w-[10rem]">
            <option>{CURRENT_DATA[key]}</option>
          </select>
        </div>
      ))}
    </div>
  );
}
