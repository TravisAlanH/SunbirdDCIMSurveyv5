import React from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import LocationModal from "./LocationModal";

export default function Body() {
  const State = useSelector((state) => state.location.Location[0]);
  return (
    // <div className="w-full flex flex-col items-center">
    <div className="flex flex-col items-center">
      {/* <div className="w-full flex flex-col justify-center p-3">
        <h1 className="text-xl font-black">V1.3 GREEN BLUE PINK MODALS NON FUNCTIONAL</h1>
        <p className="text-xs">input format needed</p>
        <p className="text-xs">input type needed</p>
        <p className="text-xs">input validation needed</p>
      </div> */}
      <div>
        <LocationModal />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Object.keys(State).map((DataItem, DataIndex) => {
          // console.log(DataItem);
          if (DataIndex === 0) {
            return <div key={DataIndex} className="hidden"></div>;
          } else {
            return <Modal data={State[DataItem]} ObjKey={DataItem} key={DataIndex} />;
          }
        })}
      </div>
    </div>
  );
}
