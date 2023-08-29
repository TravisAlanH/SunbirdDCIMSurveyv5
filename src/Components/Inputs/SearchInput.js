import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
import FindMatch from "../../Reuse/FindMatch";
// import Devices from "../../Data/4Device";
import Racks from "../../Data/3Cabinet";

export default function SearchInput({ modalBlock, ItemKey, index, data }) {
  const [modelArray, setModelArray] = React.useState([]);
  const [inputText, setInputText] = React.useState("");
  const CURRENT = useSelector((state) => state.location.Current);
  const dispatch = useDispatch();
  // const BASE_DATA = data;

  // {
  //   MAKE: "Alpha Technologies",
  //   MODEL: "031-322-20 DC Battery Stand",
  //   CLASS: "Cabinet",
  //   RU: "48",
  // },

  console.log(modalBlock);

  let KeySearching = "MODEL";
  let KeySearching2 = "MAKE";
  let KeySearching3 = "RU";
  let KeySearching4 = "CLASS";

  let KeyChanging = "Model";
  let KeyChanging2 = "Make";
  let KeyChanging3 = "Height in UP";
  let KeyChanging4 = "Type";
  let KeyChanging5 = "RU Available";

  let payload = {
    index: 0,
    ObjKey: "Racks",
    modalType: "RacksArray",
    arrayIndex: CURRENT.RacksArrayIndex,
  };

  return (
    <div className="dropdown" onClick={(e) => e.stopPropagation()}>
      <input
        type="text"
        // id={"Model" + MatchedIndex}
        className="dropbtn w-[7.5rem]"
        value={inputText}
        onChange={(e) => {
          e.stopPropagation();
          setInputText(e.target.value);
          setModelArray(FindMatch(e.target.value, Racks, KeySearching));
          setTimeout(() => {
            payload.key = KeyChanging;
            payload.value = e.target.value;
            dispatch(actions.updateKeyValueIn(payload));
          }, 1000);
        }}
      />
      <div className="dropdown-content">
        {modelArray.map((SearchedItem, SearchedIndex) => {
          return (
            <button
              key={SearchedIndex}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setInputText(Racks[SearchedItem][KeySearching]);
                console.log(Racks[SearchedItem][KeySearching]);
                setTimeout(() => {
                  payload.key = KeyChanging;
                  payload.value = Racks[SearchedItem][KeySearching];
                  dispatch(actions.updateKeyValueIn(payload));
                  setTimeout(() => {
                    payload.key = KeyChanging2;
                    payload.value = Racks[SearchedItem][KeySearching2];
                    dispatch(actions.updateKeyValueIn(payload));
                    setTimeout(() => {
                      payload.key = KeyChanging3;
                      payload.value = Racks[SearchedItem][KeySearching3];
                      dispatch(actions.updateKeyValueIn(payload));
                      setTimeout(() => {
                        payload.key = KeyChanging4;
                        payload.value = Racks[SearchedItem][KeySearching4];
                        dispatch(actions.updateKeyValueIn(payload));
                        setTimeout(() => {
                          payload.key = KeyChanging5;
                          payload.value = Racks[SearchedItem][KeySearching3];
                          dispatch(actions.updateKeyValueIn(payload));
                        }, 100);
                      }, 100);
                    }, 100);
                  }, 100);
                }, 100);
                // setTimeout(() => {
                //   payload.key = "Model";
                //   payload.value = Racks[SearchedItem]["Model Name *"];
                //   setTimeout(() => {
                //     payload.key = "Model";
                //     payload.value = Devices[SearchedItem]["Model Name *"];
                //     dispatch(actions.updateKeyValueIn(payload));
                //     console.log(payload.value);
                //     setTimeout(() => {
                //       payload.key = "Make";
                //       payload.value = Devices[SearchedItem]["Make *"];
                //       dispatch(actions.updateKeyValueIn(payload));
                //     }, 100);
                //   }, 111);
                // }, 111);
              }}
            >
              {Racks[SearchedItem][KeySearching]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
