import React from "react";
import { AssetsAddRemove } from "./CustomFieldExportTemplates";
import { useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";

export default function CustomFieldModal() {
  // const AssetInputObject = useSelector((state) => state.location.Location[0]["Assets"]["AssetsArray"][0]);
  const dispatch = useDispatch();

  const unmatchedKeys = AssetsAddRemove;
  console.log(unmatchedKeys);
  // if the key is in the array, do not display the key and checkbox
  // if the key is not in the array, then display the key and a checkbox that is not checked
  // button to update the array object with the checked keys

  return (
    <div>
      <form
        className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[26].checked);
          console.log(e.target[26].value);
          e.target.querySelectorAll('input[type="checkbox"]').forEach((element) => {
            // console.log(element.checked);
            // console.log(element.value);
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
            <input type="checkbox" id={keyName} name={keyName} value={keyName} /> {keyName}
          </div>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
