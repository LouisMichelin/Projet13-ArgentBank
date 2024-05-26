import "./EditUser.scss";
import { useEffect, useState } from "react";

function EditUser({ prenom, nom }) {
   // const [isActive, setIsActive] = useState(false);
   // const redirect = useNavigate();
   const [newFirstName, setNewFirstName] = useState(prenom);
   const [newLastName, setNewLastName] = useState(nom);

   const editUserNameSubmit = async (event) => {
      event.preventDefault();

      // const API_URL = "http://127.0.0.1:3001/api/v1/user/login";
      // // AXIOS
      // await axios
      //    .post(API_URL, {
      //       email: userName,
      //       password: userPassword,
      //    })
      //    .then((response) => {
      //       if (response.status === 200) {
      //          const userToken = response.data.body.token;
      //          dispatch(setToken(userToken));
      //          redirect("/user");
      //       }
      //    })
      //    .catch((error) => {
      //       console.log(error);
      //    });
   };

   return (
      <>
         <div className="User-Header">
            <h1>Welcome back</h1>
            <form onSubmit={(e) => editUserNameSubmit(e)}>
               <div className="EditForm">
                  <div className="EditForm-Inputs">
                     <input
                        onChange={(e) => setNewFirstName(e.target.value)}
                        type="text"
                        placeholder={newFirstName}
                     />
                     <input
                        onChange={(e) => setNewLastName(e.target.value)}
                        type="text"
                        placeholder={newLastName}
                     />
                  </div>
                  {/* <div className="EditForm-Buttons">
                     <button type="submit" className="EditForm-Btn">
                        Save
                     </button>
                     <button className="EditForm-Btn">Cancel</button>
                  </div> */}
               </div>
            </form>
         </div>
      </>
   );
}

export default EditUser;
