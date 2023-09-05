import React from "react";
import { AssetsAddRemove } from "./CustomFieldExportTemplates";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";

export default function CustomFieldModal() {
  const dispatch = useDispatch();
  const AssetsArray = useSelector((state) => state.location.Location[0].Assets.AssetsArray[0]);

  const unmatchedKeys = AssetsAddRemove;

  return (
    <div className="z-40">
      <form
        className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.target.querySelectorAll('input[type="checkbox"]').forEach((element) => {
            let payload = {
              checked: element.checked,
              value: element.value,
            };
            dispatch(actions.addRemoveCustomFieldsFromAssets(payload));
          });
        }}
      >
        {Object.keys(unmatchedKeys).map((keyName, index) => (
          <div key={index}>
            <input type="checkbox" id={keyName} name={keyName} value={keyName} defaultChecked={AssetsArray.hasOwnProperty(keyName)} /> {keyName}
          </div>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
