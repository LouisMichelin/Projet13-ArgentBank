import "./EditUser.scss";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken, getUser } from "../../redux/selectors";
import {
   editUserFirstName,
   editUserLastName,
} from "../../redux/slices/user/userSlice";
import { useNavigate } from "react-router-dom";

function EditUser({ prenom, nom, onClick }) {
   // const redirect = useNavigate();
   const [newFirstName, setNewFirstName] = useState(prenom);
   const [newLastName, setNewLastName] = useState(nom);
   // Setup Redux
   const dispatch = useDispatch();
   // const redirect = useNavigate();
   const user = useSelector(getUser);
   const token = useSelector(getToken);

   const editUserNameSubmit = async (event) => {
      event.preventDefault();
      // console.log(newFirstName, newLastName);
      const API_URL = "http://127.0.0.1:3001/api/v1/user/profile";
      // AXIOS
      await axios
         .put(
            API_URL,
            {
               firstName: newFirstName,
               lastName: newLastName,
            },
            {
               headers: {
                  Authorization: "Bearer " + token,
               },
            }
         )
         .then((response) => {
            console.log("IS VALUE NULL ?", newFirstName);
            console.log("voici la réponse:", response);

            if (newFirstName.length > 0) {
               console.log("oui, firstname est > 0"), newFirstName;
               // setNewFirstName(prenom);
            } else if (newFirstName.length === 0) {
               console.log("non là la LENGTH est null");
               console.log("prenom:", user.firstName);
               return setNewFirstName(user.firstName);
               // dispatch(editUserFirstName(newFirstName));
            }
            // if (newLastName)
            // dispatch(editUserLastName(newLastName));

            // DATA
            // const actualFirstname = response.data.body.firstName;
            // const actualName = response.data.body.lastName;
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <>
         <div className="User-Header">
            <h1>Welcome back</h1>
            <form onSubmit={editUserNameSubmit}>
               <div className="EditForm">
                  <div className="EditForm-Inputs">
                     <input
                        id="userPrenom"
                        type="text"
                        placeholder={prenom}
                        value={newFirstName}
                        onChange={(e) => setNewFirstName(e.target.value)}
                     />
                     <input
                        id="userNom"
                        type="text"
                        placeholder={nom}
                        value={newLastName}
                        onChange={(e) => setNewLastName(e.target.value)}
                     />
                  </div>
                  <div className="EditForm-Buttons">
                     <button
                        onClick={editUserNameSubmit}
                        type="submit"
                        className="EditForm-Btn"
                     >
                        Save
                     </button>
                     <button onClick={onClick} className="EditForm-Btn">
                        Cancel
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
}

export default EditUser;
