import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";

// CHECKS : "Type", "Condition", "Damage", "Note", "GPS"

export default function Modal() {
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  // console.log(BASE_DATA["AssetsArray"][0]);
  const [currentShowIndex, setCurrentShowIndex] = React.useState(0);
  // const [currentAssetsArray, setCurrentAssetsArray] = React.useState(BASE_DATA["AssetsArray"][0]);
  const dispatch = useDispatch();
  let payload = {
    index: 0,
    key: "",
    value: "",
    arrayIndex: 0,
  };

  function setNewCurrentShowLength(boolValue, arrayLength) {
    const direction = boolValue ? 1 : -1;
    const newIndex = (currentShowIndex + direction + arrayLength) % arrayLength;
    setCurrentShowIndex(newIndex);
    // setCurrentAssetsArray(BASE_DATA["AssetsArray"][currentShowIndex]);
  }

  return (
    <div className="flex flex-row justify-center items-center pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {Object.keys(BASE_DATA).map((modalBlock, index) => (
          <div
            key={index}
            className="w-[20rem] h-[7rem] rounded-md bg-slate-300"
            id="myBtn"
            onClick={() => {
              let modal = document.getElementById("modal" + index);
              modal.style.display = "block";
              let close = document.getElementById("close" + index);
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
            {modalBlock}
            {/* DATA IN BLOCK */}
            <div className="modal" id={"modal" + index}>
              <div className="modal-content max-w-[25rem]">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="font-black">{modalBlock}</h2>
                  <span className="close" id={"close" + index}>
                    &times;
                  </span>
                </div>
                {/* {item} */}
                {Array.isArray(BASE_DATA[modalBlock]) ? (
                  <div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <button onClick={() => setNewCurrentShowLength(false, BASE_DATA[modalBlock].length)}>{"<"}</button>
                      <div>
                        {BASE_DATA[modalBlock]
                          .filter((_, index) => index === currentShowIndex)
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
                                      value={BASE_DATA[modalBlock][currentShowIndex][item2]}
                                      onChange={(e) => {
                                        payload.index = index;
                                        payload.key = item2;
                                        payload.value = e.target.value;
                                        payload.arrayIndex = currentShowIndex;
                                        switch (modalBlock) {
                                          case "AssetsArray":
                                            dispatch(actions.updateKeyValueInAssets(payload));
                                            break;
                                          case "RacksArray":
                                            dispatch(actions.updateKeyValueInRack(payload));
                                            break;
                                          default:
                                            break;
                                        }
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                      </div>
                      <button onClick={() => setNewCurrentShowLength(true, BASE_DATA[modalBlock].length)}>{">"}</button>
                    </div>
                    <button
                      onClick={() => {
                        switch (modalBlock) {
                          case "AssetsArray":
                            dispatch(actions.addToAssets(payload));
                            break;
                          case "RacksArray":
                            dispatch(actions.addToRack(payload));
                            break;
                          default:
                            break;
                        }
                      }}
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  Object.keys(BASE_DATA[modalBlock]).map((item, index) => (
                    <div key={index} className="flex flex-col w-full">
                      <div className="flex flex-row justify-start">
                        <label className="text-sm">{item}</label>
                      </div>
                      <div className="flex flex-row justify-end">
                        <input
                          className="w-2/3 border-2 border-gray-300 rounded-md"
                          type="text"
                          value={BASE_DATA[modalBlock][item]}
                          onChange={(e) => {
                            payload.index = 0;
                            payload.key = item;
                            payload.value = e.target.value;
                            switch (modalBlock) {
                              case "Location":
                                dispatch(actions.updateKeyValueInLocation(payload));
                                break;
                              case "RoomData":
                                dispatch(actions.updateKeyValueInRoomData(payload));
                                break;
                              case "Assets":
                                dispatch(actions.updateKeyValueInAssets(payload));
                                break;
                              default:
                                break;
                            }
                          }}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
