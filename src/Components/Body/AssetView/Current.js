import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../Slices/CounterSlice";
import FindMatch from "../../../Reuse/FindMatch";
import Devices from "../../../Data/4Device";

export default function Current({ RackIndex, MatchedIndex }) {
  const BASE_DATA = useSelector((state) => state.location.Location[0].Assets.AssetsArray[MatchedIndex]);
  const [makeArray, setMakeArray] = React.useState([]);

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
        <div
          className="w-[20rem] h-[4.2rem] modAssetView"
          id="myBtn"
          onClick={() => {
            let modal = document.getElementById("myModal");
            modal.style.display = "block";
          }}
        >
          <div className="flex flex-col justify-between p-1">
            <div className="flex flex-row justify-between">
              <p className="text-xs w-[5rem]">{BASE_DATA["Make"] === "" ? `Make` : BASE_DATA["Make"]}</p>

              <input
                type="text"
                id={"Name" + MatchedIndex}
                autocomplete="off"
                className="w-[7.5rem] text-sm bottom-1 text-black"
                // defaultValue={BASE_DATA["Name*"] === "" ? `Name` : BASE_DATA["Name*"]}
                onClick={(e) => {
                  e.stopPropagation();
                  e.target.value = BASE_DATA["Name*"].split("-")[1];
                }}
                onBlur={(e) => {
                  e.target.value = BASE_DATA["Name*"] === "" ? `Name` : BASE_DATA["Name*"];
                }}
                onChange={(e) => {
                  payload.key = "Name*";
                  payload.value = `${BASE_DATA["Make"].substring(0, 4)}-${e.target.value}-${RackIndex + 1}`;
                  dispatch(actions.updateKeyValueIn(payload));
                }}
              />
              <div>Edit</div>
            </div>
            <div className="flex flex-row w-full h-full items-center">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row w-[5rem] items-end">
                  {/* <p className="text-xs">{BASE_DATA["Make"] === "" ? `Make` : BASE_DATA["Make"]}</p> */}
                  {/*  */}
                  <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="text"
                      id={"Model" + MatchedIndex}
                      className="dropbtn w-[7.5rem]"
                      placeholder={BASE_DATA["Model"] === "" ? `Model` : BASE_DATA["Model"]}
                      onChange={(e) => {
                        e.stopPropagation();
                        setMakeArray(FindMatch(e.target.value, Devices));
                        setTimeout(() => {
                          payload.key = "Model";
                          payload.value = e.target.value;
                          dispatch(actions.updateKeyValueIn(payload));
                        }, 1000);
                      }}
                    />
                    <div className="dropdown-content">
                      {makeArray.map((CabItem, DeviceIndex) => {
                        return (
                          <button
                            key={DeviceIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              document.getElementById("Model" + MatchedIndex).value = Devices[CabItem]["Model Name *"];
                              setTimeout(() => {
                                payload.key = "Model";
                                payload.value = Devices[CabItem]["Model Name *"];
                                dispatch(actions.updateKeyValueIn(payload));
                                setTimeout(() => {
                                  payload.key = "Make";
                                  payload.value = Devices[CabItem]["Make *"];
                                  dispatch(actions.updateKeyValueIn(payload));
                                  setTimeout(() => {
                                    payload.key = "Name*";
                                    payload.value = `${Devices[CabItem]["Make *"].substring(0, 4)}-${Devices[CabItem]["Model Name *"].substring(0, 4)}-${RackIndex + 1}`;
                                    dispatch(actions.updateKeyValueIn(payload));
                                    setTimeout(() => {
                                      document.getElementById("Name" + MatchedIndex).setAttribute("value", payload.value);
                                    }, 111);
                                  }, 111);
                                }, 100);
                              }, 111);
                            }}
                          >
                            {Devices[CabItem]["Model Name *"]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
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
                      payload.key = "Orientation";
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
        <div>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span
                className="close"
                onClick={() => {
                  let modal = document.getElementById("myModal");
                  modal.style.display = "none";
                  window.onclick = function (event) {
                    if (event.target === modal) {
                      modal.style.display = "none";
                    }
                  };
                }}
              >
                &times;
              </span>
              <p>Additional Selections to be Added</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
