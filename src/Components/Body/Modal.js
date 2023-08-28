import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
import AssetView from "./AssetView/AssetView";

export default function Modal({ data, ObjKey }) {
  // const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const BASE_DATA = data;

  let inputType = {
    "*": "text",
    "#": "numeric",
    "^": "select",
  };

  // console.log(ObjKey);
  const CURRENT = useSelector((state) => state.location.Current);
  function textCleanUp(text) {
    return text
      .replace("dcTrack", "dcT")
      .replace("Data Center", "DC")
      .replace("Number", "Num")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .slice(0, 12);
  }

  const dispatch = useDispatch();
  let payload = {
    index: 0,
    key: "",
    value: "",
    arrayIndex: 0,
    modalType: "",
    ObjKey: ObjKey,
  };

  function setNewCurrentShowLength(boolValue, arrayLength, index) {
    const direction = boolValue ? 1 : -1;
    const newIndex = (index + direction + arrayLength) % arrayLength;
    return newIndex;
  }

  function formatString(input) {
    let formatted = input.replace(/([a-z])([A-Z])/g, "$1 $2");
    return formatted.charAt(0).toUpperCase() + formatted.slice(1).replace("Array", "");
  }

  return Object.keys(BASE_DATA)
    .filter((item) => item !== "@COLOR")
    .filter((item) => item !== "Name*")
    .filter((item) => item !== "ID")
    .map((modalBlock, modalIndex) => (
      //! Block sets up MODAL Clicks
      <div
        key={modalIndex}
        className="w-[20rem] h-[8.5rem] rounded-xl py-2 px-4"
        style={{ backgroundColor: BASE_DATA["@COLOR"] }}
        id="myBtn"
        onClick={() => {
          let modal = document.getElementById("modal" + modalIndex + modalBlock);
          modal.style.display = "block";
          let close = document.getElementById("close" + modalIndex + modalBlock);
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
              <h2 className="font-bold text-lg">{formatString(modalBlock)}</h2>
            </div>
            {/* MISSING DATA IN MODAL */}
            <div>
              <div className="flex flex-row justify-start border-b-2">{BASE_DATA[modalBlock].length > 0 ? <h2 className="text-sm">Required Actions</h2> : <h2 className="text-sm">Use the + to add {modalBlock.split(/(?=[A-Z])/)[0]}</h2>}</div>
            </div>
            {BASE_DATA[modalBlock]
              // .filter((_, index) => index === indexArray[modalIndex])
              .filter((_, index) => index === CURRENT[modalBlock + "Index"])
              .map((item, index) => (
                <div key={index} className="flex flex-row gap-2 h-[2rem]">
                  {Object.keys(BASE_DATA[modalBlock][index])
                    .filter((item) => item.includes("*"))
                    .filter((item) => BASE_DATA[modalBlock][CURRENT[modalBlock + "Index"]][item] === "")
                    .slice(0, 4)
                    .map((item, index2, array) => {
                      if (index2 < 3) {
                        return <p key={index2}>{textCleanUp(item) + ","}</p>;
                      } else {
                        return <p key={index2}>{"..."}</p>;
                      }
                    })}
                </div>
              ))}
          </div>
          {/* MODAL SELECT / ADD */}
          <div>
            <div className="flex flex-row items-end gap-2 justify-end mb-2">
              <select
                id={"ModalHeader" + modalIndex + modalBlock}
                className="max-w-[10rem] min-w-[10rem] selectBox border-2 border-gray-300 rounded-md"
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => {
                  payload.key = modalBlock + "Index";
                  payload.value = e.target.options.selectedIndex;
                  dispatch(actions.updateCurrent(payload));
                }}
              >
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
                    document.getElementById("ModalHeader" + modalIndex + modalBlock).lastElementChild.selected = true;
                  }, 200);
                }}
              >
                +
              </button>
              {modalBlock === "AssetsArray" ? (
                <button
                  className="border-2 border-gray-300 bg-slate-300 rounded-md w-8 h-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    let modal = document.getElementById("RackModal" + modalIndex + modalBlock);
                    modal.style.display = "block";
                  }}
                >
                  R
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="modal" id={"RackModal" + modalIndex + modalBlock} onClick={(e) => e.stopPropagation()}>
          <div className="modal-content max-w-[25rem]">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-black">{modalBlock}</h2>
              <span
                className="close"
                id={"RackClose" + modalIndex + modalBlock}
                onClick={() => {
                  let modal = document.getElementById("RackModal" + modalIndex + modalBlock);
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
            </div>
            <AssetView />
          </div>
        </div>
        {/* MODAL CONTENT */}
        <div className="modal" id={"modal" + modalIndex + modalBlock}>
          <div className="modal-content max-w-[25rem]">
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-black">{modalBlock}</h2>
              <span className="close" id={"close" + modalIndex + modalBlock}>
                &times;
              </span>
            </div>
            {/* {item} */}
            <div>
              <div className="flex flex-row justify-between items-center w-full">
                <button
                  onClick={() => {
                    payload.key = modalBlock + "Index";
                    payload.value = setNewCurrentShowLength(false, BASE_DATA[modalBlock].length, CURRENT[modalBlock + "Index"]);
                    dispatch(actions.updateCurrent(payload));
                    console.log(CURRENT[modalBlock + "Index"]);
                  }}
                >
                  {"<"}
                </button>
                <div>
                  {BASE_DATA[modalBlock]
                    .filter((_, index) => index === CURRENT[modalBlock + "Index"])
                    .map((item, index) => (
                      <div key={index}>
                        {Object.keys(BASE_DATA[modalBlock][index])
                          .filter((item) => item !== "ID")
                          .map((item2, index2) => {
                            let type = inputType[item2.charAt(item2.length - 1)];
                            if (type === "select") {
                              return (
                                <div key={index2} className="relative my-2 float-container">
                                  <select>
                                    <option value="">{item2}</option>
                                  </select>
                                </div>
                              );
                            } else {
                              return (
                                <div key={index2} className="relative my-2 float-container">
                                  <legend className="absolute top-[-.5rem] left-[.5rem] inline-block text-[.75rem]">{item2}</legend>
                                  <input
                                    className="block w-full  px-1 ModInput"
                                    inputMode={type}
                                    value={BASE_DATA[modalBlock][CURRENT[modalBlock + "Index"]][item2]}
                                    onChange={(e) => {
                                      payload.index = index;
                                      payload.key = item2;
                                      payload.value = e.target.value;
                                      payload.modalType = modalBlock;
                                      payload.state = BASE_DATA[modalBlock];
                                      payload.arrayIndex = CURRENT[modalBlock + "Index"];
                                      dispatch(actions.updateKeyValueIn(payload));
                                    }}
                                  />
                                </div>
                              );
                            }
                          })}
                      </div>
                    ))}
                </div>
                <button
                  onClick={() => {
                    payload.key = modalBlock + "Index";
                    payload.value = setNewCurrentShowLength(true, BASE_DATA[modalBlock].length, CURRENT[modalBlock + "Index"]);
                    dispatch(actions.updateCurrent(payload));
                    console.log(CURRENT[modalBlock + "Index"]);
                  }}
                >
                  {">"}
                </button>
              </div>
              {/* <button
                onClick={() => {
                  payload.modalType = modalBlock;
                  dispatch(actions.addToArray(payload));
                }}
              >
                Add
              </button> */}
            </div>
          </div>
        </div>
      </div>
    ));
}
