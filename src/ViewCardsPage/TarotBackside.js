import React from 'react'

export default function TarotBackside(props) {


    return(
     
            <div  id='innerbox' onClick={e=> props.tarotClicked(e)} style={{margin:'auto', borderRadius:'1%', borderStyle: 'groove', borderColor:'white', borderWidth:1, minHeight:'100%', alignItems:'center'}}>
                <div style={{width:'100%', height:'100%'}} >
                     {
                        (props.imagePath)? <img style={{width:'100%', height:'100%'}} src={props.imagePath}/> 
                        :  
                         <div style={{marginTop:'50%'}}>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                         </div>

                    }
                 </div>
            </div>

    )
}