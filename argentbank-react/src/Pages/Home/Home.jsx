import "./Home.scss";
import IconChat from "/img/icon-chat.png";
import IconMoney from "/img/icon-money.png";
import IconSecurity from "/img/icon-security.png";

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
            <section className="HomeFeatures">
               <h2 className="sr-only">Features</h2>
               <div className="HomeFeatures-Item">
                  <img
                     className="HomeFeatures-Icon"
                     src={IconChat}
                     alt="Chat Icon"
                  />
                  <h3 className="HomeFeatures-Title">
                     You are our #1 priority
                  </h3>
                  <p>
                     Need to talk to a representative? You can get in touch
                     through our 24/7 chat or through a phone call in less than
                     5 minutes.
                  </p>
               </div>
               <div className="HomeFeatures-Item">
                  <img
                     className="HomeFeatures-Icon"
                     src={IconMoney}
                     alt="Chat Icon"
                  />
                  <h3 className="HomeFeatures-Title">
                     More savings means higher rates
                  </h3>
                  <p>
                     The more you save with us, the higher your interest rate
                     will be!
                  </p>
               </div>
               <div className="HomeFeatures-Item">
                  <img
                     className="HomeFeatures-Icon"
                     src={IconSecurity}
                     alt="Chat Icon"
                  />
                  <h3 className="HomeFeatures-Title">Security you can trust</h3>
                  <p>
                     We use top of the line encryption to make sure your data
                     and money is always safe.
                  </p>
               </div>
            </section>
         </main>
      </>
   );
}

export default Home;
