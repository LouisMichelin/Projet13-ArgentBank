import "./User.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../../redux/selectors";
import { setUser } from "../../redux/slices/user/userSlice";

function User() {
   // Setup User : FirstName & LastName
   const [userFirstName, setUserFirstName] = useState("");
   const [userLastName, setUserLastName] = useState("");
   // Setup Redux
   const dispatch = useDispatch();
   const redirect = useNavigate();
   const token = useSelector(getToken);

   const profileFetcher = async () => {
      // console.log("voici le token de <USER/>:", token);
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
               // LOCALSTORAGE
               localStorage.setItem("firstname", prenom);
               localStorage.setItem("lastname", nom);
               // USESTATE
               setUserFirstName(prenom);
               setUserLastName(nom);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };
   /**
    * Si TOKEN, alors profileFetcher()
    * Sinon, LOCALSTORAGE
    * Sinon, Redirect()
    */
   useEffect(() => {
      if (token) {
         // console.log("useeffect token: ", token);
         profileFetcher();
      } else if (!token && localStorage.length > 0) {
         setUserFirstName(localStorage.getItem("firstname"));
         setUserLastName(localStorage.getItem("lastname"));
      } else {
         redirect("/");
      }
   }, [token]);

   return (
      <>
         <main className="User">
            <div className="User-Header">
               <h1>
                  Welcome back <br /> {userFirstName} {userLastName}!
               </h1>
               <button className="User-EditButton">Edit Name</button>
            </div>
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
