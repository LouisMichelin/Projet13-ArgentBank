import { useState, useEffect } from "react";
import "./User.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function User() {
   const [userFirstName, setUserFirstName] = useState("default");
   const [userLastName, setUserLastName] = useState("default");
   const redirect = useNavigate();

   const items = localStorage.getItem("userToken");
   console.log("Token PROFILE: ", items);

   const profileFetcher = async () => {
      // URL PROFILE
      const API_URL = "http://127.0.0.1:3001/api/v1/user/profile";
      await axios
         .post(API_URL, {
            headers: {
               Authorization: "Bearer " + items,
            },
         })
         .then((response) => {
            if (response.status === 200) {
               console.log("USER GG:", response);

               const firstname = response.data.body.firstName;
               localStorage.setItem("prenom", firstname);
               setUserFirstName(localStorage.getItem("prenom"));

               const lastname = response.data.body.lastName;
               localStorage.setItem("nom", lastname);
               setUserLastName(localStorage.getItem("nom"));
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      if (items === undefined) {
         redirect("/");
      }
      if (items) {
         profileFetcher();
      }
   }, [items]);

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
