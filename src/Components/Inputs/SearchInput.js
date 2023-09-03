import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
import FindMatch from "../../Reuse/FindMatch";
import axios from "axios";

export default function SearchInput({ modalBlock, keyItem }) {
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
    Key: keyItem,
    modalType: modalBlock + "Array",
    arrayIndex: 0,
  };

  const [inputText, setInputText] = React.useState(
    BASE_DATA[payload.ObjKey][payload.modalType][CURRENT[payload.modalType + "Index"]][payload.Key]
      ? BASE_DATA[payload.ObjKey][payload.modalType][CURRENT[payload.modalType + "Index"]][payload.Key]
      : ""
  );

  switch (modalBlock) {
    case "Racks":
      payload.arrayIndex = CURRENT.RacksArrayIndex;
      URLAdd = process.env.REACT_APP_RACKURL;
      break;
    case "Assets":
      payload.arrayIndex = CURRENT.AssetsArrayIndex;
      URLAdd = process.env.REACT_APP_DEVICEURL;
      break;
    default:
      break;
  }

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
          setInputText(e.target.value);
          payload.value = e.target.value;
          dispatch(actions.updateKeyValueIn(payload));
          console.log(payload.Key);

          setTimeout(() => {
            setModelArray(FindMatch(inputText, Data, keyItem));
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
                payload.value = e.target.innerText;
                dispatch(actions.updateKeyValueIn(payload));
                setModelArray([]);
              }}
            >
              {Data[SearchedItem][keyItem]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
