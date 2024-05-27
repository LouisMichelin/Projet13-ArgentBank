import "./EditUser.scss";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/selectors";

function EditUser({ prenom, nom, onClick }) {
   // Edit UserData: FirstName & LastName
   const [firstNameEdited, setFirstNameEdited] = useState(prenom);
   const [lastNameEdited, setLastNameEdited] = useState(nom);
   // Setup Redux
   const token = useSelector(getToken);
   // Function
   const editUserNameSubmit = async () => {
      const API_URL = "http://127.0.0.1:3001/api/v1/user/profile";
      // AXIOS
      await axios
         .put(
            API_URL,
            {
               firstName: firstNameEdited,
               lastName: lastNameEdited,
            },
            {
               headers: {
                  Authorization: "Bearer " + token,
               },
            }
         )
         .then((response) => {
            if (response.ok) {
               setFirstNameEdited(firstNameEdited);
               setLastNameEdited(lastNameEdited);
            }
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <>
         <div className="User-Header">
            <h1>Welcome back</h1>
            <form onSubmit={(e) => editUserNameSubmit(e)}>
               <div className="EditForm">
                  <div className="EditForm-Inputs">
                     <input
                        id="userPrenom"
                        type="text"
                        placeholder={prenom}
                        value={firstNameEdited}
                        onChange={(e) => setFirstNameEdited(e.target.value)}
                        required={true}
                     />
                     <input
                        id="userNom"
                        type="text"
                        placeholder={nom}
                        value={lastNameEdited}
                        onChange={(e) => setLastNameEdited(e.target.value)}
                        required={true}
                     />
                  </div>
                  <div className="EditForm-Buttons">
                     <button type="submit" className="EditForm-Btn">
                        Save
                     </button>
                     <button
                        onClick={onClick}
                        type="button"
                        className="EditForm-Btn"
                     >
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
