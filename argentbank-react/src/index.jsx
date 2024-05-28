import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./Pages/Home/Home.jsx";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import User from "./Pages/User/User.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate persistor={persistor}>
            <Router>
               <Header />
               <Routes>
                  <Route path="/" index element={<Home />} />
                  <Route path="/login" index element={<SignIn />} />
                  <Route path="/user" index element={<User />} />
               </Routes>
               <Footer />
            </Router>
         </PersistGate>
      </Provider>
   </React.StrictMode>
);
