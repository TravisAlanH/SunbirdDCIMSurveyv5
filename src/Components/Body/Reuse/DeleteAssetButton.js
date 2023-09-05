import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../Slices/CounterSlice";

export default function DeleteAssetButton() {
  const dispatch = useDispatch();
  const CURRENT = useSelector((state) => state.location.Current["AssetsArrayIndex"]);

  let payload = {
    key: "AssetsArrayIndex",
    value: CURRENT - 1,
  };

  return (
    <button
      className="orangeButton"
      onClick={() => {
        const IndexToRemove = CURRENT;
        dispatch(actions.updateCurrent(payload));
        payload.removeIndex = IndexToRemove;
        dispatch(actions.removeFromAssetsArray(payload));
      }}
    >
      Delete
    </button>
  );
}
