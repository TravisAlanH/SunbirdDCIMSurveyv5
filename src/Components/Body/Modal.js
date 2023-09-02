import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
import AssetView from "./AssetView/AssetView";
import SearchInput from "../Inputs/SearchInput";
import { BiExport } from "react-icons/bi";
import createTable from "../../Reuse/CreateTable";
import download_to_excel from "../../Reuse/ExportExcel";

export default function Modal({ data, ObjKey }) {
  // const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const BASE_DATA = data;
  const ALL_DATA = useSelector((state) => state.location.Location[0]);
  // const [tableExport, setTableExport] = React.useState();

  let inputType = {
    "*": "text",
    "#": "numeric",
    "^": "select",
  };

  // console.log(ObjKey);
  const CURRENT = useSelector((state) => state.location.Current);
  function textCleanUp(text) {
    return text
      .replace("dcTrack", "dcT")
      .replace("Data Center", "DC")
      .replace("Number", "Num")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .slice(0, 12);
  }

  const dispatch = useDispatch();
  let payload = {
    index: 0,
    key: "",
    value: "",
    arrayIndex: 0,
    modalType: "",
    ObjKey: ObjKey,
  };

  function setNewCurrentShowLength(boolValue, arrayLength, index) {
    const direction = boolValue ? 1 : -1;
    const newIndex = (index + direction + arrayLength) % arrayLength;
    return newIndex;
  }

  function formatString(input) {
    let formatted = input.replace(/([a-z])([A-Z])/g, "$1 $2");
    return formatted.charAt(0).toUpperCase() + formatted.slice(1).replace("Array", "");
  }

  return (
    <div class="wrapper">
      <div class="tabs">
        {Object.keys(BASE_DATA)
          .filter((item) => item !== "@COLOR")
          .filter((item) => item !== "Name*")
          .filter((item) => item !== "ID")
          .map((modalBlock, modalIndex) => {
            return (
              <div class="tab">
                <input type="radio" name="css-tabs" id={`tab-${modalIndex + 1}`} checked class="tab-switch" />
                <label for={`tab-${modalIndex + 1}`} class="tab-label">
                  {modalBlock}
                </label>
                <div class="tab-content">My father had a small estate in Nottinghamshire: I was </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
