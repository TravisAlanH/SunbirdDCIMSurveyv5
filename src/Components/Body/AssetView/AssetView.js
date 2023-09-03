import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../Slices/CounterSlice";

// import * as actions from "../../../Slices/CounterSlice";
import Current from "./Current";
import AddNew from "./AddNew";

export default function AssetView() {
  const CurrentRack = useSelector((state) => state.location.Current["RacksArrayIndex"]);
  const RackState = useSelector((state) => state.location.Location[0].Racks.RacksArray);
  const AssetState = useSelector((state) => state.location.Location[0].Assets.AssetsArray);

  const dispatch = useDispatch();

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
        {Array(parseInt(RackState[CurrentRack]["Height in UP"]) ? parseInt(RackState[CurrentRack]["Height in UP"]) : 1)
          .fill()
          .map((_, RackIndex) => {
            let MatchedIndex = findIndexByNameAndLocation(RackIndex + 1);
            if (MatchedIndex !== -1) {
              return (
                <div
                  onClick={() => {
                    console.log(MatchedIndex);
                    dispatch(actions.updateCurrent({ key: "AssetsArrayIndex", value: MatchedIndex }));
                  }}
                >
                  <Current RackIndex={RackIndex} MatchedIndex={MatchedIndex} key={RackIndex} />
                </div>
              );
            } else return <AddNew RackIndex={RackIndex} key={RackIndex} />;
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
