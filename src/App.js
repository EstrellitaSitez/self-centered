import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Route, Switch} from 'react-router-dom';

import Landing from './LandingPage/Landing';
import SiteHeader from './SiteHeader';
import MeditationPage from './MeditationsPage/MeditationPage';
import MeditationContainer from './MeditationsPage/MeditationContainer';
import BuildTarotIntuitionPage from './ViewCardsPage/BuildTarotIntuitionPage';
import Footer from './FooterContents/Footer';
import About from './FooterContents/About';
import Feedback from './FooterContents/Feedback';
import Disclaimer from './FooterContents/Disclaimer';
import KnowThyself from './KnowThyselfPage/KnowThyself';
import NeedsInventory from './KnowThyselfPage/NeedsInventory';
import FeelingsInventory from './KnowThyselfPage/FeelingsInventory';
import SpreadPDFTab from './ViewCardsPage/SpreadPDFTab';
import OnlineWorksheet from './KnowThyselfPage/OnlineWorksheet';


// Add a catch-all error page

function App() {

  console.log('GitHub: EstrellitaSitez ♥')

  const hideLoader = () => {
   const loader= document.querySelector('.loaderContainer')
   loader.style.display ='none'
  }

  useEffect(()=>{
    hideLoader()
   } )
  
  // Hash history for static sites but since gh pages is forcing us to
  return (
    
    <div className='App container-fluid'>
     
    <SiteHeader/>

    <br></br>
    <div>

    <Switch>
      <Route exact={true} path= '/fill-out-worksheet'> <OnlineWorksheet/> </Route>
      <Route exact={true} path='/feedback'><Feedback/> </Route>
      <Route exact={true} path='/disclaimer'><Disclaimer/></Route>
      <Route exact={true} path='/about'><About/></Route>
      <Route exact={true} path='/view-cards/spread-preview'><SpreadPDFTab /> </Route>
    
      <Route exact={true} path='/view-cards'><BuildTarotIntuitionPage/></Route>
      <Route exact={true} path='/meditation/:meditationName'>
        <MeditationContainer />
      </Route>
      <Route exact={true} path='/feelings-inventory'>
        <FeelingsInventory/>
      </Route>
      <Route exact={true} path='/needs-inventory'><NeedsInventory/></Route>
      <Route exact={true} path='/know-thyself'><KnowThyself/></Route>
      <Route exact={true} path="/meditation"><MeditationPage/>
      </Route>

  
      <Route exact ={true} path="/"><Landing/></Route>
    </Switch>
 
    </div>
    <Footer/>
    </div>
    
  );
}

export default App;

