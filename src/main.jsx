import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

// const divStyle = {
//   backgroundImage: `url(${background}) `,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   width: "100%",
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <div className="roboto max-w-7xl mx-auto ">
      <RouterProvider router={router} />
    </div>
    <Footer></Footer>
  </React.StrictMode>
);
