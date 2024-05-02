import "./Home.scss";
import BankTree from "../../../public/img/bank-tree.jpeg";

function Home() {
   return (
      <>
         <main className="Home">
            <section className="HomeSection1">
               {/* <div className="HomeSection1-ImgContainer"> */}
               <img className="HomeSection1-Img" src={BankTree} alt="" />
               {/* </div> */}
               <div className="HomeSection1-Description">
                  {/* <p>Promoted Content</p> */}
                  <p>No fees.</p>
                  <p>No minimum deposit.</p>
                  <p>High interest rates.</p>
                  <p>Open a savings account with Argent Bank today!</p>
               </div>
            </section>
            <section className="HomeSection2">
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
