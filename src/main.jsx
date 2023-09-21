import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainLayouts from "./Layouts/MainLayouts";
// import Home from "./Pages/Home/Home";  // --> 1st step
// import Products from "./Pages/Products/Products";
import myCreatedRoute from "./Route/Route";

// 1st step --->
// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayouts></MainLayouts>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path: "/Products",
//         element: <Products></Products>
//       },
//     ],
//   },
// ]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
