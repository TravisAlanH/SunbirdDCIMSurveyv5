import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../Slices/CounterSlice";
// import FindMatch from "../../../Reuse/FindMatch";
// import Devices from "../../../Data/4Device";

export default function Current({ RackIndex, MatchedIndex }) {
  const BASE_DATA = useSelector((state) => state.location.Location[0].Assets.AssetsArray[MatchedIndex]);
  // const [makeArray, setMakeArray] = React.useState([]);
  // const [inputText, setInputText] = React.useState(BASE_DATA["Model"] === "" ? `Model` : BASE_DATA["Model"]);

  let payload = {
    index: 0,
    ObjKey: "Assets",
    modalType: "AssetsArray",
    arrayIndex: MatchedIndex,
  };

  // {
  //   "Make *": "Cisco Systems",
  //   "Model Name *": "Blade 15454E-DS3IN-12",
  //   "Class *": "Physical",
  //   "Rack Units *": "n/a",
  // },

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-row items-center justify-start border-2 rounded-md">
        <div className="w-[1.5rem] h-[4.2rem] flex flex-row justify-center items-center border-r-2">
          <p>{RackIndex + 1}</p>
        </div>
        <div className="w-[20rem] lg:w-[30rem] h-[4.2rem] modAssetView" id="myBtn">
          <div className="flex flex-col justify-between p-1">
            <div className="flex flex-row justify-between">
              <p className="text-xs w-[5rem]">{BASE_DATA["Make *"]}</p>
              <p>{BASE_DATA["Name *"]}</p>
              {/* 
              <input
                type="text"
                id={"Name" + MatchedIndex}
                // defaultValue={BASE_DATA["Name*"] === "" ? `` : BASE_DATA["Name*"]}
                value={name}
                className="w-[7.5rem] text-sm bottom-1 text-black"
                // defaultValue={BASE_DATA["Name*"] === "" ? `Name` : BASE_DATA["Name*"]}
                onClick={(e) => {
                  e.stopPropagation();
                  // e.target.value = BASE_DATA["Name*"].split("-")[1];
                  setName(BASE_DATA["Name*"].split("-")[1]);
                }}
                onBlur={(e) => {
                  // e.target.value = BASE_DATA["Name*"] === "" ? `Name` : BASE_DATA["Name*"];
                  setName(BASE_DATA["Name*"] === "" ? `Name` : BASE_DATA["Name*"]);
                }}
                onChange={(e) => {
                  payload.key = "Name*";
                  payload.value = `${BASE_DATA["Make"].substring(0, 4)}-${e.target.value}-${RackIndex + 1}`;
                  dispatch(actions.updateKeyValueIn(payload));
                }}
              /> */}
            </div>
            <div className="flex flex-row w-full h-full items-center">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row w-[5rem] items-end">
                  {/* <p className="text-xs">{BASE_DATA["Make"] === "" ? `Make` : BASE_DATA["Make"]}</p> */}
                  {/*  */}
                  {BASE_DATA["Model *"]}
                  {/* <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                    <SearchInput modalBlock={"AssetsArray"} RackIndex={RackIndex} />
                  </div> */}
                  {/*  */}
                  {/* <input className="w-[5rem]" type="text" onClick={(e) => e.stopPropagation()} placeholder={"Model"} /> */}
                </div>
                <div>
                  <select
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
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
