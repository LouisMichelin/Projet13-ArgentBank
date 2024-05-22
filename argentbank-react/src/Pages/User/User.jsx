import { useState, useEffect } from "react";
import "./User.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/selectors";

function User() {
   const token = useSelector(getToken);

   // Firstname depuis localStorage
   const [userFirstName, setUserFirstName] = useState("Jean");
   // Lastname depuis localStorage
   const [userLastName, setUserLastName] = useState("Dupont");

   const profileFetcher = async () => {
      // URL PROFILE
      const API_URL = "http://127.0.0.1:3001/api/v1/user/profile";
      await axios
         .post(API_URL, {
            headers: {
               Authorization: "Bearer " + token,
            },
         })
         .then((response) => {
            if (response.status === 200) {
               setUserFirstName(response.data.body.firstName);
               setUserLastName(response.data.body.lastName);
               console.log(response.data.body.firstName);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      if (token) {
         profileFetcher();
      }
   });

   // // REVOIR CE USEEFFECT()
   // useEffect(() => {
   //    if (userToken === undefined) {
   //       redirect("/");
   //    }
   //    if (userToken) {
   //       profileFetcher();
   //    }
   // }, [userToken]);

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
