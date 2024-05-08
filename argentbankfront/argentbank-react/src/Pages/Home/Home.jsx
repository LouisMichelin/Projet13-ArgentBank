import "./Home.scss";
// import BankTree from "../../../public/img/bank-tree.jpeg";

function Home() {
   return (
      <>
         <main className="Home">
            <section className="HomeHero">
               <div className="HomeHero-Content">
                  <h2 className="sr-only">Promoted Content</h2>
                  <p className="HomeHero-Subtitle">No fees.</p>
                  <p className="HomeHero-Subtitle">No minimum deposit.</p>
                  <p className="HomeHero-Subtitle">High interest rates.</p>
                  <p className="HomeHero-Text">
                     Open a savings account with Argent Bank today!
                  </p>
               </div>
            </section>
            {/* <section className="HomeFeatures">
               <div>Element 1</div>
               <div>Element 2</div>
               <div>Element 3</div>
            </section> */}
         </main>
         {/* <img src={BankTree} alt="" /> */}
      </>
   );
}

export default Home;
