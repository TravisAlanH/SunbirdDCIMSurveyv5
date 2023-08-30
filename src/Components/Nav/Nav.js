import React from "react";
import NavMenu from "./NavMenu";
import logo from "../../Img/logo.webp";

export default function Nav() {
  return (
    <div>
      <div className="w-full h-[4rem]"></div>
      <div className="w-full h-[4rem] fixed top-0 orangeSplit">
        <div className="flex flex-row justify-between items-center h-full w-full">
          <div>
            <img src={logo} alt="sunbird" className="h-[3.5rem]" />
          </div>
          <NavMenu />
        </div>
      </div>
    </div>
  );
}
