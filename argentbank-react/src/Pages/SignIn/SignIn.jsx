import "./SignIn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Counter from "../../redux/slices/counter/Counter";
import axios from "axios";
// import { loginUser } from "../../../../server/services/userService";

function SignIn() {
   const [userName, setUserName] = useState("");
   const [userPassword, setUserPassword] = useState("");

   ///////////////////////////////////////////////////////////////
   // const config = {
   //    headers: { Authorization: `Bearer ${loginUser()}` },
   // };
   // {
   //    headers: {
   //       Authorization: "663b7f5c60fc002b9451896d",
   //    },
   // }
   ///////////////////////////////////////////////////////////////
   // "http://127.0.0.1:3001/api/v1/user/profile"
   // $2b$12$J0E/JNLsQana4HSFLYCoceseDqOOypwE568vMswOPKuRwU2gpPmpO
   ///////////////////////////////////////////////////////////////

   const handleSubmit = async (event) => {
      event.preventDefault();
      // console.log("user, pw: ", userName, userPassword);

      const API_URL = "http://127.0.0.1:3001/api/v1/user/login";

      await axios
         .post(API_URL, {
            email: userName,
            password: userPassword,
         })
         .then((response) => {
            console.log(response);
            console.log(userName, userPassword);
         })
         .catch((error) => {
            console.log(userName, userPassword);
            console.log(error);
         });
   };

   return (
      <>
         <main className="SignIn">
            <Counter />
            {/* <div>
               <button onClick={handleSubmit}>CLICK ICI</button>
            </div> */}
            <section className="SignIn-Content">
               <FontAwesomeIcon className="SignIn-Logo" icon={faCircleUser} />
               <h1>Sign In</h1>
               <form onSubmit={(e) => handleSubmit(e)}>
                  {/* <form> */}
                  <div className="SignIn-InputWrapper">
                     <label htmlFor="username">Username</label>
                     <input
                        className="SignIn-InputArea"
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                     />
                  </div>
                  <div className="SignIn-InputWrapper">
                     <label htmlFor="password">Password</label>
                     <input
                        className="SignIn-InputArea"
                        type="password"
                        id="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                     />
                  </div>
                  <div className="SignIn-InputRemember">
                     <input type="checkbox" id="remember-me" />
                     <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <button className="SignIn-Button">Sign In</button>
               </form>
            </section>
         </main>
      </>
   );
}

export default SignIn;
