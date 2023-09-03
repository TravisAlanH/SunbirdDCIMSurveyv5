import React from "react";
import { FaGripLines } from "react-icons/fa";
import { useDispatch } from "react-redux";
import * as actions from "../../Slices/CounterSlice";
import ExportPage from "../Export/ExportPage";
// import { Link } from "react-router-dom";

export default function NavMenu({ setPageContent }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row justify-center items-center w-[3.5rem] h-full">
      <div className="dropdown">
        <div className="h-[4rem] flex flex-col justify-center">
          <FaGripLines className="text-white text-4xl" />
        </div>
        <div className="dropdown-content px-3 py-1 left-[-8rem] z-50 ">
          <div className="flex flex-col justify-center items-center">
            <button className="w-full h-full">Settings</button>
            <button className="w-full h-full">Help</button>
            <button
              className="w-full h-full"
              onClick={() => {
                setPageContent(<ExportPage />);
              }}
            >
              Export
            </button>

            <button
              className="w-full h-full"
              onClick={() => {
                dispatch(actions.updateCurrent({ key: "Login", value: 0 }));
              }}
            >
              Log Out
            </button>

            {/* <Link to="/" className="w-full h-full"> */}

            {/* </Link>
            <Link to="/room" className="w-full h-full"> */}

            {/* </Link>
            <Link to="/audit" className="w-full h-full"> */}

            {/* </Link>
            <Link to="/assets" className="w-full h-full"> */}

            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
