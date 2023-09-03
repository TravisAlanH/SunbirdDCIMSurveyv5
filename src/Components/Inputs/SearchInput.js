import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
import FindMatch from "../../Reuse/FindMatch";
import axios from "axios";
import Templates from "../../Slices/Templates";

//RACKS
// {
//   "#Operation *": "ADD",
//   "Object *": "MODEL",
//   "Make *": "Comm/Net Systems Inc",
//   "Model Name *": "016-353-10",
//   "Class *": "Cabinet",
//   "Mounting *": "Free-Standing",
//   "Form Factor *": "4-Post Enclosure",
//   "Rack Units *": 45,
//   "Height *": 84.1,
//   "Width": 22.88,
//   "Depth": 25.9,
//   "Weight": 0,
//   "Units": "US"
// },

//ASSETS
// {
//   "#Operation *": "ADD",
//   "Object *": "MODEL",
//   "Make *": "Comm/Net Systems Inc",
//   "Model Name *": "016-353-10",
//   "Class *": "Cabinet",
//   "Mounting *": "Free-Standing",
//   "Form Factor *": "4-Post Enclosure",
//   "Rack Units *": 45,
//   "Height *": 84.1,
//   "Width": 22.88,
//   "Depth": 25.9,
//   "Weight": 0,
//   "Units": "US"
// },

export default function SearchInput({ modalBlock, ItemKey }) {
  console.log(modalBlock, ItemKey);
  const [modelArray, setModelArray] = React.useState([]);
  const [Data, setData] = React.useState([]);
  const CURRENT = useSelector((state) => state.location.Current);
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const dispatch = useDispatch();

  let fullURL = process.env.REACT_APP_BASEURL;
  let URLAdd = "";

  let payload = {
    index: 0,
    ObjKey: modalBlock,
    Key: ItemKey,
    modalType: modalBlock + "Array",
    arrayIndex: CURRENT[modalBlock + "ArrayIndex"],

    // payload.index = 0;
    // payload.ObjKey = "Racks";
    // payload.modalType = "RacksArray";
    // payload.arrayIndex = CURRENT.RacksArrayIndex;
    // payload.key = "Model Name *";
  };

  console.log("Model Name *" === ItemKey);

  const [inputText, setInputText] = React.useState(
    BASE_DATA[payload.ObjKey][payload.modalType][CURRENT[payload.modalType + "Index"]][payload.Key]
      ? BASE_DATA[payload.ObjKey][payload.modalType][CURRENT[payload.modalType + "Index"]][payload.Key]
      : ""
  );

  let KeyArray = [];

  switch (modalBlock) {
    case "Racks":
      KeyArray = Object.keys(Templates.RacksArray);
      payload.arrayIndex = CURRENT.RacksArrayIndex;
      URLAdd = process.env.REACT_APP_RACKURL;
      break;
    case "Assets":
      KeyArray = Object.keys(Templates.AssetsArray);
      payload.arrayIndex = CURRENT.AssetsArrayIndex;
      URLAdd = process.env.REACT_APP_DEVICEURL;
      break;
    default:
      break;
  }

  console.log(KeyArray);

  React.useEffect(() => {
    axios.get(fullURL + URLAdd).then((res) => {
      setData(res.data);
      // Data = res.data;
    });
  }, [URLAdd, fullURL]);

  return (
    <div className="dropdown z-30" onClick={(e) => e.stopPropagation()}>
      <input
        type="text"
        className="dropbtn w-[12rem]"
        value={inputText}
        onChange={(e) => {
          payload.value = e.target.value;
          payload.key = ItemKey;
          dispatch(actions.updateKeyValueIn(payload));
          setInputText(e.target.value);
          payload.value = e.target.value;
          console.log(payload);
          // setTimeout(() => {
          //   payload.key = "Model Name *";
          //   dispatch(actions.updateKeyValueIn(payload));
          // }, 100);
          setTimeout(() => {
            setModelArray(FindMatch(inputText, Data, ItemKey));
          }, 100);
        }}
      />
      <div className="dropdown-content">
        {modelArray.map((SearchedItem, SearchedIndex) => {
          return (
            <button
              key={SearchedIndex}
              onClick={(e) => {
                setInputText(e.target.innerText);
                console.log(KeyArray.length);
                for (let i = 0; i < KeyArray.length; i++) {
                  setTimeout(() => {
                    if (Data[SearchedItem].hasOwnProperty(KeyArray[i])) {
                      payload.key = KeyArray[i];
                      payload.value = Data[SearchedItem][KeyArray[i]];
                      dispatch(actions.updateKeyValueIn(payload));
                    }
                  }, i * 1000);
                }
              }}
            >
              {Data[SearchedItem][ItemKey]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
