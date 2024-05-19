import "./SignIn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Counter from "../../redux/slices/counter/Counter";
import axios from "axios";
// import { loginUser } from "../../../../server/services/userService";

function SignIn() {
   const [userName, setUserName] = useState("");
   const [userPassword, setUserPassword] = useState("");
   const redirect = useNavigate();

   const handleSubmit = async (event) => {
      event.preventDefault();
      // URL LOGIN
      const API_URL = "http://127.0.0.1:3001/api/v1/user/login";
      // FETCH POST
      await axios
         .post(API_URL, {
            email: userName,
            password: userPassword,
         })
         .then((response) => {
            if (response.status === 200) {
               // Token du User
               const userToken = response.data.body.token;
               console.log("Token SIGNIN: ", userToken);
               // Si le localStorage n'a pas d'Item "userToken"
               if (!localStorage.getItem("userToken")) {
                  localStorage.setItem("userToken", userToken);
                  console.log("c'était bien vide!");
               }
               // Setup du Headers Authorization
               axios.defaults.headers = {
                  Authorization: "Bearer " + userToken,
               };

               // Enfin : Redirection vers "/user"
               redirect("/user");
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <>
         <main className="SignIn">
            <Counter />
            <section className="SignIn-Content">
               <FontAwesomeIcon className="SignIn-Logo" icon={faCircleUser} />
               <h1>Sign In</h1>
               <form onSubmit={(e) => handleSubmit(e)}>
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
