import "./WelcomeUser.scss";

function WelcomeUser({ prenom, nom }) {
   return (
      <>
         <div className="User-Header">
            <h1>
               Welcome back <br /> {prenom} {nom}!
            </h1>
            <button className="User-EditButton">Edit Name</button>
         </div>
      </>
   );
}

export default WelcomeUser;
