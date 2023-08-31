import "./App.css";
import "./Styles/Login.css";
import Layout from "./Components/Layout";

// import ReactDOM from "react-dom/client";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<PAGE />}>
    //       <Route path="home" element={<Body />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <div>
      {/* <Counter /> */}
      <div className="flex flex-col items-center w-full">
        <Layout />
      </div>
    </div>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
