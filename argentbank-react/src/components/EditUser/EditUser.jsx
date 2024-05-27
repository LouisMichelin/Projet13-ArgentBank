import "./EditUser.scss";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/selectors";

function EditUser({ prenom, nom, onClick }) {
   // const redirect = useNavigate();
   const [newFirstName, setNewFirstName] = useState("");
   const [newLastName, setNewLastName] = useState("");
   const token = useSelector(getToken);

   const editUserNameSubmit = async (event) => {
      event.preventDefault();
      console.log(newFirstName, newLastName);
      const API_URL = "http://127.0.0.1:3001/api/v1/user/profile";
      // AXIOS
      await axios
         .put(
            API_URL,
            {
               firstName: "string",
               lastName: "string",
            },
            {
               headers: {
                  Authorization: "Bearer " + token,
               },
            }
         )
         .then((response) => {
            if (response.ok) {
               // DATA
               const actualFirstname = response.data.body.firstName;
               const actualName = response.data.body.lastName;
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
            <form onSubmit={editUserNameSubmit}>
               <div className="EditForm">
                  <div className="EditForm-Inputs">
                     <input
                        type="text"
                        placeholder={prenom}
                        value={newFirstName}
                        onChange={(e) => setNewFirstName(e.target.value)}
                     />
                     <input
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
