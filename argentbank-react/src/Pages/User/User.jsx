import "./User.scss";
import WelcomeUser from "../../components/WelcomeUser/WelcomeUser";
import EditUser from "../../components/EditUser/EditUser";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
   getToken,
   // getUser
} from "../../redux/selectors";
import { setUser } from "../../redux/slices/user/userSlice";

function User() {
   // Setup User : FirstName & LastName
   const [userFirstName, setUserFirstName] = useState("");
   const [userLastName, setUserLastName] = useState("");
   const [isActive, setIsActive] = useState(false);
   // Setup Redux
   const dispatch = useDispatch();
   const redirect = useNavigate();
   const token = useSelector(getToken);
   // const user = useSelector(getUser);
   // console.log("firstname", user.firstName);
   // Function

   useEffect(() => {
      console.log("SESSION", sessionStorage);
      console.log("LOCAL", localStorage);
   }, []);

   const profileFetcher = async () => {
      const API_URL = "http://127.0.0.1:3001/api/v1/user/profile";
      // AXIOS
      await axios
         .post(
            API_URL,
            {
               status: 0,
               message: "string",
               body: {
                  id: "string",
                  email: "string",
               },
            },
            {
               headers: {
                  Authorization: "Bearer " + token,
               },
            }
         )
         .then((response) => {
            if (response.status === 200) {
               // console.log("data body", response.data.body.firstName);
               dispatch(setUser(response.data.body));
               // DATA
               const prenom = response.data.body.firstName;
               const nom = response.data.body.lastName;
               // Local & Session Storages
               if (localStorage.getItem("token")) {
                  localStorage.setItem("firstname", prenom);
                  localStorage.setItem("lastname", nom);
               } else if (sessionStorage.getItem("token")) {
                  sessionStorage.setItem("firstname", prenom);
                  sessionStorage.setItem("lastname", nom);
               }
               // USESTATE
               setUserFirstName(prenom);
               setUserLastName(nom);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      if (token) {
         profileFetcher();
      } else if (!token && localStorage.length > 0) {
         setUserFirstName(localStorage.getItem("firstname"));
         setUserLastName(localStorage.getItem("lastname"));
      } else if (!token && sessionStorage.length > 0) {
         setUserFirstName(sessionStorage.getItem("firstname"));
         setUserLastName(sessionStorage.getItem("lastname"));
      } else {
         redirect("/login");
      }
   }, []);

   return (
      <>
         <main className="User">
            {isActive ? (
               <EditUser
                  prenom={userFirstName}
                  nom={userLastName}
                  onClick={() => setIsActive(!isActive)}
               />
            ) : (
               <WelcomeUser
                  prenom={userFirstName}
                  nom={userLastName}
                  onClick={() => setIsActive(!isActive)}
               />
            )}
            <h2 className="sr-only">Accounts</h2>
            <section className="UserAccount">
               <div className="UserAccount-ContentWrapper">
                  <h3>Argent Bank Checking (x8349)</h3>
                  <p className="UserAccount-Amount">$2,082.79</p>
                  <p>Available Balance</p>
               </div>
               <div className="UserAccount-Button">
                  <button>View transactions</button>
               </div>
            </section>
            <section className="UserAccount">
               <div className="UserAccount-ContentWrapper">
                  <h3>Argent Bank Savings (x6712)</h3>
                  <p className="UserAccount-Amount">$10,928.42</p>
                  <p>Available Balance</p>
               </div>
               <div className="UserAccount-Button">
                  <button>View transactions</button>
               </div>
            </section>
            <section className="UserAccount">
               <div className="UserAccount-ContentWrapper">
                  <h3>Argent Bank Credit Card (x8349)</h3>
                  <p className="UserAccount-Amount">$184.30</p>
                  <p>Current Balance</p>
               </div>
               <div className="UserAccount-Button">
                  <button>View transactions</button>
               </div>
            </section>
         </main>
      </>
   );
}

export default User;
