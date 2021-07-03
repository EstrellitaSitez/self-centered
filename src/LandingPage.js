import React from 'react';

import TarotCard from './TarotCard';


export default function LandingPage(){


    // console.log("MAJOR" , majorArcana)

    return(
   
     
            <div style={{height: '100%' ,textAlign:'center'}}>
                 
                     
                    
                    
                     <TarotCard context='LandingPage' showCard={false}/>
                        <div style={{color:'grey', paddingBottom:'1%', paddingTop:'1%'}}>
                            Click the card above <br/>
                            How might this apply to your current circumstances?
                            </div>
                            
                    <br/>
                    <h5 style={{fontStyle:'italic', color:'black'}} > "To live in the world without becoming <br/>
                         aware of the meaning of the world is like<br/>
                         wandering about in a great library <br/>
                         without touching the books." </h5>
                    
                    
                    
                 
            </div>

    )

}

