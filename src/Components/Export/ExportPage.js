import React from "react";
import { useSelector } from "react-redux";
import createTable from "../../Reuse/CreateTable";
import download_to_excel from "../../Reuse/ExportExcel";
import * as transitionData from "../../Components/CustomField/CustomFieldExportTemplates";

export default function ExportPage() {
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  // const [modalBlock, setModalBlock] = React.useState();

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

                // setModalBlock(e.target.value);
                let Input = e.target.value === "Locations" ? BASE_DATA["LocationData"] : BASE_DATA[e.target.value][e.target.value + "Array"];
                // let Input = BASE_DATA[e.target.value][e.target.value + "Array"];
                // let Location = BASE_DATA["LocationData"];
                // console.log(Input);

                let Field = transitionData[e.target.value];
                //
                const updatedArray = [];
                if (e.target.value !== "Locations") {
                  for (let i = 0; i < Input.length; i++) {
                    const updatedInput = {};
                    for (const inputKey in Input[i]) {
                      if (Input[i].hasOwnProperty(inputKey)) {
                        const inputValue = Input[i][inputKey];
                        if (Object.values(Field).includes(inputKey)) {
                          for (const fieldKey in Field) {
                            if (Field.hasOwnProperty(fieldKey) && Field[fieldKey] === inputKey) {
                              updatedInput[fieldKey] = inputValue;
                              break;
                            }
                          }
                        }
                      }
                    }
                    updatedArray.push(updatedInput);
                    console.log(updatedArray);
                  }

                  createTable(updatedArray, "ExportTable");
                } else {
                  const updatedInput = {};
                  for (const inputKey in Input) {
                    if (Input.hasOwnProperty(inputKey)) {
                      const inputValue = Input[inputKey];
                      if (Object.values(Field).includes(inputKey)) {
                        for (const fieldKey in Field) {
                          if (Field.hasOwnProperty(fieldKey) && Field[fieldKey] === inputKey) {
                            updatedInput[fieldKey] = inputValue;
                            break;
                          }
                        }
                      }
                    }
                  }
                  updatedArray.push(updatedInput);

                  createTable(updatedArray, "ExportTable");
                  // createTable(BASE_DATA[e.target.value][e.target.value + "Array"], "ExportTable");
                }

                //
              }}
            >
              <option value="default">Select</option>
              <option value="Locations">Locations</option>
              {/* <option value="Rooms">Rooms</option> */}
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
              // delete modalBlock["ID"];
              // delete modalBlock["Name *"];
              // delete modalBlock["Index"];
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
