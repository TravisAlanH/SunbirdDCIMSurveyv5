import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../../Slices/CounterSlice";

export default function DeleteAssetButton() {
  // const dispatch = useDispatch();
  // const CURRENT = useSelector((state) => state.location.Current["AssetsArrayIndex"]);

  return (
    <button
      className="orangeButton"
      onClick={() => {
        // need to get payload
        // dispatch(actions.removeFromAssetsArray(payload));
        // set current - 1
        // delete current
      }}
    >
      Delete
    </button>
  );
}
