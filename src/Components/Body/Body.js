import React from "react";
import { useSelector } from "react-redux";
import LocationModal from "./LocationModal";
import InputPanel from "./InputPanel";

export default function Body() {
  const State = useSelector((state) => state.location.Location[0]);
  const [pageContent, setPageContent] = React.useState();
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
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"> */}
      <div className="w-screen">
        <div className="w-screen wrapper">
          <div className="tabs w-screen sticky top-[4rem]">
            {Object.keys(State).map((DataItem, DataIndex) => {
              // console.log(DataItem);
              if (DataIndex === 0) {
                return <div key={DataIndex} className="hidden"></div>;
              } else {
                return (
                  <div className="tab" key={DataIndex}>
                    <input
                      type="radio"
                      name="css-tabs"
                      id={`tab-${DataIndex + 1}`}
                      className="tab-switch"
                      onChange={() => setPageContent(<InputPanel modalBlock={DataItem} />)}
                    />
                    <label htmlFor={`tab-${DataIndex + 1}`} className="tab-label">
                      {DataItem}
                    </label>
                  </div>
                );
              }
            })}
            {/*  */}
          </div>
          <div className="flex flex-col lg:flex-col md:flex-col gap-2 m-2">{pageContent}</div>
        </div>
      </div>
    </div>
  );
}
