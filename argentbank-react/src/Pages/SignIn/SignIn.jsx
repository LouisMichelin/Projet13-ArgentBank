import "./SignIn.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useStore } from "react-redux";
import { setToken } from "../../redux/slices/token/tokenSlice";
import { getToken } from "../../redux/selectors";

function SignIn() {
   // Setup User Inputs
   const [userName, setUserName] = useState("");
   const [userPassword, setUserPassword] = useState("");
   // Setup Redux
   const store = useStore();
   const dispatch = useDispatch();
   const redirect = useNavigate();

   const [MONESSAI, setMONESSAI] = useState();

   const handleSubmit = async (event) => {
      event.preventDefault();
      // URL LOGIN
      const API_URL = "http://127.0.0.1:3001/api/v1/user/login";
      // AXIOS
      await axios
         .post(API_URL, {
            email: userName,
            password: userPassword,
         })
         .then((response) => {
            if (response.status === 200) {
               // LocalStorage TOKEN
               const userToken = response.data.body.token;
               localStorage.setItem("userToken", userToken);
               console.log("LOCAL TOKEN:", localStorage.getItem("userToken"));
               dispatch(setToken(userToken));
               setMONESSAI(userToken);
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
            <span style={{ display: "flex", flexDirection: "column" }}>
               <div style={{ color: "white" }}>TEST IMPORT TOKEN</div>
               <div style={{ color: "white" }}>{MONESSAI}</div>
            </span>
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
