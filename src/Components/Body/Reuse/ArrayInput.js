import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../Slices/CounterSlice";

export default function ArrayInput({ modalBlock, keyItem }) {
  const DATA_Array = useSelector((state) => state.location.Location[0][modalBlock][modalBlock + "Array"]);
  const CURRENT = useSelector((state) => state.location.Current[modalBlock + "ArrayIndex"]);
  const dispatch = useDispatch();

  let Placeholder;
  let label = keyItem.replace("*", "");

  let payload = {
    index: 0,
    ObjKey: modalBlock,
    modalType: modalBlock + "Array",
    arrayIndex: CURRENT,
    key: keyItem,
  };

  return (
    <div className="flex flex-row w-full items-center justify-center">
      <div className="w-[1rem] h-[1.5rem] flex flex-row justify-center items-center">
        <p className="text-red-500">{keyItem.includes("*") ? "*" : ""}</p>
      </div>
      <legend className="text-xs font-bold w-[7rem] h-[1.5rem] p-1 bg-[#F7F5F1]">{label}</legend>

      <input
        type="text"
        className="h-[1.5rem] w-[12rem] text-[1rem] px-2 text-black border-b-2 border-[#F7F5F1] bg-inherit"
        placeholder={Placeholder}
        value={DATA_Array[CURRENT][keyItem]}
        onChange={(e) => {
          payload.value = e.target.value;
          dispatch(actions.updateKeyValueIn(payload));
        }}
      />
    </div>
  );
}
