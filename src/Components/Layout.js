import React from "react";
import Body from "./Body/Body";
import Nav from "./Nav/Nav";
import { useSelector } from "react-redux";
import Login from "./Login/Login";

export default function Layout() {
  const isLogin = useSelector((state) => state.location.Current["Login"]);
  console.log("login", isLogin);
  const [pageContent, setPageContent] = React.useState();
  const [rackData, setRackData] = React.useState([]);
  const [assetData, setAssetData] = React.useState([]);
  if (isLogin === 1) {
    return (
      <div className="w-full">
        <Nav setPageContent={setPageContent} />
        <div className="flex flex-col items-center mt-[4rem]">
          <Body pageContent={pageContent} setPageContent={setPageContent} rackData={rackData} assetData={assetData} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-screen flex flex-row items-center justify-center h-screen">
        <Login setRackData={setRackData} setAssetData={setAssetData} />
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
