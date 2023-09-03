import React from "react";
import NavMenu from "./NavMenu";
import logo from "../../Img/logo.webp";

export default function Nav({ setPageContent }) {
  return (
    <div className="z-50">
      <div className="w-full h-[4rem] fixed top-0 orangeSplit z-50">
        <div className="flex flex-row justify-between items-center h-full w-full z-50">
          <div>
            <img src={logo} alt="sunbird" className="h-[3.5rem]" />
          </div>
          <NavMenu setPageContent={setPageContent} />
        </div>
      </div>
    </div>
  );
}
