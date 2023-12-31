import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../Slices/CounterSlice";

export default function StdInput({ ObjKey }) {
  const LOC_DATA = useSelector((state) => state.location.Location[0].LocationData);
  const dispatch = useDispatch();

  const [dcTrackLocationCode, setDcTrackLocationCode] = React.useState(LOC_DATA["dcTrack Location Code*"]);
  const [dcTrackLocationName, setDcTrackLocationName] = React.useState(LOC_DATA["dcTrack Location Name*"]);
  const [dcTrackLocationHierarchy, setDcTrackLocationHierarchy] = React.useState(LOC_DATA["dcTrack Location Hierarchy*"]);
  const [canContainAssets, setCanContainAssets] = React.useState(LOC_DATA["Can Contain Assets"]);
  const [dataCenterArea, setDataCenterArea] = React.useState(LOC_DATA["Data Center Area*"]);
  const [country, setCountry] = React.useState(LOC_DATA["Country*"]);

  let Data;
  let Set;
  let Placeholder;
  let label;

  let payload = {
    index: 0,
    ObjKey: ObjKey,
  };

  switch (ObjKey) {
    case "dcTrack Location Code*":
      Data = dcTrackLocationCode;
      Set = setDcTrackLocationCode;
      Placeholder = "Location Code";
      label = "Loc Code";
      break;
    case "dcTrack Location Name*":
      Data = dcTrackLocationName;
      Set = setDcTrackLocationName;
      Placeholder = "Location Name";
      label = "Loc Name";

      break;
    case "dcTrack Location Hierarchy*":
      Data = dcTrackLocationHierarchy;
      Set = setDcTrackLocationHierarchy;
      Placeholder = "Blank if no Hierarchy";
      label = "Hierarchy";

      break;
    case "Can Contain Assets":
      Data = canContainAssets;
      Set = setCanContainAssets;
      Placeholder = "";
      label = "Contain Assets";

      break;
    case "Data Center Area*":
      Data = dataCenterArea;
      Set = setDataCenterArea;
      Placeholder = "Area square feet";
      label = "Area";

      break;
    case "Country*":
      Data = country;
      Set = setCountry;
      Placeholder = "Country";
      label = "Country";

      break;
    default:
      break;
  }

  return (
    <div className="flex flex-row w-full items-center justify-center">
      <div className="w-[1rem] h-[1.5rem] flex flex-row justify-center items-center">
        <p className="text-red-500">{ObjKey.includes("*") ? "*" : ""}</p>
      </div>
      <legend className="text-xs font-bold w-[5rem] p-1 bg-[#F7F5F1]">{label}</legend>
      {ObjKey === "Can Contain Assets" ? (
        <input
          type="checkbox"
          className="text-black rounded-md text-md w-[10rem]"
          checked={Data}
          onChange={(e) => {
            // e.target.value === "on" ? (payload.value = "Yes") : (payload.value = "No");
            payload.value = e.target.value;
            Set(e.target.value);
            dispatch(actions.updateLocation(payload));
          }}
        />
      ) : (
        <input
          type="text"
          className="h-[1.5rem] w-[10rem] text-sm px-2 text-black border-b-2 border-[#F7F5F1] bg-inherit"
          placeholder={Placeholder}
          value={Data}
          onChange={(e) => {
            payload.value = e.target.value;
            Set(e.target.value);
            dispatch(actions.updateLocation(payload));
          }}
        />
      )}
    </div>
  );
}
