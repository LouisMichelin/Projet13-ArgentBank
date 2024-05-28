import "./Header.scss";
import BankLogo from "/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleUser,
   faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getToken, getUser } from "../../redux/selectors";
import { removeToken } from "../../redux/slices/token/tokenSlice";
import { removeUser } from "../../redux/slices/user/userSlice";

function Header() {
   // Setup Redux
   const user = useSelector(getUser);
   const token = useSelector(getToken);
   const dispatch = useDispatch();
   // Clear Local & Session Storages
   function clearStorages() {
      localStorage.clear();
      sessionStorage.clear();
      dispatch(removeToken());
      dispatch(removeUser());
   }

   return (
      <>
         <nav id="header">
            <a className="HeaderBankLogo" href="/">
               <img src={BankLogo} alt="Logo de ArgentBank" />
               <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div className="HeaderProfileAndSignin">
               {token ? (
                  <>
                     <a className="HeaderSignIn" href="/user">
                        <FontAwesomeIcon
                           className="HeaderSignOutLogo"
                           icon={faCircleUser}
                        />
                        {user.firstName}
                     </a>
                     <a
                        className="HeaderSignIn"
                        href="/login"
                        onClick={() => clearStorages()}
                     >
                        <FontAwesomeIcon
                           className="HeaderSignInLogo"
                           icon={faRightFromBracket}
                        />
                        Sign Out
                     </a>
                  </>
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
