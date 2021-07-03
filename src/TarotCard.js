
import {React, useState} from 'react';
import './TarotCard.css';
import './TarotCardImages.css';
import {isMobile} from 'react-device-detect'





export default function TarotCard(props){

    let [revealCard, setRevealCard] = useState(props.showCard)
    let context = props.contex
    let imagePath = props.imagePath
// card front could resemble tarot card instead of card name "click here"

    const toOverflow= () => {
        if (isMobile) {
            return 'auto'
        } else {
            return 'none'
        }
    }
  
    return(
        <div id='tarotCard' onClick={()=> setRevealCard(!revealCard)} style={{display:'inline-block', flexDirection:'center', width:'20em', margin:0}}>
             <div id='outerbox' style={{margin:'auto', backgroundColor:' gray', padding:'0', borderStyle:'groove', borderColor:'white', borderRadius:'1%', borderWidth:1, height: '50vh', maxWidth:'400px'}}>
                    <div  id='innerbox' style={{margin:'auto', borderRadius:'1%', borderStyle: 'groove', borderColor:'white', borderWidth:1, minHeight:'100%', alignItems:'center'}}>
                   
            {
                !revealCard? (
                    <div style={{alignItems:'center', display:'block', overflow: toOverflow()}}>
                        <div id='earth'>
                        </div>
                        <div id='moon' style={{ margin: 'auto', marginTop:'45%'}}>
                        </div>
                        <div id='sun' style={{margin: 'auto', marginTop:'15%'}} >
                        </div>
                    </div>
                            
                           
                    
                )
                :
                (
                    <div style={{width:'100%', height:'100%'}} onClick={()=> setRevealCard(!revealCard)}>
                        {
                            (props.image)? <img src={imagePath}/> 
                            :  
                            <div style={{marginTop:'50%'}}>
                                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                             </div>

                        }
                    </div>
                )
            }
            </div>
            </div>
        </div>
    )   
}