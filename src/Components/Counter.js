import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateLocationName, updateLocationCode, addToArray, removeFromArray, updateArrayValue } from "../Slices/CounterSlice"; // Adjust the path accordingly
import * as actions from "../Slices/CounterSlice";

export function Counter() {
  const location = useSelector((state) => state.location.Location[0].Location);
  let LocationName = location["dcTrack Location Name*"];
  // const locationCode = useSelector((state) => state.location.Location["Location Code*"]);
  //   const addToArray = useSelector((state) => state.location["Array"]);
  const dispatch = useDispatch();
  let count = 0;
  let payload = {
    index: 0,
    key: "",
    value: "",
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            payload.value = e.target.value;
            payload.key = "dcTrack Location Name*";
            dispatch(actions.updateKeyValueInLocation(payload));
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            payload.value = e.target.value;
            payload.key = "Room Number";
            dispatch(actions.updateKeyValueInRoomData(payload));
          }}
        />
        {LocationName}
      </div>
      <div>
        <button
          onClick={() => {
            count = count + 1;
            dispatch(actions.addToArray(count));
          }}
        >
          Add to Array
        </button>
        <button onClick={() => dispatch(actions.removeFromArray(2))}>Remove from Array</button>
        <button
          onClick={() => {
            let payload = {
              index: 2,
              value: "new value",
            };
            dispatch(actions.updateArrayValue(payload));
          }}
        >
          Update Array
        </button>
      </div>
    </div>
  );
}
