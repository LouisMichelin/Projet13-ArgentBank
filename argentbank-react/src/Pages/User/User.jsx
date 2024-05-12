import "./User.scss";

function User() {
   return (
      <>
         <main className="User">
            <div className="User-Header">
               <h1>Hello World</h1>
               <button>Click Me LOL</button>
            </div>
            <h2 className="sr-only">Accounts</h2>

            <section className="UserAccount">
               <div className="UserAccount-ContentWrapper">
                  <h3>Argent Bank Checking (à éditer...)</h3>
                  <p>Argent (à éditer...)</p>
                  <p>Available Balance</p>
               </div>
               <div className="UserAccount-Button">
                  <button>CLIQUEZ ICI</button>
               </div>
            </section>
            <section className="UserAccount">
               <div className="UserAccount-ContentWrapper">
                  <h3>Argent Bank Checking (à éditer...)</h3>
                  <p>Argent (à éditer...)</p>
                  <p>Available Balance</p>
               </div>
               <div className="UserAccount-Button">
                  <button>CLIQUEZ ICI</button>
               </div>
            </section>
            <section className="UserAccount">
               <div className="UserAccount-ContentWrapper">
                  <h3>Argent Bank Checking (à éditer...)</h3>
                  <p>Argent (à éditer...)</p>
                  <p>Available Balance</p>
               </div>
               <div className="UserAccount-Button">
                  <button>CLIQUEZ ICI</button>
               </div>
            </section>
         </main>
      </>
   );
}

export default User;
