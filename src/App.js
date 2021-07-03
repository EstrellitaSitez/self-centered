import LandingPage from './LandingPage';
import SiteHeader from './SiteHeader';
import NavBar from './NavBar';
import { isMobile } from 'react-device-detect';
import BeforeEntering from './BeforeEntering'

function App() {


  return (
    <div className='App container-fluid'>
      {
        !isMobile? 
          <div  style={{position:'absolute', height:'100vh', width:'100vw', backgroundColor:'transparent'}}>

              <div style={{display:'inline-block',height:'100vh', width: '10vh', backgroundColor:'#45A29E', marginRight:'0'}} >
              </div>

             
              <div style={{display:'inline-block',height:'100vh', width: '10vh', marginRight:'0%', backgroundColor:'#45A29E', float:'right'}} >
              </div>

          </div>
        :
        ''

      }
    <BeforeEntering/>
    <SiteHeader/>
    <NavBar/>
    <LandingPage/>
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
*/