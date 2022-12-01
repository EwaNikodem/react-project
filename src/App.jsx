//inside this App.jsx, we import every component, that is implemented separately one by one
import styles from './style';

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components';

const App = () => (
    //this div wraps whole application
    <div className="bg-primary w-full overflow-hidden">  
    {/* div below wraps navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}}`}>
          <Hero/>         
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}}`}>
        <div className={`${styles.boxWidth}}`}>
          <Stats/>        
          <Business/>
          <Billing/> 
          <CardDeal/>
          <Clients/> 
          <CTA/> 
          <Footer/>
        </div>
      </div>


    </div>
  );

export default App