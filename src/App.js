import React from 'react';
import 'antd/dist/antd.css';

import { Route, Switch, BrowserRouter as Router , useRouteMatch} from 'react-router-dom';

import Landing from './Landing';
import SiteHeader from './SiteHeader';
import BeforeEntering from './BeforeEntering';
import MeditationPage from './MeditationPage';
import MeditationContainer from './MeditationContainer';
import BuildTarotIntuitionPage from './BuildTarotIntuitionPage';

import Bye from './Bye'
import KnowThyself from './KnowThyself';
import NeedsInventory from './NeedsInventory';
import FeelingsInventory from './FeelingsInventory';




function App() {


  return (
    
    <div className='App container-fluid'>
     
    <BeforeEntering/>
    <SiteHeader/>

    <br></br>
    <Router>
    <Switch>
      <Route exact={true} path='/bye'><Bye/></Route>
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