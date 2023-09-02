import React from "react";
import Body from "./Body/Body";
import Nav from "./Nav/Nav";
import { useSelector } from "react-redux";
import Login from "./Login/Login";

export default function Layout() {
  const isLogin = useSelector((state) => state.location.Current["Login"]);
  console.log(isLogin);

  if (isLogin === 1) {
    return (
      <div className="w-full">
        <Nav />
        <div className="flex flex-col items-center">
          <Body />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-screen flex flex-row items-center justify-center h-screen">
        <Login />
      </div>
    );
  }

  // return {isLogin === "1" ? (
  //   <Login />
  // ) : (
  //   <div className="w-full">
  //     <Nav />
  //     <div className="flex flex-col items-center pt-4">{/* <Body /> */}</div>
  //   </div>
  // )}
}
