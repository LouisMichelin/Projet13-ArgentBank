import "./Header.scss";
import BankLogo from "/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleUser,
   faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/selectors";

function Header() {
   const token = useSelector(getToken);
   // const [signIn, setSignIn] = useState(true);
   // const [userFirstName, setUserFirstName] = useState(
   //    localStorage.getItem("prenom")
   //       ? localStorage.getItem("prenom")
   //       : "unknown"
   // );

   // const userToken = localStorage.getItem("userToken");

   // function updateLoginAndOut() {
   //    setSignIn(false);
   //    setUserFirstName(localStorage.getItem("prenom"));
   // }

   // useEffect(() => {
   //    if (userToken) {
   //       updateLoginAndOut();
   //    }
   // });

   return (
      <>
         <nav id="header">
            <a className="HeaderBankLogo" href="/">
               <img src={BankLogo} alt="Logo de ArgentBank" />
               <h1 className="sr-only">Argent Bank</h1>
            </a>

            <div className="HeaderProfileAndSignin">
               {/* {!signIn && ( */}
               {token && (
                  <a className="HeaderSignIn" href="/user">
                     <FontAwesomeIcon
                        className="HeaderSignOutLogo"
                        icon={faCircleUser}
                     />
                     {/* {localStorage.getItem("userToken") && userFirstName} */}
                  </a>
               )}

               {/* {signIn ? (
                  <a className="HeaderSignIn" href="/login">
                     <span>
                        <FontAwesomeIcon
                           className="HeaderSignInLogo"
                           icon={faCircleUser}
                        />
                        Sign In
                     </span>
                  </a>
               ) : (
                  <a
                     className="HeaderSignIn"
                     href="/login"
                     onClick={() => localStorage.clear()}
                  >
                     <span>
                        <FontAwesomeIcon
                           className="HeaderSignInLogo"
                           icon={faRightFromBracket}
                        />
                        Sign Out
                     </span>
                  </a>
               )} */}
            </div>
         </nav>
      </>
   );
}

export default Header;
