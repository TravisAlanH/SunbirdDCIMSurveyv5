import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";

// CHECKS : "Type", "Condition", "Damage", "Note", "GPS"

export default function Modal() {
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const [currentLocationIndex, setCurrentLocationIndex] = React.useState(0);
  const [currentRoomIndex, setCurrentRoomIndex] = React.useState(0);
  const [currentAssetsIndex, setCurrentAssetsIndex] = React.useState(0);
  const [currentRacksIndex, setCurrentRacksIndex] = React.useState(0);

  let setIndex = [setCurrentLocationIndex, setCurrentRoomIndex, setCurrentAssetsIndex, setCurrentRacksIndex];
  let useIndex = [currentLocationIndex, currentRoomIndex, currentAssetsIndex, currentRacksIndex];
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
            className="w-[20rem] h-[7rem] rounded-lg py-2 px-4 bg-slate-500"
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
            <div>
              {/* HEAD OF MODAL */}
              <div className="flex flex-row justify-between items-center">
                <h2 className="font-bold">{modalBlock.split(/(?=[A-Z])/)[0]}</h2>
                <div className="flex flex-row items-center">
                  <div>
                    <select
                      className="max-w-[10rem] min-w-[10rem] min-h-8 border-2 border-gray-300 rounded-md"
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) => {
                        let set = setIndex[modalIndex];
                        set(e.target.options.selectedIndex);
                      }}
                    >
                      {BASE_DATA[modalBlock].map((item, index) => (
                        <option key={index} value={index}>
                          {BASE_DATA[modalBlock][index]["ID"] !== "" ? BASE_DATA[modalBlock][index]["ID"] : `New ${index + 1}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="border-2 border-gray-300 bg-slate-300 rounded-md w-8 h-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      payload.modalType = modalBlock;
                      dispatch(actions.addToArray(payload));
                      // OPEN NEW NAME MODAL
                      let modal = document.getElementById("modal" + modalIndex + "Name");
                      modal.style.display = "block";
                      let close = document.getElementById("close" + modalIndex + "Name");
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
                      // OPEN NEW NAME MODAL
                    }}
                  >
                    +
                  </button>
                  {/* END HEAD OF MODAL */}

                  {/* MODAL NEW NAME */}
                  <div className="modal" id={"modal" + modalIndex + "Name"} onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content max-w-[25rem]">
                      <div className="flex flex-row justify-between items-center">
                        <h2 className="font-black">{modalBlock.split(/(?=[A-Z])/)[0]}</h2>
                        <span className="close" id={"close" + modalIndex + "Name"}>
                          {/* &times; */}
                        </span>
                      </div>
                      <div className="flex flex-col items-start">
                        <label>Name</label>
                        <form
                          className="w-full flex flex-col items-end"
                          onSubmit={(e) => {
                            e.preventDefault();
                            let modal = document.getElementById("modal" + modalIndex + "Name");
                            modal.style.display = "none";
                          }}
                        >
                          <input
                            required={true}
                            type="text"
                            className="w-full border-2 border-gray-300 rounded-md"
                            onChange={(e) => {
                              payload.index = 0;
                              payload.key = "Name*";
                              payload.value = e.target.value;
                              payload.modalType = modalBlock;
                              payload.arrayIndex = useIndex[modalIndex];
                              dispatch(actions.updateKeyValueIn(payload));
                            }}
                          />
                          <input type="submit" value="Submit" className="" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END MODAL NEW NAME */}

              {/* MISSING DATA IN MODAL */}
              {BASE_DATA[modalBlock]
                .filter((_, index) => index === useIndex[modalIndex])
                .map((item, index) => (
                  <div key={index}>
                    {Object.keys(BASE_DATA[modalBlock][index])
                      .filter((item) => item.includes("*"))
                      .filter((item) => BASE_DATA[modalBlock][useIndex[modalIndex]][item] === "")
                      .map((item, index2) => (
                        <div key={index2}>
                          <div className="flex flex-row justify-start">
                            <label>{item}</label>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
            {/* END MISSING DATA IN MODAL */}

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
                        let set = setIndex[modalIndex];
                        set(setNewCurrentShowLength(false, BASE_DATA[modalBlock].length, useIndex[modalIndex]));
                      }}
                    >
                      {"<"}
                    </button>
                    <div>
                      {BASE_DATA[modalBlock]
                        .filter((_, index) => index === useIndex[modalIndex])
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
                                    value={BASE_DATA[modalBlock][useIndex[modalIndex]][item2]}
                                    onChange={(e) => {
                                      payload.index = index;
                                      payload.key = item2;
                                      payload.value = e.target.value;
                                      payload.modalType = modalBlock;
                                      payload.arrayIndex = useIndex[modalIndex];
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
                        let set = setIndex[modalIndex];
                        set(setNewCurrentShowLength(true, BASE_DATA[modalBlock].length, useIndex[modalIndex]));
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
