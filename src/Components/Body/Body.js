import React from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";

export default function Body() {
  const State = useSelector((state) => state.location.Location[0]);
  return (
    // <div className="w-full flex flex-col items-center">
    <div className="grid grid-cols-2 gap-3">
      {Object.keys(State).map((DataItem, DataIndex) => (
        <Modal data={State[DataItem]} ObjKey={DataItem} key={DataIndex} />
      ))}
    </div>
  );
}
