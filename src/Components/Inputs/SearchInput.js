import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
import FindMatch from "../../Reuse/FindMatch";
import Devices from "../../Data/4Device";
import Racks from "../../Data/3Cabinet";

export default function SearchInput({ payload, modalBlock, ItemKey, index, data }) {
  const [makeArray, setMakeArray] = React.useState([]);
  const [inputText, setInputText] = React.useState("");
  const CURRENT = useSelector((state) => state.location.Current);
  const dispatch = useDispatch();
  const BASE_DATA = data;

  let SearchData = {
    AssetsArray: {
      Data: Devices,
      Search: "Model Name *",
    },
    RacksArray: {
      Data: Racks,
      Search: "Model Name *",
    },
  };

  let SearchArray = SearchData[modalBlock].Data;
  let SearchTerm = SearchData[modalBlock].Search;

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
          setMakeArray(FindMatch(e.target.value, SearchArray, SearchTerm));
          setTimeout(() => {
            payload.key = { ItemKey };
            payload.value = e.target.value;
            dispatch(actions.updateKeyValueIn(payload));
          }, 1000);
        }}
      />
      <div className="dropdown-content">
        {makeArray.map((SearchedItem, SearchedIndex) => {
          return (
            <button
              key={SearchedIndex}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setInputText(SearchArray[SearchedItem]["Model Name *"]);
                setTimeout(() => {
                  payload.key = "Model";
                  payload.value = Devices[SearchedItem]["Model Name *"];
                  dispatch(actions.updateKeyValueIn(payload));
                  console.log(payload.value);
                  setTimeout(() => {
                    payload.key = "Make";
                    payload.value = Devices[SearchedItem]["Make *"];
                    dispatch(actions.updateKeyValueIn(payload));
                  }, 100);
                }, 111);
              }}
            >
              {SearchArray[SearchedItem][SearchTerm]}
            </button>
          );
        })}
      </div>
    </div>

    // <input
    //   className="block w-full  px-1 ModInput"
    //   placeholder="test"
    //   type="text"
    //   value={BASE_DATA[modalBlock][CURRENT[modalBlock + "Index"]][ItemKey]}
    //   onChange={(e) => {
    //     payload.index = index;
    //     payload.key = ItemKey;
    //     payload.value = e.target.value;
    //     payload.modalType = modalBlock;
    //     payload.state = BASE_DATA[modalBlock];
    //     payload.arrayIndex = CURRENT[modalBlock + "Index"];
    //     dispatch(actions.updateKeyValueIn(payload));
    //   }}
    // />
  );
}
