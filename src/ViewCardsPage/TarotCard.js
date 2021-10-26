
import React, {useState} from 'react';
import TarotBackside from './TarotBackside';
import './TarotCard.css';
import './TarotCardImages.css';
import TarotFrontSide from './TarotFrontSide';


export default function TarotCard(props){

    const [coverClicked, click] = useState(false)
   
    const selectImage = (image) => {
        props.selectImage(image)
    }
  

    const tarotClicked = (e) => {
        let image = {name: props.imagePath.substring(14).slice(0, -13).replace(/_/g, " "), source: props.imagePath}
       selectImage(image)
    }

 
    return(
        <div id='tarotCard' style={{display:'inline-block', flexDirection:'center', width:'20em', margin:'2%', backgroundColor:' gray', borderStyle:'groove', borderColor:'white', borderRadius:'1%', borderWidth:1, height: '50vh', maxWidth:'400px'}} >
          {
              coverClicked? 
              <TarotBackside imagePath={props.imagePath} tarotClicked={tarotClicked}/>
              :
              <TarotFrontSide click={click}/>
          }
        </div>
    )   
}