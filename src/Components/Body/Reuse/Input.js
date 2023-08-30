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

  let payload = {
    index: 0,
    ObjKey: ObjKey,
  };

  switch (ObjKey) {
    case "dcTrack Location Code*":
      Data = dcTrackLocationCode;
      Set = setDcTrackLocationCode;
      Placeholder = "Location Code";
      break;
    case "dcTrack Location Name*":
      Data = dcTrackLocationName;
      Set = setDcTrackLocationName;
      Placeholder = "Location Name";
      break;
    case "dcTrack Location Hierarchy*":
      Data = dcTrackLocationHierarchy;
      Set = setDcTrackLocationHierarchy;
      Placeholder = "Blank if no Hierarchy";
      break;
    case "Can Contain Assets":
      Data = canContainAssets;
      Set = setCanContainAssets;
      Placeholder = "";
      break;
    case "Data Center Area*":
      Data = dataCenterArea;
      Set = setDataCenterArea;
      Placeholder = "Area square feet";
      break;
    case "Country*":
      Data = country;
      Set = setCountry;
      Placeholder = "Country";
      break;
    default:
      break;
  }

  return (
    <fieldset className="flex flex-col w-full items-center justify-center">
      <legend className="text-xs font-bold">{ObjKey}</legend>
      {ObjKey === "Can Contain Assets" ? (
        <input
          type="checkbox"
          className="rounded-md lg:w-[90%] md:w-[90%] w-[90%] text-md"
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
          className="rounded-md lg:w-[90%] md:w-[90%] w-[90%] text-md px-2"
          placeholder={Placeholder}
          value={Data}
          onChange={(e) => {
            payload.value = e.target.value;
            Set(e.target.value);
            dispatch(actions.updateLocation(payload));
          }}
        />
      )}
    </fieldset>
  );
}
