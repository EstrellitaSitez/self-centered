import React, {useState} from 'react'
import './Note.css'

export default function ViewNeedsandFeels() {
    const [expanded, expand] = useState(false)

    return (
        <div id='footer'>
             <p id='note' style={{fontWeight:'bold'}}><a onClick={()=> expand(!expanded)}> {!expanded? <span> Open ↑  </span>:  <span> Close ↓  </span>}</a>
           
           </p>
           {
               expanded? <div> 
                   <p id='note'><a href='/NeedsInventory'  target="_blank"> Needs Inventory ⬈</a> </p>
                   <p id='note'><a href='/FeelingsInventory'  target="_blank"> Feelings Inventory ⬈</a> </p>
               </div> : ' '
           }
            
        </div>
    )
}

// I want these to open up modals so that they dont interrupt the flow of the website