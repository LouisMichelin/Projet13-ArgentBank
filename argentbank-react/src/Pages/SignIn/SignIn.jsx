import "./SignIn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import axios from "axios";

function SignIn() {
   const [userName, setUserName] = useState("");
   const [userPassword, setUserPassword] = useState("");
   const [reponseTest, setReponseTest] = useState();

   // useEffect(() => {
   //    axios(
   //       {
   //          method: "get",
   //          url: "http://127.0.0.1:3001/user/profile",
   //          // data: {
   //          //    firstName: "Tony",
   //          //    lastName: "Stark",
   //          // },
   //       },
   //       {
   //          headers: {
   //             "Content-type": "application/json; charset=UTF-8",
   //          },
   //       }
   //    )
   //       .then((res) => {
   //          console.log(res.data);
   //       })
   //       .catch((err) => console.log(err));
   // }, []);

   // "http://127.0.0.1:3001/user/profile",
   // $2b$12$J0E/JNLsQana4HSFLYCoceseDqOOypwE568vMswOPKuRwU2gpPmpO
   ///////////////////////////////////////////////////////////////

   const handleSubmit = () => {
      // alert("oui ça marche tkt");
      // event.preventDefault();
      // alert(`Hello ${userName}`);
      // axios.get("http://127.0.0.1:3001/user/profile").then((res) => {
      // axios.get("https://api.quotable.io/random").then((res) => {
      axios
         .post("http://127.0.0.1:3001/user/profile", {
            firstName: "Tony",
            lastName: "Stark",
         })
         .then((response) => console.log(response))
         .catch((err) => {
            console.error("Error response:");
            console.error(err.response.data); // ***
            console.error(err.response.status); // ***
            console.error(err.response.headers); // ***
         });
   };
   return (
      <>
         <main className="SignIn">
            <Counter />
            <div>
               <button onClick={handleSubmit}>CLICK ICI TKT</button>
            </div>
            <section className="SignIn-Content">
               <FontAwesomeIcon className="SignIn-Logo" icon={faCircleUser} />
               <h1>Sign In</h1>
               {/* <form onSubmit={handleSubmit}> */}
               <form>
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
