import "./SignIn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
   return (
      <>
         <main className="SignIn">
            <section className="SignIn-Content">
               <FontAwesomeIcon className="SignIn-Logo" icon={faCircleUser} />
               <h1>Sign In</h1>
               <form>
                  <div className="SignIn-InputWrapper">
                     <label htmlFor="username">Username</label>
                     <input
                        className="SignIn-InputArea"
                        type="text"
                        id="username"
                     />
                  </div>
                  <div className="SignIn-InputWrapper">
                     <label htmlFor="password">Password</label>
                     <input
                        className="SignIn-InputArea"
                        type="password"
                        id="password"
                     />
                  </div>
                  <div className="SignIn-InputRemember">
                     <input type="checkbox" id="remember-me" />
                     <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <button
                     onClick={() => alert("hello world")}
                     className="SignIn-Button"
                     // href="/user"
                  >
                     Sign In
                  </button>
               </form>
            </section>
         </main>
      </>
   );
}

export default SignIn;
