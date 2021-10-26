import React, { useEffect } from 'react';
import 'antd/dist/antd.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Landing from './LandingPage/Landing';
import SiteHeader from './SiteHeader';
import MeditationPage from './MeditationsPage/MeditationPage';
import MeditationContainer from './MeditationsPage/MeditationContainer';
import BuildTarotIntuitionPage from './ViewCardsPage/BuildTarotIntuitionPage';
import Footer from './Footer';
import KnowThyself from './KnowThyselfPage/KnowThyself';
import NeedsInventory from './KnowThyselfPage/NeedsInventory';
import FeelingsInventory from './KnowThyselfPage/FeelingsInventory';
import SpreadPDFTab from './ViewCardsPage/SpreadPDFTab';




function App() {


  const hideLoader = () => {
   const loader= document.querySelector('.loaderContainer')
   loader.style.display ='none'
  }

  useEffect(()=>{
    hideLoader()
   } )

  
  return (
    
    <div className='App container-fluid'>
     
    <SiteHeader/>

    <br></br>
    <div>
    <Router>
    <Switch>
    
      {/* cannot open in new tab or state will be lost */}
      <Route exact={true} path='/view-cards/spread-preview'><SpreadPDFTab /> </Route>
    
      <Route exact={true} path='/view-cards'><BuildTarotIntuitionPage/></Route>
      <Route exact={true} path={`/meditation/:meditationName`}>
        <MeditationContainer />
      </Route>
      <Route exact={true} path='/FeelingsInventory'>
        <FeelingsInventory/>
      </Route>
      <Route exact={true} path='/NeedsInventory'><NeedsInventory/></Route>
      <Route exact={true} path='/know-thyself'><KnowThyself/></Route>
      <Route exact={true} path="/meditation"><MeditationPage/>
      </Route>

  
      <Route path="/"><Landing/></Route>
    </Switch>
    </Router>
    </div>
    <Footer/>
    </div>
    
  );
}

export default App;

