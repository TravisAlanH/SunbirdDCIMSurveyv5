import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";

export default function SelectElement({ modalBlock }) {
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  // const CURRENT = useSelector((state) => state.location.Current[modalBlock + "ArrayIndex"]);
  const dispatch = useDispatch();

  let payload = {
    index: 0,
    key: "",
    value: "",
    arrayIndex: 0,
    modalType: modalBlock + "Array",
    ObjKey: modalBlock,
  };

  return modalBlock === "Rooms" || modalBlock === "Assets" || modalBlock === "Racks" ? (
    <div className="flex flex-row">
      <h1>{modalBlock === "Rooms" ? "Current " + modalBlock : "Current Rack"}</h1>
      {modalBlock === "Rooms" ? (
        <div>
          <select
            className="w-[10rem]"
            id="RoomsSelection"
            onChange={(e) => {
              payload.key = "RoomsArrayIndex";
              payload.value = e.target.options.selectedIndex;
              dispatch(actions.updateCurrent(payload));
            }}
          >
            {BASE_DATA["Rooms"]["RoomsArray"].map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item["Name *"]}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        <div>
          <select
            className="w-[10rem]"
            id="RacksSelection"
            onChange={(e) => {
              payload.key = "RacksArrayIndex";
              payload.value = e.target.options.selectedIndex;
              dispatch(actions.updateCurrent(payload));
            }}
          >
            {BASE_DATA["Racks"]["RacksArray"].map((item, index) => {
              return (
                <option key={index} value={item["Name *"]}>
                  {item["Name *"]}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  ) : null;
}
