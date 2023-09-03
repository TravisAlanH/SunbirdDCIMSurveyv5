import React from "react";
import { useSelector } from "react-redux";
import ArrayInput from "./Reuse/ArrayInput";

export default function InputPage({ modalBlock }) {
  const BASE_DATA = useSelector((state) => state.location.Location[0]);
  const CURRENT = useSelector((state) => state.location.Current[modalBlock + "ArrayIndex"]);
  const ARRAY_DATA = BASE_DATA[modalBlock][modalBlock + "Array"][CURRENT];

  if (CURRENT < 0) {
    return null;
  } else {
    return BASE_DATA[modalBlock][modalBlock + "Array"].length === 0 ? null : (
      <div>
        {ARRAY_DATA["Make *"] === "" || ARRAY_DATA["Model *"] === "" || ARRAY_DATA["Name *"] === "" ? (
          <div className="flex flex-col w-full border-2 border-[#F7F5F1]">
            <div className="w-full bg-[#F7F5F1] h-[2rem] p-1">Required Fields</div>
            <div className="flex flex-col gap-2 p-3">
              {Object.keys(ARRAY_DATA)
                .filter((key) => {
                  return key === "Name *" || key === "Make *" || key === "Model *";
                })
                .map((keyItem, keyIndex) => {
                  return (
                    <div key={keyItem}>
                      <ArrayInput modalBlock={modalBlock} keyItem={keyItem} />
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full border-2 border-[#F7F5F1]">
            <div className="w-full bg-[#F7F5F1] h-[2rem] p-1">{modalBlock + " Data"}</div>
            <div className="flex flex-col gap-2 p-3">
              {Object.keys(ARRAY_DATA).map((keyItem, keyIndex) => {
                return (
                  <div key={keyItem}>
                    <ArrayInput modalBlock={modalBlock} keyItem={keyItem} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
