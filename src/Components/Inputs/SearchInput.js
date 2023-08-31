import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
import FindMatch from "../../Reuse/FindMatch";
import axios from "axios";
// import Devices from "../../Data/4Device";
// import Racks from "../../Data/3Cabinet";

export default function SearchInput({ modalBlock, RackIndex }) {
  const [modelArray, setModelArray] = React.useState([]);
  const [Data, setData] = React.useState([]);
  const CURRENT = useSelector((state) => state.location.Current);
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const dispatch = useDispatch();
  // const BASE_DATA = data;

  // {
  //   "#Operation *": "ADD",
  //   "Object *": "MODEL",
  //   "Make *": "EGT",
  //   "Model Name *": "001 ENC-02",
  //   "Class *": "Device",
  //   "Subclass**": "Standard",
  //   "Mounting *": "Rackable",
  //   "Form Factor *": "Fixed",
  //   "Rack Units *": 1,
  //   "Height *": 1.75,
  //   "Width": 17.5,
  //   "Depth": 15,
  //   "Weight": 0,
  //   "Units": "US",
  //   "Potential Power (read-only)": 216
  // },
  let fullURL = "https://raw.githubusercontent.com/TravisAlanH/PulseAuditData/main/";

  let KeySearching = "MODEL";
  let KeySearching2 = "MAKE";
  let KeySearching3 = "RU";
  let KeySearching4 = "CLASS";
  let KeySearching5 = "POTENTIAL POWER (READ-ONLY)";
  let KeyChanging = "Model";
  let KeyChanging2 = "Make";
  let KeyChanging3 = "Height in UP";
  let KeyChanging4 = "Type";
  let KeyChanging5 = "RU Available";
  let KeyChanging6 = "Cabinet **";
  let URL;

  let payload = {
    index: 0,
    ObjKey: "",
    modalType: "",
    arrayIndex: 0,
  };

  let ObyKey = "";

  switch (modalBlock) {
    case "RacksArray":
      ObyKey = "Racks";
      break;
    case "AssetsArray":
      ObyKey = "Assets";
      break;
    default:
      break;
  }

  const [inputText, setInputText] = React.useState(
    BASE_DATA[ObyKey][modalBlock][CURRENT[modalBlock + "Index"]]["Model *"]
      ? BASE_DATA[ObyKey][modalBlock][CURRENT[modalBlock + "Index"]]["Model *"]
      : ""
  );

  switch (modalBlock) {
    case "RacksArray":
      // Data = Racks;
      payload.ObjKey = "Racks";
      payload.modalType = "RacksArray";
      payload.arrayIndex = CURRENT.RacksArrayIndex;
      KeySearching = "Model Name *";
      KeySearching2 = "Make *";
      KeySearching3 = "Rack Units *";
      KeySearching4 = "Class *";
      KeyChanging = "Model";
      KeyChanging2 = "Make";
      KeyChanging3 = "Height in UP";
      KeyChanging4 = "Type";
      KeyChanging5 = "RU Available";
      URL = "Cabinet.json";
      break;
    case "AssetsArray":
      // Data = Devices;
      for (let i = 0; i < BASE_DATA["Assets"]["AssetsArray"].length; i++) {
        console.log("Test");
        if (
          BASE_DATA["Assets"]["AssetsArray"][i]["Cabinet **"] === BASE_DATA["Racks"]["RacksArray"][CURRENT["RacksArrayIndex"]]["Name*"] &&
          BASE_DATA["Assets"]["AssetsArray"][i]["U Position **"] === RackIndex + 1
        ) {
          console.log("found");
          payload.arrayIndex = BASE_DATA["Assets"]["AssetsArray"][i]["Index"];
        }
      }
      console.log(payload.arrayIndex);
      payload.ObjKey = "Assets";
      payload.modalType = "AssetsArray";
      KeySearching = "Model Name *";
      KeySearching2 = "Make *";
      KeySearching3 = "Rack Units *";
      KeySearching4 = "Class *";
      KeySearching5 = "Potential Power (read-only)";
      KeyChanging = "Model *";
      KeyChanging2 = "Make *";
      KeyChanging3 = "Rails Used **";
      KeyChanging4 = "Type";
      KeyChanging5 = "Power";
      URL = "Device.json";
      break;
    default:
      break;
  }

  React.useEffect(() => {
    axios.get(fullURL + URL).then((res) => {
      setData(res.data);
      // Data = res.data;
    });
  }, [URL, fullURL]);

  return (
    <div className="dropdown z-30" onClick={(e) => e.stopPropagation()}>
      <input
        type="text"
        // id={"Model" + MatchedIndex}
        className="dropbtn w-[7.5rem]"
        value={inputText}
        onChange={(e) => {
          console.log(payload.arrayIndex);
          e.stopPropagation();
          setInputText(e.target.value);
          setModelArray(FindMatch(e.target.value, Data, KeySearching));
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
                setInputText(Data[SearchedItem][KeySearching]);
                setTimeout(() => {
                  payload.key = KeyChanging;
                  payload.value = Data[SearchedItem][KeySearching];
                  dispatch(actions.updateKeyValueIn(payload));
                  setTimeout(() => {
                    payload.key = KeyChanging2;
                    payload.value = Data[SearchedItem][KeySearching2];
                    dispatch(actions.updateKeyValueIn(payload));
                    setTimeout(() => {
                      payload.key = KeyChanging3;
                      payload.value = Data[SearchedItem][KeySearching3];
                      dispatch(actions.updateKeyValueIn(payload));
                      setTimeout(() => {
                        payload.key = KeyChanging4;
                        payload.value = Data[SearchedItem][KeySearching4];
                        dispatch(actions.updateKeyValueIn(payload));
                      }, 100);
                    }, 100);
                  }, 100);
                }, 100);
                if (modalBlock === "RacksArray") {
                  setTimeout(() => {
                    payload.key = KeyChanging5;
                    payload.value = Data[SearchedItem][KeySearching3];
                    dispatch(actions.updateKeyValueIn(payload));
                  }, 100);
                }
                if (modalBlock === "AssetsArray") {
                  setTimeout(() => {
                    payload.key = KeyChanging6;
                    payload.value = BASE_DATA["Racks"]["RacksArray"][CURRENT.RacksArrayIndex]["Name*"]
                      ? BASE_DATA["Racks"]["RacksArray"][CURRENT.RacksArrayIndex]["Name*"]
                      : "";
                    dispatch(actions.updateKeyValueIn(payload));
                    setTimeout(() => {
                      payload.key = KeyChanging5;
                      payload.value = Data[SearchedItem][KeySearching5];
                      dispatch(actions.updateKeyValueIn(payload));
                    }, 100);
                  }, 100);
                }
              }}
            >
              {Data[SearchedItem][KeySearching]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
