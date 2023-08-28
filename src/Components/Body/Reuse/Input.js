import React from "react";

export default function StdInput() {
  return (
    // <div className="flex flex-col">
    <fieldset className="flex flex-col">
      <legend className="text-xs font-bold">Input</legend>
      <input type="text" className="rounded-md w-[90%] text-md" placeholder="Test" />
    </fieldset>
    //   <label className="text-xs">Input</label>
    //   <input type="text" />
    // </div>
  );
}
