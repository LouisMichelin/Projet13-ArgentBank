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
                  <div>
                     <label htmlFor=""></label>
                     <input type="text" />
                  </div>
                  <div>
                     <label htmlFor=""></label>
                     <input type="text" />
                  </div>
                  <div>
                     <label htmlFor=""></label>
                     <input type="text" />
                  </div>
               </form>
            </section>
         </main>
      </>
   );
}

export default SignIn;
