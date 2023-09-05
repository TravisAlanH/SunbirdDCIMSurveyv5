import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../Slices/CounterSlice";
import SearchInput from "../../Inputs/SearchInput";

export default function ArrayInput({ modalBlock, keyItem, edit, size, assetData, rackData }) {
  // const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const DATA_Array = useSelector((state) => state.location.Location[0][modalBlock][modalBlock + "Array"]);
  const CURRENT = useSelector((state) => state.location.Current[modalBlock + "ArrayIndex"]);
  const dispatch = useDispatch();

  console.log("ArrayInput");

  let Placeholder;

  let label = keyItem.replace("*", "");

  let payload = {
    index: 0,
    ObjKey: modalBlock,
    modalType: modalBlock + "Array",
    arrayIndex: CURRENT,
    key: keyItem,
  };
  if (edit === undefined) {
    edit = true;
  }

  return (
    <div className="flex flex-row w-full items-center justify-center">
      <div className="w-[1rem] h-[1.5rem] flex flex-row justify-center items-center">
        <p className="text-red-500">{keyItem.includes("*") ? "*" : ""}</p>
      </div>
      <legend className="text-xs font-bold w-[7rem] h-[1.5rem] p-1 bg-[#F7F5F1]">{label}</legend>
      {(label === "Model Name " && modalBlock === "Assets") || (label === "Model Name " && modalBlock === "Racks") ? (
        <SearchInput modalBlock={modalBlock} ItemKey={keyItem} rackData={rackData} assetData={assetData} />
      ) : (
        <input
          type="text"
          disabled={!edit}
          className="h-[1.5rem] w-[12rem] text-[1rem] px-2 text-black border-b-2 border-[#F7F5F1] bg-inherit"
          placeholder={Placeholder}
          value={DATA_Array[CURRENT][keyItem]}
          onChange={(e) => {
            payload.value = e.target.value;
            dispatch(actions.updateKeyValueIn(payload));
          }}
        />
      )}
    </div>
  );
}
