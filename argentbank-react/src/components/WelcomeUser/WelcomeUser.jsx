import "./WelcomeUser.scss";
import { useState } from "react";

function WelcomeUser({ prenom, nom, isActive }) {
   return (
      <>
         <div className="User-Header">
            <h1>
               Welcome back <br /> {prenom} {nom}!
            </h1>
            <button className="User-EditButton">Edit Name</button>
         </div>
      </>
   );
}

export default WelcomeUser;
