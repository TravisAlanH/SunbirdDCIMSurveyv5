import React from "react";
import LoginTable from "./LoginTable";

export default function Login(setAssetData, setRackData) {
  return (
    <div className="LoginBackground w-screen flex flex-row justify-center items-center">
      <LoginTable setAssetData={setAssetData} setRackData={setRackData} />
    </div>
  );
}
