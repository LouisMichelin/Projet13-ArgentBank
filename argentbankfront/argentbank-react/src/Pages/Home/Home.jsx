import "./Home.scss";
// import BankTree from "../../../public/img/bank-tree.jpeg";

function Home() {
   return (
      <>
         <main className="Home">
            <section className="HomeHero">
               <div className="HomeHeroDescription">
                  <p>No fees.</p>
                  <p>No minimum deposit.</p>
                  <p>High interest rates.</p>
                  <p>Open a savings account with Argent Bank today!</p>
               </div>
            </section>
            <section className="HomeFeatures">
               <div>Element 1</div>
               <div>Element 2</div>
               <div>Element 3</div>
            </section>
         </main>
         {/* <img src={BankTree} alt="" /> */}
      </>
   );
}

export default Home;
