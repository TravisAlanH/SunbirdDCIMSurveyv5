import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
import FindMatch from "../../Reuse/FindMatch";
// import axios from "axios";
import Templates from "../../Slices/Templates";

<<<<<<< HEAD
export default function SearchInput({ modalBlock, ItemKey, data }) {
=======
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
>>>>>>> parent of f102557 (Clean up)
  const [modelArray, setModelArray] = React.useState([]);
<<<<<<< HEAD
  // const [Data, setData] = React.useState(data);
=======
  const [Data, setData] = React.useState([]);
>>>>>>> parent of 8bcaf26 (Clean up Data)
  const CURRENT = useSelector((state) => state.location.Current);
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const dispatch = useDispatch();

  const Data = data;

  // let fullURL = process.env.REACT_APP_BASEURL;
  // let URLAdd = "";

  // let modelArray = [];

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

  const [inputText, setInputText] = React.useState(
    BASE_DATA[payload.ObjKey][payload.modalType][CURRENT[payload.modalType + "Index"]][payload.Key]
      ? BASE_DATA[payload.ObjKey][payload.modalType][CURRENT[payload.modalType + "Index"]][payload.Key]
      : ""
  );
  // const [inputText, setInputText] = React.useState("");

  let KeyArray = [];

<<<<<<< HEAD
  // let Data = [];

=======
>>>>>>> parent of 8bcaf26 (Clean up Data)
  switch (modalBlock) {
    case "Racks":
      KeyArray = Object.keys(Templates.RacksArray);
      payload.arrayIndex = CURRENT.RacksArrayIndex;
<<<<<<< HEAD
      // Data = rackData;
      // setData(rackData);
=======
      setData(rackData);
>>>>>>> parent of 8bcaf26 (Clean up Data)
      // URLAdd = process.env.REACT_APP_RACKURL;
      break;
    case "Assets":
      KeyArray = Object.keys(Templates.AssetsArray);
      payload.arrayIndex = CURRENT.AssetsArrayIndex;
<<<<<<< HEAD
      // Data = assetData;
      // setData(assetData);
=======
      setData(assetData);
>>>>>>> parent of 8bcaf26 (Clean up Data)
      // URLAdd = process.env.REACT_APP_DEVICEURL;
      break;
    default:
      break;
  }

<<<<<<< HEAD
  // React.useEffect(() => {
  //   axios.get(fullURL + URLAdd).then((res) => {
  //     setData(res.data);
  //   });
  // }, [URLAdd, fullURL]);
=======
  React.useEffect(() => {
    axios.get(fullURL + URLAdd).then((res) => {
      setData(res.data);
      // Data = res.data;
    });
  }, [URLAdd, fullURL]);
>>>>>>> parent of f102557 (Clean up)

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
          setTimeout(() => {
            // modelArray = FindMatch(inputText, Data, ItemKey);
            setModelArray(FindMatch(inputText, Data, ItemKey));
          }, 100);
        }}
      />
      <div className="dropdown-content">
        {modelArray.length === 0 ? (
          <div></div>
        ) : (
          modelArray.map((SearchedItem, SearchedIndex) => {
            return (
              <button
                key={SearchedIndex}
                onClick={(e) => {
                  setInputText(e.target.innerText);
                  for (let i = 0; i < KeyArray.length; i++) {
                    let AdjustedData = Data[SearchedItem];
                    delete AdjustedData["#Operation *"];
                    delete AdjustedData["Object *"];
                    delete AdjustedData["Model Name *"];
                    setTimeout(() => {
                      if (AdjustedData.hasOwnProperty(KeyArray[i])) {
                        payload.key = KeyArray[i];
                        payload.value = AdjustedData[KeyArray[i]];
                        dispatch(actions.updateKeyValueIn(payload));
                      }
                    }, i * 200);
                  }
                }}
              >
                {Data[SearchedItem][ItemKey]}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
