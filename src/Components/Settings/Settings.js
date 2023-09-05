import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";

export default function Settings() {
  const dispatch = useDispatch();
  console.log(dispatch);
  const LocalState = useSelector((state) => state.location.Current.LocalStorage);

  console.log(LocalState);

  return (
    <div className="w-full flex flex-col justify-start items-center ">
      <div className="w-full flex flex-row justify-center items-center">
        <input
          type="checkbox"
          className="w-6 h-6 mr-4"
          checked={LocalState}
          onChange={() => {
            let payload = {
              LocalStorage: !LocalState,
            };
            dispatch(actions.setLocalStorage(payload));
          }}
        />
        <p className="text-xl">Save to Local Storage</p>
        <button
          className="orangeButton"
          onClick={() => {
            let payload = {
              data: JSON.parse(localStorage.getItem("PulseState")),
            };
            dispatch(actions.setLocalStorageData(payload));
          }}
        >
          Get Local Storage
        </button>
      </div>
    </div>
  );
}
