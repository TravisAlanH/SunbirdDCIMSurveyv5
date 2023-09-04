import React from "react";
import { useSelector } from "react-redux";
import createTable from "../../Reuse/CreateTable";
import download_to_excel from "../../Reuse/ExportExcel";

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
                // let formatData = BASE_DATA[e.target.value][e.target.value + "Array"].map(({ ID, Index, ...item }) => ({ ...item }));
                // formatData = formatData.sort((a, b) => (a["Cabinet **"] > b["Cabinet **"] ? 1 : -1));
                setModalBlock(e.target.value);
                createTable(BASE_DATA[e.target.value][e.target.value + "Array"], "ExportTable");
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
              download_to_excel(e, modalBlock, "ExportTable");
            }}
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
}
