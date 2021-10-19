import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';

import { Route, Switch, BrowserRouter as Router , useRouteMatch} from 'react-router-dom';

import Landing from './Landing';
import SiteHeader from './SiteHeader';
import MeditationPage from './MeditationPage';
import MeditationContainer from './MeditationContainer';
import BuildTarotIntuitionPage from './BuildTarotIntuitionPage';


import KnowThyself from './KnowThyself';
import NeedsInventory from './NeedsInventory';
import FeelingsInventory from './FeelingsInventory';
import SpreadPDFTab from './SpreadPDFTab';




function App() {

  const [spread, addToSpread] = useState([])

  const hideLoader = () => {
   const loader= document.querySelector('.loaderContainer')
   loader.style.display ='none'
  }

  useEffect(()=>{
    hideLoader()
    window.sessionStorage.setItem('visited', true)
  }, [spread])

  const receiveSpread = (obj) => {
    console.log("SPREAD RECEIVED")
    addToSpread([...spread, obj])
  }

  console.log("SPREAD: ", spread.length)

  return (
    
    <div className='App container-fluid'>
     
    <SiteHeader/>

    <br></br>
    <Router>
    <Switch>
    
      {/* cannot open in new tab or state will be lost */}
      <Route exact={true} path='/view-cards/spread-preview'><SpreadPDFTab spread={spread}/> </Route>
    
      <Route exact={true} path='/view-cards'><BuildTarotIntuitionPage receiveSpread={receiveSpread}/></Route>
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
    
  );
}

export default App;

/*
  -Intuition Page
  -Request Reading Page
  -Manifestation Page
    - an activity with questions centered around the following questions
        1.mindful about why we want the things we want 
        2.xwhat's holding us back

  -Faker.js for fake name on future chat
*/