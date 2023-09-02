import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";

export default function AddButton({ modalBlock }) {
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const CURRENT = useSelector((state) => state.location.Current[modalBlock + "ArrayIndex"]);

  const dispatch = useDispatch();

  let payload = {
    index: 0,
    key: "",
    value: "",
    arrayIndex: 0,
    modalType: modalBlock + "Array",
    ObjKey: modalBlock,
  };

  function setLastOptionSelected(selectElementId) {
    const selectElement = document.getElementById(selectElementId);
    if (selectElement && selectElement.options.length > 0) {
      // Set the selected index to the last option
      selectElement.selectedIndex = selectElement.options.length - 1;
    }
  }

  return (
    <button
      onClick={() => {
        dispatch(actions.addToArray(payload));
        payload.key = modalBlock + "ArrayIndex";
        payload.value = BASE_DATA[modalBlock][modalBlock + "Array"].length;
        dispatch(actions.updateCurrent(payload));
        if (modalBlock === "Rooms") {
          setTimeout(() => {
            setLastOptionSelected("RoomsSelection");
          }, 100);
        } else if (modalBlock === "Racks" || modalBlock === "Assets") {
          setTimeout(() => {
            setLastOptionSelected("RacksSelection");
          }, 100);
        }
      }}
    >
      <p>+</p>
    </button>
  );
}
