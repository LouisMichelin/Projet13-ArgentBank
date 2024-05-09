import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import Home from "./pages/Home/Home.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import User from "./pages/User/User.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Router>
         <Header />
         <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/sign-in" index element={<SignIn />} />
            <Route path="/user" index element={<User />} />
         </Routes>
         <Footer />
      </Router>
   </React.StrictMode>
);
