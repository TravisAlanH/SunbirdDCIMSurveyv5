import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../Slices/CounterSlice";

export default function Current({ RackIndex, MatchedIndex }) {
  const BASE_DATA = useSelector((state) => state.location.Location[0].Assets.AssetsArray[MatchedIndex]);

  let payload = {
    index: 0,
    ObjKey: "Assets",
    modalType: "AssetsArray",
    arrayIndex: MatchedIndex,
  };

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-row items-center justify-start">
        <div className="w-[1.5rem] h-[1.5rem] flex flex-row justify-center items-center">
          <p>{RackIndex}</p>
        </div>
        <div
          className="w-[20rem] h-[4.2rem] modAssetView"
          id="myBtn"
          onClick={() => {
            let modal = document.getElementById("myModal");
            modal.style.display = "block";
          }}
        >
          <div className="flex flex-col justify-between p-1 rounded-md">
            <div className="flex flex-row justify-between">
              <input
                type="text"
                defaultValue={BASE_DATA["Name*"] === "" ? `Name` : BASE_DATA["Name*"]}
                onClick={(e) => {
                  e.stopPropagation();
                  e.target.value = BASE_DATA["Name*"].split("-")[0];
                }}
                onBlur={(e) => {
                  console.log(e);
                  e.target.value = BASE_DATA["Name*"] === "" ? `Name` : BASE_DATA["Name*"];
                }}
                onChange={(e) => {
                  payload.key = "Name*";
                  payload.value = `${e.target.value}-${MatchedIndex + 1}`;
                  dispatch(actions.updateKeyValueIn(payload));
                }}
              />
              <div>Edit</div>
            </div>
            <div className="flex flex-row w-full h-full items-center">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row w-[5rem] items-end">
                  <p className="text-xs">Make</p>
                  <input className="w-[5rem]" type="text" onClick={(e) => e.stopPropagation()} placeholder={"Model"} />
                </div>
                <div>
                  <select onClick={(e) => e.stopPropagation()}>
                    <option value="">Rails</option>
                    <option value="both">both</option>
                    <option value="Front">Front</option>
                    <option value="Back">Back</option>
                  </select>
                  <select onClick={(e) => e.stopPropagation()}>
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
              <p>Some text in the Modal..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
