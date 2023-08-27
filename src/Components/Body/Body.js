import React from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";

export default function Body() {
  const State = useSelector((state) => state.location.Location[0]);
  return (
    // <div className="w-full flex flex-col items-center">
    <div>
      <div className="w-full flex flex-row justify-center p-3">
        <h1 className="text-xl font-black">V1.3 GREEN BLUE PINK MODALS NON FUNCTIONAL</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.keys(State).map((DataItem, DataIndex) => (
          <Modal data={State[DataItem]} ObjKey={DataItem} key={DataIndex} />
        ))}
      </div>
    </div>
  );
}
