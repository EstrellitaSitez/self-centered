import React, { useState } from 'react';
import './Note.css'

export default function ViewSpecific() {

    const [expanded, expand] = useState(false)

    return(
        <div id='footer'>
           <p id='note' style={{fontWeight:'bold'}}><a onClick={()=> expand(!expanded)}> {!expanded? <span> View ↑  </span>:  <span> Hide↓  </span>}</a>
           
           </p>
           {
               expanded? <div> 
                   <p id='note'><a href='#trumps'> Trumps</a> </p>
                   <p id='note'><a href='#cups'> Cups</a> </p>
                   <p id='note'><a href='#swords'> Swords</a> </p>
                   <p id='note'><a href='#wands'> Wands</a> </p>
                   <p id='note'><a href='#pentacles'> Pentacles</a> </p>
               </div> : ' '
           }
        </div>
    )
}