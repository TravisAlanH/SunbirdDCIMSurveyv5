import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
// import { current } from "@reduxjs/toolkit";

// CHECKS : "Type", "Condition", "Damage", "Note", "GPS"

export default function Modal() {
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const CURRENT = useSelector((state) => state.location.Current);
  // const [currentLocationIndex, setCurrentLocationIndex] = React.useState(0);
  // const [currentRoomIndex, setCurrentRoomIndex] = React.useState(0);
  // const [currentAssetsIndex, setCurrentAssetsIndex] = React.useState(0);
  // const [currentRacksIndex, setCurrentRacksIndex] = React.useState(0);

  const [indexArray, setIndexArray] = React.useState([0, 0, 0, 0]);

  function textCleanUp(text) {
    return text
      .replace("dcTrack", "dcT")
      .replace("Data Center", "DC")
      .replace("Number", "Num")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .slice(0, 12);
  }

  // let setIndex = [setCurrentLocationIndex, setCurrentRoomIndex, setCurrentAssetsIndex, setCurrentRacksIndex];
  // let useIndex = [currentLocationIndex, currentRoomIndex, currentAssetsIndex, currentRacksIndex];
  const dispatch = useDispatch();
  let payload = {
    index: 0,
    key: "",
    value: "",
    arrayIndex: 0,
    modalType: "",
  };

  function setNewCurrentShowLength(boolValue, arrayLength, index) {
    const direction = boolValue ? 1 : -1;
    const newIndex = (index + direction + arrayLength) % arrayLength;
    return newIndex;
  }

  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {Object.keys(BASE_DATA).map((modalBlock, modalIndex) => (
          //! Block sets up MODAL Clicks
          <div
            key={modalIndex}
            className="w-[20rem] h-[8.5rem] rounded-xl py-2 px-4 bg-slate-500"
            id="myBtn"
            onClick={() => {
              let modal = document.getElementById("modal" + modalIndex);
              modal.style.display = "block";
              let close = document.getElementById("close" + modalIndex);
              close.onclick = function () {
                modal.style.display = "none";
              };
              window.onclick = function (event) {
                if (event.target === modal) {
                  modal.style.display = "none";
                } else if (event.target === close) {
                  modal.style.display = "none";
                }
              };
            }}
          >
            {/* DATA IN BLOCK */}
            <div className="w-full h-full flex flex-col justify-between">
              <div>
                {/* HEAD OF MODAL */}
                <div className="flex flex-row justify-between items-center">
                  <h2 className="font-bold text-lg">{modalBlock.split(/(?=[A-Z])/)[0]}</h2>
                  {/* <div className="flex flex-row items-center pb-2">
                  <select
                    id={"ModalHeader" + modalIndex}
                    className="max-w-[10rem] min-w-[10rem] selectBox border-2 border-gray-300 rounded-md"
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      // let set = setIndex[modalIndex];
                      // set(e.target.options.selectedIndex);

                      // Testing Store index
                      payload.key = modalBlock + "Index";
                      payload.value = e.target.options.selectedIndex;
                      dispatch(actions.updateCurrent(payload));

                      // let updateIndexArray = indexArray;
                      // updateIndexArray[modalIndex] = e.target.options.selectedIndex;
                      // setIndexArray(updateIndexArray);
                    }}
                  >
                    <option value={0}>Select</option>
                    {BASE_DATA[modalBlock].map((item, index) => (
                      <option key={index} value={index}>
                        {BASE_DATA[modalBlock][index]["ID"] !== "" ? BASE_DATA[modalBlock][index]["ID"] : `New ${index + 1}`}
                      </option>
                    ))}
                  </select>
                  <button
                    className="border-2 border-gray-300 bg-slate-300 rounded-md w-8 h-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      payload.modalType = modalBlock;
                      dispatch(actions.addToArray(payload));
                      payload.key = modalBlock + "Index";
                      payload.value = BASE_DATA[modalBlock].length;
                      dispatch(actions.updateCurrent(payload));
                      setTimeout(() => {
                        document.getElementById("ModalHeader" + modalIndex).lastElementChild.selected = true;
                      }, 200);
                    }}
                  >
                    +
                  </button>
                </div> */}
                </div>
                {/* MISSING DATA IN MODAL */}
                <div>
                  <div className="flex flex-row justify-start border-b-2">
                    {BASE_DATA[modalBlock].length > 0 ? (
                      <div>
                        <h2 className="text-sm">Required Actions</h2>
                      </div>
                    ) : (
                      <div>
                        <h2 className="text-sm">Use the + to add {modalBlock.split(/(?=[A-Z])/)[0]}</h2>
                      </div>
                    )}
                  </div>
                  {BASE_DATA[modalBlock]
                    // .filter((_, index) => index === indexArray[modalIndex])
                    .filter((_, index) => index === CURRENT[modalBlock + "Index"])
                    .map((item, index) => (
                      <div key={index} className="flex flex-row gap-2">
                        {Object.keys(BASE_DATA[modalBlock][index])
                          .filter((item) => item.includes("*"))
                          .filter((item) => BASE_DATA[modalBlock][CURRENT[modalBlock + "Index"]][item] === "")
                          .slice(0, 4)
                          .map((item, index2, array) => {
                            if (index2 < 3) {
                              return (
                                <div key={index2}>
                                  <div className="flex flex-row justify-start">
                                    <label>{textCleanUp(item) + ","}</label>
                                  </div>
                                </div>
                              );
                            } else {
                              return (
                                <div key={index2}>
                                  <div className="flex flex-row justify-start">
                                    <label>{"..."}</label>
                                  </div>
                                </div>
                              );
                            }
                          })}
                      </div>
                    ))}
                </div>
              </div>
              {/* MODAL SELECT / ADD */}
              <div>
                <div className="flex flex-row items-end gap-2 justify-end mb-2">
                  <select
                    id={"ModalHeader" + modalIndex}
                    className="max-w-[10rem] min-w-[10rem] selectBox border-2 border-gray-300 rounded-md"
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      payload.key = modalBlock + "Index";
                      payload.value = e.target.options.selectedIndex;
                      dispatch(actions.updateCurrent(payload));
                    }}
                  >
                    <option value={0}>Select</option>
                    {BASE_DATA[modalBlock].map((item, index) => (
                      <option key={index} value={index}>
                        {BASE_DATA[modalBlock][index]["ID"] !== "" ? BASE_DATA[modalBlock][index]["ID"] : `New ${index + 1}`}
                      </option>
                    ))}
                  </select>
                  <button
                    className="border-2 border-gray-300 bg-slate-300 rounded-md w-8 h-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      payload.modalType = modalBlock;
                      dispatch(actions.addToArray(payload));
                      payload.key = modalBlock + "Index";
                      payload.value = BASE_DATA[modalBlock].length;
                      dispatch(actions.updateCurrent(payload));
                      setTimeout(() => {
                        document.getElementById("ModalHeader" + modalIndex).lastElementChild.selected = true;
                      }, 200);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            {/* MODAL CONTENT */}
            <div className="modal" id={"modal" + modalIndex}>
              <div className="modal-content max-w-[25rem]">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="font-black">{modalBlock}</h2>
                  <span className="close" id={"close" + modalIndex}>
                    &times;
                  </span>
                </div>
                {/* {item} */}
                <div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <button
                      onClick={() => {
                        // testing index in store
                        payload.key = modalBlock + "Index";
                        payload.value = setNewCurrentShowLength(false, BASE_DATA[modalBlock].length, CURRENT[modalBlock + "Index"]);
                        dispatch(actions.updateCurrent(payload));
                        console.log(CURRENT[modalBlock + "Index"]);

                        //Tested good, updates array
                        // let updateIndexArray = indexArray;
                        // updateIndexArray[modalIndex] = setNewCurrentShowLength(false, BASE_DATA[modalBlock].length, indexArray[modalIndex]);
                        // setIndexArray(updateIndexArray);

                        //
                        // let set = setIndex[modalIndex];
                        // set(setNewCurrentShowLength(false, BASE_DATA[modalBlock].length, useIndex[modalIndex]));
                      }}
                    >
                      {"<"}
                    </button>
                    <div>
                      {BASE_DATA[modalBlock]
                        //  .filter((_, index) => index === indexArray[modalIndex])
                        .filter((_, index) => index === CURRENT[modalBlock + "Index"])

                        .map((item, index) => (
                          <div key={index}>
                            {Object.keys(BASE_DATA[modalBlock][index]).map((item2, index2) => (
                              <div key={index2}>
                                <div className="flex flex-row justify-start">
                                  <label>{item2}</label>
                                </div>
                                <div className="flex flex-row justify-end">
                                  <input
                                    className="w-full border-2 border-gray-300 rounded-md"
                                    type="text"
                                    value={BASE_DATA[modalBlock][CURRENT[modalBlock + "Index"]][item2]}
                                    onChange={(e) => {
                                      payload.index = index;
                                      payload.key = item2;
                                      payload.value = e.target.value;
                                      payload.modalType = modalBlock;
                                      payload.arrayIndex = CURRENT[modalBlock + "Index"];
                                      dispatch(actions.updateKeyValueIn(payload));
                                    }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                    </div>
                    <button
                      onClick={() => {
                        // testing index in store

                        payload.key = modalBlock + "Index";
                        payload.value = setNewCurrentShowLength(true, BASE_DATA[modalBlock].length, CURRENT[modalBlock + "Index"]);
                        dispatch(actions.updateCurrent(payload));
                        console.log(CURRENT[modalBlock + "Index"]);
                        //

                        //Tested good, updates array
                        let updateIndexArray = indexArray;
                        updateIndexArray[modalIndex] = setNewCurrentShowLength(true, BASE_DATA[modalBlock].length, indexArray[modalIndex]);
                        setIndexArray(updateIndexArray);

                        // let set = indexArray[modalIndex];
                        // set(setNewCurrentShowLength(true, BASE_DATA[modalBlock].length, indexArray[modalIndex]));
                      }}
                    >
                      {">"}
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      payload.modalType = modalBlock;
                      dispatch(actions.addToArray(payload));
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
