import React from "react";
import { useSelector } from "react-redux";

export default function AssetViewRack() {
  const CurrentRack = useSelector((state) => state.location.Current["RacksArrayIndex"]);
  const RackState = useSelector((state) => state.location.Location[0].Racks.RacksArray);
  // const dispatch = useDispatch();

  if (RackState.length > 0) {
    return (
      <div className="flex flex-col-reverse text-black">
        {Array(parseInt(RackState[CurrentRack]["Height in UP"]) ? parseInt(RackState[CurrentRack]["Height in UP"]) : 1)
          .fill()
          .map((_, RackIndex) => {
            return (
              <div className="flex flex-row items-center justify-start border-2 rounded-md" key={RackIndex}>
                <div className="w-[1.5rem] h-[1.5rem] flex flex-row justify-center items-center border-r-2">
                  <p>{RackIndex + 1}</p>
                </div>
                <div className="w-[20rem] h-[2rem] flex flex-row justify-start items-center px-4"></div>
              </div>
            );
          })}
      </div>
    );
  } else {
    return (
      <div className="flex flex-row items-center justify-start border-2 rounded-md">
        <div className="w-[1.5rem] h-[1.5rem] flex flex-row justify-center items-center border-r-2">
          <p>{0}</p>
        </div>
        <div className="w-[20rem] h-[2rem] flex flex-row justify-start items-center px-4">{"Add a Rack to Display"}</div>
      </div>
    );
  }
}
