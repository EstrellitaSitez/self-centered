import React, { useState } from 'react';
import { Link } from 'react-router-dom'
  
import '../Note.css'

export default function ViewSpecific() {

    const [expanded, expand] = useState(false)

    return(
        <div id='footer'>
           <p id='note' style={{fontWeight:'bold'}}><Link onClick={()=> expand(!expanded)}> {!expanded? <span> View ↑  </span>:  <span> Hide↓  </span>}</Link>
           
           </p>
           {
               expanded? <div> 
                   <p id='note'>  <Link   to='#trumps'> Trumps</Link> </p>
                   <p id='note'>  <Link   to='#cups'> Cups</Link> </p>
                   <p id='note'>  <Link   to='#swords'> Swords</Link> </p>
                   <p id='note'>  <Link   to='#wands'> Wands</Link> </p>
                   <p id='note'>  <Link   to='#pentacles'> Pentacles</Link> </p>
               </div> : ' '
           }
        </div>
    )
}