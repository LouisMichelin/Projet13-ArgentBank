import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.scss";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import User from "./Pages/User/User.jsx";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//    {
//       path: "/",
//       element: <App />,
//    },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Home />
      <Login />
      <User />
      {/* <RouterProvider router={router} /> */}
   </React.StrictMode>
);

/**
 * React-router-dom à setup pour switch d'une Page à l'autre
 * - Accueil
 * - Login
 * - User interface
 */
