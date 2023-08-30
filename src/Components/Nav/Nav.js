import React from "react";
import NavMenu from "./NavMenu";
import logo from "../../Img/logo.webp";

export default function Nav() {
  return (
    <div>
      <div className="w-full h-[3rem]"></div>
      <div className="w-full h-[3rem] fixed top-0 orangeSplit">
        <div className="flex flex-row justify-between items-center h-full">
          <div>
            <img src={logo} alt="sunbird" className="h-[2.8rem]" />
          </div>
          <NavMenu />
        </div>
      </div>
    </div>
  );
}
