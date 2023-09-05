import React from "react";
import { useSelector } from "react-redux";
import LocationModal from "./LocationModal";
import InputPanel from "./InputPanel";

export default function Body({ pageContent, setPageContent, assetData, rackData }) {
  const State = useSelector((state) => state.location.Location[0]);
  console.log("body");
  // const [pageContent, setPageContent] = React.useState();
  return (
    <div className="flex flex-col items-center">
      <div>
        <LocationModal />
      </div>
      <div className="w-screen">
        <div className="w-screen wrapper">
          <div className="tabs w-screen">
            {Object.keys(State).map((DataItem, DataIndex) => {
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
                      onChange={() => setPageContent(<InputPanel modalBlock={DataItem} rackData={rackData} assetData={assetData} />)}
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
