import React from "react";
import Body from "./Body/Body";
import Nav from "./Nav/Nav";
// import AssetView from "./Body/AssetView/AssetView";

export default function Layout() {
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-center">
        <Body />
      </div>
    </div>
  );
}
