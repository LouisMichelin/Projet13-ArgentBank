import "./Header.scss";
import BankLogo from "../../../public/img/argentBankLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
   return (
      <>
         <nav id="header">
            <a className="HeaderBankLogo" href="/">
               <img src={BankLogo} alt="Logo de ArgentBank" />
            </a>

            <a className="HeaderSignIn" href="/sign-in">
               <FontAwesomeIcon
                  className="HeaderSignInLogo"
                  icon={faCircleUser}
               />
               Sign In
            </a>
         </nav>
      </>
   );
}

export default Header;
