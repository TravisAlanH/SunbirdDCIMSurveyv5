import React from "react";
import { useSelector } from "react-redux";
// import * as actions from "../../../Slices/CounterSlice";
import Current from "./Current";

export default function AssetView() {
  const CurrentRack = useSelector((state) => state.location.Current["RacksArrayIndex"]);
  const RackState = useSelector((state) => state.location.Location[0].Racks.RacksArray);
  const AssetState = useSelector((state) => state.location.Location[0].Assets.AssetsArray);
  // const dispatch = useDispatch();

  function findIndexByNameAndLocation(RackIndex) {
    for (let i = 0; i < AssetState.length; i++) {
      if (AssetState[i]["Cabinet **"] === RackState[CurrentRack]["Name *"]) {
        if (parseInt(AssetState[i]["U Position **"]) === RackIndex) {
          return i;
        }
      }
    }
    return -1;
  }

  if (RackState.length > 0) {
    return (
      <div className="flex flex-col-reverse text-black">
        {Array(parseInt(RackState[CurrentRack]["Rack Units *"]) ? parseInt(RackState[CurrentRack]["Rack Units *"]) : 1)
          .fill()
          .map((_, RackIndex) => {
            let MatchedIndex = findIndexByNameAndLocation(RackIndex + 1);
            if (MatchedIndex !== -1) {
              return <Current RackIndex={RackIndex} MatchedIndex={MatchedIndex} key={RackIndex} />;
            } else
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
      <div>
        <p className="text-black">No Rack Selected / Added</p>
      </div>
    );
  }
}
