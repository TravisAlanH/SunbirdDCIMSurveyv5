import React from "react";
import { useSelector } from "react-redux";
import createTable from "../../Reuse/CreateTable";
import download_to_excel from "../../Reuse/ExportExcel";
import { Assets } from "../../Components/CustomField/CustomFieldExportTemplates";

export default function ExportPage() {
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const [modalBlock, setModalBlock] = React.useState();

  return (
    <div className="w-full text-white mb-3 flex flex-col border-[#F3EEE7] border-2">
      <div className="w-full h-[2.5rem] bg-[#F3EEE7] flex flex-row items-center justify-center">
        <h1 className="font-bold">Export </h1>
        <h1 className="font-black"> {""}</h1>
      </div>
      <div className="p-2">
        <div className="w-full text-white mb-3 flex flex-col border-[#F3EEE7] border-2">
          <div className="w-full h-[1.5rem] bg-[#F3EEE7] flex flex-row items-center justify-center">
            <h1>Data:</h1>
            <select
              id="ExportSelect"
              className="w-[10rem] h-full ml-2"
              onChange={(e) => {
                document.getElementById("ExportTable").innerHTML = "";

                if (e.target.value === "default") {
                  return;
                }

                setModalBlock(e.target.value);
                let Input = BASE_DATA[e.target.value][e.target.value + "Array"];
                console.log(Input);
                let Field = Assets;
                //
                const updatedArray = [];
                if (e.target.value === "Assets") {
                  for (let i = 0; i < Input.length; i++) {
                    const updatedInput = {};
                    for (const inputKey in Input[i]) {
                      if (Input[i].hasOwnProperty(inputKey)) {
                        const inputValue = Input[i][inputKey];

                        // Check if the input key exists as a value in the Field object
                        if (Object.values(Field).includes(inputKey)) {
                          // If it does, find the corresponding key in the Field object
                          for (const fieldKey in Field) {
                            if (Field.hasOwnProperty(fieldKey) && Field[fieldKey] === inputKey) {
                              // Replace the input key with the field key in the updatedInput object
                              updatedInput[fieldKey] = inputValue;
                              break; // Stop searching for the field key once found
                            }
                          }
                        }
                        // Note: If the input key is not found in Field, it will not be added to updatedInput
                      }
                    }
                    updatedArray.push(updatedInput);
                    console.log(updatedArray);
                    // updatedInput now contains only the keys that exist in Field
                  }

                  createTable(updatedArray, "ExportTable");
                } else {
                  createTable(BASE_DATA[e.target.value][e.target.value + "Array"], "ExportTable");
                }

                //
              }}
            >
              <option value="default">Select</option>
              <option value="Rooms">Rooms</option>
              <option value="Racks">Racks</option>
              <option value="Assets">Assets</option>
            </select>
          </div>
        </div>
      </div>
      <div className="text-black w-full">
        <div className="overflow-scroll">
          <table id="ExportTable" className="text-xs"></table>
        </div>
        <div className="w-full flex flex-row justify-end">
          <button
            className="w-[4rem] h-[1.5rem] bg-slate-200 rounded-md m-4"
            onClick={(e) => {
              delete modalBlock["ID"];
              delete modalBlock["Name *"];
              delete modalBlock["Index"];
              // download_to_excel(e, modalBlock, "ExportTable");
              download_to_excel("xlsx");
            }}
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
}
