import "./Header.scss";
import BankLogo from "/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleUser,
   faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { getToken } from "../../redux/selectors";
import { getToken, getUser } from "../../redux/selectors";

function Header() {
   // Setup Redux
   const token = useSelector(getToken);
   const user = useSelector(getUser);
   console.log("HEADER TOKEN:", token);
   console.log("HEADER USER", user);

   return (
      <>
         <nav id="header">
            <a className="HeaderBankLogo" href="/">
               <img src={BankLogo} alt="Logo de ArgentBank" />
               <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div className="HeaderProfileAndSignin">
               {token && (
                  <a className="HeaderSignIn" href="/user">
                     <FontAwesomeIcon
                        className="HeaderSignOutLogo"
                        icon={faCircleUser}
                     />
                     {user.firstName}
                  </a>
               )}
               {token ? (
                  <a
                     className="HeaderSignIn"
                     href="/login"
                     onClick={() => localStorage.clear()}
                  >
                     <FontAwesomeIcon
                        className="HeaderSignInLogo"
                        icon={faRightFromBracket}
                     />
                     Sign Out
                  </a>
               ) : (
                  <a className="HeaderSignIn" href="/login">
                     <FontAwesomeIcon
                        className="HeaderSignInLogo"
                        icon={faCircleUser}
                     />
                     Sign In
                  </a>
               )}
            </div>
         </nav>
      </>
   );
}

export default Header;
