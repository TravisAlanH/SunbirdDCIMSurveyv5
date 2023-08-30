import React from "react";
import Body from "./Body/Body";
import Nav from "./Nav/Nav";
// import AssetView from "./Body/AssetView/AssetView";

export default function Layout() {
  return (
    <div className="w-full">
      <Nav />
      <div className="flex flex-col items-center pt-4">
        <Body />
      </div>
    </div>
  );
}
