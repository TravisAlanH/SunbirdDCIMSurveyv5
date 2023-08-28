import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../Slices/CounterSlice";

export default function AddNew({ RackIndex }) {
  const CurrentRackIndex = useSelector((state) => state.location.Current["RacksArrayIndex"]);
  const CurrentRack = useSelector((state) => state.location.Location[0].Racks.RacksArray[CurrentRackIndex]);
  const AssetsArray = useSelector((state) => state.location.Location[0].Assets.AssetsArray);

  const dispatch = useDispatch();

  let payload = {
    index: 0,
    key: "",
    value: "",
    arrayIndex: 0,
    modalType: "",
    ObjKey: "Assets",
  };

  return (
    <div className="flex flex-row items-center justify-start">
      <div className="w-[1.5rem] h-[1.5rem] flex flex-row justify-center items-center">
        <p>{RackIndex}</p>
      </div>
      <div className="w-[20rem] h-[2rem] flex flex-row justify-start px-4">
        <button
          onClick={() => {
            payload.modalType = "AssetsArray";
            dispatch(actions.addToArray(payload));
            setTimeout(() => {
              payload.key = "Rack Location";
              payload.value = CurrentRack["Name*"];
              payload.arrayIndex = AssetsArray.length;
              dispatch(actions.updateKeyValueIn(payload));
            }, 100);
            setTimeout(() => {
              payload.key = "RU Location";
              payload.value = RackIndex + 1;
              payload.arrayIndex = AssetsArray.length;
              dispatch(actions.updateKeyValueIn(payload));
              payload.index = 0;
            }, 100);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
