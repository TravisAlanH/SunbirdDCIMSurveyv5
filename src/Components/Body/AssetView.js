import React from "react";
import { useSelector } from "react-redux";

export default function AssetView() {
  const Current = useSelector((state) => state.location.Current["RacksArrayIndex"]);
  const State = useSelector((state) => state.location.Location[0].Racks.RacksArray);
  console.log(State);

  if (State.length > 0) {
    // return State.map((item, index) => {
    return Array(parseInt(State[Current]["Height in UP"]) ? parseInt(State[Current]["Height in UP"]) : 1)
      .fill()
      .map((item, index) => {
        return (
          <div>
            <div className="flex flex-row items-center justify-start">
              <div className="w-[1.5rem] h-[1.5rem] flex flex-row justify-center items-center">
                <p>{index + 1}</p>
              </div>

              <div className="w-[20rem] h-[2rem] flex flex-row justify-start px-4">
                <button onClick={() => alert(index + 1)}>Add</button>
              </div>
            </div>
            {/* <div>
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
                    <div>Name</div>
                    <div>Edit</div>
                  </div>
                  <div className="flex flex-row w-full h-full items-center">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row w-[5rem] items-end">
                        <p className="text-xs">Make</p>
                        <input className="w-[5rem]" type="text" onClick={(e) => e.stopPropagation()} placeholder={"Model"} />
                      </div>
                      <div>
                        <select>
                          <option value="">Rails</option>
                          <option value="both">both</option>
                          <option value="Front">Front</option>
                          <option value="Back">Back</option>
                        </select>
                        <select>
                          <option value="">Orient</option>
                          <option value="Item Front Faces Cabinet Front">Front</option>
                          <option value="Item Rear Faces Cabinet Front">Rear</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

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
        );
      });
  } else {
    return <div></div>;
  }
}
