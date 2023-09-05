import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../Slices/CounterSlice";

export default function Settings() {
  const dispatch = useDispatch();
  console.log(dispatch);
  const LocalState = useSelector((state) => state.location.Current.LocalStorage);

  console.log(LocalState);

  return (
    <div className="w-full flex flex-col justify-start items-center ">
      <div className="w-full flex flex-row justify-center items-center">
        <input type="checkbox" className="w-6 h-6 mr-4" onChange={() => {}} />
        <p className="text-xl">Local Storage</p>
      </div>
    </div>
  );
}
