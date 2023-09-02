import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import SelectElement from "./SelectElement";
import AddButton from "./AddButton";
import InputPage from "./InputPage";
import AssetViewRack from "./AssetView/AssetViewRack";

export default function InputPanel({ modalBlock }) {
  // const BASE_DATA = useSelector((state) => state.location.Location[0]);
  // const CURRENT = useSelector((state) => state.location.Current[modalBlock + "ArrayIndex"]);
  // const dispatch = useDispatch();
  // const [keysToReturn, setKeysToReturn] = React.useState(["Make *", "Model *", "Name *"]);
  // const ARRAY_DATA = BASE_DATA[modalBlock][modalBlock + "Array"][CURRENT];

  // let payload = {
  //   index: 0,
  //   key: "",
  //   value: "",
  //   arrayIndex: 0,
  //   modalType: modalBlock + "Array",
  //   ObjKey: modalBlock,
  // };

  // let makeValue;
  // let modelValue;
  // let nameValue;
  // let allKeys;

  // if (BASE_DATA[modalBlock][modalBlock + "Array"] > 0) {
  //   makeValue = BASE_DATA[modalBlock][modalBlock + "Array"][CURRENT]["Make *"];
  //   modelValue = BASE_DATA[modalBlock][modalBlock + "Array"][CURRENT]["Model *"];
  //   nameValue = BASE_DATA[modalBlock][modalBlock + "Array"][CURRENT]["Name *"];

  //   allKeys = Object.keys(BASE_DATA[modalBlock][modalBlock + "Array"][CURRENT]);
  //   setKeysToReturn(makeValue !== "" && modelValue !== "" && nameValue !== "" ? allKeys : ["Make *", "Model *", "Name *"]);
  // }

  return (
    <div className=" w-full flex flex-col items-center">
      <div className="flex flex-row">
        <SelectElement modalBlock={modalBlock} />
        <AddButton modalBlock={modalBlock} />
      </div>
      <div className="flex flex-row justify-center gap-3">
        <InputPage modalBlock={modalBlock} />
        {modalBlock === "Racks" ? <AssetViewRack /> : <> </>}
      </div>
    </div>
  );
}
