import React from "react";
import RacksPreviewInput from "../Reuse/RacksPreviewInput";
// import FindMatch from "../../../Reuse/FindMatch";
// import Devices from "../../../Data/4Device";

export default function Current({ RackIndex, MatchedIndex }) {
  return (
    <div className="flex flex-row items-center justify-start border-2 rounded-md">
      <div className="w-[1.5rem] h-[2rem] flex flex-row justify-center items-center border-r-2">
        <p>{RackIndex + 1}</p>
      </div>
      <div className="w-full h-full flex flex-row justify-center">
        <div className="flex flex-row justify-start">
          <RacksPreviewInput modalBlock={"Assets"} keyItem={"Name *"} edit={false} Current={MatchedIndex} />
          <RacksPreviewInput modalBlock={"Assets"} keyItem={"Make *"} edit={false} Current={MatchedIndex} />
        </div>
        <div className="flex flex-row justify-start">
          <RacksPreviewInput modalBlock={"Assets"} keyItem={"Model Name *"} edit={false} Current={MatchedIndex} />
          {/* <select
            className="w-[5rem] border-2 rounded-md"
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              payload.value = e.target.value;
              payload.key = "Mounting Type";
              dispatch(actions.updateKeyValueIn(payload));
            }}
          >
            <option value="">Rails</option>
            <option value="both">both</option>
            <option value="Front">Front</option>
            <option value="Back">Back</option>
          </select>
          <select
            className="w-[5rem] border-2 rounded-md"
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              payload.value = e.target.value;
              payload.key = "Orientation **";
              dispatch(actions.updateKeyValueIn(payload));
            }}
          >
            <option value="">Orient</option>
            <option value="Item Front Faces Cabinet Front">Front</option>
            <option value="Item Rear Faces Cabinet Front">Rear</option>
          </select> */}
        </div>
      </div>
    </div>
  );
}
