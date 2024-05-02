import "./Header.scss";
import BankLogo from "../../../public/img/argentBankLogo.png";
import UserLogo from "../../assets/circle-user-solid.svg";

function Header() {
   return (
      <>
         <nav id="header">
            <a className="HeaderBankLogo" href="/">
               <img src={BankLogo} alt="Logo de ArgentBank" />
            </a>

            <a className="HeaderSignIn" href="/sign-in">
               <img src={UserLogo} alt="" />
               <span>Sign In</span>
            </a>
         </nav>
      </>
   );
}

export default Header;
