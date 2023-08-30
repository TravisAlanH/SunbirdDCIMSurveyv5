import React from "react";
import { FaGripLines } from "react-icons/fa";
// import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <div className="flex flex-row justify-center items-center w-[2.5rem] h-full">
      <div className="dropdown">
        <div className="h-[3rem] flex flex-col justify-center">
          <FaGripLines className="text-white text-2xl" />
        </div>
        <div className="dropdown-content-NAV px-3 py-1">
          <div className="flex flex-col justify-center items-center">
            {/* <Link to="/" className="w-full h-full"> */}
            Home
            {/* </Link>
            <Link to="/room" className="w-full h-full"> */}
            Room
            {/* </Link>
            <Link to="/audit" className="w-full h-full"> */}
            Audit
            {/* </Link>
            <Link to="/assets" className="w-full h-full"> */}
            Assets
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
