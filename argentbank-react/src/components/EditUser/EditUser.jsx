import "./EditUser.scss";

function EditUser({ prenom, nom }) {
   return (
      <>
         <div className="User-Header">
            <h1>Welcome back</h1>
            <form>
               <div className="EditForm">
                  <div className="EditForm-Inputs">
                     <input
                        // className="EditForm-Inpt"
                        type="text"
                        value={prenom}
                     />
                     <input
                        // className="EditForm-Inpt"
                        type="text"
                        value={nom}
                     />
                  </div>
                  <div className="EditForm-Buttons">
                     <button className="EditForm-Btn">Save</button>
                     <button className="EditForm-Btn">Cancel</button>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
}

export default EditUser;
