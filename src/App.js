import React, { useEffect } from 'react';
import 'antd/dist/antd.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

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
  
   const baseUrl= '/self-centered'
  
  return (
    
    <div className='App container-fluid'>
     
    <SiteHeader/>

    <br></br>
    <div>
    <Router>
    <Switch>
      <Route exact={true} path= {baseUrl+'/fill-out-worksheet'}> <OnlineWorksheet/> </Route>
      <Route exact={true} path={baseUrl+'/feedback'}><Feedback/> </Route>
      <Route exact={true} path={baseUrl+'/disclaimer'}><Disclaimer/></Route>
      <Route exact={true} path={baseUrl+'/about'}><About/></Route>
      <Route exact={true} path={baseUrl+'/view-cards/spread-preview'}><SpreadPDFTab /> </Route>
    
      <Route exact={true} path={baseUrl+'/view-cards'}><BuildTarotIntuitionPage/></Route>
      <Route exact={true} path={baseUrl+`/meditation/:meditationName`}>
        <MeditationContainer />
      </Route>
      <Route exact={true} path={baseUrl+'/FeelingsInventory'}>
        <FeelingsInventory/>
      </Route>
      <Route exact={true} path={baseUrl+'/NeedsInventory'}><NeedsInventory/></Route>
      <Route exact={true} path={baseUrl+'/know-thyself'}><KnowThyself/></Route>
      <Route exact={true} path={baseUrl+"/meditation"}><MeditationPage/>
      </Route>

  
      <Route path={baseUrl+"/"}><Landing/></Route>
    </Switch>
    </Router>
    </div>
    <Footer/>
    </div>
    
  );
}

export default App;

