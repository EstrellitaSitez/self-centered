
import React, {useState} from 'react';
import './TarotCard.css';
import './TarotCardImages.css';






export default function TarotCard(props){


    let imagePath = props.imagePath
   
    // once tarot is clicked, modify string to get the end of the url minus them numbers. Make api endpoint match the resulting string (should just be the name)
    const selectImage = (image) => {
        props.selectImage(image)
    }
  

    const tarotClicked = (e) => {
        let image = {name: props.imagePath.substring(14).slice(0, -13).replace(/_/g, " "), source: props.imagePath}
       selectImage(image)
    }
  
    return(
        <div id='tarotCard' style={{display:'inline-block', flexDirection:'center', width:'20em', margin:10}} onClick={e=> tarotClicked(e)}>
             <div id='outerbox' style={{margin:'auto', backgroundColor:' gray', padding:'0', borderStyle:'groove', borderColor:'white', borderRadius:'1%', borderWidth:1, height: '50vh', maxWidth:'400px'}}>
                    <div  id='innerbox' style={{margin:'auto', borderRadius:'1%', borderStyle: 'groove', borderColor:'white', borderWidth:1, minHeight:'100%', alignItems:'center'}}>
                   

                    <div style={{width:'100%', height:'100%'}} >
                        {
                            (props.imagePath)? <img style={{width:'100%', height:'100%'}} src={imagePath}/> 
                            :  
                            <div style={{marginTop:'50%'}}>
                                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                             </div>

                        }
                    </div>
             
            </div>
            </div>
        </div>
    )   
}